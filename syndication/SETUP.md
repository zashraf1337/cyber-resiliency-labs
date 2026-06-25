# Syndication — one-time setup & publishing checklist

Everything in this folder is paste-ready. The steps below are the parts only you can do (account
creation + the final publish), plus the SEO step that makes the canonical-back strategy actually pay off.

## 0. The strategy in one paragraph
crlab.ca stays the **canonical home** of every article. We cross-post to **Substack** (an audience/email
list you *own*) and **dev.to** (developer discovery + high domain authority). dev.to posts carry
`canonical_url` back to crlab.ca, so they drive traffic without competing with it in search. Substack is
framed as the *newsletter edition*. LinkedIn + X just announce each post. Coach Zubair content stays separate.

## 1. Substack (the flagship — owned audience)
- [ ] Create a publication at **substack.com** under **CR Labs** (byline: Zubair Ashraf). Use the logo/teal from crlab.ca.
- [ ] Set the **About** page from `substack/ABOUT.md`.
- [ ] (Optional) Custom domain/subdomain later, e.g. `newsletter.crlab.ca` (Substack → Settings → Domains).
- [ ] **Seed the archive (fast path):** Settings → **Import** → import from RSS `https://crlab.ca/rss.xml`
      (pulls the existing 19 posts in), *then* refine individual posts using `substack/*.md`. Or skip the
      import and paste posts one at a time.
- [ ] Publish the welcome/flagship post first (`substack/inside-a-large-language-model.md`), then drip the rest.
- Publishing a file: New post → Text → paste the `.md` body → wait for the crlab.ca images to embed → set subtitle → publish.

## 2. dev.to (technical discovery)
- [ ] Create/confirm a **dev.to** account (consider a CR Labs org under Settings → Organization).
- [ ] For each file in `devto/`: New Post → switch to the **Markdown editor** → paste the *entire* file
      including the `---` front-matter. It reads `title`, `tags`, `canonical_url`, `cover_image` automatically.
- [ ] Files are `published: false` (draft) by default — publish when ready.
- [ ] Confirm the published post shows **"Originally published at crlab.ca"** (means canonical took).
- Lead with the technical pieces: the field guide, the OBAD teardown, Rombertik threat-hunting, the builders/infra careers posts.

## 3. LinkedIn + X (amplification)
- [ ] Announcement copy is in `../social/x-posts-newsletter-launch.md` and `../social/linkedin-posts-newsletter-launch.md`.
- [ ] After each Substack post, share its link on LinkedIn (where the careers/business audience is) and X.
- [ ] Phase 2 (optional): turn on a native **LinkedIn newsletter** if the LinkedIn posts land.

## 4. SEO — do this so canonical-back is worth it (the one that's been pending)
- [ ] **Google Search Console** (search.google.com/search-console): the verification meta tag is already live on the homepage, so just click **Verify** for `crlab.ca`.
- [ ] **Sitemaps** → submit `https://crlab.ca/sitemap.xml`.
- [ ] Spot-check **Pages (Coverage)** after a few days — confirm the `/learn/...` URLs move to *Indexed*.
- [ ] (Optional) **URL Inspection** → Request indexing on the flagship + the security-research index.
- Why it matters: canonical-back tells Google "the original is crlab.ca." That only helps once crlab.ca is actually in the index. Until then, the dev.to/Substack copies are doing the discovery work — which is fine.

## Re-generating these files
The posts are generated from the live article HTML by `html_to_md.py` (in the session scratchpad). Re-run it
after editing any article on crlab.ca to refresh the cross-posts. Image URLs hot-link to crlab.ca, so nothing
needs re-uploading when an image changes.
