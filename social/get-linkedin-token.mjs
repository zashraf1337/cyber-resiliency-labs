// One-shot helper to get a LinkedIn member access token + person URN.
//
// Prereqs in your LinkedIn app (linkedin.com/developers):
//   - Products: "Sign In with LinkedIn using OpenID Connect" + "Share on LinkedIn"
//   - Auth tab: add redirect URL exactly  http://localhost:8000/callback
//
// Run:
//   LINKEDIN_CLIENT_ID=xxx LINKEDIN_CLIENT_SECRET=yyy node get-linkedin-token.mjs
//
// It opens LinkedIn in your browser, you approve, and it prints the two values
// to paste into GitHub secrets: LINKEDIN_ACCESS_TOKEN and LINKEDIN_PERSON_URN.

import http from 'node:http';
import { randomUUID } from 'node:crypto';
import { exec } from 'node:child_process';

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const REDIRECT = 'http://localhost:8000/callback';
const SCOPE = 'openid profile w_member_social';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Set LINKEDIN_CLIENT_ID and LINKEDIN_CLIENT_SECRET first.');
  process.exit(1);
}

const state = randomUUID();
const authUrl = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code'
  + `&client_id=${encodeURIComponent(CLIENT_ID)}`
  + `&redirect_uri=${encodeURIComponent(REDIRECT)}`
  + `&scope=${encodeURIComponent(SCOPE)}`
  + `&state=${state}`;

const server = http.createServer(async (req, res) => {
  if (!req.url.startsWith('/callback')) { res.writeHead(404).end(); return; }
  const url = new URL(req.url, REDIRECT);
  const code = url.searchParams.get('code');
  const err = url.searchParams.get('error_description') || url.searchParams.get('error');
  if (err) { res.end('Error: ' + err); console.error('Authorization failed: ' + err); server.close(); process.exit(1); }
  if (url.searchParams.get('state') !== state) { res.end('State mismatch.'); console.error('State mismatch; aborting.'); server.close(); process.exit(1); }

  try {
    const tokRes = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    });
    const tok = await tokRes.json();
    if (!tokRes.ok) throw new Error(JSON.stringify(tok));
    const accessToken = tok.access_token;

    const meRes = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: { Authorization: 'Bearer ' + accessToken },
    });
    const me = await meRes.json();
    if (!meRes.ok) throw new Error(JSON.stringify(me));
    const urn = 'urn:li:person:' + me.sub;

    res.end('Done. You can close this tab and return to the terminal.');
    console.log('\n=== Paste these into GitHub repo secrets ===');
    console.log('LINKEDIN_ACCESS_TOKEN:\n' + accessToken + '\n');
    console.log('LINKEDIN_PERSON_URN:\n' + urn + '\n');
    console.log('(Token expires in about ' + Math.round((tok.expires_in || 0) / 86400) + ' days.)');
  } catch (e) {
    res.end('Token exchange failed; see terminal.');
    console.error('Failed: ' + (e?.message || e));
  } finally {
    server.close();
    setTimeout(() => process.exit(0), 200);
  }
});

server.listen(8000, () => {
  console.log('Opening LinkedIn authorization in your browser...');
  console.log('If it does not open, paste this URL manually:\n' + authUrl + '\n');
  exec('open "' + authUrl + '"');
});
