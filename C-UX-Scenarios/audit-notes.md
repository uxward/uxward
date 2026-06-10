# Retroactive Audit Notes

Findings surfaced while walking the built site as each persona (Option A — retroactive scenarios). The scenario files stay pure sunshine-path; the build-vs-strategy gaps live here. Each finding ties back to a Trigger Map driving force or feature-impact priority.

---

## Scenario 1 — Vivian the VP

**1. Proof-below-fold.** Vivian's #1 force — *see shipped proof in the first 30 seconds* (score 15) — pays off only after a scroll: the home fold leads with the "25 years" claim, while the actual proof ("live to real users since January 2026," "Live →") sits in §02/§03 below it. Her doubts then clear only one click deeper, on About ("still shipping every week," "no personal brand"). The site's most persuasive material for a trust-by-disqualification audience is not in the first impression.
   *Force:* shipped-proof hero (6.9), plainspoken voice (7.3).
   *Candidate fix (not yet specced):* surface one concrete shipped-proof point above the fold on Home.

**2. Live-but-unlinked.** The Speakeazy case — the load-bearing, AI-recency proof — *claims* "live to real users" but never lets a skeptic verify it: the three artifacts are placeholder frames ("to be commissioned") and there is no link to Speakeazy.pro anywhere on the case. The one screen where a VP would click "show me it's real" dead-ends.
   *Force:* Speakeazy hero case (6.4); AI-recency proof leans entirely on this case.
   *Candidate fix:* add a live link to Speakeazy.pro on the case; replace/commission the artifact images.

   *Minor:* About portrait is also a "to be commissioned" placeholder on the page meant to humanize him.

---

## Scenario 2 — Tessa the Talent Partner

**3. No portrait asset.** Tessa's force #4 is *grab ready-to-use assets — clean link, portrait, quotable copy.* The link and quotable copy are abundant, but the portrait is a "to be commissioned" placeholder on About. A recruiter packaging a candidate has no headshot to attach to her forward — a concrete friction at her asset-grab step.
   *Force:* grab ready-to-use assets (11).
   *Candidate fix:* commission and place the portrait (also clears the Scenario 1 minor on About).

**4. Verification gap bites the amplifier harder.** The unlinked-Speakeazy finding (#2) hurts Tessa more than Vivian: she stakes her *reputation* on a claim she can't click to verify. Recognizable logos verify themselves; "live to real users" does not, without a link.
   *Force:* can't verify the claims (−12), forwarding a flameout (−13).
   *Candidate fix:* same as #2 (live link on the case). Also re-check Saga's logged divergence — home "recent writing" links point to not-yet-existing essays; a dead link mid-scan reads as careless to a flameout-averse recruiter.

---

## Scenario 3 — Pierce the Peer

**5. Count inflation — Pierce's exact tripwire.** The Writing header claims *"Thirty essays,"* the site shows **23**; the Work pivot card says *"Twelve pieces and counting."* Three different numbers, none matching. For a reader whose strongest negative force is *amplifying self-promotion* (−13), an inflated/inconsistent count is the precise tell that costs the share — the one audience that reads carefully is the one who'll notice.
   *Force:* amplifying self-promotion (−13), find an idea worth sharing (13).
   *Candidate fix:* make the counts dynamic/accurate. The slate already does this for Work cases; the essay count and writing-page counts are hardcoded in `writing/index.astro` and `work/index.astro`.
