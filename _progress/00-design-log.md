# Design Log — uxward.com

WDS strategic process log. Most recent at top.

## Phase status

| Phase | Status |
|---|---|
| A — Product Brief | ✓ complete (2026-06-08) |
| B — Trigger Map | ✓ complete (2026-06-08) |
| C — UX Scenarios | ✓ complete (2026-06-09) |
| D — UX Design | ⏳ in-progress (Freya — Home fold, handed off) |
| E — Development | ⏳ in-progress (Mimir — PRD 001 built; awaiting Freya review + merge) |

## Current

**Freya — UX Design (Design Loop).** Home page, the fold (audit finding #1, proof-below-fold).

Design Loop Status:
| Page | Status |
|---|---|
| Home (fold) | ✓S → B — spec + wireframe approved, synced; handed off via WO-002. Awaiting build (Mimir), then browser review (step 7) + token extraction (step 8). |

Direction: **A + C** — proof-forward deck (lead with Speakeazy, "live to real users since Jan 2026", inline link to the case) + reduce fold height (~78vh) so Block 02 crests. All open questions resolved & locked in spec.

Deliverables: `D-UX-Design/home.md` (spec), `D-UX-Design/wireframes/home.excalidraw` (wireframe), `E-Development/WO-002-home-fold.md` (handoff — batch with WO-001 E/F, same file).

**Open for Mimir:** `E-Development/WO-001-credibility-quick-wins.md` — now covers findings #2 (live link), #4 (home dead writing links), #5 (counts) + two home bugs (E: speakeazy.com→.pro, F: dead recent-writing). #3 portrait + #2 artifacts blocked on assets from Brandon. Coordinate WO-001 `index.astro` edits with the fold spec build. Wake with `/mimir`.

## Log

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
