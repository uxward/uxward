# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static site generator, v7) — no CMS, no database. Essays and case studies hand-authored as Astro/HTML pages in a public Git repo (`github.com/uxward/uxward`); `src/data/slate.js` and `src/data/essays.js` are the single sources of truth for case-study and essay ordering/counts, and `src/data/build-info.js` reads `git log -1` at build time to feed the homepage masthead. Fonts (Archivo, JetBrains Mono) load from the Google Fonts CDN via `<link>` with `preconnect` in `Base.astro`, requested as variable axes. **Hosting is Cloudflare** (confirmed 2026-08-29; the colophon's own Build row is correct, and an earlier note in this file claiming IONOS was wrong). Built with `npm run build`, which also strips `.DS_Store` files from `dist/`. No analytics/cookie banner currently wired in.

*Divergence from the original strategy brief:* `A-Product-Brief/product-brief.md` records self-hosted (non-CDN, subset) fonts as a locked constraint; fonts still load from the Google Fonts CDN. The as-built site is this project's own declared source of truth where the two diverge.

## Users

Three behavioral profiles, in priority order (source: `B-Trigger-Map/`):

1. **Vivian the VP of Design (primary).** A senior design hiring manager or VP with the authority to open/fill a leadership role. Skeptical, time-poor, pattern-matching — gives the site ~30 seconds. Owns the entire top-priority tier of driving forces, positive and negative alike (score 14–15): she needs to see shipped proof fast and is instantly repelled by buzzword-candidate signals, staleness, or wasted time. A trust-by-disqualification audience — restraint and specificity are conversion mechanics here, not aesthetic choices.
2. **Tessa the Talent Partner (secondary).** A recruiter sourcing on behalf of a company. Needs to qualify Brandon fast and forward a link that makes *her* look credible; fears forwarding a flameout or a high-maintenance candidate. The Contact page's FAQ is written largely for her.
3. **Pierce the Peer (tertiary, downstream).** A respected voice who might vouch. Reads the quarterly essays, not the case studies — a beneficiary of the writing, not a target the design is optimized for.

## Product Purpose

uxward.com is a recruitment-grade working journal for Brandon E. B. Ward — a design leader with a multi-decade track record standing up design practice, currently CXO at Precocity and solo founder of AI-era tools (Speakeazy, live). It exists to position him for senior design leadership roles (Head of Design, VP Design, CDO/CXO) at companies that take design seriously.

Its deeper purpose: to be living proof that a senior design leader still ships with his own hands. The governing belief stated on the site itself: *"The work is the brand."* It is explicitly not a content-creator platform, personal-brand engine, or agency portfolio — it's a career asset built like a piece of editorial/systems work, where the craft of the site is itself part of the claim (source is public on GitHub for exactly this reason).

## Positioning

*"I build design practice from scratch and run it across every mode — strategy, creative direction, hands-on production. Unlike most leaders at my level, I'm still shipping with my own hands, in the new tools, every week."*

This is deliberately chosen over a generic "senior strategist with receipts" positioning. Builders who have stood up practice repeatedly *and* are actively shipping AI-era tooling solo are rare; senior strategists who've stopped making things are not.

## Operating Context

Eight surfaces, each earning its place with no hamburger menu on desktop (the footer carries the full sitemap; mobile gets a full-screen overlay nav): Home, Work (index + case studies), Writing (index + essays), About, Contact, Colophon, plus a 404 page. The visitor journey is: scan → click through to the hero case study (Speakeazy) → inbound email. The "deal cycle" is a hiring process; the site's one job is to earn the first reply.

Current inventory: 5 curated case studies in the slate (`src/data/slate.js`, Speakeazy leads as hero-of-the-slate) plus a wider archive grid of prior client work; 23 published essays (`src/data/essays.js`) across four editorial sections (On Leadership, On Experience Design, On Research, On AI); quarterly essay cadence, with every long-form page date-stamped "Last revised Q_ 2026."

## Capabilities and Constraints

- **Founding rule, governs everything:** *Fewer things, executed better.* Confirmed still in force post-redesign — one signature accent color, one typeface family carrying the whole site, no button component, minimal imagery.
- **No CMS / no database** — content changes are Git commits.
- **No stock photography or illustration.** Photography is limited to Brandon's own portraits (home fold and About) and real artifacts from the case studies, surfaced as small plates on the home and work lists. Nothing is fabricated: every preview points at an image that already appears on its case page.
- **Single language:** English (US). No localization planned.
- **SEO is deliberately low-priority.** Not a search-acquisition site; the audience arrives by name, referral, or a forwarded link. The one discoverability goal is Brandon's name resolving cleanly to this site over LinkedIn and his separate acting site (brandonebward.com).
- **Deliberately absent, not to be added without re-discussion:** a Services/Hire-Me page, newsletter signup, a Manifesto/Design-Philosophy page, a Speaking page (talks live inside About), or any acting-career content.
- **Voice constraints** (see Brand Commitments) apply to all new copy.

## Brand Commitments

**Voice, locked and confirmed by the live copy** (`A-Product-Brief/content-language.md`): first person throughout (third person reserved for the formal bio only); no hedge words ("kind of", "sort of", "I think maybe"); no jargon or marketing language ("leveraged", "best-in-class", "synergies"); specific over generic (real numbers, real names — "17 studies, 3,500 hours of testing," not "extensive research"); trust the reader, no over-explaining; **one dry aside per page, maximum** — wit lives in precision of language, never in jokes or exclamation points.

Reference voices: Mike Monteiro's *book* voice (not his Twitter voice), Erika Hall's *Just Enough Research*, *The New Yorker*'s "Talk of the Town."

Banned outright: emoji, exclamation points, "hey there!" greetings, hype animation on recruitment copy.

Wordmark: "Brandon" renders in the signature red permanently (`.wm-given`); "E.B. Ward" highlights red only on hover.

## Evidence on Hand

- **Speakeazy** — a live, solo-built SaaS product (speakeazy.pro) for AI-native dialogue attribution in audiobook narration; shipped to real users since January 2026. The load-bearing proof point on the site.
- **Precocity** — a decade-long case (CXO, first UX hire to executive), the "ten-year build."
- **Four other slate cases** (global automaker, Porte, and the wider archive of ~28 prior client engagements listed in brief on the Work page).
- **23 published essays** across four sections, with a public GitHub repo as the site's own evidence of ongoing craft.
- **Portrait** — a real, commissioned photo of Brandon (previously a placeholder; now live in both About and Home).
- No case-study artifact imagery yet for most cases beyond Speakeazy (placeholder frames remain on several `/work/*` pages per the design log) — do not fabricate screenshots or product imagery for these.

## Product Principles

1. **Fewer things, executed better.** Any addition is challenged against this before it ships — this is the one rule that governs both product scope and visual system.
2. **The as-built site is the source of truth.** Where an older strategy document and the live implementation disagree, the live implementation wins; stale docs get corrected, not deferred to.
3. **Proof over persuasion.** Vivian is evaluated by facts (a live product, dated, verifiable) rather than adjectives — every claim should be checkable.
4. **Restraint reads as seniority.** The absence of over-explanation, hedging, or visual spectacle is itself a signal to this audience, not a gap to fill.
5. **Cadence beats relaunch.** Ship lighter rather than delay; a quarterly essay on schedule matters more than a perfect one that's late.

## Accessibility & Inclusion

Confirmed in the current implementation: a skip-to-content link first in the tab order on every page; a single `<main id="main">` owned by `Base.astro` (pages must not nest a second one); visible 2px signature-color focus rings on all interactive elements (`:focus-visible`), with nav and footer links also taking the hover colour on focus; a Tab trap and Escape-to-close on the mobile nav overlay, returning focus to its trigger; every `:hover` rule gated behind `@media (hover: hover)` so states don't stick on touch; full `prefers-reduced-motion` handling (including for the cyberpunk easter egg's glitch/scanline effects); semantic heading order per page.

`<html>` carries no `data-theme` attribute until a visitor chooses a theme, so a first visit follows `prefers-color-scheme` (it previously hardcoded `light`, which made the OS-dark path unreachable).

**Measured contrast on the signature-red field (2026-08-29):** `#E7E7E7` on `#CC0006` is **4.76:1** — it passes AA for normal text with no headroom, so foreground text on the red field runs at full opacity. Any de-opacified treatment fails (0.82 → 3.43:1, 0.72 → 2.85:1); all such treatments were removed. The original visual-direction brief asserted a hard AAA (7:1) body-contrast floor and 44×44px touch targets under the retired Fraunces/white-canvas palette; the red field cannot meet AAA at any offwhite value, so treat the *principle* (high-contrast body text, no red body copy) as carried forward, not the specific number. Darkening `--signature` for the field register is the only way to gain headroom and is a brand decision, not a defect fix.

---

*Generated via `/impeccable document` from `A-Product-Brief/`, `B-Trigger-Map/`, `C-UX-Scenarios/`, `_progress/00-design-log.md`, and the live codebase — 2026-08-25.*
