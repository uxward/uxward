# Product Brief — uxward.com

2026-06-08 · Consolidated from the existing site and the `uxward-design-strategy-brief.md` (brownfield extraction). Source of truth where the two diverge: the **as-built site**.

---

## Vision

uxward.com is a **recruitment-grade working journal** for Brandon E.B. Ward — a 25-year design leader, CXO at Precocity, and solo founder of AI-era tools. It exists to position him for senior design leadership roles (Head of Design, VP Design, CDO) at companies that take design seriously.

The deeper purpose: to be **living proof that a senior design leader still ships with his own hands.** Most leaders at this level stopped making things years ago. The site's whole argument is that Brandon didn't — and that the discipline of standing up design practice is the same discipline now expressed through shipping AI-era tools. The governing belief, stated on the site: *"The work is the brand."*

It is not a content-creator platform, not a personal-brand engine, not an agency portfolio. It is a career asset built like a piece of editorial work, because the craft of the site is itself part of the claim.

---

## Positioning

**For** senior design hiring managers and talent partners at flagship technology and design companies (LEGO, Netflix, Apple, Airbnb, and the equivalents) **who need** a leader who can both build a design practice from scratch *and* still build, **uxward.com** is a working journal **that** proves Brandon does both — 25 years standing up practice across startups, agencies, consulting, and a decade at Precocity, plus live AI-era tools shipped solo. **Unlike** the fifty senior strategists already in every pipeline, **he is still shipping with his own hands, in the new tools, every week.**

The recruitable claim, locked:

> *"I build design practice from scratch and run it across every mode — strategy, creative direction, hands-on production. Unlike most leaders at my level, I'm still shipping with my own hands, in the new tools, every week."*

This was chosen deliberately over generic alternatives ("senior strategist with receipts"). Builders who have stood up practice seven times *and* are actively shipping AI tooling are rare; senior strategists are not.

---

## Business Model

**Not a commercial product — a career instrument.** There is no revenue model and no pricing; success is measured in the right role, not in dollars or users.

- **Owned platform**, deliberately off Medium/Substack/LinkedIn so the asset and its content can't be diluted or locked in.
- **Near-zero running cost:** static Astro site on Cloudflare Pages, no CMS, no database, no monthly fees.
- **Secondary, downstream value** (explicitly not optimized for): consulting inbound, peer reputation, future collaborators. These are beneficiaries of the design, not drivers of it.

---

## Business Customers

The "buyer" and the "user" are the same person in two modes:

- **Decision-maker / buyer:** a senior design hiring manager, VP, or talent partner with the authority to open or fill a leadership role. They forward the link, champion the candidate, and make the call.
- **Procurement path:** scan → click through to the hero case → inbound email (the contact page is explicit that *the work is the take-home; no spec work*). The "deal cycle" is a hiring process; the site's job is to earn the first reply.

---

## Target Users

Behavioral profiles, in priority order:

**1. The Scanning Hiring Manager (primary).** Skeptical, time-poor, pattern-matching. Gives the site ~30 seconds before deciding whether to click deeper. Has seen a hundred polished portfolios that say nothing. Needs to register — *in this order* — (1) does this person think clearly, (2) have they done real work, (3) do they have a specific point of view, (4) would I want them in a room with my team. Visual polish doesn't move them; clarity and evidence do.

**2. The Talent Partner / Recruiter.** Sourcing on behalf of a company. Needs to qualify Brandon fast and forward a link that makes *them* look credible. The contact page's FAQ is written largely for this reader (roles considered, locations, no take-homes).

**3. The Peer / Reporter (secondary, downstream).** Reads the quarterly essays, not the case studies. Amplifies reputation over time. The writing is aimed here; the design is *not* optimized here. Explicitly a beneficiary, not a target.

---

## Product Concept

A **working journal** — the personal site as primitive, chosen on purpose over the portfolio deck, the case-study PDF, and LinkedIn. Structurally:

- **Editorial, not product-y.** Layer-cake homepage (six composed blocks), not a feed. Curated work slate, not a chronological grid. Writing composed "in stasis" so a quarterly cadence reads as deliberate, not neglected.
- **The site is part of the work.** Source is public on GitHub; the craft, restraint, and build are themselves evidence of taste and of "still in the tools."
- **Founding rule, governs everything:** *Fewer things, executed better.* One signature color used as event. Two typefaces. Six homepage blocks. ~5–7 cases. Five sanctioned uses of red. Five discovered "moments." The discipline *is* the design.

Eight surfaces: Home, Work, Work/[case], Writing, Writing/[essay], About, Contact, Colophon (+ a 404 wit moment).

---

## Success Criteria

**Primary — the 30-second test.** A senior hiring manager scanning the homepage for 30 seconds registers the four questions above, in order, and clicks through to the hero case study. If the homepage answers all four, the click is natural; if it answers none, no polish saves it.

**Outcome metric:** an inbound conversation that leads to a senior design leadership role at a serious company. This is qualitative and binary by design — the site has done its job when it produces the right first reply.

**Secondary indicators:** the right peers reading the writing; inbound interest Brandon didn't chase; reputation shifting toward "the leader who still ships."

> Open: no quantitative analytics targets have been set. Privacy-respecting analytics (Cloudflare/Plausible) are planned but no traffic/CTR goals are defined — success is currently judged by the quality of inbound, not volume.

---

## Competitive Landscape

**Alternatives the audience uses today:**

- **LinkedIn** — the default. Same record, drier; no room for a point of view or for craft.
- **Portfolio decks / case-study PDFs** — the standard senior-designer artifact; reads as a sales pitch.
- **Agency-style portfolio sites** (heavy motion, illustration, visual fireworks) — explicitly *not* the reference set; Brandon does not position as a visual virtuoso.

**Key differentiators:**

- The working-journal format itself (owned, editorial, durable).
- The *still-shipping* proof — a live solo SaaS (Speakeazy) with real users, plus a public tool repo.
- Restraint executed with conviction — the site wins on taste and judgment, not graphic virtuosity.

**Unfair advantage:** a genuinely rare combination — having stood up design practice from scratch seven times across 25 years *and* actively shipping AI-era tooling solo, *and* the editorial taste to present it without overselling. Hard to copy because it's a biography, not a layout.

---

## Constraints

**Technical (locked):**
- Astro static-site generator; Markdown content in a Git repo; no CMS, no database.
- Cloudflare Pages hosting; self-hosted Fraunces + JetBrains Mono (subset, not CDN).
- Public source on GitHub — the repo is part of the evidence.

**Design (locked — see `visual-direction.md`):**
- Two typefaces only; a third requires explicit re-discussion.
- Signature red rationed to five sanctioned uses; never decoration.
- AAA contrast floor (body ≥ 7:1); red never used for body copy.
- No stock photography, illustration, or thumbnails — the only image is the About portrait. No rounded corners, no drop shadows, no scroll animations.

**Cadence:** essays quarterly. *Cadence beats relaunch* — ship lighter rather than delay.

**The one rule:** Fewer things, executed better. Anything that breaks it is challenged before it's added.

---

## Open Items & Divergences (as-built vs. strategy brief)

Captured during brownfield extraction; these are the live truth and supersede the older `uxward-design-strategy-brief.md` where they conflict:

1. **Hero of the slate — RESOLVED.** The strategy brief named *Precocity* the non-negotiable hero. The decision (2026-06-08) is that **Speakeazy leads** — the AI-era founder proof is the stronger opener for the "still shipping" claim. The brief is stale on this point.
   - **Action:** `precocity.astro` is a complete but **orphaned** case study (absent from `src/data/slate.js`). It should be wired into the slate as the deepest *supporting* case, not deleted.
2. **Slate size.** Built slate is 4 (Speakeazy, Global automaker, Porte, Major insurance broker) vs. the planned 5–7. FORGE currently lives only in the homepage "currently building" list, not as a case. Adding Precocity brings it to 5.
3. **Colophon palette bug.** The colophon page displays Ink `#1A1A1A` / Tertiary `#6B6660`; the actual tokens in `global.css` are `#040404` / `#6B6B6B`. The craft-signal page misreports the palette — worth fixing for a page whose whole point is accuracy.
4. **Homepage "recent writing" links** point to forward-placeholder essays (e.g. `/writing/case-against-design-systems`) that don't yet exist as pages.

---

*Product Brief v1.0 · 2026-06-08 · uxward.com · ❦*
