# The Researchers

_The newsletter edition. The full version with all formatting lives at [crlab.ca](https://crlab.ca/learn/careers-building-ai/researchers/)._

---

**Careers Building AI · Episode 2**

Research Scientist, Applied Scientist, and Research Engineer: what they actually do, what they pay, and how you get in. The deep version of the video.

_All figures below are as of mid-2026 and hedged where the source is a survey, a range, or a single report. Treat them as a snapshot, not a quote._

## The research tier, and who it's for

When most people picture a job in AI, they picture one job. The person who "does the AI." But the work that pushes these systems forward splits into three roles, and they want very different things from you.

One group invents new methods. One group ships those methods into products. One group builds the machinery that lets the other two move at all.

The titles bleed together on real job boards, and companies are not careful about it. A posting called "Research Scientist" at one lab is closer to what another lab calls "Research Engineer." So this piece does two things. It describes each role honestly, and it gives you three test questions at the end that cut through the title and tell you what the job really is.

Who is this tier for? People who want to work near the frontier of how these models get built, not only how they get used. That covers a wider range of backgrounds than the romance suggests. Yes, one of these roles still wants a PhD. The other two do not. We'll be specific about which is which.

## Role 1: Research Scientist

### What they do

A research scientist's product is knowledge. They come up with a new method or a new architecture, they design experiments to test whether it actually works, and they write it up. The output is a paper, and the venues that count are the big conferences: NeurIPS, ICML, and ICLR.

The point of the job is to move the field, not to move a single product metric. That distinction shapes everything else about it, including how you get hired and how you get paid.

### Who it suits

People who are happy spending months on a question that might not pan out. You need a high tolerance for negative results and a real taste for reading other people's papers, because the job is a conversation with the literature. If shipping a feature this quarter is what makes you feel alive, this is probably not your seat.

### Training and education path

This is the role where the degree really matters. At the frontier labs, a PhD is usually the price of entry. But the degree is a proxy. What hiring committees actually read is your publication record, and specifically first-author papers, because those show you can drive a research question yourself rather than help on someone else's.

On tooling, the floor is Python plus a deep-learning framework, either PyTorch or JAX. JAX shows up more at labs that train very large models; PyTorch is the wider default. Neither replaces the papers as the real signal.

### How job posts phrase it

Postings for this role lean on two ideas: that you'll set your own direction, and that you've published. A representative line, close to how OpenAI has phrased its post-training research roles, reads roughly: "own and pursue a research agenda to improve model capability and performance." Frontier-lab scientist posts also tend to ask for "a track record of first-author publications at top venues." (Wording paraphrased from postings as of mid-2026; exact text changes per req.)

### Salary band

Mid-level base sits around $200K and up. Total compensation is where the role separates from the pack: at frontier labs it runs from roughly $400K to north of $900K once you count equity, and equity does most of that heavy lifting. The top of that range is real but rare, and it tracks the lab and the level, not the title alone. (Ranges as of mid-2026, hedged; cash base is far more stable than the total figure.)

### Supply and demand

Demand badly outruns supply. As of mid-2026, open postings outnumber qualified candidates by something like 3.9 to 1. There are simply more openings than there are people with the publication record to fill them, which is most of why the pay keeps climbing.

### A learning path

Get a feel: the Deep Learning Specialization from DeepLearning.AI, paired with Andrej Karpathy's Neural Networks: Zero to Hero series. The first gives you the vocabulary. The second makes you build a small language model from scratch, which is worth more than ten courses you only watch.

Go deep: Stanford's CS229 (machine learning), CS224N (NLP with deep learning), and CS336 (building language models from the ground up). Lecture videos and assignments for these are public. CS336 in particular is the one that shows up across all three roles in this piece.

A portfolio project: reproduce a recent paper's central result, or run a clean ablation that the original authors skipped, and write it up honestly including what failed. A reproduction with a careful negative finding signals more than a flashy demo.

How to break in: the honest path is a PhD or a formal research track, often after a stint as a research engineer or a research assistant in a lab. First-author workshop papers come before main-conference papers. The currency is publications, so the on-ramp is whatever lets you produce one.

## Role 2: Applied Scientist

### What they do

An applied scientist takes a real product or business problem and turns it into machine learning that ships and works. The work is pragmatic. You're not chasing a new architecture. You're picking the right known method and making it survive contact with messy data and actual users.

This is the most misunderstood of the three, because people read "scientist" and assume it means publishing. Here it mostly does not. The theory serves the product.

### Who it suits

People who want their work to touch something real this quarter and who get satisfaction from moving a number that the business cares about. You need enough modeling depth to know which method fits and enough engineering sense to ship it. The pull toward "what actually works" has to beat the pull toward "what's novel."

### Training and education path

Much less degree-locked than the scientist role. A master's is common, but plenty of applied scientists arrive as a strong engineer or a data scientist who drifted toward modeling. The path through ML Engineer or Data Scientist into Applied Scientist is well worn. What you're building toward is a portfolio of things that actually shipped.

### How job posts phrase it

The tell in these posts is the metric. They talk about impact and outcomes rather than publications. A representative line reads roughly: "you'll be evaluated on business impact and outcomes, not on publication count." Posts often pair "applied research" with "production" in the same sentence, which is the whole job in two words. (Paraphrased synthesis of applied-scientist postings as of mid-2026.)

### Salary band

Not much of a penalty for the lighter degree requirement. Base salary averages around $199K. At strong product companies and frontier labs, total comp climbs to between $350K and $600K. The ceiling sits a little below a pure scientist's, but the floor is steadier, because the work ties directly to revenue. (Figures as of mid-2026, hedged; the average base comes from aggregated compensation surveys, which run a little behind the live market.)

### Supply and demand

Healthy, and broader than the scientist market. Demand spans nearly every company doing machine learning, not just the frontier labs, so there are more seats. That breadth is exactly what makes the floor steadier.

### A learning path

Get a feel: the DeepLearning.AI short courses (the practical, one-to-two-hour ones on building with models) or fast.ai's Practical Deep Learning. fast.ai's top-down, get-it-working-first style fits this role's mindset well.

Go deep: Hugging Face's TRL library and its docs for fine-tuning and preference training, plus Stanford CS336 for the model internals so you're not flying blind when something breaks.

A portfolio project: fine-tune or adapt a model for a narrow, real task, deploy it behind a small app, and measure something. The measurement is the point. "It improved accuracy on my eval set from X to Y, and here's the eval set" reads like an applied scientist talking.

How to break in: ship inside your current job if you can, even a small model serving a real internal need. Then move sideways into an ML Engineer or Applied Scientist req. Demonstrated shipping beats a second degree here.

## Role 3: Research Engineer

### What they do

A research engineer is the bridge. Scientists have ideas, but an idea only matters if you can run it across thousands of chips without the whole thing falling over. The research engineer builds the distributed training and the evaluation pipelines that make the experiments possible at all.

If the scientist is the architect, this is the person who can pour the foundation at scale. Quietly, it might be the most powerful of the three, because nothing the scientists dream up runs without it.

### Who it suits

Engineers who like hard systems problems and don't need their name on the paper to feel the work mattered. Distributed systems, performance, the unglamorous reliability work that keeps a training run alive for weeks. If you light up at "why is this run 30% slower than it should be," this is your seat.

### Training and education path

This is the role you can reach without a PhD. The classic path is a strong software engineer who moved into ML. A bachelor's plus real systems chops is enough to get in the door. A doctorate is valued, but it isn't the gate. The systems skill is the actual ticket.

### How job posts phrase it

These posts read like systems-engineering roles that happen to be pointed at ML. A line close to OpenAI's research-engineer postings: "design, implement, and improve massive-scale distributed machine learning systems." Expect mentions of writing reliable ML code and building evaluations for tracking model improvements. (Paraphrased from OpenAI research-engineer postings as of mid-2026.)

### Salary band

No PhD tax on the paycheck. Mid-level total comp runs from $280K to $420K, and senior or frontier roles clear $500K. One reported data point: Anthropic's alignment research engineers were said to sit around £260K to £370K. That last figure is a single report, so hold it loosely. (Ranges as of mid-2026, hedged; scarcity of systems-at-scale skill is what holds the pay up.)

### Supply and demand

Tight. The people who can make a training run work across a huge cluster are scarce, and labs pay for scarcity. This is the role where you can skip the PhD and still land near the top of the band.

### A learning path

Get a feel and some depth at once: Full Stack Deep Learning, including its LLM Bootcamp, which walks from model foundations through actually deploying an LLM app. It's built for people who already program and want to get current fast.

Go deep: Stanford CS336, because it teaches you to build a language model from the ground up, which is the systems core this role lives in. Read it alongside open-source training frameworks so the lectures map onto real code.

A portfolio project: train something at scale, even modestly. Get multi-GPU training working, profile it, and write up the bottleneck you found and fixed. A short, honest "I made this run 2x faster and here's how" post is a strong signal.

How to break in: come in as a software engineer with strong systems experience, then move toward ML infrastructure and training. Contributing to an open-source training or eval framework is one of the cleaner ways to show the exact skill these teams hire for.

## Telling them apart: the clean boundary

The titles bleed, so read the job by what it measures, not what it's called. Three questions usually settle it.

|  | Research Scientist | Applied Scientist | Research Engineer |
| --- | --- | --- | --- |
| **The verb** | Invent | Ship | Enable |
| **Judged on** | Publications, new knowledge | Product and business impact | Systems that let research run |
| **Time horizon** | Long term | This quarter | The platform under both |
| **Who uses the output** | The field | Users and the business | The other two roles |
| **Degree** | PhD usually required | Master's common, not required | Bachelor's-plus; PhD optional |

 Publish-driven, product-impact, or systems-that-enable-research. Pick the verb that excites you, then check which column the posting really lives in before you apply.

## The shared backbone

The three paths overlap more than the labels suggest. CS336 turns up in all of them. Python plus PyTorch or JAX is the baseline everywhere. The differences are emphasis, not three separate worlds.

So the takeaway is plain. You don't need a PhD to work in AI research. A PhD opens one of these three doors, not all three. Pick the work by the verb, not the prestige of the title, and then build proof. Proof beats credentials, and demand still outruns supply across all three as of mid-2026.

---

**Thanks for reading CR Labs.** If this was useful, subscribe and forward it to someone who'd like it. More: the full guide at [crlab.ca/learn/careers-building-ai/researchers/](https://crlab.ca/learn/careers-building-ai/researchers/), videos on [YouTube](https://crlab.ca/videos/), and updates on [X](https://x.com/zashraf1337) and [LinkedIn](https://www.linkedin.com/in/zubairashraf/).
