// Build-time repository metadata for the homepage masthead.
//
// The masthead reports the site's currency instead of claiming it: the commit
// shown is the one this build was made from, linked to the public repo so a
// reader can check it. Nothing here is hand-maintained, so nothing here can go
// quietly stale.
//
// Falls back to null when git isn't available (a source-only deploy, a tarball
// build). The cell then renders the repo link without a hash rather than
// failing the build.
import { execSync } from 'node:child_process';

export const REPO = 'https://github.com/uxward/uxward';

function readHead() {
  try {
    const out = execSync('git log -1 --format=%h%x09%cI', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    const [sha, iso] = out.split('\t');
    return sha && iso ? { sha, iso } : null;
  } catch {
    return null;
  }
}

export const build = readHead();

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// "2026-08-29T10:20:00-05:00" -> "29 Aug 2026". Parsed off the string rather
// than through Date so the build machine's timezone can't shift the day.
export function shortDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.slice(0, 10).split('-');
  return `${Number(d)} ${MONTHS[Number(m) - 1]} ${y}`;
}
