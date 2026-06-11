# Mimir State — uxward.com

_Most recent at top. Updated after each task._

## Current
- **Phase:** PRD 002 written (`002-writing-index.xml`), status=planned. Ready to build. PRD 001 implemented + merged to master (`6a30c19`).
- **Active PRD:** 002 — Writing index editorial redesign (WO-003). 5 interface requirements:
  - REQ-001 editorial index structure (leader-dots rows + always-open sections; remove accordion)
  - REQ-002 row hover/focus (red title + deck reveal, no reflow, keyboard, reduced-motion)
  - REQ-003 simplified filter (count + clear, per-section empty)
  - REQ-004 responsive ≤880px
  - REQ-005 site-wide hover convention (home page titles → red)
- **Next task:** Start build loop on a new branch `build/writing-index`. One commit per REQ, browser-verify each before moving on.
- **Hard do-not-touch (WO-003):** the featured pull on /writing (leave exactly as built); `src/data/essays.js`; the masthead voice ("No newsletter to sign up for.").
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
