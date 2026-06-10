# Design Log — uxward.com

WDS strategic process log. Most recent at top.

## Phase status

| Phase | Status |
|---|---|
| A — Product Brief | ✓ complete (2026-06-08) |
| B — Trigger Map | ✓ complete (2026-06-08) |
| C — UX Scenarios | ✓ complete (2026-06-09) |
| D — UX Design | ⏳ in-progress (Freya — Home fold) |

## Current

**Freya — UX Design (Design Loop).** Home page, the fold (audit finding #1, proof-below-fold).

Design Loop Status:
| Page | Status |
|---|---|
| Home (fold) | S — spec written (`D-UX-Design/home.md`), awaiting review → next: wireframe |

Direction chosen: **A + C** — proof-forward deck (lead with Speakeazy, "live to real users since Jan 2026") + reduce fold height so Block 02 crests into view. Inline "Speakeazy" link to the case included (open question).

**Open for Mimir:** `E-Development/WO-001-credibility-quick-wins.md` — now covers findings #2 (live link), #4 (home dead writing links), #5 (counts) + two home bugs (E: speakeazy.com→.pro, F: dead recent-writing). #3 portrait + #2 artifacts blocked on assets from Brandon. Coordinate WO-001 `index.astro` edits with the fold spec build. Wake with `/mimir`.

## Log

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
