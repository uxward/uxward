# WO-003 — Writing Index (typographic editorial redesign)
**From:** Freya (UX) → Mimir (Implementation)
**Created:** 2026-06-10
**Priority:** Normal — owner-initiated UX/UI elevation, not an audit fix
**Spec:** `D-UX-Design/writing-index.md` (read in full — it is the source of truth)
**Approved wireframe:** `D-UX-Design/wireframes/writing-index.png` (+ `.excalidraw` source)
**Scope:** A full redesign of one file — `src/pages/writing/index.astro`. Data and all other pages are untouched.

> **One file, one pass.** This WO rewrites the markup, styles, and script of `src/pages/writing/index.astro`. It does **not** touch `src/data/essays.js`, the individual essay pages, the home page's "recent writing" cards, or the global stylesheet — except the small site-wide hover-convention change in §B below, which is a separate, clearly-bounded edit.

---

## Why this matters

Pierce (tertiary persona — the voucher) lands on `/writing` from a single trusted essay and asks one question: *"is this a fluke, or a body of work?"* The current accordion/collapse list answers it like a blog CMS. The redesign answers it like a **serious archive's table of contents** — a calm, scannable column of titles with dotted leaders out to the date, grouped by argument. The owner also made a system decision (logged 2026-06-10): **red-on-hover is now the site-wide interaction convention.** Both land here.

This is a craft-and-feel redesign. The spec is detailed and deliberate; build to it, and lean on the spec for any nuance this WO compresses.

---

## §A — Writing Index redesign (`src/pages/writing/index.astro`)

### A1 — The row is the core move (`writing-index-row`)
Replace the current essay-card grid with a **table-of-contents row** per essay — an `<a>` linking to `/writing/<slug>`, laid out as:

```
The Service Design of Nest. ·············································· Q4 2014
```

- **Title** (left): `--font-serif`, the essay's `title` via `set:html` (preserves the `<em>` clause). `--ink` at rest.
- **Leader** (center): a flexible **dotted hairline** in `--rule`, baseline-aligned to the title's last line, filling the gap to the right-aligned quarter. Decorative — `aria-hidden`/pure CSS, never real text (so it's invisible to AT and to the filter). Exact dot technique (dotted border vs repeating-gradient) is your call against real Fraunces metrics — the wireframe approves the *pattern*, not the rendering.
- **Quarter** (right): `--font-mono`, ~10.5px, 0.22em tracking, uppercase, `--tertiary`, right-aligned (e.g. "Q4 2014"). **Kept** — the fresh Q1 2026 dates do positioning work.
- **Deck** (the reward): the essay's `deck` in quiet serif italic, **revealed on hover/focus only** (see A4). Mirror plain title + deck onto `data-title` / `data-deck` (via `plainTitle()`) for the filter, as today.
- Rows separated by `--rule` hairline; last row in a section drops its border.

### A2 — Three always-open sections (`writing-index-section` ×3)
Render `essaySections` + `essays` (already grouped, already newest-first within each group) as **always-open** sections — `leadership` (10) / `craft` (11) / `ai` (2):
- Left gutter carries a big quiet **§ numeral** (`§ 01 / 02 / 03`, mono, `--tertiary`) — the editorial indent.
- Section head: `<h2>` title (serif, weight 300, `opsz 96 / SOFT 30`) + the existing `descriptor` in quiet italic, then a `--rule` hairline.
- **Remove entirely:** the `<button class="section-toggle">`, `aria-expanded`, the `.glyph` toggle, `.collapsed` / `.section-collapsed-msg` / "Hidden. Click to expand." A section is always shown.
- The thin **On AI** (2 rows) renders at the same rhythm — no padding, no filler. (Growing it is an owner content task, not a build task.)

### A3 — Simplified filter (`writing-index-filter`)
Keep a minimal type-to-filter; **strip the section-focus machinery**:
- Matches `q` (lowercased, trimmed) against `data-title` + `data-deck`; `hidden` on non-matching rows. Empty query → all rows shown.
- Result line (`aria-live="polite"`): **count + clear only** — e.g. "— 4 essays · Clear —". No "X shown", no "Section: …" fragment, no multi-part status string.
- **Per-section empty state:** a section with zero matches under the current query shows a quiet italic "— No matches in {section title}. —" in place of its rows, while still rendering its head + § numeral.
- When the filter is active, the featured pull hides (this is the **existing** `body.is-filtered .featured { display:none }` behavior — keep it).
- **Remove:** `state.activeSection`, the `.collapsed` toggling, the `.section-toggle` click handlers, and the "Clear all" multi-part hint. The filter only ever *hides rows* and *reports a count*.

### A4 — Hover / focus interaction (red splash + deck reveal)
On hover **and** `:focus-visible` of a row:
1. Title color shifts **`--ink` → `--signature` red** (the owner-chosen splash; site-wide convention). **Color only** — no weight/style/position change, no WONK lean.
2. The **deck reveals** below the title.
3. 150ms (`--t-fast`) color transition.
- **No reflow:** reserve the deck's vertical space at rest — deck rendered but `opacity: 0`, fading to 1 on hover/focus. Under `prefers-reduced-motion: reduce`, swap opacity instantly (no fade).
- Keyboard parity is mandatory: focus produces the identical state (red title + deck reveal) **plus** the standard 2px `--signature` focus ring.

### A5 — Pivot (`writing-index-pivot`)
Keep the closing `/about` pivot (gutter "§ ↗", serif "More *about me →*", quiet italic why-line). Hover → **`--signature` red** (the new convention; was tertiary).

### A6 — Responsive ≤880px
- `--gutter-mark` collapses; § numerals move inline above each section title.
- Rows stack: title full-width; **quarter moves below the title** (mono, left-aligned).
- **Leader dots drop** (or render a single short hairline) — with the quarter no longer right-aligned on the same baseline, there's nothing to span. Desktop affordance only.
- Filter input full-width; result line left-aligns.

---

## §B — Site-wide hover convention (small, separate edit)
The owner promoted red-on-hover to the **standard link/title hover & focus color site-wide** (`visual-direction.md` updated). The home page currently hovers to `--tertiary` and now disagrees with `/writing`. Bring it in line **in this same pass** so the two pages are consistent:
- **File:** `src/pages/index.astro`. The case-card title hover (`.case:hover .title`), recent-essay hover (`.essay:hover .title`), and any link/title hover currently going to `--tertiary` → change to `--signature`.
- Keep this surgical: hover **color** only. Do not touch the fold, the red-bleed block, layout, or copy. The home page's *event red* (the §06 red-bleed) is unrelated and stays.

---

## Acceptance Criteria

**Writing index (`/writing`):**
- [ ] Each essay renders as a single TOC row: serif title (left) · dotted `--rule` leader · mono quarter (right, e.g. "Q4 2014").
- [ ] Leader dots are decorative only — not selectable text, not read by screen readers, not matched by the filter.
- [ ] Three sections (On Leadership 10 / On Experience Design 11 / On AI 2) render always-open with `§ 01/02/03` gutter numerals and their descriptors. **No** toggle button, glyph, `aria-expanded`, or collapse state exists in the DOM.
- [ ] Hover/focus on a row: title turns `--signature` red (color only — no weight/style/position change) **and** its deck becomes visible; reverts on mouse-out/blur.
- [ ] Deck reveal causes **no layout shift** — space is reserved (opacity fade), verified by hovering a mid-list row and confirming rows below don't move.
- [ ] Keyboard: tabbing to a row shows the identical red+deck state plus a 2px `--signature` focus ring; all rows reachable in DOM order.
- [ ] `prefers-reduced-motion: reduce`: the deck/colour change is an instant swap, no fade.
- [ ] Filter: typing hides non-matching rows; result line shows "— N essays · Clear —" (count + clear only, no "Section:"/"X shown" text); clearing restores all rows + the featured pull + focus to the input.
- [ ] A query matching nothing in a section shows "— No matches in {title}. —" under that section's still-visible head; a query matching nothing site-wide shows that message in all three sections and "— 0 essays · Clear —".
- [ ] ≤880px: rows stack, quarter sits below the title, leader dots are dropped, filter is full-width — no horizontal scroll at 375px.
- [ ] `npm run build` passes; the page renders identically to data (23 essays total, counts derive from `essays.js`).

**Site-wide hover (§B):**
- [ ] On the home page, case-card titles and recent-essay titles hover to `--signature` red (not tertiary), matching `/writing`.
- [ ] No other home-page change (fold, red-bleed, layout, copy all untouched).

---

## Do Not Change
- **The featured-essay pull on `/writing` — leave it EXACTLY as currently built.** Owner decision (2026-06-10). Do not restyle, relayout, re-copy, or "bring it in line." Keep its markup, its gutter "— Featured —" stamp + 3px `--signature` left border, its red eyebrow, the `<h2>` link, deck, pulled excerpt, "— Read the essay → —" affordance, **and** its hide-on-filter behavior. It is correct as is. (It remains the page's one persistent *event-red* mark — that's incidental, not a thing to adjust.)
- **`src/data/essays.js`** — data shape, contents, order, and helpers (`essaysNewestFirst`, `plainTitle`) are unchanged. The index reads from it; it does not edit it.
- **The masthead voice** — keep the H1 "Writing, *arranged by what it argues.*" and the intro ending **"Quarterly. Long-form. No newsletter to sign up for."** verbatim (the line that disarms Pierce).
- The three section titles/descriptors and their order (from `essaySections`).
- Individual essay pages, the home "recent writing" cards' data wiring, light/dark parity — verify red hover works in both modes.
- The red-rationing principle: red is the hover/focus splash and the featured event-mark — **never** a button fill, a divider, or body copy.

---

## Reference Files
- **Spec (read in full):** `D-UX-Design/writing-index.md`
- **Wireframe:** `D-UX-Design/wireframes/writing-index.png` (Option A — decks reveal on hover — is the approved one; Option B was rejected)
- **Visual direction (red registers, type axes):** `A-Product-Brief/visual-direction.md`
- **Design tokens:** `D-UX-Design/design-tokens.md`
- **Current build (what you're replacing):** `src/pages/writing/index.astro`
- **Persona context:** `B-Trigger-Map/04-persona-pierce-the-peer.md`, `C-UX-Scenarios/03-pierce-the-peer.md`
