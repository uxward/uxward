# Home — The Fold

**Route:** `/`
**Scenario:** See Shipped Proof, Fast — Vivian the VP (primary)
**Purpose:** Put one concrete piece of shipped proof in front of a skeptical, time-poor VP *within the first screen* — without raising her marketing/personal-brand alarm.

> **Scope of this loop:** Block 01 (the fold) only, plus the seam to Block 02. Blocks 02–06 are as-built and documented in the scenario; they are out of scope here. Build coordination with WO-001 (items A, E, F also edit `index.astro`).

**Approved wireframe:** `D-UX-Design/wireframes/home.excalidraw` (approved 2026-06-09).

---

## User Context

Vivian arrives via a recruiter's forwarded link, between two other things, skeptical and time-poor, hunting the disqualifying tell that lets her close the tab. Her #1 driving force (score 15) is *see shipped proof in the first 30 seconds*. She is **product-aware but evaluating a person** — she needs proof and plainness, not education or persuasion. Her #2 force is *plainspoken voice* (7.3): any whiff of self-promotion is itself a disqualifier. The fold must therefore deliver proof **as a stated fact, not a flex.**

Tessa and Pierce also pass the fold but are served well enough by it today; this change is tuned for Vivian and does not degrade their reads.

---

## Content & Actions

The fold keeps its current architecture — eyebrow, H1, deck, meta line, vertically centered — and changes **what the deck says** (Direction A) and **how tall the fold is** (Direction C).

### `home-fold-eyebrow` — unchanged
- "Brandon E. B. Ward — Senior design leadership"

### `home-fold-headline` (H1) — unchanged
- "I've spent 25 years standing up design practice from scratch. Now I do it in the *AI era.*"
- Rationale: already plainspoken; it is the positioning *claim*. The deck below now supplies the *proof* for it (Golden Circle: claim → immediate evidence).

### `home-fold-deck` — REWRITE (Direction A: proof-forward)
- **Was:** "Founder/builder at three startups, two agencies, ten years at Precocity, and now my own SaaS."
- **Now:** "I shipped **Speakeazy** solo — live to real users since January 2026. Before that: 25 years standing up design practice at three startups, two agencies, and a decade at Precocity."
- **Purpose:** Lead with the single most disqualification-proof fact (a real, dated, shipped product built solo) so it is the first thing *read*, not the first thing scrolled to. The credential list becomes supporting context, not the headline claim.
- **Serves:** shipped-proof hero (6.9), plainspoken voice (7.3) — it adds zero adjectives; it reorders existing truth.

### `home-fold-proof-link` — NEW (small, inline)
- The word **"Speakeazy"** in the deck is a link to `/work/speakeazy` (the hero case).
- **Purpose:** Give Vivian a one-click path straight to the proof she came to verify, serving low-friction scan (6.5). Styled as a quiet inline underline in the body/serif treatment — not a button, not a CTA.
- `aria-label`: "Read the Speakeazy case study"

### `home-fold-meta` — unchanged
- "— Currently considering senior design leadership · Dallas, TX —"

---

## Behavior

### Direction C — let the proof peek
- **Was:** `.fold { min-height: 88vh; }` — the fold owns the entire first screen; Block 02 (where "live to real users" lives) begins fully below it.
- **Now:** reduce the fold's vertical footprint so the top of Block 02 **crests into view** at initial load — the "— Selected work —" eyebrow and the Speakeazy "Hero of the slate" badge are at least partially visible without scrolling on a common laptop viewport.
- **Implementation note (for wireframe/build to validate, not a fixed value):** start at `min-height: 78vh` and reduce the centered fold's bottom padding; the *target* is the crest being visible, not a specific vh number — verify in browser at ~800–900px viewport height.
- **Purpose:** The proof anchor in the deck answers "is he real?"; the cresting Block 02 answers "and there's evidence right below" — converting the scroll from a leap of faith into a confirmed next step. Serves low-friction scan (6.5) and shipped-proof hero (6.9) together.

---

## States
Static marketing page — no empty/loading/error states. Responsive only:
- **≤900px:** fold stacks as today; the longer deck wraps. Confirm the deck stays ≤4 lines on a 375px-wide phone so the meta line and the Block 02 crest aren't pushed too far down.

---

## Success
Vivian reads one concrete, dated, shipped-solo proof point *in the fold itself*, sees evidence cresting below, and either clicks "Speakeazy" straight to the case or scrolls with her skepticism already softening — instead of scrolling past a pure claim hoping for proof. The disqualifying tell she came for isn't on the first screen.

---

## Resolved Decisions (approved 2026-06-09)
1. **Inline "Speakeazy" link in the deck** — KEEP (links to `/work/speakeazy`).
2. **Deck length** — the longer 3-line deck is fine; no trim.
3. **SEO/meta** — no change to `<title>`/meta description; H1 remains the single H1.
4. **Fold height (Direction C)** — target ~78vh; exact value validated at browser review so the Block 02 crest lands correctly across laptop viewport heights.

---

_Language: English only (site is single-language)._
