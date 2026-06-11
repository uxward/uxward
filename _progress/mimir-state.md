# Mimir State — uxward.com

_Most recent at top. Updated after each task._

## Current
- **Phase:** PRD 002 BUILT + browser-verified on branch `build/writing-index` (6 commits: REQ-001..005 + PRD docs). status=implemented. Awaiting Freya step-7 review, then owner-approved merge to master.
- **Verification:** 26/26 Playwright assertions PASS — desktop 1440 / mobile 375 / light + dark / keyboard. No reflow on hover (scrollHeight stable). Screenshots: /tmp/wi-desktop.png, wi-mobile.png, wi-dark-hover.png, home-hover.png.
- **Flag for owner/Freya:** REQ-005 promoted the *title* hovers (home + writing) to red, per PRD scope. The GLOBAL `a:hover` in global.css is still `--tertiary` — so nav/footer/body inline links do NOT hover red. Going fully literal-"site-wide" would mean changing the global rule (affects all links). Left out of scope deliberately; surface for a decision.
- **Next task:** Freya runs step-7 (`/freya`) browser review + step-8 token extraction; on owner approval, merge `build/writing-index` → master.
- **Hard do-not-touch (honored):** featured pull on /writing untouched (verified byte-identical markup); `src/data/essays.js` unchanged; masthead voice intact.
- **Carried-over blockers (PRD 001):** REQ-009 (portrait) + REQ-010 (Speakeazy artifacts) — asset-blocked until Brandon supplies images. Unrelated to PRD 002.

## Key decisions (from audit review, 2026-06-09)
- Verification is **browser-only** (no test suite in repo).
- WO-001 B/F: build a **small essays data file** (option a) so essay counts + home "recent writing" derive from one source.
- Visual-direction divergences (CDN fonts; "Cloudflare" footer with no adapter) are **deferred** by owner — not in scope.

## Work Orders
| WO | Title | PRD | Build |
|---|---|---|---|
| WO-001 | Credibility quick wins (+ bugs E/F) | ✓ 001-*.xml | ✓ merged |
| WO-002 | Home fold (proof-forward) | ✓ 001-*.xml | ✓ merged |
| WO-003 | Writing index (editorial redesign) | ✓ 002-*.xml | ○ ready to build |
