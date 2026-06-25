# CR Labs syndication kit

Paste-ready cross-posts of crlab.ca's written content for **Substack** (the owned newsletter) and
**dev.to** (technical discovery). Generated from the live article HTML — see `SETUP.md` for the one-time
account setup and the recommended publishing order, and the per-platform READMEs below.

- **19 articles**, ~30,714 words total.
- `devto/*.md` — full Markdown **with front-matter** (`canonical_url` points back to crlab.ca so crlab.ca stays the SEO home).
- `substack/*.md` — Markdown framed as the *newsletter edition* (own intro/outro + "full version on crlab.ca").
- Images are hot-linked to `https://crlab.ca/assets/...` (already hosted) — nothing to re-upload.
- Byline: **Zubair Ashraf**, publication **CR Labs**. (Keep Coach Zubair interview/AI-sec content separate.)

## The catalog
| # | Title | Category | Words | Tags | Canonical |
|---|-------|----------|-------|------|-----------|
| 1 | Inside a Large Language Model | AI explainer | 3,504 | `ai, machinelearning, llm, beginners` | [link](https://crlab.ca/learn/inside-a-large-language-model.html) |
| 2 | The AI Careers Map | Careers | 996 | `career, ai, machinelearning, jobs` | [link](https://crlab.ca/learn/careers-building-ai/) |
| 3 | The Researchers | Careers | 2,144 | `career, ai, machinelearning, datascience` | [link](https://crlab.ca/learn/careers-building-ai/researchers/) |
| 4 | The Builders | Careers | 1,602 | `career, ai, machinelearning, programming` | [link](https://crlab.ca/learn/careers-building-ai/builders/) |
| 5 | The Infrastructure | Careers | 2,217 | `career, mlops, devops, ai` | [link](https://crlab.ca/learn/careers-building-ai/infrastructure/) |
| 6 | The Defenders | Careers | 1,851 | `career, ai, security, machinelearning` | [link](https://crlab.ca/learn/careers-building-ai/defenders/) |
| 7 | Choosing Your Path | Careers | 1,103 | `career, ai, learning, beginners` | [link](https://crlab.ca/learn/careers-building-ai/choosing-your-path/) |
| 8 | AI Careers Learning Paths | Careers | 2,250 | `career, ai, learning, machinelearning` | [link](https://crlab.ca/learn/careers-building-ai/learning-paths/) |
| 9 | Understanding the Android “master key” vulnerability | Security research | 552 | `security, android, mobile, infosec` | [link](https://crlab.ca/learn/security-research/understanding-the-android-master-key-vulnerability/) |
| 10 | DIY: Android Malware Analysis - Taking apart OBAD (part 1) | Security research | 2,997 | `security, malware, android, reverseengineering` | [link](https://crlab.ca/learn/security-research/diy-android-malware-analysis-taking-apart-obad-part-1/) |
| 11 | DIY: Android Malware Analysis – Taking Apart OBAD (Part 2) | Security research | 1,049 | `security, malware, android, reverseengineering` | [link](https://crlab.ca/learn/security-research/diy-android-malware-analysis-taking-apart-obad-part-2/) |
| 12 | How to Cheat Your MDM: Compliance without a Password | Security research | 1,623 | `security, android, mobile, infosec` | [link](https://crlab.ca/learn/security-research/how-to-cheat-your-mdm-compliance-without-a-password/) |
| 13 | Analysis of Struts Vulnerabilities in Parameters &amp; Cookie Interceptors | Security research | 1,382 | `security, webdev, infosec, java` | [link](https://crlab.ca/learn/security-research/struts-vulnerabilities-analysis-parameters-cookie-interceptors-impact-exploitation/) |
| 14 | Embracing the Uncertainty of Advanced Attacks Using Big Data Analytics | Security research | 645 | `security, bigdata, analytics, infosec` | [link](https://crlab.ca/learn/security-research/embracing-the-uncertainty-of-advanced-attacks-using-big-data-analytics/) |
| 15 | Zeus Analysis – Memory Forensics Via Volatility | Security research | 1,928 | `security, malware, forensics, infosec` | [link](https://crlab.ca/learn/security-research/zeus-analysis-memory-forensics-via-volatility/) |
| 16 | Proactive Threat Hunting and Memory Forensics Against Rombertik | Security research | 1,107 | `security, malware, forensics, threathunting` | [link](https://crlab.ca/learn/security-research/proactive-threat-hunting-and-memory-forensics-against-rombertik/) |
| 17 | Government as malware authors - Mikko&#x27;s talk at RSA / TrustyCon | Security research | 610 | `security, malware, infosec, privacy` | [link](https://crlab.ca/learn/security-research/governments-malware-authors-mikko-hypponen-trustycon/) |
| 18 | State of the Hack and Cyber Threat Intelligence Gain/Loss | Security research | 1,010 | `security, infosec, threatintel, incidentresponse` | [link](https://crlab.ca/learn/security-research/state-of-hack-cyber-threat-intelligence-kevin-mandia-mandiant-crowdstrike-fireeye/) |
| 19 | A Look Back at &#x27;The State of Incident Response&#x27; by Bruce Schneier | Security research | 2,144 | `security, infosec, incidentresponse, career` | [link](https://crlab.ca/learn/security-research/a-look-back-at-the-state-of-incident-response-by-bruce-schneier/) |

## Suggested cadence
1. **Flagship:** *Inside a Large Language Model* — publish to Substack + dev.to first.
2. **Weekly drip:** the Careers Building AI series in episode order.
3. **Themed run:** the Security Research archive (lead with the OBAD teardown + Rombertik threat-hunting — strongest for the dev.to audience).
4. Announce each post on LinkedIn + X (see `../social/`).
