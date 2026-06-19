# Daily social posting

Posts one video teaser per day to X and LinkedIn, driven by a GitHub Actions cron.

## How it works

- `queue.json` — the content. One entry per post (X text, LinkedIn text, video link, title).
- `state.json` — a cursor (`next`). Each run posts `queue[next]`, then advances by one.
- `post.mjs` — posts the current item to whichever platforms have credentials.
- `.github/workflows/daily-social.yml` — runs daily at 14:00 UTC (~10:00 Toronto).

The cursor only moves forward, so an item is never posted twice. When the queue runs
out, the job does nothing until you add more entries. Until secrets are set, every run
skips harmlessly (exit 0), so it won't spam failures.

## One-time setup

Add these as repo secrets: **Settings → Secrets and variables → Actions → New repository secret**.

### X (Twitter)
1. developer.x.com → create a Project + App.
2. In the app's **User authentication settings**, set permissions to **Read and Write**.
3. Generate **API Key/Secret** and an **Access Token/Secret**. Important: generate the
   access token *after* setting Read+Write, or it will be read-only.
4. Secrets: `X_API_KEY`, `X_API_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_SECRET`.
   - One post/day is low volume, but confirm your tier allows write before relying on it.

### LinkedIn (personal profile)
1. linkedin.com/developers → create an App linked to a Page you control.
2. Request the products that grant `w_member_social` (Share on LinkedIn / Community
   Management). This step can need approval and is the most likely thing to stall.
3. OAuth as yourself to get a member access token with `w_member_social` (and an
   OpenID scope). Tokens expire in ~60 days, so plan to refresh.
4. Get your person URN: `GET https://api.linkedin.com/v2/userinfo` with the token; take
   the `sub` value and form `urn:li:person:<sub>`.
5. Secrets: `LINKEDIN_ACCESS_TOKEN`, `LINKEDIN_PERSON_URN`.
   - If LinkedIn bumps its API version and posts start failing, set a `LINKEDIN_VERSION`
     secret (format `YYYYMM`).

## Test before going live

Actions tab → **Daily social post** → **Run workflow**. Leave `dry_run` checked. It
prints exactly what each platform would receive without posting or moving the cursor.
When it looks right, uncheck `dry_run` for a single real post, or just let the daily
cron take over.

## Editing content

Edit `queue.json`. To re-post from the top, set `state.json` back to `{"next": 0}`.
Add new videos by appending entries; the cron picks them up the next morning.
