---
title: "Inside a Large Language Model"
published: false
tags: ai, machinelearning, llm, beginners
canonical_url: https://crlab.ca/learn/inside-a-large-language-model.html
cover_image: https://crlab.ca/assets/og-inside-llm.png
---

Every large language model you have used, whether a chat assistant, a coding helper, or a search summarizer, is the output of a pipeline with distinct stages. Each stage answers a different question, costs a different amount, and runs on very different hardware. This guide walks the whole pipeline end to end. The main thread is written for a smart non-specialist; the **Deep Dive** boxes carry the math and the precise numbers for readers who want them.

## 1. The big picture: a model's life in five acts

It helps to hold the whole map in your head before zooming in. A model passes through five broad phases, and they are _not_ equally expensive:

1. **Pre-training**: teach a blank network to predict text. Astronomically expensive; done once.

2. **Post-training**: turn that raw predictor into a helpful, safe assistant. Moderately expensive; done repeatedly.

3. **Quantization**: compress the finished model so it fits on cheaper hardware. Cheap; an engineering step.

4. **Retrieval (RAG)**: give the model access to fresh, private, or specific knowledge without retraining. Cheap; an architecture choice around the model.

5. **Inference**: actually running the model to answer questions. Cost scales with how many people use it.

> A useful intuition: pre-training is building the brain (millions of dollars), post-training is the schooling that makes it polite and useful (thousands to hundreds of thousands), and everything after is about delivering that brain cheaply and accurately to users.

## 2. What "parameters" actually mean

When people say a model has "7 billion parameters" or "550 billion parameters," they are counting the model's adjustable numbers, its **weights**. A neural network is, mechanically, a very large pile of multiplications: input numbers flow in, get multiplied by weights, get added together, and flow onward. A parameter is one of those weights. Learning _is_ the process of nudging every one of these numbers until the network's output matches reality.

Parameter count matters because it controls three things at once:

- **Capacity**: roughly, how much the model can know and how subtle its reasoning can be. More parameters, more headroom (up to a point).

- **Memory**: every parameter occupies physical space in a chip's memory. This is the single biggest reason big models need big hardware.

- **Compute**: every parameter participates in arithmetic on every token, so cost grows with size.

**Deep dive: parameters to gigabytes**

Memory is just `parameters × bytes-per-parameter`. How many bytes depends on _precision_, how many digits you keep per number:

- `FP32` (32-bit float): 4 bytes. Full precision; now mostly used for optimizer state in training.

- `FP16 / BF16` (16-bit): 2 bytes. The standard for training and serving.

- `INT8` (8-bit): 1 byte. Common for compressed serving.

- `INT4` (4-bit): 0.5 bytes. Aggressive compression for consumer hardware.

So just to _hold_ the weights at 16-bit: a 7B model needs about 14 GB, a 70B model about 140 GB, and a 550B model about 1.1 TB. Those numbers are the gravity that every other decision orbits.

## 3. Stage zero: data

Before any training happens, there is the corpus: the text (and increasingly code, images, and audio) the model will learn from. Frontier pre-training corpora are measured in **trillions of tokens** (a token is roughly three-quarters of a word). The composition of this data, how much code, how many languages, how much is filtered for quality or for values, silently determines almost everything about the model's character. Data work is unglamorous and decisive: most of the real differentiation between labs lives here, not in the architecture, which is largely shared.

## 4. Stage one: pre-training

Pre-training has one deceptively simple objective: **predict the next token**. Show the model billions of sentences with the last word hidden, ask it to guess, and correct it when it is wrong, trillions of times. From this single game, the model is forced to internalize grammar, facts, reasoning patterns, and world structure, because all of those help it predict better.

This is where nearly all the cost lives. The model starts as random noise and must see the entire corpus, often more than once, while adjusting all of its billions of weights. This is the "blank brain" being formed.

**Deep dive: the cost of pre-training**

A well-known rule of thumb: total training compute is about `6 × N × D` floating-point operations, where `N` is parameters and `D` is training tokens. The **Chinchilla** result (DeepMind, 2022) found the compute-optimal ratio is roughly **20 tokens per parameter**.

Worked example, a 70B model trained on ~1.4T tokens: `6 × 70e9 × 1.4e12 ≈ 5.9 × 10²³ FLOPs`. An NVIDIA H100 sustains very roughly `5 × 10¹⁴` useful FLOPs/s in practice. That is about 37 GPU-years of work, so on a 1,000-GPU cluster, about **two weeks**. At ~$3/GPU-hour that is on the order of **$1M** for this mid-sized example; true frontier runs cost tens to hundreds of millions. Scaling to 550B at the same 20× ratio multiplies the FLOPs by about 60×, which is why a 550B-class model is a national-infrastructure-scale undertaking.

### Why pre-training needs a cluster, not a card

Training memory is far larger than the weights alone. To train, each parameter needs not just its current value but also its gradient (which direction to nudge it) and the optimizer's bookkeeping. With the standard Adam optimizer in mixed precision, the rule of thumb is about **16 bytes per parameter**, before counting activations.

**Deep dive: the 16-bytes-per-parameter rule**

Full fine-tuning or pre-training with Adam holds, per parameter: 2 bytes (FP16 weight) + 2 bytes (FP16 gradient) + 4 bytes (FP32 master weight) + 4 bytes (Adam first moment) + 4 bytes (Adam second moment) = **16 bytes**. So a 7B model needs about 112 GB _just for state_, already more than any single GPU, plus activation memory that grows with batch size and context length. This is why training is distributed across many GPUs using systems like **ZeRO/DeepSpeed** (Microsoft, 2020) and **FSDP** (Meta), which shard these states across the cluster.

## 5. Stage two: post-training (alignment)

A freshly pre-trained model is a brilliant _autocomplete_ and a terrible assistant. Ask it a question and it might continue with more questions, because that is what the raw internet looks like. **Post-training** is the schooling that converts this raw predictor into something that follows instructions, refuses harmful requests, and adopts a consistent voice. It comes in two layers.

### 5a. Supervised fine-tuning (SFT)

First, show the model thousands of examples of good behavior: a prompt paired with an ideal answer. The model imitates. This alone gets you most of the way to a usable assistant. It is the same "predict the next token" machinery as pre-training, just on a small, curated, instruction-shaped dataset.

### 5b. Preference optimization (learning from comparisons)

Imitation has a ceiling: for many questions there is no single ideal answer, only "this response is better than that one." So the second layer teaches the model from _preferences_, pairs where a human or another AI judged one answer better. This is where a family of competing methods lives, and it is worth knowing who invented what, because the field moved fast and the names are everywhere.

| Method | Who / when | One-line idea | Trade-off |
| --- | --- | --- | --- |
| **RLHF (with PPO)** | Christiano et al. (OpenAI/DeepMind, 2017); InstructGPT (OpenAI, 2022) | Train a separate "reward model" on human preferences, then use RL to push the model toward high-reward answers. | Powerful and proven, but complex and unstable; you juggle multiple models at once. |
| **Constitutional AI / RLAIF** | Bai et al. (Anthropic, 2022) | Replace much of the human feedback with an AI giving feedback against a written set of principles. | Scales feedback cheaply; quality depends on the principles and the judge model. |
| **DPO** | Rafailov et al. (Stanford, 2023) | Skip the separate reward model and RL loop; optimize directly on the preference pairs with one simple loss. | Far simpler and more stable; the default for most open-source post-training today. |
| **ORPO** | Hong et al. (KAIST, 2024) | Fold preference learning into the SFT step, removing the need for a separate reference model. | One stage instead of two; memory-light. |
| **SimPO** | Meng et al. (UVA/Princeton, 2024) | A reference-free simplification of DPO using average log-probability as the implicit reward. | Even leaner than DPO; competitive quality. |
| **KTO** | Ethayarajh et al. (2024) | Learn from single thumbs-up / thumbs-down labels instead of paired comparisons. | Easier data collection (no pairs needed). |
| **GRPO** | Shao et al. (DeepSeek, 2024); powered DeepSeek-R1 | A streamlined RL method that drops the reward-model critic and compares a _group_ of sampled answers. | Memory-efficient RL; excellent when rewards are verifiable (math, code). The engine behind the recent "reasoning model" wave. |

> The historical arc: the field started with heavy, multi-model RLHF (OpenAI's recipe), Anthropic made the feedback itself cheaper with AI judges, Stanford collapsed the whole RL apparatus into the simple DPO loss, and DeepSeek swung back toward RL with a lean, critic-free method (GRPO) aimed at tasks where correctness can be checked automatically.

### Distillation: a shortcut worth knowing

Instead of aligning a model from scratch, you can have a large, already-excellent "teacher" model generate training data (or even its internal probabilities) for a smaller "student." The student learns to mimic the teacher at a fraction of the size. Most small, fast open models you can run at home were distilled this way.

## 6. Engineering efficiency for post-training: the PEFT toolkit

Here is the crux of why a small team can post-train a huge model at all. Recall that full fine-tuning costs about 16 bytes per parameter, putting even a 7B model out of reach of a single consumer GPU. The escape hatch is **Parameter-Efficient Fine-Tuning (PEFT)**: instead of updating all the weights, _freeze_ the giant pre-trained model and train only a tiny set of new or selected numbers. The frozen base can even be quantized while you train.

| Technique | Who / when | What it does | Why it matters |
| --- | --- | --- | --- |
| **Adapters** | Houlsby et al. (Google, 2019) | Insert small trainable layers between the frozen ones. | The original PEFT idea; ~1% of parameters trained. |
| **Prefix / prompt tuning** | Li & Liang (Stanford, 2021); Lester et al. (Google, 2021) | Learn a handful of virtual "soft prompt" vectors; the model itself is untouched. | Extremely light; good for many tasks sharing one base. |
| **LoRA** | Hu et al. (Microsoft, 2021) | Freeze the base; learn small low-rank "update" matrices alongside each big weight matrix. | The dominant method. Trains <1% of parameters, results rival full fine-tuning, adapters are tiny files you can swap. |
| **QLoRA** | Dettmers et al. (Univ. of Washington, 2023) | LoRA on top of a 4-bit quantized frozen base (NF4 format, paged optimizer). | The democratizer: fine-tune a 70B model on a single 48 GB GPU, or smaller models on a 24 GB card. |
| **DoRA** | Liu et al. (NVIDIA, 2024) | Splits weights into magnitude and direction, applying LoRA more surgically. | Closes the small remaining gap to full fine-tuning. |
| **(IA)³** | Liu et al. (Raffel group, UNC, 2022) | Learn tiny per-feature scaling vectors. | Even fewer parameters than LoRA for few-shot settings. |

 **Deep dive: why LoRA is nearly free**

A big weight matrix of shape `d×k` has `d·k` parameters. LoRA replaces its _update_ with two skinny matrices of shape `d×r` and `r×k` where the rank `r` is small (8, 16, 64). That is `r·(d+k)` trainable numbers, often a few hundred-thousandths of the original. The frozen base still has to _sit_ in memory, but it needs no gradients or optimizer states. Combine with QLoRA's 4-bit base and the memory bill collapses: a 70B base is about 35 GB (4-bit) plus a few GB of adapters and optimizer, which fits on one GPU. This is the entire reason individuals and small labs can specialize frontier-scale models.

### Who uses what, in practice

- **OpenAI**: pioneered the RLHF/PPO recipe (the InstructGPT lineage); details now closed.

- **Anthropic**: Constitutional AI / RLAIF layered on RLHF, to scale and principle-anchor feedback.

- **Meta (Llama)**: open-weights; recent releases lean on SFT plus rejection sampling and DPO rather than heavy PPO.

- **DeepSeek**: GRPO with verifiable rewards for reasoning, plus Mixture-of-Experts and FP8 training for efficiency.

- **Google (Gemma/Gemini)**: RLHF plus heavy use of distillation to produce small models.

- **The open-source community**: overwhelmingly QLoRA + DPO/ORPO, run through tooling such as TRL, Axolotl, and Unsloth, because it is the cheapest path from a base model to a specialized one.

## 7. Quantization: making a finished model fit

Once a model is trained, its weights are usually 16-bit. **Quantization** rewrites them in fewer bits (8, 4, or even fewer), trading a sliver of accuracy for a large cut in memory and a speed-up. This is what lets a model that needed a server farm to _train_ run on a single card to _serve_.

| Model size | FP16 (2 B/param) | INT8 (1 B/param) | INT4 (0.5 B/param) |
| --- | --- | --- | --- |
| 7B | ~14 GB | ~7 GB | ~3.5 GB |
| 70B | ~140 GB | ~70 GB | ~35 GB |
| 550B | ~1.1 TB | ~550 GB | ~275 GB |

 That 70B row tells the story: at FP16 it needs two 80 GB GPUs for the weights alone (more once you add KV cache and long contexts); quantized to INT4 it slips onto a _single_ card. A 7B model at INT4 (~3.5 GB) runs comfortably on a consumer RTX 3090/4090.

**Deep dive: flavors of quantization**

**PTQ (post-training quantization)**: compress an already-trained model. Fast, no retraining. Methods include GPTQ (Frantar et al., 2022), AWQ (Lin et al., MIT, 2023), `bitsandbytes` (Dettmers), and the GGUF format used by `llama.cpp` for CPU/Mac inference. **QAT (quantization-aware training)**: simulate low precision _during_ training so the model adapts. More accurate, more expensive. **FP8 training**: newer hardware (H100 and up) can train directly in 8-bit float, which DeepSeek used to cut pre-training cost.

## 8. Retrieval-Augmented Generation (RAG): knowledge without retraining

A model only "knows" what was in its training data, frozen at a point in time. It cannot know your company's documents or yesterday's news. You _could_ retrain it (slow and expensive) or you can use **RAG** (Lewis et al., FAIR/Meta, 2020): at question time, search a knowledge base for relevant passages and paste them into the prompt, so the model reasons over fresh, authoritative text it can see right in front of it.

The mechanics: documents are converted into **embeddings** (vectors capturing meaning) and stored in a **vector database**. A question is embedded the same way, the nearest passages are retrieved, and they ride along in the prompt.

> Rule of thumb: fine-tune to change behavior and style; use RAG to supply facts. RAG is cheaper, updates instantly (just edit the database), and lets the model cite sources. Many production systems use both.

Hardware-wise RAG is light: the embedding model is small (hundreds of MB), and a vector database runs on CPU or a modest GPU. The cost is a little extra latency per query and the engineering to keep the knowledge base clean.

## 9. Inference: actually running the model

Inference is the model _working_: reading your prompt and generating an answer token by token. Unlike training (a one-time cost), inference cost recurs with every single query, so at scale it dominates the total bill. Two things drive it:

- **The weights must fit in memory**, which is exactly why quantization matters for serving.

- **The KV cache**: as the model generates, it stores intermediate results for every token of context. Long conversations and long documents inflate this, sometimes past the size of the weights themselves.

**Deep dive: tricks that make inference cheap**

**FlashAttention** (Dao et al., Stanford, 2022): a memory-efficient attention computation, near-universal now. **PagedAttention / vLLM** (Kwon et al., UC Berkeley, 2023): manages the KV cache like virtual memory, enabling high-throughput batched serving. **Continuous batching**: pack many users' requests through the GPU together to keep it busy. **Speculative decoding** (2023): a small draft model proposes tokens that the big model verifies in bulk, multiplying speed. **Mixture-of-Experts (MoE)** (Shazeer et al., 2017; used in Mixtral, DeepSeek): only a fraction of the parameters fire per token, so a model can be huge in capacity but cheap per query.

## 10. How it all maps to hardware

Pulling the whole guide together into one picture: the same model demands wildly different hardware depending on which stage you are in.

## 

| Stage | What you're doing | Memory pressure | Typical hardware (70B-class) |
| --- | --- | --- | --- |
| Pre-training | Building the brain from scratch | Extreme (~16 B/param + activations, sharded) | Hundreds to thousands of H100s for weeks |
| Full fine-tuning | Updating all weights | Very high (~16 B/param) | Multi-GPU node (8× A100/H100) |
| LoRA fine-tuning | Training tiny adapters, frozen base | Moderate | 1–2 high-memory GPUs |
| QLoRA fine-tuning | Adapters on a 4-bit base | Low (~35 GB base + a few GB) | A single 48 GB GPU (or 24 GB for smaller models) |
| Quantization | Compressing a trained model | Low to moderate, brief | One GPU, minutes to hours |
| RAG | Embedding + retrieval around the model | Low | CPU or modest GPU + a vector DB |
| Inference (FP16) | Serving uncompressed | High (~140 GB + KV cache) | 2× 80 GB GPUs (more for long context) |
| Inference (INT4) | Serving compressed | Moderate (~35 GB + KV cache) | One GPU; a 7B model fits a gaming card |

 11. Who's doing what across the frontier

The techniques above are shared vocabulary; what distinguishes the major labs is which ones they lean on and how they combine them. A quick, honest tour, recognizing that exact recipes for closed models are inferred, not published.

### 

| Lab | Flagship | Signature approach |
| --- | --- | --- |
| OpenAI | GPT-4-class, o-series | Pioneered the modern RLHF/PPO pipeline. The o1/o3 "reasoning" models scale test-time compute, trained with large-scale RL to think in long chains before answering. |
| Anthropic | Claude | Constitutional AI / RLAIF: an AI critiques and revises answers against a written set of principles, reducing the human-labeling burden. |
| Google DeepMind | Gemini; Gemma (open) | Natively multimodal training, RLHF, and heavy distillation to spin out small, fast models. Very long context. |
| Meta AI | Llama (open) | Open-weight strategy. Recent Llamas use SFT + rejection sampling + DPO rather than heavy PPO. |
| Mistral AI | Mistral / Mixtral (open) | Efficiency-first, European. Popularized open sparse Mixture-of-Experts, big capacity at small per-token cost. |
| Cohere | Command R+; Embed, Rerank | Enterprise- and retrieval-focused; models tuned for RAG and tool use. Research arm ships the open multilingual Aya models. |

 The Chinese open-weight wave

A cluster of Chinese labs has become a major force, largely by releasing strong _open-weight_ models and squeezing more out of constrained hardware.

- **DeepSeek**: the standout. DeepSeek-V3 is a large Mixture-of-Experts model (~671B total, ~37B active per token), trained in FP8 at a reported cost of a few million dollars for the final run. Its reasoning model, R1, showed that pure reinforcement learning (GRPO) can induce strong reasoning, then distilled that into smaller open models.

- **Qwen (Alibaba)**: a broad, frequently-updated family of open-weight models, strong at multilingual and coding tasks; one of the most-downloaded open bases worldwide.

- **Kimi (Moonshot AI)**: very long context and large agentic MoE models tuned for tool use.

- **GLM (Zhipu AI), Yi (01.AI), MiniMax**: further open or semi-open families, several experimenting with alternative attention designs to cut cost.

**Deep dive: the efficiency tricks behind the Chinese wave**

With limited access to top-end chips, these labs leaned hard on architecture: **Mixture-of-Experts** (only a slice of the model fires per token), **FP8 training**, and KV-cache compression such as DeepSeek's **Multi-head Latent Attention (MLA)** and the now-standard **Grouped-Query Attention** (Google, 2023). The lesson the whole field absorbed: smart architecture can substitute for raw compute.

### Where the frontier is heading

- **Reasoning & test-time compute**: letting a model "think longer" at inference often beats making it bigger. Trained largely with RL from verifiable rewards on math and code.

- **Mixture-of-Experts everywhere**: decoupling total capacity from per-token cost is now standard at the frontier.

- **Long context & KV-cache compression**: pushing toward million-token windows without the memory blowing up.

- **Alternatives to attention**: state-space models like Mamba (Gu & Dao, 2023) and hybrids aim to handle long sequences more cheaply.

- **Extreme quantization**: research like BitNet (Microsoft, 2024) explores ~1.58-bit ternary weights; new hardware adds FP4.

- **Synthetic data, agentic tool-use training, and model merging**: increasingly how capability is added after pre-training.

## 12. A simple decision guide

- **Want the model to know new facts?** RAG first. Cheapest, instant updates, citable.

- **Want to change its behavior, format, or voice?** Post-train, and start with QLoRA + DPO. You rarely need full fine-tuning.

- **Need it to run cheaply or on small hardware?** Quantize (INT8, then INT4 if quality holds), and serve with vLLM.

- **Need a genuinely new base capability or values foundation?** That is pre-training territory, the one stage you cannot shortcut, and the one that demands a real cluster.

- **Want a small, fast model that behaves like a big one?** Distill from a strong teacher, then quantize.

## 13. Glossary

**Token**: a chunk of text (~¾ of a word) the model reads/writes one at a time. **Parameter / weight**: one of the model's adjustable numbers. **FLOP**: one arithmetic operation; the unit of compute. **Precision (FP32/FP16/INT8/INT4)**: how many bits store each number; fewer bits is less memory, less accuracy. **Gradient**: the direction to nudge a weight to reduce error. **Optimizer (Adam)**: the algorithm that applies gradients; keeps extra per-weight bookkeeping. **SFT**: supervised fine-tuning, learning from ideal example answers. **RLHF**: reinforcement learning from human feedback. **DPO/ORPO/SimPO/KTO/GRPO**: methods to learn from preferences or rewards. **PEFT**: parameter-efficient fine-tuning (LoRA, adapters, etc.). **LoRA/QLoRA**: train tiny low-rank adapters on a frozen (or 4-bit) base. **Quantization**: compressing weights to fewer bits. **RAG**: retrieval-augmented generation; fetch facts into the prompt at query time. **Embedding**: a vector capturing the meaning of text. **KV cache**: stored intermediate state that makes generation fast but eats memory. **MoE**: mixture-of-experts; only part of the model fires per token. **Inference**: running the trained model to produce answers.

---

*Originally published at [crlab.ca/learn/inside-a-large-language-model.html](https://crlab.ca/learn/inside-a-large-language-model.html). Follow CR Labs — [YouTube](https://crlab.ca) · [X](https://x.com/zashraf1337) · [LinkedIn](https://www.linkedin.com/in/zubairashraf/).*
