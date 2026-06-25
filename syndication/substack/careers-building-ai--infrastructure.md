# The Infrastructure

_The newsletter edition. The full version with all formatting lives at [crlab.ca](https://crlab.ca/learn/careers-building-ai/infrastructure/)._

---

_Careers Building AI · Episode 4. The engineers who train and serve models efficiently._

Everyone talks about the people who design the models. Almost nobody talks about the people who make those models run. This is about that second group.

A trained model is a big file full of numbers. It does nothing until someone gets it onto thousands of chips, keeps it fed with clean data, and answers a real user in under a second. That work is the highest-leverage, least-glamorous part of the whole field. Nobody puts you on stage at the launch. The launch doesn't happen without you.

Three roles do the running. The ML systems engineer, who sits closest to the hardware. The MLOps engineer, who keeps the model alive in production. And the data engineer for ML, who builds the plumbing that feeds everything else. Each owns a different piece of the pipeline, and the paths into them differ enough that it's worth taking them one at a time.

One number frames all three. As of mid-2026, inference is reportedly around 70 to 80 percent of all AI compute spend. Not training. Serving. The model answering questions, over and over, all day. So shaving the cost of serving has outsized payback: cut it 20 percent at scale and you've freed a budget large enough to fund a team. Keep that in mind as you read. It's why these jobs pay what they pay.

## 1. ML Systems / Performance Engineer

This is the role closest to the metal. You'll also see it called an infrastructure engineer or a performance engineer, and at some shops the titles blur into model-inference or runtime engineer. The job is the same underneath: make the chips earn their keep.

### What they actually do

They design and optimize how training and inference run across a lot of machines at once. That means GPU and TPU utilization, writing custom kernels when the framework's defaults leave performance on the table, quantizing models down so they fit and run faster, batching incoming requests to keep the hardware busy, and fighting for every millisecond of serving latency.

And then there's the part that doesn't show up in tutorials. A chip dies mid-run. A node drops off the network. With a training job spread over thousands of accelerators, hardware failure isn't an edge case, it's Tuesday. The systems engineer builds the job so it survives that and keeps going. Checkpointing, recovery, fault tolerance. The unglamorous machinery that turns a fragile experiment into something that finishes.

### Who it suits

People who like the question "why is this slow, and exactly how slow." If you read a profiler trace the way other people read a novel, you'll be at home here. Most who end up in this role came from a systems or infrastructure background first and picked up the machine learning side later. That order matters. The hard-won skill is distributed systems thinking, not model architecture.

### Training and education path

You don't arrive here from a bootcamp. The technical base is C++, Python, and CUDA, plus real experience running ML frameworks at scale rather than on a single laptop GPU. A master's helps and shows up in a lot of postings, though it isn't a hard gate. Figure four to seven years or more of relevant work before the senior roles open up. The depth is the point.

### How job posts phrase it

Once you know the shape, the listings are easy to spot. The phrasing clusters around lines like "massive-scale distributed systems · inference latency · kernel optimization." Postings from inference teams in mid-2026 tend to ask for things like (paraphrasing, since exact wording varies by company) experience "optimizing inference performance for both latency and throughput across the stack," and comfort with the low-level networking and collectives layer: CUDA, NCCL, sometimes InfiniBand for the multi-node case. If a description leans hard on profiling, throughput, and GPU memory, you've found one.

### Salary band

The pay tracks the leverage. As of mid-2026, a distributed ML systems and inference role at a company like Together AI reportedly runs about $160K to $230K in base range. Senior people at the frontier labs sit well above that once equity is in the mix. Treat these as reported figures, not a quote: bands move with location, level, and how badly a given team needs the skill that quarter.

### Supply and demand

The supply is genuinely thin. Deep distributed-systems experience plus ML plus hands-on kernel work is a narrow intersection, and the labs and inference startups are all hiring from the same small pool. That's the whole reason one good performance engineer can pay for themselves many times over. The 70-to-80-percent inference number isn't abstract to a CFO.

### A learning path

| Stage | What to do |
| --- | --- |
| Applied course | MIT 6.5840 Distributed Systems. It's the real thing: Raft, fault tolerance, building systems that survive failure. Free online. |
| Expert program | Full Stack Deep Learning (the LLM bootcamp material). Connects the systems side to how models actually get trained and served. |
| Portfolio project | Serve a real model yourself with vLLM or TensorRT-LLM. Then measure your own latency and throughput, and write down what you changed and what it bought you. |
| Break-in move | Publish the measurements. A short writeup showing you cut p99 latency on a real serving setup beats any certificate. That number is your interview. |

 The theory from 6.5840 and Full Stack Deep Learning is necessary. It isn't sufficient. The thing that gets you hired is having served a model and knowing your own numbers cold.

## 2. MLOps Engineer

This title confuses people because it sounds like a buzzword. It isn't. It's specific, and the work is real.

### What they actually do

MLOps is the job of taking a model from a notebook to a live service that stays reliable. CI/CD for machine learning, deployment, monitoring, and catching drift when the model quietly gets worse because the world changed underneath it.

Drift is the part worth understanding, because it's the failure mode nobody else watches for. The code never crashes. No exception, no red alert. The model just slowly stops matching reality, its accuracy decaying as the data it sees in production drifts away from the data it learned on. A fraud model trained last year on last year's fraud. Nothing breaks. The numbers rot. Someone has to build the alarm that notices, and that someone is the MLOps engineer.

### Who it suits

People who already think in terms of pipelines, uptime, and "what happens when this fails at 3am." If you've done DevOps or site reliability work, you have most of the instincts already. The transferable half is large. You're mostly learning what's different about shipping a model versus shipping a web service, and the big difference is that a model can fail silently.

### Training and education path

Most people arrive from a DevOps or SRE background rather than from research. The tool stack is Docker and Kubernetes for the operations layer, then ML-specific tooling on top: MLflow for tracking and registry, Weights and Biases for experiment monitoring. The 2026 postings increasingly name LLM serving at scale, GPU orchestration, and ML observability as the in-demand corners of the field.

### How job posts phrase it

The listings read like a DevOps role with machine learning bolted on. Expect lines about building "scalable MLOps pipelines for model training, validation, deployment, and monitoring," and explicit mention of watching "for data drift, concept drift, and model performance" with alerting (that phrasing is synthesized from common mid-2026 postings, not a single quote). Docker, Kubernetes, and CI/CD show up almost every time. If drift detection is in the responsibilities, it's a true MLOps role and not a relabeled deployment job.

### Salary band

As of mid-2026, the reported bands look roughly like this in the US market:

| Level | Reported range (mid-2026) |
| --- | --- |
| Entry | ~$90K–$130K |
| Mid | ~$130K–$200K |
| Senior | ~$200K–$300K |
| Top total comp (leading firms) | reportedly $300K–$550K |

 The top of that range is total comp at the strongest firms, equity included, and it's the exception rather than the median. Read the whole table as reported and directional.

### Supply and demand

This is the role with the clearest shortage. Demand reportedly outstrips supply by roughly 2.8 to 1, which is to say there are nearly three open roles for every qualified person. One projection puts the MLOps market at around $15.7 billion by 2030. That's a forecast, so treat it as a direction rather than a fact, but the direction has been steady rather than a hype spike. If you're coming from DevOps, this is the shortest jump of the three roles into AI work.

### A learning path

## 

| Stage | What to do |
| --- | --- |
| Applied course | The MLOps Specialization on Coursera from DeepLearning.AI. Covers the production lifecycle: deployment, monitoring, the drift problem. |
| Expert program | Made With ML. Project-driven, opinionated, and close to how teams actually ship. |
| Portfolio project | Deploy a model behind an API with full CI/CD, then add real monitoring and a drift alert. Make it fail on purpose and show the alarm firing. |
| Break-in move | If you're already in DevOps, retitle your work. Take one production model end to end at your current job, or build the demo above, and you've turned a DevOps resume into an MLOps one. |

 3. Data Engineer for ML

The least visible of the three, and arguably the one everything else rests on. A model is only ever as good as what you feed it.

### What they actually do

They build and maintain the pipelines, the feature stores, and the vector databases that get clean data to the model on time. When the data is late, or wrong, or quietly malformed, every other role on this list is stuck. The systems engineer's beautifully optimized serving stack is serving garbage. The MLOps engineer's drift alarm is firing because the upstream pipeline broke, not because the model decayed. Data engineering is load-bearing in a way that only becomes obvious when it fails.

### Who it suits

People who get satisfaction from a pipeline that just works, day after day, and who care about data being correct more than about being near the modeling glory. It's patient work. It rewards the kind of person who'd rather prevent a 2am page than be the hero who fixes one.

### Training and education path

SQL and Python sit at the core. On top of that: Spark for large-scale processing, Airflow for orchestration, dbt for transformations, Snowflake or a similar warehouse for storage. Most people come straight from data engineering or ETL work and add the ML-specific pieces, the feature stores and vector databases, once they're already fluent with the base stack.

### How job posts phrase it

You'll see "build and maintain data pipelines," "feature engineering at scale," and the tool names spelled out: Spark, Airflow, dbt, Snowflake. The ML-flavored versions add "feature store" and "vector database" to the list. The closer a posting gets to "powering ML and analytics teams" rather than plain reporting, the more it's this role and not a generic analytics job.

### Salary band

As of mid-2026, entry pay runs roughly $90K to $130K. Senior people with real ML experience go past $200K. The ML experience is what pushes it up; a data engineer who understands what a model actually needs from its data is worth more than one who just moves rows around. As with the others, these are reported ranges and they move with location and level.

### Supply and demand

Data engineering has been in steady demand for years, well before the current wave, so the talent pool is deeper than for ML systems work. The scarcity is at the intersection: data engineers who also understand ML needs are rarer and command the higher end of the band. That intersection is where the openings are.

### A learning path

## 

| Stage | What to do |
| --- | --- |
| Applied course | The DataCamp data engineering track. Gets you the fundamentals: SQL, Python, pipelines, the warehouse stack. |
| Expert program | Made With ML for the machine learning side, so you understand what you're feeding and why. |
| Portfolio project | Build a pipeline that actually feeds a model. Ingest raw data, clean it, land it in a feature store, and have a model train or serve off it on a schedule. |
| Break-in move | Show the whole pipeline running end to end, with the model consuming your output. That proves the ML connection that a pure ETL portfolio can't. |

 The pattern across all three

None of these people is on stage at the launch. The launch doesn't happen without them, and the demand has been strong and steady rather than a spike, which is the kind of demand you want to build a career on.

Here's the whole learning path in one frame:

| Role | Applied course | Then | Project |
| --- | --- | --- | --- |
| ML Systems | MIT 6.5840 | Full Stack Deep Learning | Serve a model, measure latency |
| MLOps | Coursera MLOps Spec (DeepLearning.AI) | Made With ML | Deploy with CI/CD + drift alert |
| Data Eng for ML | DataCamp data engineering track | Made With ML | Pipeline that feeds a real model |

 If you like making things fast, reliable, and cheap more than you like the spotlight, this is where the work is, and where the inference-cost math means the work pays. Pick the role closest to where you already are. Ship one real project that proves the connection. You're most of the way in.

That's the infrastructure.

---

**Watch the episode:** [crlab.ca/learn/careers-building-ai/infrastructure/](https://crlab.ca/learn/careers-building-ai/infrastructure/)

_By Zubair Ashraf · CR Labs · [crlab.ca](https://crlab.ca)_

---

**Thanks for reading CR Labs.** If this was useful, subscribe and forward it to someone who'd like it. More: the full guide at [crlab.ca/learn/careers-building-ai/infrastructure/](https://crlab.ca/learn/careers-building-ai/infrastructure/), videos on [YouTube](https://crlab.ca/videos/), and updates on [X](https://x.com/zashraf1337) and [LinkedIn](https://www.linkedin.com/in/zubairashraf/).
