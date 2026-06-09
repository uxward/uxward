# Design Log — uxward.com

WDS strategic process log. Most recent at top.

## Phase status

| Phase | Status |
|---|---|
| A — Product Brief | ✓ complete (2026-06-08) |
| B — Trigger Map | ✓ complete (2026-06-08) |

## Current

_(empty — Trigger Map complete; ready for Freya / UX Scenarios when desired)_

## Log

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
