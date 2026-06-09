# Feature Impact Analysis — uxward.com

> Phase 2 — Trigger Mapping · Workshop 5
> Derived from: 02-persona-vivian-the-vp.md, 03-persona-tessa-the-talent-partner.md, 04-persona-pierce-the-peer.md
> Status: Draft — for review

---

## Scoring Method

Each feature is inferred from the driving forces (positive forces imply features that *enable* what a persona wants; negative forces imply features that *shield against* what they fear). Features are scored 0–3 for impact on each persona (0 = none, 3 = directly addresses), weighted by the FIA total of the dominant force served (force score /15), then summed across the three personas.

This is a recruitment-grade personal site, so "features" are conceptual experience elements, not app components.

---

## Feature Scores

| Rank | Feature | Vivian | Tessa | Pierce | Weighted Total | Priority |
|------|---------|--------|-------|--------|----------------|----------|
| 1 | Plainspoken, buzzword-free voice (site-wide) | 3 | 2 | 3 | **7.3** | High |
| 2 | Above-the-fold shipped-proof hero (live product + numbers + dates) | 3 | 3 | 1 | **6.9** | High |
| 3 | Fast, low-friction scan path (visible nav, layer-cake, no maze) | 3 | 3 | 1 | **6.5** | High |
| 4 | Speakeazy hero case study with hard outcomes | 3 | 3 | 1 | **6.4** | High |
| 5 | Scannable, quotable proof points (titles · named companies · numbers) | 2 | 3 | 1 | **5.7** | High |
| 6 | Social-proof surfacing (selected talks, recognizable links, public repo) | 2 | 2 | 3 | **5.5** | High |
| 7 | Curated slate spanning verticals + career timeline | 3 | 2 | 1 | **5.3** | Medium |
| 8 | Quarterly essays with a clear point of view (the four "On…" sections) | 2 | 1 | 3 | **5.1** | Medium |
| 9 | Recency signals ("currently building", dated activity) | 3 | 1 | 2 | **5.0** | Medium |
| 10 | About page: temperament + receipts narrative + portrait | 3 | 1 | 2 | **4.7** | Medium |
| 11 | Absence of personal-brand cruft (no newsletter / podcast / CTA) | 2 | 0 | 3 | **4.6** | Medium |
| 12 | Explicit "what I'm looking for" (Contact FAQ: roles, level, terms) | 1 | 3 | 0 | **3.6** | Medium |
| 13 | Clean shareable link (metadata / OG / portrait asset) | 0 | 3 | 1 | **2.9** | Low |

---

## High Priority

Features that address the top-scored driving forces (14–15). Must be in the core product.

**Plainspoken, buzzword-free voice (site-wide)**
Forces addressed: Vivian — "The buzzword candidate" (15) · Pierce — "Amplifying self-promotion" (13), "Respect the person" (12) · Tessa — "Can't verify" (12)
Design implication: Voice is not decoration here — it is the single highest-leverage conversion mechanic. The same restraint that disarms Vivian's #1 fear is what earns Pierce's share. Every line must be defensible, specific, and free of marketing language. This is already strong on the live site; protect it ruthlessly in any new copy.

**Above-the-fold shipped-proof hero**
Forces addressed: Vivian — "See shipped proof, fast" (15), "The gone-soft leader" (14) · Tessa — "Grab a packageable pitch, fast" (15)
Design implication: The fold must assert *builder, not talker* in seconds — a live product, real users, a date that proves recency. The current fold leads with the 25-year claim; ensure the *shipped-now* proof is equally instant, not buried below.

**Fast, low-friction scan path**
Forces addressed: Vivian — "Her time wasted" (14) · Tessa — "Grab a packageable pitch, fast" (15)
Design implication: Visible navigation (no hamburger), layer-cake homepage, one clear path to the hero case. Every extra click or ambiguous label is a bounce. The "no maze" discipline is a feature.

**Speakeazy hero case study with hard outcomes**
Forces addressed: Vivian — "See shipped proof" (15), "Recognize a POV" (14) · Tessa — "Forwarding a flameout" (13), "Can't verify" (12)
Design implication: The load-bearing artifact. Must carry verifiable specifics (real users, dates, numbers) and show *judgment* — what was deliberately not done. The red outcome band is the place to make the most consequential, substantiable claim.

**Scannable, quotable proof points**
Forces addressed: Tessa — "Grab a packageable pitch, fast" (15), "Can't verify the claims" (12) · Vivian — "See shipped proof" (15)
Design implication: Stamps and decks that a non-expert can lift verbatim into a pitch ("17 studies, 3,500 hours"; "4.8 stars"; "live January 2026"). Tessa repeats the site secondhand — give her exact, credible phrases.

**Social-proof surfacing**
Forces addressed: Pierce — "Vouch with confidence" (12), "Respect the person" (12) · Tessa — "Can't verify" (12) · Vivian — "Feel the social proof" (11), "The blind-hire risk" (10)
Design implication: Surface the signals that de-risk the hire — a selected-talks section in About, recognizable links (GitHub, the live products), and the body of writing that lets Pierce vouch with specifics. Note the *fit limit* below: the site can display social proof but cannot manufacture it.

---

## Medium Priority

Address if feasible. Enhance the case without blocking the core 30-second win.

**Curated slate spanning verticals + career timeline**
Forces addressed: Vivian — "See range across verticals" (13) · Tessa — packageable proof (15)

**Quarterly essays with a clear point of view**
Forces addressed: Pierce — "Find an idea worth sharing" (13) · Vivian — "Recognize a POV" (14), "Feel the social proof" (11)

**Recency signals ("currently building", dated activity)**
Forces addressed: Vivian — "The gone-soft leader" (14)

**About page: temperament + receipts narrative + portrait**
Forces addressed: Vivian — "Picture him in the room" (12)

**Absence of personal-brand cruft**
Forces addressed: Pierce — "Amplifying self-promotion" (13) · Vivian — "The buzzword candidate" (15)
(An anti-feature: the discipline of *not* adding a newsletter/podcast/CTA is itself doing work.)

**Explicit "what I'm looking for" (Contact FAQ)**
Forces addressed: Tessa — "Confirm fit before pitching" (14), "The high-maintenance / unclear candidate" (13)

---

## Deprioritized

Low impact on current driving forces. Worth doing because it's cheap, not because it's high-leverage.

- **Clean shareable link / metadata** — matters only to Tessa's "ready-to-use assets" (11). Implement well (OG image, title, portrait) but it's plumbing, not persuasion.

---

## Gap Analysis

High-scored forces the site cannot fully satisfy on its own. Flag for Freya.

| Force | Persona | FIA Score | Gap |
|-------|---------|-----------|-----|
| Feel the social proof / The blind-hire risk | Vivian | 11 / 10 | The site can *display* reputation but cannot *generate* it. Real fit depends on the writing engine running for several quarters and on actual talks/connections existing to surface. Today the writing is partly placeholder and About has no built talks section. |
| Vouch with confidence when asked | Pierce | 12 | Pierce's endorsement happens off-site; the site's only lever is giving him sharp, specific work to point to. Conversion here is slow-burn (Goal 3), not a launch-day win. |
| Picture him in the room | Vivian | 12 | Temperament is largely inferred from voice; the portrait (not yet commissioned) and About narrative carry most of the load. Hard to make undeniable in a 30-second scan. |
| The gone-soft leader (AI recency) | Vivian | 14 | Current-shipping proof leans almost entirely on Speakeazy; FORGE is "currently building," not yet a case. A second live AI proof point would strengthen this materially. |

---

_Produced by Saga — 2026-06-08_
_Derived autonomously from: NN-persona-*.md_
_Review: share with client before handoff to Freya_
