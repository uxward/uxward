# Writing Index

**Route:** `/writing`
**Scenario:** Find an Idea Worth Sharing — Pierce the Peer (tertiary archetype)
**Purpose:** Make `/writing` read as a *body of work* — a serious archive's table of contents, not a content-marketing funnel — so a guarded, self-promotion-allergic peer registers real depth and feels safe sharing the idea (and eventually vouching for the person).

> **Scope of this loop:** A full redesign of `src/pages/writing/index.astro`. Replaces the collapsible-accordion + section-focus machinery with a typographic editorial index. Keeps the featured-essay pull (**left exactly as built — out of scope**), the inline filter (simplified), the three topic groups, the per-row quarter date, and the `/about` pivot. Out of scope: the individual essay pages, the `essays.js` data shape, and the home page's "recent writing" cards (which read the same data via `essaysNewestFirst`). Content growth of the thin "On AI" section is an owner content task, not a layout task — flagged below, not solved here.

---

## User Context

Pierce does **not** arrive here cold. He lands first *inside* a single essay — one a person he trusts forwarded — and only then follows it back to the index to see whether there's more behind it. So `/writing` is read as the second page, the "is this a fluke or a body of work?" check. He is curious but guarded, allergic to self-promotion, and primed to skim past anything derivative. The page must read like a book's table of contents or a *New Yorker* archive — a serious face, deliberately set — not a blog with a subscribe gate.

Two lines do the disarming work and must survive the redesign verbatim:
- The H1 voice — **"Writing, *arranged by what it argues.*"** — signals the archive is organized by *argument*, not by recency-feed or SEO tag. It frames the writer as someone with positions, not posts.
- The intro's closing — **"Quarterly. Long-form. No newsletter to sign up for."** — is **the single most important line on the page for Pierce.** It is an explicit refusal of the funnel. It tells him: this person writes to think, not to capture. Do not soften, trim, or move it; it is load-bearing.

What he should feel leaving: registered depth, respect for the thinking, and enough trust to share the idea and — later — the person. Vivian and Tessa also pass through `/writing`; the editorial-index format serves them no worse than today (it is, if anything, faster to scan).

---

## Content & Actions

The page is one column with the standard `--gutter-mark` (100px) editorial gutter on the left carrying the § markers. Reading measure stays within the container. The core move is the **row as a line in a table of contents**: serif title left, hairline dotted leader across, mono quarter right.

### `writing-index-head`
The masthead. Eyebrow + H1 + intro + the filter control.

- **Eyebrow** (`--font-mono`, ~11px, 0.22em tracking, uppercase, `--tertiary`): "— Writing · 23 essays · Quarterly —". The count derives from `essays.length`; it doubles as honest scale (a real archive, not three posts).
- **H1** (`--font-serif`, weight 300, display `opsz 144 / SOFT 30`, the `<em>` clause in italic `SOFT 100 / WONK 1`): **"Writing, *arranged by what it argues.*"** — UNCHANGED. The WONK italic on "arranged by what it argues" is sanctioned display-italic use.
- **Intro** (`--font-serif`, italic, `--body`, `opsz 36 / SOFT 80 / WONK 1`, measure ≤560px): preserved, ending on **"Quarterly. Long-form. No newsletter to sign up for."** See User Context — this is the line that disarms Pierce.
- **The filter** lives at the right/end of the head (see `writing-index-filter` below), quiet and secondary — a tool, not a hero.

### `writing-index-filter` (within the head)
A minimal type-to-filter, deliberately under-designed.

- A single text input under a hairline `--ink` rule, with a mono "— Find —" label and a "×" clear control (`--tertiary`, → `--ink` on hover). Placeholder in quiet italic `--tertiary`.
- It **filters across each essay's title + deck text** and **hides** non-matching `a.essay` rows. Nothing collapses, nothing animates open/shut.
- A small mono result line (`aria-live="polite"`) shows the count of matching essays and a clear control — e.g. "— 4 essays · Clear —". No "X shown / Y hidden", no "Section:" focus state, no multi-part status string. Count + clear, nothing more.
- When the filter is active, the featured pull (`writing-index-featured`) hides — the user is now in "scan the archive" mode, and a single highlighted essay would be noise.

### `writing-index-featured` — UNCHANGED, out of scope (owner decision, 2026-06-10)
The featured-essay pull stays **exactly as currently built** in `src/pages/writing/index.astro`. The redesign does **not** touch it — keep its markup, layout (gutter "— Featured —" stamp with 3px `--signature` left border, red eyebrow, `<h2>` title link, deck, pulled excerpt with `--rule` left border, "— Read the essay → —" affordance), and its existing behavior (hides when the filter is active). It remains the page's one persistent **event-red** placement; that is incidental to leaving it alone, not a new instruction. Do not restyle, relayout, or "bring it in line" — it is correct as is.

### `writing-index-section` ×3
The three topic groups, rendered as **always-open** sections. Never collapsible. Order and contents come straight from `essaySections` + `essays` (already grouped, already newest-first within each group):

| § | Section key | Title | Rows |
|---|---|---|---|
| § 01 | `leadership` | On Leadership | 10 |
| § 02 | `craft` | On Experience Design | 11 |
| § 03 | `ai` | On AI | 2 |

- Each section's left gutter carries a **big quiet § numeral** — `§ 01` / `§ 02` / `§ 03` (`--font-mono`, `--tertiary`, top-aligned to the section title). These are the editorial indent; they replace the old toggle glyph entirely.
- Section head: `<h2>` title (`--font-serif`, weight 300, `opsz 96 / SOFT 30`) + the existing `descriptor` from `essaySections` in quiet italic (`--tertiary`, `opsz 24 / SOFT 80 / WONK 1`), followed by a hairline `--rule` separating head from rows.
- **No `<button>`, no `aria-expanded`, no toggle glyph, no `.collapsed` / `.section-collapsed-msg` / "Hidden, click to expand" string.** A section is a section; it is always shown.
- The thin **On AI** section (2 rows) is presented at the same rhythm as the others — same head, same row treatment, no padding, no filler, no apology. The editorial-index format reads a 2-row section as legitimately as an 11-row one (a table of contents does not balance its chapters). *Content note for the owner: the right fix for "On AI" feeling thin is more essays, not layout — see Open Questions / Success.*

### `writing-index-row` (the core pattern, repeated per essay)
Each essay is **one row** — an `<a class="essay">` linking to `/writing/<slug>` — laid out as a table-of-contents line:

```
The Service Design of Nest. ·············································· Q4 2014
```

- **Title** (left): `--font-serif`, the essay's `title` rendered with `set:html` to preserve its `<em>` clause (`opsz 96 / SOFT 30`; `<em>` → italic `SOFT 100 / WONK 1`). Color `--ink` at rest.
- **Leader** (center): a flexible hairline **dotted leader** in `--rule`, baseline-aligned to the title's last line, filling the space between the end of the title and the right-aligned quarter. See Behavior for the technique.
- **Quarter** (right): `--font-mono`, ~10.5px, 0.22em tracking, uppercase, `--tertiary`, right-aligned — e.g. "Q4 2014". Kept per Resolved Decisions #3.
- **Deck** (the reward): the essay's `deck` in quiet serif italic, **revealed on hover/focus** below the title (see Behavior). The plain-text title and deck are mirrored onto `data-title` / `data-deck` for the filter (via `plainTitle()`), as today.
- Rows are separated by hairline `--rule`; the last row in a section drops its border.

### `writing-index-pivot`
The closing pivot to `/about` (the route exists today). Unchanged in intent.

- Gutter mark "§ ↗"; body is an `<a href="/about">` with a serif label "More *about me →*" (`<em>` → `WONK 1`) and a quiet italic "why" line: "The longer recruiter-deep version. Twenty-five years told plainly, with a timeline."
- Hover → `--signature` red (the site-wide interaction-red hover convention; see Resolved Decisions #6).

---

## Behavior

All motion respects `prefers-reduced-motion` and is limited to color/opacity transitions — no transform, no scale, no layout animation (consistent with "composed in stasis").

### Row hover / focus (the red-splash interaction)
On hover **and on keyboard focus** of a `writing-index-row`:
1. The title color shifts **`--ink` → `--signature` red** — the owner-chosen hover splash, now the site-wide interaction-red convention (see Resolved Decisions #6 and `visual-direction.md`). Color only — the title does not change weight, style, or position (no WONK lean on hover).
2. The **deck reveals** below the title (the reward for interest).
3. Color transition: 150ms (`--t-fast`), the sanctioned link-hover duration.

Keyboard parity is required: `:focus-visible` produces the identical state (red title + deck reveal) plus the standard 2px `--signature` focus ring. A peer who tabs through the archive sees exactly what a mouse user sees.

**Reduced motion / no layout jank:** the deck reveal must not shove subsequent rows. Technique (resolved): **reserve the deck's vertical space at rest** — the deck is rendered but `opacity: 0`, fading to 1 on hover/focus, so nothing reflows. Under `prefers-reduced-motion: reduce`, drop the fade and switch opacity instantly. No height animation, no `max-height` trickery that reflows the list.

### Decks: hover/focus-reveal — RESOLVED (Option A, approved 2026-06-10)
Decks are **revealed on hover/focus**, not always shown. Rationale: the editorial-index pattern depends on a calm, scannable column of *titles* — that's what reads as a serious table of contents and lets Pierce take in the *shape* of the body of work at a glance. The deck is the **reward for interest**: hover or focus a row and the argument surfaces. Vertical space is reserved at rest (`opacity: 0` → 1) so the reveal never reflows the list. Option B (always-visible decks) was wireframed and **rejected** — it reverts the column to a card-list and loses the scan.

### Leader dots (the editorial tell)
The dotted leader is what makes a row read as a table-of-contents line rather than a list item. Specify it as a **flexible hairline that fills the gap** between the title's end and the right-aligned quarter, baseline-aligned to the title's final line, in `--rule` color:
- **Preferred technique:** a flex row — title (shrink-to-content) · leader (`flex: 1`, a `border-bottom: 1px dotted var(--rule)` on a thin baseline element, or a `repeating-linear-gradient` dot fill) · quarter (shrink-to-content). The leader's baseline sits on the title's baseline, not its box bottom, so it reads as classic TOC dot-leadering.
- It is **decorative** — `aria-hidden` / pure CSS, never real text, so it is not read by assistive tech and not caught by the filter.
- When the title wraps to two lines, the leader attaches to the **last** line only (acceptable; this is how print TOCs behave).

### Filter behavior
- Type-to-filter matches `q` (lowercased, trimmed) against each row's `data-title` + `data-deck`; non-matching rows get `hidden`. Empty query → all rows shown.
- The result line shows the live match count + a clear control. Clearing (× or the inline clear) empties the input, re-shows all rows, restores the featured pull, and returns focus to the input.
- **Per-section empty state:** when a section has **zero** matching rows under the current query, that section shows a quiet italic message in place of its rows — "— No matches in {section title}. —" — while still rendering its head and § numeral (so the archive's structure stays legible during a filter). Sections with matches render normally.
- **Removed for good:** section-focus / `activeSection`, the `.collapsed` state, the "Section: …" status fragment, the "X shown" verbosity, and the "Hidden. Click to expand." message. The filter only ever *hides rows* and *reports a count*.

---

## States

Static, data-driven marketing page — no loading/error states. The states that exist:

1. **Default (no filter):** featured pull visible (unchanged); all three sections open with all rows; decks at rest — space reserved, `opacity: 0`.
2. **Row hover/focus:** title color `--ink` → `--signature` red; deck revealed; 150ms color/opacity transition; focus ring on keyboard focus.
3. **Filtering, matches present:** featured pull hidden; non-matching rows hidden; result count shown; clear control present.
4. **Filtering, a section has zero matches:** that section shows "— No matches in {title}. —" in place of rows; other sections show their matches.
5. **Filtering, zero matches site-wide:** every section shows its empty message; result line reads "— 0 essays · Clear —".
6. **Reduced motion (`prefers-reduced-motion: reduce`):** all reveals/transitions become instant state swaps; no fades, no movement.
7. **Responsive ≤880px (single column):**
   - The `--gutter-mark` collapses; § numerals move inline above each section title (or to a compact inline position) rather than in a left gutter.
   - **Rows stack:** the title takes the full width; the **quarter moves below the title** (mono, left-aligned), joined by/replacing the deck on the meta line.
   - **Leader dots drop or simplify:** with the quarter no longer right-aligned on the same baseline, the dotted leader has nothing to span — drop it (or render a single short hairline). It is a desktop affordance; do not force it on a stacked phone row.
   - Filter input goes full-width; the result line left-aligns.

---

## Success

Pierce, arriving from a single trusted essay, scans `/writing` and reads it as **a body of work with positions** — three argued sections, a real count, dated entries showing current activity (Q1 2026 sitting at the top of On Experience Design), and an explicit refusal to funnel him ("No newsletter to sign up for."). He leans into a few rows, the arguments surface in the decks, and he leaves with depth registered and zero self-promotion alarm tripped — willing to share the idea now and vouch for the person later. The disqualifying tell he half-expects (a blog funnel, a subscribe gate, a recency feed of thin posts) is absent. *Owner-side success metric, not a layout one: the "On AI" section earns its weight only as it grows — the format already treats it as legitimate; the content has to catch up.*

---

## Resolved Decisions

1. **Pattern → typographic editorial index.** Each essay is a row: serif title (left) · hairline dotted leader · mono quarter (right). Accordions removed entirely. This is the core slick move and the thing that makes the page read as a TOC.
2. **Three topic groups kept, always open.** Rendered with big quiet § numerals in the left gutter (`§ 01 / § 02 / § 03`) and the existing `essaySections` descriptors. Never collapse. All collapse/expand/"hidden" machinery dropped. Newest-first within each group (current data order).
3. **Per-row quarter kept** (right side, end of the leader). The fresh Q1 2026 dates do positioning work (proof of current writing) and, newest-first, sit atop each group; honest about the archive's age range.
4. **Minimal inline filter kept, stripped down.** Type-to-filter across title + deck; hides non-matching rows; per-section empty message on zero matches; a simple result count + clear. No section-focus, no collapse states, no multi-part status string.
5. **Featured-essay pull — UNCHANGED, out of scope (owner decision, 2026-06-10).** Leave the current built featured block exactly as is — markup, red mark, layout, and hide-on-filter behavior. The redesign does not touch it.
7. **Decks → hover/focus-reveal (Option A, approved 2026-06-10).** Wireframed against Option B (always-visible) and chosen: titles stay a calm scannable column; decks reveal on hover/focus with reserved space (no reflow). Option B rejected as reverting to a card-list.
6. **RED ON HOVER — now the site-wide convention (owner decision, 2026-06-10).** An earlier draft removed the per-row red hover as a ration violation; the owner has instead **promoted red-on-hover to an official system rule.** Row titles — and all links/titles site-wide — shift `--ink` → `--signature` on hover/focus, color only (no WONK lean). Red now works in two registers: **event red** (the rationed, full-volume, persistent placements — the featured mark here, the home closing block, case bands) and **interaction red** (this transient hover/focus splash). `visual-direction.md` is updated to match — "never a hover state" is replaced by interaction-red as the standard accent. The featured pull keeps its one persistent earned-editorial mark. **Follow-up (outside this loop):** the home page currently hovers to `--tertiary` and should be switched to red to comply — a small `index.astro` edit, tracked in the design log.

---

## Open Questions

1. **Leader-dot technique** (border-bottom dotted vs repeating-gradient dots) and its baseline alignment when titles wrap — a build-time visual detail to resolve against real Fraunces metrics; the wireframe approves the *pattern*, not the exact dot rendering.
2. **"On AI" depth is a content gap, not a layout gap** — owner action item. The format treats a 2-row section as legitimate; growing it is the owner's to do.

---

_Language: English only (site is single-language)._
