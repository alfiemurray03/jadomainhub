import { cp, access } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const clientDir = path.join(distDir, 'client');
const clientIndex = path.join(clientDir, 'index.html');
const rootIndex = path.join(distDir, 'index.html');

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

if (await exists(clientIndex)) {
  await cp(clientDir, distDir, { recursive: true, force: true });
  console.log('Cloudflare Pages assets copied from dist/client to dist.');
} else if (await exists(rootIndex)) {
  console.log('Cloudflare Pages assets already exist in dist.');
} else {
  throw new Error('No built index.html was found in dist/client or dist.');
}
