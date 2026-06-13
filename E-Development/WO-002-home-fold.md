# WO-002 — Home Fold (proof-forward)
**From:** Freya (UX) → Mimir (Implementation)
**Created:** 2026-06-09
**Priority:** Normal — highest-impact audit finding (#1), but a small change
**Spec:** `D-UX-Design/home.md`
**Approved wireframe:** `D-UX-Design/wireframes/home.excalidraw`
**Addresses audit finding:** #1 (proof-below-fold) — see `C-UX-Scenarios/audit-notes.md`

> **Coordinate with WO-001.** Items A is the Speakeazy case; WO-001 items **E** (speakeazy.com→.pro) and **F** (dead recent-writing links) also edit `src/pages/index.astro`. Implement WO-002 and WO-001 E/F **in the same pass** on `index.astro` to avoid conflicts.

---

## Why this matters

Vivian (primary persona) lands on the fold skeptical and time-poor; her #1 driving force (score 15) is *see shipped proof in the first 30 seconds*. The fold today is 100% assertion ("25 years…") — the proof ("live to real users since January 2026") sits in Block 02, below an 88vh fold. This WO moves proof into the first screen **as a fact, not a flex**, preserving the plainspoken voice (force #2, 7.3) that the whole site's credibility rests on. Two changes, both in `src/pages/index.astro` Block 01.

---

## Changes to implement

### Change 1 — Proof-forward deck (copy + one inline link)
**File:** `src/pages/index.astro`, Block 01 fold, `<p class="deck">`

| | Text |
|---|---|
| **Was** | `Founder/builder at four startups, two agencies, ten years at Precocity, and now my own SaaS.` |
| **Now** | `I shipped <a href="/work/speakeazy">Speakeazy</a> solo — live to real users since January 2026. Before that: 25 years standing up design practice at four startups, two agencies, and a decade at Precocity.` |

- "Speakeazy" is an inline link to `/work/speakeazy`. Style it as a quiet serif inline link (underline, `text-underline-offset`), consistent with other inline links in the body voice — **not** a button, not red.
- `aria-label` on the link: `Read the Speakeazy case study`.
- H1, eyebrow, and meta line are **unchanged**.

### Change 2 — Reduce fold height so Block 02 crests (Direction C)
**File:** `src/pages/index.astro`, `.fold { min-height: 88vh; }`

- Reduce so the top of Block 02 (`— Selected work —` eyebrow + the Speakeazy "Hero of the slate" card) is at least partially visible at initial load on a common laptop viewport.
- **Start point:** `min-height: 78vh` and trim the fold's centered bottom padding as needed. The target is the *crest being visible*, not a specific number — Freya will validate the exact value at browser review (step 7).

---

## Acceptance Criteria
- [ ] The fold deck reads the new proof-forward copy verbatim (Change 1 table, "Now" row).
- [ ] "Speakeazy" in the deck is a working link to `/work/speakeazy` with the specified `aria-label`, styled as a quiet inline link (not a button, not red).
- [ ] On a ~800–900px-tall viewport, the `— Selected work —` eyebrow and the Speakeazy "Hero of the slate" card are at least partially visible without scrolling.
- [ ] H1, eyebrow, and meta line are unchanged.
- [ ] No regression at ≤900px: the longer deck wraps cleanly and the meta line + Block 02 crest are not pushed off a 375px-wide phone's first screen awkwardly (deck ≤ ~4 lines on mobile).
- [ ] No animation added (visual direction: the fold is composed in stasis).

---

## Do Not Change
- The H1, eyebrow, and meta line copy and styling.
- Blocks 02–06 content and structure (except WO-001 E/F, batched separately).
- The red-rationing rule — do not introduce red into the fold.
- Light/dark mode parity — verify the new link works in both.

---

## Reference Files
- Spec: `D-UX-Design/home.md`
- Wireframe: `D-UX-Design/wireframes/home.excalidraw`
- Visual direction: `A-Product-Brief/visual-direction.md`
- Related: `E-Development/WO-001-credibility-quick-wins.md` (items E, F — same file)
