// Daily video-teaser poster for X + LinkedIn.
// Posts queue[state.next] to whichever platforms have credentials, then advances
// the cursor by one. Exits 0 when there's nothing to do (no creds, or queue done),
// and exits 1 if a configured platform errored (so GitHub emails a failure notice),
// but the cursor still advances so the same item is never double-posted.

import { readFile, writeFile } from 'node:fs/promises';

const DRY = process.env.DRY_RUN === '1';
const dir = new URL('.', import.meta.url);
const LI_VERSION = process.env.LINKEDIN_VERSION || '202506';

const queue = JSON.parse(await readFile(new URL('queue.json', dir), 'utf8'));
let state;
try { state = JSON.parse(await readFile(new URL('state.json', dir), 'utf8')); }
catch { state = { next: 0 }; }

const haveX = !!(process.env.X_API_KEY && process.env.X_API_SECRET &&
                 process.env.X_ACCESS_TOKEN && process.env.X_ACCESS_SECRET);
const haveLI = !!(process.env.LINKEDIN_ACCESS_TOKEN && process.env.LINKEDIN_PERSON_URN);

if (!haveX && !haveLI) {
  console.log('No platform credentials configured. Skipping (this is expected until secrets are set).');
  process.exit(0);
}
if (state.next >= queue.length) {
  console.log(`Queue exhausted: ${queue.length} item(s) already posted. Add more to queue.json and reset/extend.`);
  process.exit(0);
}

const item = queue[state.next];
console.log(`${DRY ? '[dry-run] ' : ''}Item #${state.next}: ${item.id}`);
let failed = false;

// ---- X ----
if (haveX) {
  const text = `${item.x}\n\n${item.video}`;
  if (DRY) {
    console.log('--- X ---\n' + text + '\n');
  } else {
    try {
      const { TwitterApi } = await import('twitter-api-v2');
      const x = new TwitterApi({
        appKey: process.env.X_API_KEY,
        appSecret: process.env.X_API_SECRET,
        accessToken: process.env.X_ACCESS_TOKEN,
        accessSecret: process.env.X_ACCESS_SECRET,
      });
      const r = await x.v2.tweet(text);
      console.log('X posted: ' + r.data.id);
    } catch (e) {
      failed = true;
      console.error('X failed: ' + (e?.message || e));
    }
  }
} else {
  console.log('X credentials missing; skipping X.');
}

// ---- LinkedIn (Posts API) ----
if (haveLI) {
  if (DRY) {
    console.log('--- LinkedIn ---\n' + item.linkedin + '\n(link card: ' + item.video + ')\n');
  } else {
    try {
      const body = {
        author: process.env.LINKEDIN_PERSON_URN,
        commentary: item.linkedin,
        visibility: 'PUBLIC',
        distribution: {
          feedDistribution: 'MAIN_FEED',
          targetEntities: [],
          thirdPartyDistributionChannels: [],
        },
        content: {
          article: {
            source: item.video,
            title: item.title,
            description: item.desc || '',
          },
        },
        lifecycleState: 'PUBLISHED',
        isReshareDisabledByAuthor: false,
      };
      const res = await fetch('https://api.linkedin.com/rest/posts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0',
          'LinkedIn-Version': LI_VERSION,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
      console.log('LinkedIn posted: ' + (res.headers.get('x-restli-id') || 'ok'));
    } catch (e) {
      failed = true;
      console.error('LinkedIn failed: ' + (e?.message || e));
    }
  }
} else {
  console.log('LinkedIn credentials missing; skipping LinkedIn.');
}

// ---- advance cursor ----
if (DRY) {
  console.log('[dry-run] cursor not advanced.');
} else {
  state.next += 1;
  await writeFile(new URL('state.json', dir), JSON.stringify(state, null, 2) + '\n');
  console.log('Cursor advanced to ' + state.next + ' of ' + queue.length + '.');
}

process.exit(failed ? 1 : 0);
