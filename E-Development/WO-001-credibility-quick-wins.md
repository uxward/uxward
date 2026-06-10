# WO-001 — Credibility Quick Wins
**From:** Freya (UX) → Mimir (Implementation)
**Created:** 2026-06-09
**Priority:** Normal (cheap fixes, real credibility leaks)
**Covers audit findings:** #2 (partial), #3, #4, #5 + two home-page bugs — see `C-UX-Scenarios/audit-notes.md`
**Grounded in scenarios:** all three (`C-UX-Scenarios/00-ux-scenarios.md`)

---

## Why this matters

The retroactive scenario walk found the as-built site is strategically sound but leaks credibility in a few small, concrete places. Each leak maps to a Trigger Map driving force the site is supposed to serve. None of these are design problems — they're build accuracy problems. Three of them are cheap to fix and worth fixing before any larger design pass.

This is a Work Order, not a PRD. Take it, confirm the technical approach, and write the PRD.

---

## Scope: implement now (code only — unblocked)

### A. Speakeazy case — make "live" verifiable  *(finding #2, the load-bearing case)*
**File:** `src/pages/work/speakeazy.astro`
**Problem:** The case claims "launched to real users in January 2026" but a skeptical reader (Vivian) and a reputation-conscious recruiter (Tessa) have nowhere to click to verify it. The product is live at **speakeazy.pro** and the page never links to it.
**Do:** Add a visible, real link to `https://speakeazy.pro` on the case. Two placements, both wanted:
  1. The §00 meta strip "Client" cell currently reads `Self-initiated (Speakeazy.pro)` — make "Speakeazy.pro" an actual anchor to `https://speakeazy.pro` (`target="_blank" rel="noopener"`).
  2. Add a clear inline CTA in the §05 Outcomes block (the "From nothing to live, solo" section) — e.g. a link styled like the existing white-on-signature treatment: "— See it live · speakeazy.pro →".
**Force served:** Speakeazy hero case (6.4); AI-recency proof leans entirely on this case.

### B. Fix the inflated / inconsistent counts  *(finding #5, Pierce's tripwire)*
**Problem:** Three different essay counts exist on the site, none matching the real total of **23** published essays:
  - `src/pages/writing/index.astro` line ~410 — header eyebrow reads `— Writing · Thirty essays · Quarterly —`
  - `src/pages/work/index.astro` line ~523 — pivot card `why` reads `Twelve pieces and counting.`
**Do:** Make both counts accurate. Preferred: derive the count programmatically so it can't drift again. The essays in `writing/index.astro` are hand-authored `<a class="essay">` elements, not a data array, so the pragmatic options are:
  1. **Best:** lift the essay list into a small data array (like `src/data/slate.js` does for cases) and render + count from it; or
  2. **Minimum:** correct the literals to the true count (23) and remove the second hardcoded number on the Work pivot (or make it reference the same source).
Confirm which approach in the PRD. The archive count on `/work` is already dynamic (`{archive.length}`) — match that pattern.
**Force served:** neutralizes *amplifying self-promotion* (−13), the force that makes a careful reader withhold the share.

### E. Home page — wrong Speakeazy domain  *(bug, intersects finding #2)*
**File:** `src/pages/index.astro` (Block 03 "Currently building", Speakeazy row)
**Problem:** The "Live →" link points to `https://speakeazy.com`, but the live product is at **speakeazy.pro** (confirmed on the case page meta strip). The one outbound link to the live product on the home page goes to the wrong domain.
**Do:** Change the href to `https://speakeazy.pro`. Standardize on `.pro` everywhere it appears site-wide (cross-check with item A).

### F. Home page — dead "recent writing" links  *(finding #4)*
**File:** `src/pages/index.astro` (Block 04 "Recent writing")
**Problem:** All three featured essays link to pages that do not exist or are placeholders:
  - `/writing/case-against-design-systems` — no such page
  - two more point at the bare `/writing` index, and their titles/decks/dates do not match any published essay
**Do:** Replace the three cards with three real, published essays — correct slugs, real titles, real decks, real quarters. Suggested (the most recent): `the-truth-about-simplicity-why-clarity-beats-the-buzzword` (Q1 2026), `only-you-can-prevent-dumpster-fires` (Q1 2026), and one Q1 2023 "On AI" essay. Confirm the exact three with Brandon. If the essay data is lifted into an array for item B, derive these three from it (newest-first) so they can't go stale.

---

## Scope: blocked on assets (track, do not attempt without files)

### C. Portrait  *(finding #3)*
**File:** `src/pages/about.astro` (§01 portrait placeholder, "to be commissioned"); also reused conceptually on the case/contact pages.
**Blocked on:** an actual portrait photograph from Brandon. Tessa (the amplifier) has no headshot to attach to a forward, and About — the page meant to humanize — shows an empty frame. **Cannot be implemented until the image exists.** When delivered, drop it into the existing `.portrait` frame.

### D. Speakeazy artifact images  *(finding #2, remainder)*
**File:** `src/pages/work/speakeazy.astro` §04 — three placeholder artifact frames (`Artifact 01/02/03`, "to be commissioned").
**Blocked on:** real screenshots (ChatGPT PoC, the over-architected React build / Vercel error, the live Next.js app). **Cannot be implemented until the images exist.** The live link (A) is the unblocked substitute that lets a skeptic verify in the meantime.

---

## Acceptance Criteria

A — Speakeazy live link:
- [ ] "Speakeazy.pro" in the §00 meta strip Client cell is a working anchor to `https://speakeazy.pro`, opens in a new tab with `rel="noopener"`.
- [ ] The §05 Outcomes block contains a visible link to `https://speakeazy.pro` legible against the signature-color background.
- [ ] No layout regression in the meta strip or outcomes section at desktop and ≤720px.

E — Home Speakeazy domain:
- [ ] The Block 03 Speakeazy "Live →" link points to `https://speakeazy.pro` (not `.com`).
- [ ] No occurrence of `speakeazy.com` remains anywhere in the codebase.

F — Home recent-writing links:
- [ ] All three Block 04 "Recent writing" cards link to existing essay pages (no 404s).
- [ ] Each card's title, deck, and quarter match the real essay it links to.

B — Counts:
- [ ] `/writing` no longer states "Thirty essays"; the displayed count equals the actual number of published essays (currently 23).
- [ ] `/work` pivot card no longer states "Twelve pieces"; any essay count shown matches `/writing`.
- [ ] If implemented dynamically, adding/removing an essay updates every count with no further edits. (State in the PRD if you went with the literal-correction fallback instead.)

---

## Do Not Change
- The Speakeazy case copy, structure, section order, and styling — only add the links in A.
- The essay content, ordering, section grouping, and the filter/search behavior on `/writing` — B is about the count only.
- The `/work` slate and archive rendering (already dynamic) — touch only the hardcoded pivot-card number.
- Do not invent or AI-generate the portrait or artifact images (C, D). Leave the placeholders until real assets are supplied.

---

## Related, NOT in this WO
- Finding #1 (proof-below-fold on the home page) is a **design** change, not a build fix — it goes through `/UX` (the home fold). Spec: `D-UX-Design/home.md`. Note: that design also touches the fold copy; coordinate so A+F edits to `index.astro` don't collide with the fold spec implementation.
