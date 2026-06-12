# Design Log — uxward.com

WDS strategic process log. Most recent at top.

## Phase status

| Phase | Status |
|---|---|
| A — Product Brief | ✓ complete (2026-06-08) |
| B — Trigger Map | ✓ complete (2026-06-08) |
| C — UX Scenarios | ✓ complete (2026-06-09) |
| D — UX Design | ✓ complete (2026-06-10) — all scenario pages designed then built; Home fold formally specced (reviewed + tokens), rest designed-in-build |
| E — Development | ✓ PRD 001 + PRD 002 (Writing index) merged to master. REQ-009 portrait done (2026-06-11). REQ-010 (Speakeazy artifacts) still asset-blocked. |

## Current

**Freya — UX Design (refinement): gutter-marker baseline alignment (2026-06-12).** Owner flagged the left-gutter section markers (`§ NN`, `— About —`, `— Featured —`) drifting ~10–12px below the content label they pair with — a near-miss that reads as a mistake, not an intentional offset. Diagnosis: `.grid > .marker` carried `padding-top: 10px` (writing featured `.featured-mark`: 12px) while the same-size mono eyebrow/label starts at row-top (0). Fix: zeroed the global marker nudge (baseline-aligns every label/eyebrow context at once — case studies `§NN`↔`NN — Section —`, About `§00`↔`— About —`, meta-strip `§✻`↔field labels, back-home bars) and **preserved the offset only on `.title-block .marker`** (case-study hero, where `§00` sits beside the 132px case number with no label to align to). `.featured-mark` → 0. Verified all five contexts via Playwright screenshots. Featured-marker wrap (was: `— Featured —` broke at the dashes in the 100px gutter, stacking them top/bottom) — **resolved by owner: dropped the dashes**, leaving a single-line `Featured` red tab. (Widening the gutter was rejected — all page grids share `--gutter-mark: 100px`, so it would have misaligned the featured content's left edge.) **Follow-up (same day):** zeroing the global nudge over-corrected the back-home/breadcrumb bars (`§ ↩` ↔ `— Back home`/`— Back to all work`) — their label is an inline link in an 18px-strut line box, so it sits lower than a block eyebrow and the old 10px was compensating. Fixed with `.grid:has(> div > a:only-child) { align-items: baseline }` — baseline-aligns the marker to the link in every bar (work index, case studies, about, contact, colophon, writing) without touching eyebrow sections. Verified via screenshots.

**Freya — UX Design (Design Loop): Case-study Product-Preview hero (pilot on Speakeazy).** New pattern — promote design proof into the case-study fold instead of burying screenshots at the bottom of the scroll. Extends Home's shipped *proof-forward* thesis one level down. Decisions: **Preview band** layout (full-width framed still under the deck, above the meta-strip, in the content column); **single still** clickable to the existing lightbox (not the carousel); money shot = `projects-6.11.26.png` (library cover-art grid — strongest glance value). Two assets / two jobs: hero still = the *lede*; §04 carousel = the *build story* (unchanged). Built on Speakeazy (`hero-preview` reuses the `.artifact .frame` treatment + lightbox binding). **Rolled out to all cases (2026-06-12):** insurco, porte, precocity, autoco each get a `hero-preview` band under the deck — **placeholder frames for now** (owner supplying real hero shots later), matching each page's existing 16:9 placeholder-frame convention. Note: those four pages still carry the original `.artifact .frame` (aspect-ratio 16:9, no lightbox JS) — when real images land, port Speakeazy's frame treatment (natural size + lightbox) for parity, or accept the simpler 16:9 framed still.

**Freya — UX Design (Design Loop): Writing Index redesign.** Replacing the accordion/collapse list with a typographic editorial index (table-of-contents leader-dots pattern). Spec written; awaiting owner read before wireframe.

**System decision: red-on-hover convention (2026-06-10 → universal 2026-06-11).** Owner promoted red from "never a hover state" to the standard hover/focus colour, then extended it to **every** hover that changes text colour site-wide (links, nav, footer, breadcrumbs, back-links, controls) — one-property swap across global.css + all pages. `visual-direction.md` / `design-tokens.md` updated. Red now has two registers: *event red* (rationed full-volume placements) and *interaction red* (universal transient hover splash). Home-page follow-up resolved as part of the universal sweep.

Design Loop Status:
| Page | Status |
|---|---|
| Writing Index | ✓ complete + **merged to master** (R+T). PRD 002 REQ-001..007: leader-dots TOC, Topic/Date toggle (persisted), controls band below featured, featured stays visible while filtering, count-only filter (× only), placeholder fade, filter+view motion. 21/21 browser checks; tokens extracted. |
| Home (fold) | ✓ complete. Built (REQ-007), browser-reviewed, tokens extracted. Direction C (REQ-008) descoped; finding #1 delivered by the proof-forward deck. |
| About · Colophon · Contact · Work (index + 6 cases) | ✓ designed-in-build — live and accepted as-built; no separate spec file. |

Direction shipped: **A** — proof-forward deck (leads with Speakeazy "live to real users since Jan 2026", inline link to the case). **C descoped** (H1 drives fold height; not worth altering the signature H1).

Step-7 review: deck/link/H1/voice all match spec; inline link is ink (not red), navigates to /work/speakeazy; mobile wraps clean. `/writing` refactor (REQ-002) spot-checked — renders identically, count fixed, search/collapse work.

Deliverables: `D-UX-Design/home.md` (spec), `wireframes/home.excalidraw` + `home.png`, `design-tokens.md` (registry seeded from global.css — 0 new tokens from the fold).

**Still open (assets from Brandon):** 3 Speakeazy artifact images → Mimir REQ-010. *(About portrait REQ-009 done 2026-06-11.)*

## Log

### 2026-06-11 — Universal red hover + writing-index back-home link — Freya
Two site-consistency changes merged to master. (1) **Universal red hover:** owner extended the red-hover convention to *every* colour-changing hover site-wide — swapped all `:hover` tertiary/ink colours to `--signature` across global.css + 35 pages (resting styles untouched); 6/6 hover spots browser-verified; `visual-direction.md` + `design-tokens.md` synced. Note: a `/work` case now reddens both title and number on hover (heavier red — flagged, easy to dial back). (2) **Back-home link:** the writing index was the only top-level page missing the `§ ↩ — Back home` bar that about/contact/colophon/work-index carry; added with matching markup/styling.

### 2026-06-11 — Writing index merged + About portrait — Freya/Mimir
PRD 002 (Writing index editorial redesign) closed the full loop — built, step-7 reviewed (21/21 browser checks across desktop/mobile/light/dark/keyboard/reduced-motion), step-8 tokens extracted — and **merged to master** (`build/writing-index`). Final feature set: leader-dots TOC, Topic/Date view toggle (persisted in localStorage, cross-fade), controls band below the featured pull, featured stays visible while filtering, count-only filter with in-field ×, placeholder fade, and filter fade+reflow motion. New token-registry patterns: leader-dots-row, view-toggle, controls-band, topic-tag, list-filter-motion (+ t-quick 120ms candidate).

**REQ-009 unblocked:** Brandon supplied the About portrait (`public/images/BrandonEBWard-006.jpg`, 1200×1712). Wired into About §01 in a 1px rule frame at natural aspect; placeholder removed; merged (`build/about-portrait`). Only REQ-010 (Speakeazy artifact images) remains asset-blocked.

### 2026-06-10 — UX Design: Writing Index redesign + red-hover system decision — Freya
Owner asked for a UX/UI elevation pass; took the Writing page through the full Design Loop. Replaced the accordion/collapse list with a **typographic editorial index** (table-of-contents leader-dots: title · dotted leader · quarter, three always-open argued sections with § numerals). Discuss → 3 decisions locked (topic groups / keep quarter / minimal filter) → spec (`D-UX-Design/writing-index.md`) → wireframe (`wireframes/writing-index.png`, two deck options) → approved: **Option A** (decks reveal on hover/focus, space reserved, reduced-motion safe).

**System decision:** owner promoted **red-on-hover to the site-wide convention** (was forbidden — "never a hover state"). `visual-direction.md` updated: red now has two registers — *event red* (rationed, persistent, full-volume) vs *interaction red* (transient hover/focus splash). Writing rows + pivot hover ink→signature; home page to follow (bundled into WO-003 §B).

**Featured pull:** owner directed it be left **exactly as built** — out of scope, do-not-touch (stated 3× in spec + WO).

Handoff: **WO-003** written (`E-Development/WO-003-writing-index.md`) — full redesign of `src/pages/writing/index.astro` + small site-wide hover edit on `index.astro`; `essays.js` and masthead voice untouched. Open (non-blocking): exact leader-dot rendering (build judgment); "On AI" only 2 essays (owner content gap). Next: wake Mimir to build.

### 2026-06-09 — Build: PRD 001 (credibility quick wins + home fold) — Mimir
Tech audit → master PRD → feature PRD 001 → build loop on branch `build/credibility-and-fold` (7 commits, one per requirement, browser/build-verified).

Implemented & verified: REQ-001 essays.js data file (new single source of truth, mirrors slate.js) · REQ-002 writing index renders list+count from it ("23 essays", was "Thirty") · REQ-003 work pivot count ("23 pieces", was "Twelve") · REQ-004 home recent-writing now 3 newest real essays (was 3 dead links) · REQ-005 speakeazy.com→.pro · REQ-006 Speakeazy case live links (meta strip + outcomes) · REQ-007 proof-forward fold deck with inline Speakeazy link.

REQ-008 (fold-height crest, Direction C) DESCOPED by owner: Playwright measurement showed the H1 drives the fold height (767–879px across widths), so cresting Block 02 would require altering the signature H1 — and REQ-007 already puts shipped proof in the fold (finding #1's core). Asset-blocked, not built: REQ-009 portrait, REQ-010 Speakeazy artifact images (await images from Brandon).

Awaiting: Freya step-7 browser review, then merge `build/credibility-and-fold` → master.

### 2026-06-09 — UX Scenarios suite (retroactive / Option A) — Freya
Brownfield: site fully built before any UX layer existed, so scenarios document the as-built sunshine paths and audit build-vs-strategy as a byproduct. Three scenarios, one per archetype, all linear happy paths through existing pages.

Deliverables:
- `C-UX-Scenarios/00-ux-scenarios.md` (index, 8 unique pages inventoried)
- `01-vivian-the-vp.md` — Home → Speakeazy → About → Contact
- `02-tessa-the-talent-partner.md` — Home → Work → Contact → forward
- `03-pierce-the-peer.md` — Essay → Writing → About/Colophon → vouch
- `audit-notes.md` — 5 findings, kept separate so scenarios stay pure sunshine-path

Audit findings (for Freya/UX Design or a Mimir WO): (1) proof-below-fold — Vivian's shipped-proof payoff sits below the fold and her doubts clear only on About; (2) Speakeazy claims "live" but has placeholder artifacts and no link to Speakeazy.pro; (3) portrait still a placeholder — no headshot asset for Tessa to forward; (4) verification gap hurts Tessa most (reputation risk) + home "recent writing" dead links; (5) count inflation — "Thirty essays" vs 23 actual vs "Twelve pieces," hardcoded counts.

### 2026-06-08 — Product Brief suite (brownfield extraction) — Saga
Brownfield entry: existing Astro site, no prior strategic foundation. Ran condensed discovery (Option A) — extracted the brief from the live site plus the user-supplied `uxward-design-strategy-brief.md`.

Key decision: **Speakeazy is the hero of the slate**, not Precocity. The supplied strategy brief is stale on this point; the as-built site is authoritative. Precocity is a complete but orphaned case (missing from `src/data/slate.js`) and should be wired in as the deepest supporting case.

Deliverables written:
- `A-Product-Brief/product-brief.md`
- `A-Product-Brief/content-language.md`
- `A-Product-Brief/visual-direction.md`

Divergences logged for later cleanup (not strategy work): orphaned Precocity case, slate at 4 vs. planned 5–7, colophon palette hexes don't match `global.css`, homepage "recent writing" links point to not-yet-existing essays.

### 2026-06-08 — Trigger Map suite — Saga
Five workshops. Vision: Brandon is the proven design leader you bring into any vertical. Three goals (land the right role / make the case undeniable / be sought) × three SMART objectives each. Three personas: Vivian the VP (primary decision-maker), Tessa the Talent Partner (secondary amplifier), Pierce the Peer (tertiary voucher).

Key read: Vivian owns the entire 14–15 force tier, positive and negative equally — a trust-by-disqualification audience. Top features by impact: plainspoken voice (7.3), shipped-proof hero (6.9), low-friction scan (6.5), Speakeazy hero case (6.4). Gaps flagged for Freya: social proof can be displayed but not manufactured (slow-burn via writing); AI-recency proof leans entirely on Speakeazy (FORGE not yet a case).

Deliverables: `00-trigger-map.md`, `01-business-goals.md`, `02/03/04-persona-*.md`, `feature-impact.md`.
