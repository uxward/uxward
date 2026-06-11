# Mimir State — uxward.com

_Most recent at top. Updated after each task._

## Current
- **Phase:** PRD 002 (Writing index) **merged to master** — REQ-001..007 implemented + step-7 reviewed (21/21 final-suite checks) + step-8 tokens extracted. PRD 001 + 002 both shipped.
- **REQ-009 (About portrait): DONE + merged** (2026-06-11) — Brandon supplied `public/images/BrandonEBWard-006.jpg` (1200×1712); wired into About §01, placeholder removed.
- **Only remaining blocker:** REQ-010 (3 Speakeazy artifact images) — asset-blocked until Brandon supplies them.
- **Standing flag:** the GLOBAL `a:hover` in global.css is still `--tertiary` — only *title* hovers were promoted to red (per PRD 002 scope). Going fully literal "site-wide red" would change the global rule (affects nav/footer/body links). Left as a deliberate decision point.

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
