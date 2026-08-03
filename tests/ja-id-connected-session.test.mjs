import assert from 'node:assert/strict';
import fs from 'node:fs';

const shared = fs.readFileSync('functions/api/id/_shared.js', 'utf8');
const central = fs.readFileSync('functions/api/id/_central.js', 'utf8');
const callback = fs.readFileSync('functions/api/id/callback.js', 'utf8');
const session = fs.readFileSync('functions/api/id/session.js', 'utf8');
const signOut = fs.readFileSync('functions/api/id/sign-out.js', 'utf8');
const header = fs.readFileSync('src/layouts/parts/Header.tsx', 'utf8');
const page = fs.readFileSync('src/pages/ja-group-services-id.tsx', 'utf8');
const routes = fs.readFileSync('src/routes.tsx', 'utf8');

assert.match(shared, /ja_domain_hub_id_session/);
assert.match(shared, /openid|verifyIdToken/);
assert.match(shared, /HttpOnly/);
assert.match(central, /\/api\/platform\/sessions/);
assert.match(central, /tenantId/);
assert.match(central, /objectId/);
assert.match(central, /JA Domain Hub/);
assert.doesNotMatch(central, /CF-Connecting-IP/);
assert.doesNotMatch(central, /account\.secureserver\.net/);
assert.match(callback, /jdh-\$\{crypto\.randomUUID\(\)\}/);
assert.match(callback, /registerSession/);
assert.match(session, /connected_session_revoked/);
assert.match(session, /clearCookie\(SESSION_COOKIE\)/);
assert.match(signOut, /end_session_endpoint/);
assert.match(signOut, /closeSession/);
assert.match(header, /JAGroupServicesIDButton/);
assert.match(header, /Provider Account/);
assert.match(page, /separate from the external provider account/);
assert.match(page, /Open central ID dashboard/);
assert.match(routes, /ja-group-services-id/);
assert.doesNotMatch(shared, /account\.secureserver\.net/);
assert.doesNotMatch(callback, /access_token[^_]/);
assert.doesNotMatch(callback, /refresh_token/);

console.log('JA Domain Hub connected identity session checks passed.');
