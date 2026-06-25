---
title: "State of the Hack and Cyber Threat Intelligence Gain/Loss"
published: false
tags: security, infosec, threatintel, incidentresponse
canonical_url: https://crlab.ca/learn/security-research/state-of-hack-cyber-threat-intelligence-kevin-mandia-mandiant-crowdstrike-fireeye/
cover_image: https://crlab.ca/assets/og-default.png
---

> By **Zubair Ashraf** · Originally published on [IBM SecurityIntelligence](https://web.archive.org/web/20140511011052/https://securityintelligence.com/state-of-hack-cyber-threat-intelligence-kevin-mandia-mandiant-crowdstrike-fireeye/), 2014 · archived copy, republished here.

“[Mikko Hypponen at TrustyCon: Governments as Malware Authors](https://crlab.ca/learn/security-research/governments-malware-authors-mikko-hypponen-trustycon/)” was my first post in the series of cyber threat intelligence keynote recaps. There you will find an introduction to the series and the motivation behind it.

![Kevin Mandia (Mandiant/FireEye) and Dmitri Alperovitch (Crowdstrike)](https://crlab.ca/assets/security-research/state-of-hack-cyber-threat-intelligence-kevin-mandia-mandiant-crowdstrike-fireeye/img2.jpg)

This month, I would like to recap Kevin Mandia’s keynote at RSA 2014, “[State of the Hack: One Year after the APT1 Report](http://www.rsaconference.com/videos/128/state-of-the-hack-one-year-after-the-apt1-report)“; and while we’re at it, we will also take a look at a related talk, “[Hacking Exposed: PLA Edition](http://www.rsaconference.com/events/us13/agenda/sessions/198/hacking-exposed-pla-edition),” by Dmitri Alperovitch ([@DmitriCyber](https://twitter.com/DmitriCyber)) and George Kurtz ([@George_Kurtz](https://twitter.com/George_Kurtz)). Let’s first take a look at the reasons companies should or should not disclose cyber threat intelligence.

## Intelligence Gain/Loss (IGL): Why Disclose Intelligence?

Clearly, when you disclose the intelligence that you have gathered about an adversary, it alerts them and forces them to abandon their command and control (C&C) infrastructure. You may also lose sight of the adversary for some time until they come back with new attack tools and C&C infrastructure. This is not to mention that you may cause collateral damage to others who are compromised as part of the new C&C infrastructure; but perhaps they were already compromised — or would have been compromised — regardless of the circumstances. Thus, one may wonder why companies such as Mandiant and Crowdstrike release their intelligence to the public.

Let’s start with the reasons that Mandia mentioned in his keynote:

- In January 2013, [The New York Times](http://www.nytimes.com/2013/01/31/technology/chinese-hackers-infiltrate-new-york-times-computers.html?pagewanted=all&_r=1&) disclosed that they had been breached, and Mandiant, the cyber security firm hired by The Times to investigate the breaches, claimed that these attackers were hackers associated with the Chinese military. The NYT article reports China’s Ministry of National Defense as having said, “To accuse the Chinese military of launching cyber attacks without solid proof is unprofessional and baseless.” Thus, the APT1 report provides solid proof.

- Mandiant kept seeing this adversary in the breaches to which they responded (this included nongovernmental and nonmilitary targets as well), and looking back, they could not find any set of technology and practices that would have been a silver bullet to prevent the breaches. There was some C-level frustration as well, and they decided to release details and thousands of actionable indicators of compromise (IOC) so that companies could scan their networks and logs to determine whether APT1 had been around.

- Another major factor that Mandia mentioned as part of why companies would disclose IGL is to see whether we can stop these attacks by nontechnical diplomatic means. This is also one of the takeaways from our recap of Hypponen’s keynote: The need to get better at attribution and use policies for better security and privacy. Mandiant was confident that releasing attribution proof for APT1 would help the U.S. government stop this at the diplomatic level. Did it work? Well, according to the [Associated Press](http://bigstory.ap.org/article/cybersecurity-tops-obamas-agenda-china-talks), cyber security was on top of the agenda for talks between the U.S. and China in the summer of 2013, but then Snowden leaked and stalled cyber security talks, as reported in the [Huffington Post](http://www.huffingtonpost.com/2013/07/09/snowden-cyber-security-us-china_n_3564192.html); if the U.S. pointed a finger at China, they would see three fingers pointing back.

## Crowdstrike’s Perspective on IGL

Here are a few points explaining why Crowdstrike went ahead with disclosing their cyber threat intelligence about adversaries, based on the [talk that Alperovitch and Kurtz gave at RSA 2013](http://youtu.be/lTa9dJmL6mw) and a [blog post by Adam Meyers](http://www.crowdstrike.com/blog/whois-anchor-panda/index.html) ([@Adam_Cyber](https://twitter.com/Adam_Cyber)):

- To raise operational costs for adversaries by disclosing their infrastructure and TTP.

- To use standardized nomenclature to name adversaries based on motives and national origins to avoid confusing and inconsistent names across the security industry.

- To better know your adversary and what they are after and to focus defense accordingly.

- To release IOCs to help others detect common adversaries.

- If I may add another reason of my own: Mandiant released and made big news about APT1, so…

## Other Points from Mandia’s Talk

Alright, now back to the keynote we are recapping and some other points that Mandia mentions:

- Disclosing APT1 did not stop the adversary, and as expected, they came back with a different C&C infrastructure.

- Obviously, we don’t have just one nation state to worry about; everyone who can breach networks is likely doing it. There is not much tangible/physical risk to the adversary for attacking us across the borders.

- Releasing IGL makes it easier for the adversary not because they are necessarily smarter but because it is just the nature of the game: it is much easier to shatter crystal than to form it.

- After a breach, organizations are on high alert; but as time passes and nothing happens, the defenders get bored and relaxed. That’s when the adversary strikes again.

- Whether you deserve an “A” in cyber security and have done a super job setting up your security posture or you deserve an “F,” a determined adversary will come after you. And if — or, rather, when — an adversary gets in, the only difference is that an “A” in cyber security means you will detect the breach sooner and go from alert to fix in 10 minutes.

- Reduce your target area, and monitor the heck out of it.

## Conclusion, Takeaways and Action Items

I thank Mandiant (then, and now FireEye) for doing a great job taking the lead in disclosing an adversary’s TTP, releasing thousands of actionable IOCs and providing sufficient background details. It was great to see Crowdstrike and others follow suit and share similar information. Moving forward, organizations should:

- Continue sharing more and more cyber threat intelligence and IOCs publicly and in closed trusted groups.

- Get an “A” for their cyber security postures.

- Use the shared IOCs and intelligence about adversaries to scan company networks and determine whether they have seen similar visitors.

- Come to some agreement on using common nomenclature for identifying adversaries.

Finally, on the diplomatic/policy side, we need to get back on the table, set up policies and then respect and abide by policies and law; and on this score, I leave you with an article titled “[China’s Cyber Security Strategy with the EU is an opportunity for the U.S.](http://jeffreycarr.blogspot.ca/2014/04/chinas-cyber-security-strategy-with-eu.html)” by [Jeffrey Carr](https://twitter.com/jeffreycarr).

---

*Originally published at [crlab.ca/learn/security-research/state-of-hack-cyber-threat-intelligence-kevin-mandia-mandiant-crowdstrike-fireeye/](https://crlab.ca/learn/security-research/state-of-hack-cyber-threat-intelligence-kevin-mandia-mandiant-crowdstrike-fireeye/). Follow CR Labs — [YouTube](https://crlab.ca) · [X](https://x.com/zashraf1337) · [LinkedIn](https://www.linkedin.com/in/zubairashraf/).*
