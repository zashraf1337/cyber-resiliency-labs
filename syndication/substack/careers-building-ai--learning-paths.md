# AI Careers Learning Paths

_The newsletter edition. The full version with all formatting lives at [crlab.ca](https://crlab.ca/learn/careers-building-ai/learning-paths/)._

---

Careers Building AI · CR Labs

One roadmap per role, thirteen in all, across the five tiers of AI work. Pick the role closest to your background, follow its four stages, and build the project that proves you can do the job. Everything here is as of mid-2026 and hedged; courses and programs change, so check the current catalog before paying.

## How to use this

Read it in this order, not top to bottom.

1. **Pick the role closest to your background.** The tier matters more than the title. A software engineer has the most doors open; a security person should look at red teaming; someone who likes measurement should look at evals.

2. **Do stage 1, the applied course.** Just enough to get a real feel for the day-to-day before you commit.

3. **Build the stage 3 project.** One thing that works and survives real input, that you can show and talk about. In most of these roles the artifact opens more doors than the resume.

4. **Then go deep with the stage 2 expert program.** Do this once you know the fit. That order saves you from sinking months into the wrong path.

Each block below has four stages: an applied course to get a feel, an expert program to go deep, a portfolio project to prove it, and a break-in move to land the role.

## Tier 1: Research

Where new methods come from. Measured in papers and breakthroughs. A PhD opens one of these three doors, not all three; pick the work by the verb, not the prestige.

### Research Scientist

Invents new methods and architectures; output is a paper. PhD usually required.

### 

| **1. Applied course** | DeepLearning.AI Deep Learning Specialization, paired with Andrej Karpathy's Neural Networks: Zero to Hero (build a small language model from scratch). |
| --- | --- |
| **2. Expert program** | Stanford CS229 (machine learning), CS224N (NLP with deep learning), and CS336 (building language models from the ground up). Videos and assignments are public. |
| **3. Portfolio project** | Reproduce a recent paper's central result, or run a clean ablation the authors skipped, and write it up honestly including what failed. |
| **4. Break-in move** | The honest path is a PhD or a formal research track, often after a stint as a research engineer or research assistant. First-author workshop papers come before main-conference papers. Publications are the currency. |

 Applied Scientist

Turns a real product problem into ML that ships and works. Judged on impact, not publications. Master's common, not required.

### 

| **1. Applied course** | DeepLearning.AI short courses (the practical one-to-two-hour ones), or fast.ai's Practical Deep Learning, whose get-it-working-first style fits this role. |
| --- | --- |
| **2. Expert program** | Hugging Face's TRL library and docs for fine-tuning and preference training, plus Stanford CS336 for the model internals. |
| **3. Portfolio project** | Fine-tune or adapt a model for a narrow real task, deploy it behind a small app, and measure something. The measurement is the point: "accuracy went from X to Y, and here's the eval set." |
| **4. Break-in move** | Ship inside your current job, even a small model serving a real internal need, then move sideways into an ML Engineer or Applied Scientist req. Shipping beats a second degree. |

 Research Engineer

Builds the distributed training and evaluation pipelines that make experiments run at scale. Bachelor's-plus systems chops; PhD optional.

## 

| **1. Applied course** | Full Stack Deep Learning, including its LLM Bootcamp, which runs from model foundations through deploying an LLM app. Built for people who already program. |
| --- | --- |
| **2. Expert program** | Stanford CS336, read alongside open-source training frameworks so the lectures map onto real code. |
| **3. Portfolio project** | Train something at scale, even modestly. Get multi-GPU training working, profile it, and write up the bottleneck you found and fixed ("I made this run 2x faster and here's how"). |
| **4. Break-in move** | Come in as a software engineer with strong systems experience, then move toward ML infrastructure and training. Contributing to an open-source training or eval framework shows the exact skill these teams hire for. |

 Tier 2: Engineering

Turning working models into shipped products. The clearest on-ramp in the field, because it rewards shipping over credentials. The line that sorts these: building a model versus building _with_ one.

### Machine Learning Engineer (MLE)

Owns a model end to end: data, training, evaluation, serving, and watching it in production. No doctorate needed.

### 

| **1. Applied course** | fast.ai or Full Stack Deep Learning, to build working models early and learn the production pieces. Add Stanford CS229 when you want the theory under the API calls. |
| --- | --- |
| **2. Expert program** | Made With ML, for the craft of MLOps: testing, CI, serving, monitoring. |
| **3. Portfolio project** | Build one model that lives somewhere other than your laptop. Deploy it behind an endpoint, add basic monitoring, and write up what broke. |
| **4. Break-in move** | A portfolio showing a model surviving contact with real input beats another Kaggle notebook. Most MLEs came in sideways from software or data science. |

 AI Engineer

Takes a pretrained model and builds the product around it: retrieval, system prompting, eval harnesses. The shortest career switch if you already write software.

### 

| **1. Applied course** | DeepLearning.AI short courses to get oriented fast: "LangChain for LLM Application Development" and "AI Agents in LangGraph" (both by Harrison Chase) are the starting pair. |
| --- | --- |
| **2. Expert program** | The Hugging Face course for hands-on work with models, tokenizers, and pipelines, plus a cohort bootcamp like one of the Maven AI engineering courses when you want structure and a deadline. |
| **3. Portfolio project** | Build one retrieval (RAG) app, then one small agent, in that order. The RAG app teaches evaluation and grounding before you add a tool-using loop. |
| **4. Break-in move** | Two repos with honest write-ups say more than a certificate. You're already reasoning about systems, latency, cost, and failure; the model is a new probabilistic dependency. |

 Agentic AI Developer

Builds tool-using, multi-step agents: plan, act, observe, decide again. Guardrails and cost control are most of the job. A year-old title, so treat specifics as provisional.

## 

| **1. Applied course** | The frameworks are the curriculum: LangGraph, AutoGen, and CrewAI. A Maven agentic AI cohort gives a structured start (length and price vary). |
| --- | --- |
| **2. Expert program** | The IBM RAG and Agentic AI professional certificate, or Vanderbilt's agent courses. A FreeCodeCamp project build is a free hands-on route. |
| **3. Portfolio project** | Build one agent that does a narrow job well and survives bad inputs. Show the guardrails: a cost ceiling, a loop limit, a tool that refuses out-of-scope calls. |
| **4. Break-in move** | Hiring managers care less about the demo working and more about what happens when it doesn't. A backend engineer can reportedly pivot in two to four months. |

 Tier 3: Infrastructure

The people who make models actually run. As of mid-2026, inference is reportedly 70 to 80 percent of AI compute spend, so shaving serving cost has outsized payback. Pick the role closest to where you already are.

### ML Systems / Performance Engineer

Closest to the metal: GPU/TPU utilization, custom kernels, quantization, batching, latency, and fault tolerance across thousands of chips. Systems background first, ML second.

### 

| **1. Applied course** | MIT 6.5840 Distributed Systems. Raft, fault tolerance, building systems that survive failure. Free online. |
| --- | --- |
| **2. Expert program** | Full Stack Deep Learning (the LLM Bootcamp material), which connects the systems side to how models actually get trained and served. |
| **3. Portfolio project** | Serve a real model yourself with vLLM or TensorRT-LLM, measure your own latency and throughput, and write down what you changed and what it bought you. |
| **4. Break-in move** | Publish the measurements. A short write-up showing you cut p99 latency on a real serving setup is your interview. Know your own numbers cold. |

 MLOps Engineer

Takes a model from notebook to a reliable live service: CI/CD for ML, deployment, monitoring, and catching drift when the model quietly gets worse. The shortest jump from DevOps or SRE.

### 

| **1. Applied course** | The MLOps Specialization on Coursera from DeepLearning.AI. Covers the production lifecycle: deployment, monitoring, the drift problem. |
| --- | --- |
| **2. Expert program** | Made With ML. Project-driven, opinionated, and close to how teams actually ship. |
| **3. Portfolio project** | Deploy a model behind an API with full CI/CD, then add real monitoring and a drift alert. Make it fail on purpose and show the alarm firing. |
| **4. Break-in move** | If you're already in DevOps, retitle your work: take one production model end to end at your current job, or build the demo above, and a DevOps resume becomes an MLOps one. |

 Data Engineer for ML

Builds the pipelines, feature stores, and vector databases that get clean data to the model on time. Load-bearing for every other role here. The scarcity is at the ML intersection.

## 

| **1. Applied course** | The DataCamp data engineering track. The fundamentals: SQL, Python, pipelines, the warehouse stack (Spark, Airflow, dbt, Snowflake). |
| --- | --- |
| **2. Expert program** | Made With ML for the machine learning side, so you understand what you're feeding and why. |
| **3. Portfolio project** | Build a pipeline that actually feeds a model. Ingest raw data, clean it, land it in a feature store, and have a model train or serve off it on a schedule. |
| **4. Break-in move** | Show the whole pipeline running end to end, with the model consuming your output. That proves the ML connection a pure ETL portfolio can't. |

 Tier 4: Safety and Red-Teaming

The people who assume the model will misbehave and find out how, before a user or attacker does. Demand is the highest of any tier, and good training is the scarcest, especially for red teaming and evals. The portfolio matters more than the path in every one of these roles.

### AI Red Teamer

Attacks a model or agent on purpose: jailbreaks, prompt injection, data leakage, tool misuse. Find the failure, prove it reproducibly, help close it. Lowest formal barrier of the three.

### 

| **1. Applied course** | The Hack The Box AI Red Teamer path, for hands-on attack practice against model targets instead of abstract reading. Learn the OWASP Top 10 for LLM Applications cold as the shared vocabulary. |
| --- | --- |
| **2. Expert program** | Practical DevSecOps and similar vendor tracks, which teach the red-teaming process: scoping, evidence, and responsible reporting. Verify the current catalog before paying. |
| **3. Portfolio project** | Pick one open model and build a small jailbreak and prompt-injection report against it. Document each finding, the reproduction steps, and a suggested mitigation. That document is your portfolio. |
| **4. Break-in move** | Apply with the findings in hand. The artifact opens more doors than the resume. Most people arrive from penetration testing or application security. |

 Evals Specialist

Answers whether a model is good enough and safe enough to release, turning that judgment into test suites and release gates. A young role with thin supply.

### 

| **1. Applied course** | The Maven course "AI Evals for Engineers and Product Managers" by Hamel Husain and Shreya Shankar (around $4,200 as of mid-2026). The most direct way into how practitioners build evals. |
| --- | --- |
| **2. Expert program** | The DeepLearning.AI post-training course, to understand what you're measuring and why a model changes between versions. Use Hugging Face's TRL library to run real training and scoring loops. |
| **3. Portfolio project** | Build a small eval suite for one task you care about. Include a factuality check, a safety check, and a regression test that flags when a newer model scores worse. |
| **4. Break-in move** | Publish the suite and the methodology write-up. A working gate you designed is a stronger signal than any certificate. Many evals people arrive from QA, data science, or red teaming. |

 AI Safety / Alignment Researcher

Empirical research on alignment, interpretability, scalable oversight, and robustness, often reverse-engineering model behavior. The worst hiring crunch of all three. PhD usually preferred.

## 

| **1. Applied course** | The 80,000 Hours AI safety guide, to understand the landscape and the open problems before committing. |
| --- | --- |
| **2. Expert program** | MATS (a twelve-week mentored research program) or ARENA (a four-to-five-week technical intensive). These are the recognized on-ramps. Stay current by living in the Alignment Forum and reading published lab work. |
| **3. Portfolio project** | Reproduce one interpretability result on a small model and write up what you found, including where it broke. Reproduction is respected work in this field. |
| **4. Break-in move** | Use the reproduction and any MATS or ARENA output as your application core. Demonstrated research taste is the currency. |

 Tier 5: Application

Where AI meets a real customer, and the widest on-ramp into the field. One role here has effectively folded into another.

### Prompt Engineer (fading)

Writing prompts as a standalone job. Postings dropped around 30 percent from 2024 to 2026 as models improved, frameworks absorbed the patterns, and the skill folded into the AI Engineer role.

## 

| **1. Applied course** | Aim one box over. Start with the DeepLearning.AI short courses, the same starting point as the AI Engineer path. |
| --- | --- |
| **2. Expert program** | The Hugging Face course, plus a Maven AI engineering cohort. Prompting now lives inside the AI Engineer skill set, not on its own. |
| **3. Portfolio project** | Build a retrieval app and a small agent, as in the AI Engineer path. System-level prompting is one piece of that work, not the whole job. |
| **4. Break-in move** | Apply as an AI Engineer. Prompting didn't vanish; it stopped being its own title. The on-ramp is the AI Engineer on-ramp. |

 Read the deep articles

Each tier has a companion article with the full day-to-day, the salary bands, and the supply-and-demand reads behind these paths.

- [The Researchers](https://crlab.ca/learn/careers-building-ai/researchers/) — Research Scientist, Applied Scientist, Research Engineer.

- [The Builders](https://crlab.ca/learn/careers-building-ai/builders/) — Machine Learning Engineer, AI Engineer, Agentic AI Developer.

- [The Infrastructure](https://crlab.ca/learn/careers-building-ai/infrastructure/) — ML Systems, MLOps, Data Engineer for ML.

- [The Defenders](https://crlab.ca/learn/careers-building-ai/defenders/) — AI Red Teamer, Evals Specialist, Safety Researcher.

- [Choosing Your Path](https://crlab.ca/learn/careers-building-ai/choosing-your-path/) — matching your background to a role and picking one.

By Zubair Ashraf · CR Labs · [crlab.ca](https://crlab.ca)

---

**Thanks for reading CR Labs.** If this was useful, subscribe and forward it to someone who'd like it. More: the full guide at [crlab.ca/learn/careers-building-ai/learning-paths/](https://crlab.ca/learn/careers-building-ai/learning-paths/), videos on [YouTube](https://crlab.ca/videos/), and updates on [X](https://x.com/zashraf1337) and [LinkedIn](https://www.linkedin.com/in/zubairashraf/).
