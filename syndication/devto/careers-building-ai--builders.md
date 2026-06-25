---
title: "The Builders"
published: false
tags: career, ai, machinelearning, programming
canonical_url: https://crlab.ca/learn/careers-building-ai/builders/
cover_image: https://crlab.ca/assets/og-careers-building-ai.png
---

Careers Building AI · Careers · Episode 3

Machine Learning Engineer, AI Engineer, and the rise of the Agentic AI Developer. A practitioner's map of three jobs people keep mixing up. Figures are as of mid-2026.

Most of the AI you actually touch was put there by one of three jobs. A recommendation that landed, a chatbot that pulled the right document, an assistant that booked something for you while you watched. Someone built that. Usually it was a Machine Learning Engineer, an AI Engineer, or an Agentic AI Developer.

The job ads treat these three as interchangeable. They are not. And if you are thinking about switching into AI, the builder tier is the clearest on-ramp in the whole field, because it rewards shipping over credentials.

One line explains almost every confusion that follows. There is a difference between building a model and building _with_ one. Hold onto that. It sorts these roles faster than any job title does.

## 1. The Machine Learning Engineer (MLE)

The oldest of the three, and still the widest open. The MLE owns a model end to end: from raw data to live traffic.

### What they do

Prep the data. Train and tune the model. Evaluate it. Then serve it, and watch it once real users hit it. That last part is the half people forget. A model that only runs in a notebook is not in production, and production is the whole job.

The toolkit is steady. Python every day. A training framework, PyTorch or TensorFlow. And MLOps: getting the thing served, catching it when it drifts, keeping it alive at 3am. Someone owns the pager, and on a small team that someone is the MLE.

The one-line version, the way it usually reads on a posting, is roughly "put machine learning models into production." Phrasing varies, but that clause shows up again and again.

### Who it suits

People who like the model itself: its weights, its failures, its behavior on edge cases. If you enjoy debugging why a model degrades after a data shift more than you enjoy designing a user flow, this is your seat.

### Training and education

You do not need a doctorate. Most MLEs came in sideways, from software engineering or from data science. A bachelor's is plenty, and bootcamp grads do land these roles. The common thread is that they shipped something real, not that they published.

A workable self-study route, roughly in order:

- **fast.ai** or **Full Stack Deep Learning** to build working models early and learn the production pieces.

- **CS229** (Stanford's machine learning course, free online) when you want the theory underneath the API calls.

- **Made With ML** for the craft of MLOps: testing, CI, serving, monitoring.

### Pay (as of mid-2026)

Treat these as a snapshot, not a quote. They move, and they vary a lot by city and company.

### 

| Level | Total comp (approx.) |
| --- | --- |
| Median | ~$142K |
| Entry | ~$90K–$135K |
| Senior | $220K and up |
| Frontier lab | $600K to over $1M |

 Supply and demand

Reports as of mid-2026 put it near one available MLE for every 3.5 openings. That is the largest raw shortage of the three. Oldest role, still nowhere near filled.

### How to break in

Build one model that lives somewhere other than your laptop. Deploy it behind an endpoint, add basic monitoring, and write up what broke. A portfolio that shows a model surviving contact with real input beats another Kaggle notebook.

## 2. The AI Engineer

This is the role that is exploding. It is also the one people get wrong most often, and the boundary is simple: the MLE trains the model, the AI Engineer builds on top of a model someone else already trained.

### What they do

Take a capable pretrained model and turn it into a product. Mostly they never touch training data. The work clusters around a few things:

- **Retrieval (RAG)** so the model can pull in your documents and answer from them.

- **System-level prompting**, the prompts baked into the app rather than typed by a user.

- **Evaluation harnesses** to tell whether a change made things better or just different.

- **Early agents**, increasingly.

Day to day that means tools like LangChain and LlamaIndex, plus whatever model APIs the product runs on. LinkedIn data through 2025 into 2026 has flagged AI Engineer as its number-one fastest-growing title, and the skills it lists for the role cluster around RAG, LangChain, and PyTorch.

### Who it suits

Software engineers. If you already ship code, this is the shortest jump in the series. You are reasoning about systems, latency, cost, and failure modes, which you already do. The model is just a new dependency that happens to be probabilistic.

### Training and education

You can get productive fast here, which is part of why the title grew so quickly.

- **DeepLearning.AI short courses** to get oriented quickly. "LangChain for LLM Application Development" and "AI Agents in LangGraph" (both taught by LangChain's Harrison Chase) are the obvious starting pair as of mid-2026.

- The **Hugging Face course** for hands-on work with models, tokenizers, and pipelines.

- A cohort bootcamp like one of the **Maven** AI engineering courses when you want structure and a deadline.

### Pay (as of mid-2026)

| Level | Total comp (approx.) |
| --- | --- |
| Entry | ~$90K–$135K |
| Mid | ~$140K–$210K |
| Senior | $220K and up |
| Frontier lab | ~$450K–$795K |

 Entry tracks the MLE closely. The bands are noisy and date-stamped on purpose.

### Supply and demand

Strong, by every reported measure, and broadening past tech into finance, defense, consulting, and academia. The fastest-growing-title label is the headline, but the quieter signal is that hiring spread to small firms, not just the big labs.

### How to break in

Build one retrieval app, then one small agent, in that order. Ship the RAG app first because it teaches you evaluation and grounding without the moving parts of a loop. Then add a single tool-using step. Two repos with honest write-ups will say more than a certificate.

## 3. The Agentic AI Developer

The new one, and I want to be honest that it is still forming. Andrej Karpathy put the phrase "agentic engineering" on the map in early 2026, and the title is barely a year old. Treat the specifics as provisional.

### What they do

Build tool-using, multi-step agents. The core is a loop: plan a step, act by calling a tool, observe what came back, then decide again. Around that loop sits the real work, which is function calling, memory between steps, and guardrails.

Guardrails are most of the job, honestly. Cost controls and safety. The point of the role is keeping the agent from misusing a tool or spinning in a runaway loop that quietly burns money. One representative posting reads, roughly, "design agent architectures: perception, reasoning, action; handle tool misuse and loops." Wording differs by company, but that shape is common.

### Who it suits

Backend engineers who like systems that fail in interesting ways. If distributed systems, retries, and idempotency are familiar territory, agent reliability will feel like home. A backend engineer can reportedly pivot in two to four months.

### Training and education

The frameworks are the curriculum right now: **LangGraph**, **AutoGen**, and **CrewAI** are the common three.

- A **Maven** agentic AI cohort (length and price vary, so check current details).

- The **IBM RAG and Agentic AI** professional certificate for a structured path.

- **Vanderbilt**'s agent courses, or a **FreeCodeCamp** project build for a free, hands-on route.

### Pay (as of mid-2026)

### 

| Level | Total comp (approx.) |
| --- | --- |
| Entry | ~$140K–$185K |
| Mid | ~$185K–$280K |
| Architect | ~$260K–$420K |

 Supply and demand

Sharp, with agent-architect roles reported at several openings per qualified person as of mid-2026. The supply is thin partly because the title is so young that few people have two years of it on a resume yet.

### How to break in

Build one agent that does a narrow job well and survives bad inputs. Show the guardrails: a cost ceiling, a loop limit, a tool that refuses out-of-scope calls. Hiring managers in this space care less about the demo working and more about what happens when it doesn't.

## A note on the Prompt Engineer

A couple of years ago this was the hot title. It is fading as a standalone job. Postings dropped around 30% from 2024 to 2026.

Three things happened at once. Models got better and need less coaxing. Frameworks absorbed the patterns. And the remaining skill folded into the AI Engineer role. Prompting did not vanish. It stopped being its own job. If you were aiming here, aim one box over at AI Engineer instead.

## Where the lines actually fall

| MLE vs AI Engineer |
| --- |
| **MLE: builds and trains the model.** Owns data, training, evaluation, and serving the model itself. **AI Engineer: builds apps on a pretrained one.** Takes a model someone else trained and turns it into a product with retrieval, prompting, and evals. Same word in both titles. Different job. |

## 

| Agentic AI Developer vs AI Engineer |
| --- |
| **AI Engineer: single calls.** The app sends a request, gets a response, and largely the human stays in the loop. **Agentic AI Developer: multi-step autonomous agents.** The system plans, acts, observes, and decides again on its own, which is why guardrails and cost control become the hard part. |

 So which one

The honest on-ramp, if you write software today: the AI Engineer path is the shortest career switch in this series.

Start with the DeepLearning.AI short courses and the Hugging Face course. Build one retrieval app. Then build one small agent. That order works, and out of every tier in the Careers Building AI series, this is the clearest place to start.

Already train models? Aim MLE. Want the frontier and don't mind the ambiguity of a year-old title? Go Agentic.

---

**Watch the episode:** [crlab.ca/learn/careers-building-ai/builders/](https://crlab.ca/learn/careers-building-ai/builders/)

By Zubair Ashraf · CR Labs · [crlab.ca](https://crlab.ca)

---

*Originally published at [crlab.ca/learn/careers-building-ai/builders/](https://crlab.ca/learn/careers-building-ai/builders/). Follow CR Labs — [YouTube](https://crlab.ca) · [X](https://x.com/zashraf1337) · [LinkedIn](https://www.linkedin.com/in/zubairashraf/).*
