// Rewrites internal links in dist/ HTML and JS for a non-root base path.
// Run after `astro build` when deploying to a subfolder.
// Usage: node scripts/patch-base.mjs /preview
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const base = process.argv[2];
if (!base || !base.startsWith('/')) {
  console.error('Usage: node scripts/patch-base.mjs /your-subfolder');
  process.exit(1);
}
const prefix = base.endsWith('/') ? base : base + '/';

function walk(dir, exts) {
  const results = [];
  for (const f of readdirSync(dir)) {
    const full = join(dir, f);
    if (statSync(full).isDirectory()) results.push(...walk(full, exts));
    else if (exts.some(e => full.endsWith(e))) results.push(full);
  }
  return results;
}

const distDir = new URL('../dist', import.meta.url).pathname;

// Patch HTML: href/src/data-src="/<not-already-prefixed>" → "/prefix/<rest>"
const escaped = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const attrRe = new RegExp(`(href|src|data-src)="\/(?!${escaped.slice(1)}\\/)`, 'g');
let htmlPatched = 0;
for (const file of walk(distDir, ['.html'])) {
  const before = readFileSync(file, 'utf8');
  const after = before.replace(attrRe, `$1="${prefix}`);
  if (before !== after) { writeFileSync(file, after); htmlPatched++; }
}

// Patch JS: location.assign("/") and pathname === "/"
const jsFiles = walk(distDir, ['.js']);
let jsPatched = 0;
for (const file of jsFiles) {
  const before = readFileSync(file, 'utf8');
  let after = before
    .replace(/location\.assign\("\/"\)/g, `location.assign("${prefix}")`)
    .replace(/location\.pathname==="\/"(?!\s*\|\|)/g, `location.pathname==="${prefix}"`);
  if (before !== after) { writeFileSync(file, after); jsPatched++; }
}

console.log(`Patched ${htmlPatched} HTML files, ${jsPatched} JS files → base: ${prefix}`);
