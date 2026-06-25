# The Defenders

_The newsletter edition. The full version with all formatting lives at [crlab.ca](https://crlab.ca/learn/careers-building-ai/defenders/)._

---

Careers Building AI · Episode 5

Every other job in AI is about making the model do more. This tier is about the people who make sure it does not do something terrible first.

Most AI careers point in one direction. Train a better model, ship a faster product, wire the thing into a workflow. The safety and security tier points the other way. Its whole reason to exist is to assume the model will misbehave and to find out how, before a user or an attacker does.

This matters more every month. Models are no longer just chatting. They are handed tools, browsers, code, and sometimes real money. The moment a system can act in the world, breaking it stops being a thought experiment and becomes an operational risk.

One thing surprised me while putting this episode together, and it is worth saying up front. For these roles, good training is the scarcest thing in the entire careers map. The demand is the highest of any tier, the salaries reflect that, and yet the path in is the least mapped. We will come back to that gap at the end, because at CR Labs it is the part we think about most.

This is also territory we have circled before. Our earlier episode on vulnerability research was about breaking software. Our episode on hallucinations was about a model stating false things with confidence. The defenders sit exactly where those two worlds meet, at the model layer. Both episodes are linked further down.

## Role 1: The AI Red Teamer

### What they do

An AI red teamer attacks a model or an agent on purpose. They hunt for jailbreaks, prompt injection, data leakage, and tool misuse. The loop is simple to state and hard to do well. Find the failure, prove it reproducibly, then help close it.

The framing is defensive, not destructive. You break the system in a controlled, authorized way so the people shipping it can fix it before a real attacker shows up. The closest cousin is the penetration tester, just pointed at a model instead of a network.

### Who it suits

People who already think like attackers. If you enjoy poking at a system until it does something it was not supposed to, this is the most natural home in the whole tier. It rewards curiosity and stubbornness more than credentials.

### Training and education path

This is the lowest formal barrier of the three roles. A degree helps, but a portfolio of real findings matters more. Most people arrive from penetration testing or application security and then learn the model side on top.

What you need is two things at once: real security instinct, and genuine fluency with how a large language model actually behaves under pressure.

### How job posts phrase it

The listings say the quiet part out loud. Red-team postings at large labs and cloud providers, as of mid-2026, tend to ask candidates to identify jailbreaks, prompt injection, and harmful content, and to document attack techniques that bypass a model's guardrails. A representative line, paraphrased rather than quoted, reads something like: probe deployed models and agents for unsafe behavior and report reproducible failure cases to the safety team.

### Salary (as of mid-2026, hedged)

| Level | Approx. band (USD) |
| --- | --- |
| Junior | $150K to $220K |
| Mid | $220K to $320K |
| Senior | $320K to $450K |
| Frontier labs, top end | $450K to $700K+ |

 Treat these as a sketch current to mid-2026, not a quote. They move fast.

### Supply and demand

Demand is brutal. Reports put it near three openings for every qualified person, and people in the field keep calling it the hardest specialist hire in all of cybersecurity. Read that as a rough signal rather than gospel. The direction is unambiguous.

### A learning path

- **Applied foundation.** Work the [Hack The Box AI Red Teamer path](https://academy.hackthebox.com/). It gives you hands-on attack practice against model targets instead of abstract reading.

- **Get the map.** Learn the [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) cold. It is the field's shared vocabulary for what to attack and why.

- **Expert methodology.** Practical DevSecOps and similar vendor tracks teach the red-teaming process: scoping, evidence, and responsible reporting. Web-supplemented course names shift often, so verify the current catalog before paying.

- **Project.** Pick one open model and build a small jailbreak and prompt-injection report against it. Document each finding, the reproduction steps, and a suggested mitigation. That document is your portfolio.

- **Break in.** Apply with the findings in hand. In this role the artifact opens more doors than the resume.

## Role 2: The Evals Specialist

### What they do

The evals specialist answers one question without hand-waving. Is this model good enough and safe enough to release? They turn that judgment into measurable test suites and into release gates a model must pass before it ships.

This is also where hallucinations come back. An evals specialist builds the factuality and safety checks that catch a confident wrong answer before users ever see it, and notices when a new version quietly got worse on something that used to work.

### Who it suits

People who find measurement satisfying. If turning a vague sense of quality into a number that survives gaming sounds like a good week, this is your seat. If it sounds dull, it is honestly not your role, and that is fine.

### Training and education path

People arrive from a few directions: quality assurance and testing, data science, and red teaming. That last one is common. Plenty of red teamers decide they would rather build the measuring stick than keep swinging at the system.

### How job posts phrase it

Frontier evals listings, as of mid-2026, tend to ask for measurable quality targets, repeatable test suites, and release gates. A representative line, paraphrased, runs along the lines of: design and maintain benchmarks that gate model releases and detect regressions across capability and safety. Blunt and unglamorous, which is the point.

### Salary (as of mid-2026, hedged)

### 

| Level | Approx. band (USD) |
| --- | --- |
| Entry | $130K to $173K |
| Mid | $180K to $225K |
| Senior | $300K to $450K |

 Supply and demand

This is a young role with thin supply, which is part of why pay rises quickly for people who can demonstrate the skill. Demand is strong as of mid-2026 and rising, though it sits a step below the red-teaming crunch.

### A learning path

- **Applied foundation.** The standout is the Maven course [AI Evals for Engineers and Product Managers](https://maven.com/parlance-labs/evals) by Hamel Husain and Shreya Shankar, around $4,200 as of mid-2026. It is the most direct way into how practitioners actually build evals.

- **Expert depth.** Take the [DeepLearning.AI](https://www.deeplearning.ai/) post-training course to understand what you are measuring and why a model changes between versions.

- **Hands-on.** Use Hugging Face's [TRL library](https://github.com/huggingface/trl) to run real training and scoring loops yourself, so evals stop being abstract.

- **Project.** Build a small eval suite for one task you care about. Include a factuality check, a safety check, and a regression test that flags when a newer model scores worse.

- **Break in.** Publish the suite and the methodology write-up. A working gate you designed is a stronger signal than any certificate.

## Role 3: The AI Safety and Alignment Researcher

### What they do

This is the deepest end of the pool, and it is empirical research, not armchair ethics. The work spans alignment, interpretability, scalable oversight, and robustness. A lot of it comes down to reverse-engineering model behavior to understand what is actually happening inside.

### Who it suits

People who like sitting with a hard problem for months without a guaranteed answer. The questions are genuinely open. If ambiguity drains you, this is a tough room. If it energizes you, there is no better one.

### Training and education path

This is the one role where a PhD is usually preferred, though strong applied researchers do get in without one. The main on-ramps are MATS, a twelve-week mentored research program, and ARENA, a four to five week technical intensive.

### How job posts phrase it

Interpretability postings, as of mid-2026, describe the mission in plain terms. Anthropic's interpretability team frames its work as an effort to reverse-engineer the algorithms learned by models. A representative paraphrased line reads: conduct empirical research on model internals and publish findings that improve our understanding of why systems behave as they do. Reading current work is most of the job.

### Salary (as of mid-2026, hedged)

| Level | Approx. band (USD) |
| --- | --- |
| Entry | $180K to $240K |
| Senior | $300K to $450K+ |

 Salaries here reportedly carry roughly a 45% premium over where they sat in 2023. Hedge that figure, but the trend is real.

### Supply and demand

The crunch is the worst of all three. Reports put demand near four or five openings for every qualified person, against a tiny pool that can actually do the work. Again, treat the ratio as a rough signal. Every other signal points the same way: scarce.

### A learning path

- **Applied orientation.** Start with the [80,000 Hours AI safety guide](https://80000hours.org/career-reviews/ai-safety-researcher/) to understand the landscape and the open problems before committing.

- **Expert structure.** Apply to [MATS](https://www.matsprogram.org/) for mentored research or [ARENA](https://www.arena.education/) for a focused technical intensive. These are the recognized on-ramps.

- **Stay current.** Live in the [Alignment Forum](https://www.alignmentforum.org/) and read the published papers from labs working on interpretability and alignment.

- **Project.** Reproduce one interpretability result on a small model and write up what you found, including where it broke. Reproduction is respected work in this field.

- **Break in.** Use the reproduction and any MATS or ARENA output as your application core. Demonstrated research taste is the currency.

## Where this connects in the series

If this tier interests you, two earlier CR Labs episodes are the natural companions. The vulnerability research episode covers the attacker mindset applied to software, which is the instinct red teamers carry into the model layer. The hallucinations episode covers why models state false things with confidence, which is exactly what evals specialists build checks to catch.

- [Vulnerability research](https://crlab.ca/videos/) — breaking software, the attacker's mindset.

- [Hallucinations](https://crlab.ca/videos/) — confident wrong answers, and how to catch them.

## Callout: The training gap

Here is the honest closing beat. Look back at all three roles. For evals, and especially for AI red teaming, good training is genuinely scarce. It is the single biggest gap in the whole careers map, which is strange, because demand for those exact skills is the highest in the field.

The safety researcher path at least has MATS and ARENA. Red teaming and evals are mostly self-assembled from scattered courses and a lot of trial and error. That gap is something CR Labs is considering building a course for, since this tier is the most on-brand work we do.

**Interested in a CR Labs evals and red-teaming course?** Tell us at [crlab.ca](https://crlab.ca/interest/).

## So which door?

Pick the one that fits, then build something real. If you have a security background, start with the AI Red Teamer track and the OWASP LLM Top 10. If you like measurement, build a small eval suite with the Maven course and Hugging Face TRL. If research is your thing, aim at MATS or ARENA.

The portfolio matters more than the path in every one of these roles. Build the artifact first.

**Watch the episode:** [crlab.ca/learn/careers-building-ai/defenders/](https://crlab.ca/learn/careers-building-ai/defenders/)

By Zubair Ashraf · CR Labs · [crlab.ca](https://crlab.ca)

---

**Thanks for reading CR Labs.** If this was useful, subscribe and forward it to someone who'd like it. More: the full guide at [crlab.ca/learn/careers-building-ai/defenders/](https://crlab.ca/learn/careers-building-ai/defenders/), videos on [YouTube](https://crlab.ca/videos/), and updates on [X](https://x.com/zashraf1337) and [LinkedIn](https://www.linkedin.com/in/zubairashraf/).
