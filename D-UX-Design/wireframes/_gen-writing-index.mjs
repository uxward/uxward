// Generator for writing-index.excalidraw — low-fi wireframe, two deck-display options.
// Matches conventions in home.excalidraw: fontFamily 1 = serif, 3 = mono;
// ink #1e1e1e, body #282828, tertiary #6b6b6b, signature #cc0006, paper #faf8f4.
import { writeFileSync } from 'node:fs';

const INK = '#1e1e1e', BODY = '#282828', TERT = '#6b6b6b', RED = '#cc0006', RULE = '#c4bfb6', PAPER = '#faf8f4';
let seed = 2000;
const els = [];
const base = (o) => ({
  angle: 0, backgroundColor: 'transparent', fillStyle: 'solid', strokeWidth: 1, strokeStyle: 'solid',
  roughness: 0, opacity: 100, groupIds: [], frameId: null, roundness: null, seed: seed++,
  version: 1, versionNonce: seed, isDeleted: false, boundElements: [], updated: 1, link: null, locked: false, ...o,
});
const txt = (x, y, text, { c = TERT, f = 3, s = 12, w = 600, align = 'left' } = {}) => els.push(base({
  id: 'e' + seed, type: 'text', x, y, width: w, height: s * 1.3, strokeColor: c,
  text, fontSize: s, fontFamily: f, textAlign: align, verticalAlign: 'top', baseline: s,
  containerId: null, originalText: text, lineHeight: 1.25,
}));
const rect = (x, y, w, h, { c = INK, bg = 'transparent', sw = 1 } = {}) => els.push(base({
  id: 'r' + seed, type: 'rectangle', x, y, width: w, height: h, strokeColor: c, backgroundColor: bg, strokeWidth: sw,
}));
const line = (x, y, x2, { c = RULE, style = 'solid', sw = 1 } = {}) => els.push(base({
  id: 'l' + seed, type: 'line', x, y, width: x2 - x, height: 0, strokeColor: c, strokeStyle: style, strokeWidth: sw,
  points: [[0, 0], [x2 - x, 0]], lastCommittedPoint: null, startBinding: null, endBinding: null, startArrowhead: null, endArrowhead: null,
}));
const vline = (x, y, y2, { c = RED, sw = 3 } = {}) => els.push(base({
  id: 'v' + seed, type: 'line', x, y, width: 0, height: y2 - y, strokeColor: c, strokeWidth: sw,
  points: [[0, 0], [0, y2 - y]], lastCommittedPoint: null, startBinding: null, endBinding: null, startArrowhead: null, endArrowhead: null,
}));

// ---- canvas title ----
txt(120, 64, 'WRITING INDEX — leader-dots editorial index   ·   Open Question #1: how decks display (hover-reveal vs always-on)', { c: INK, s: 14 });

// ============ FRAME A — decks reveal on hover (recommended) ============
const ax = 120, acx = 270, agut = 150;
rect(ax, 120, 760, 900, { sw: 2 });
txt(ax, 96, 'OPTION A — decks reveal on hover  (recommended)', { c: INK, s: 13 });

// masthead
txt(acx, 150, '— WRITING · 23 ESSAYS · QUARTERLY —', { s: 12 });
txt(acx, 172, 'Writing, arranged by\nwhat it argues.', { c: INK, f: 1, s: 28, w: 520 });
txt(acx, 252, 'This is where I write about design leadership, the craft\nitself, the research that shapes both, and where AI is going.\nQuarterly. Long-form. No newsletter to sign up for.', { c: BODY, f: 1, s: 13, w: 540 });
txt(acx, 320, '↑ "No newsletter to sign up for." — the line that disarms Pierce (keep verbatim)', { c: RED, s: 11, w: 560 });

// filter
rect(acx, 352, 300, 30, { c: INK });
txt(acx + 12, 360, '— FIND —    |   Filter essays…                        ×', { s: 12, w: 290 });
txt(acx, 390, 'type-to-filter · hides non-matching rows · count + clear (no accordion)', { s: 11, w: 560 });

// featured pull (the ONE event-red mark)
line(acx, 420, 850);
vline(acx - 12, 442, 506, { c: RED, sw: 3 });
txt(agut, 444, '— FEATURED —', { c: RED, s: 12, w: 110 });
txt(acx, 440, '— FEATURED · ON EXPERIENCE DESIGN · Q1 2026 —', { c: RED, s: 11, w: 420 });
txt(acx, 458, 'Only You Can Prevent Dumpster Fires.', { c: INK, f: 1, s: 20, w: 480 });
txt(acx, 492, 'deck + pulled excerpt + "— Read the essay → —"   ·   the page\'s ONE persistent event-red mark', { s: 11, w: 580 });

// section 01
line(acx, 528, 850);
txt(agut, 548, '§ 01', { s: 16, w: 60 });
txt(acx, 545, 'On Leadership', { c: INK, f: 1, s: 20, w: 300 });
txt(acx, 575, '— Hiring, scaling, holding the bar, telling the truth. —', { s: 12, w: 420 });
line(acx, 598, 850);

// rows — title …… quarter ; row 2 is the HOVER state
const rowA = (y, title, dotStart, hover, deck) => {
  txt(acx, y, title, { c: hover ? RED : INK, f: 1, s: 16, w: dotStart - acx - 10 });
  line(dotStart, y + 14, 795, { c: TERT, style: 'dotted' });
  txt(800, y, 'Q4 2014', { s: 11, w: 60, align: 'right' });
  if (deck) txt(acx, y + 26, deck, { c: BODY, f: 1, s: 13, w: 520 });
};
rowA(614, "Don't Die With Your Music Still in You.", 600, false);
rowA(656, 'Flight of the Buffalo.', 470, true, 'When things go wrong with your team, the first question\nshould be: what am I doing wrong?');
txt(560, 652, '← HOVER / FOCUS\n     title → red, deck reveals', { c: RED, s: 11, w: 260 });
rowA(726, 'Who Are You?', 420, false);
rowA(766, 'Great Power.', 400, false);
txt(acx, 800, '(…6 more rows · then § 02 On Experience Design ×11 · § 03 On AI ×2)', { s: 11, w: 560 });

// pivot
line(acx, 832, 850);
txt(agut, 852, '§ ↗', { s: 14, w: 60 });
txt(acx, 850, 'More about me →', { c: INK, f: 1, s: 18, w: 320 });
txt(acx, 880, 'The longer recruiter-deep version. Twenty-five years told plainly.', { s: 11, w: 520 });

// ============ FRAME B — decks always visible ============
const bx = 960, bcx = 1110, bgut = 990;
rect(bx, 120, 760, 900, { sw: 2 });
txt(bx, 96, 'OPTION B — decks always visible', { c: INK, s: 13 });
txt(bcx, 160, 'Masthead + featured pull: identical to Option A.\nOnly the row treatment differs ↓', { s: 12, w: 420 });

// section 01
txt(bgut, 250, '§ 01', { s: 16, w: 60 });
txt(bcx, 247, 'On Leadership', { c: INK, f: 1, s: 20, w: 300 });
txt(bcx, 277, '— Hiring, scaling, holding the bar, telling the truth. —', { s: 12, w: 420 });
line(bcx, 300, 1690);

const rowB = (y, title, dotStart, hover, deck) => {
  txt(bcx, y, title, { c: hover ? RED : INK, f: 1, s: 16, w: dotStart - bcx - 10 });
  line(dotStart, y + 14, 1635, { c: TERT, style: 'dotted' });
  txt(1640, y, 'Q4 2014', { s: 11, w: 60, align: 'right' });
  txt(bcx, y + 24, deck, { c: BODY, f: 1, s: 13, w: 500 });
};
rowB(316, "Don't Die With Your Music Still in You.", 1440, false, 'Don\'t leave your ideas, designs, and passions unexpressed.');
rowB(384, 'Flight of the Buffalo.', 1310, true, 'When things go wrong with your team, the first question should be: what am I doing wrong?');
txt(1400, 380, '← hover adds red only\n     (deck already shown)', { c: RED, s: 11, w: 260 });
rowB(452, 'Who Are You?', 1260, false, 'We are not the sum of our experiences. Tell people who you actually are.');
txt(bcx, 524, 'Denser — every row carries its deck. More info up-front, but the calm\ntitle-only scan is lost and the column reads like a card list again.', { s: 11, w: 540 });

// ============ comparison + legend (below frames) ============
txt(120, 1044, 'OPEN QUESTION #1 (decide at approval):  A = calm scannable title column, decks are the reward for interest (recommended).   B = everything visible up-front, but reverts to a card-list feel.', { c: INK, s: 13, w: 1600 });
txt(120, 1072, 'Legend:   dotted line = leader dots (decorative, aria-hidden)   ·   RED text = interaction-red hover/focus   ·   red bar = event-red featured mark   ·   serif = title/deck, mono = labels/quarter.', { s: 11, w: 1600 });

const doc = { type: 'excalidraw', version: 2, source: 'wds-freya', appState: { viewBackgroundColor: '#ffffff', gridSize: null }, files: {}, elements: els };
writeFileSync(new URL('./writing-index.excalidraw', import.meta.url), JSON.stringify(doc, null, 2));
console.log('wrote writing-index.excalidraw with', els.length, 'elements');
