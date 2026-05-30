#!/usr/bin/env node
// Replaces the body text in each writing .astro file with the verbatim content
// from the Squarespace XML export. Preserves the leading hero figure,
// poem-attribution (if present), and essay-end block already in each file.

const fs = require('fs');
const path = require('path');

const XML_PATH = path.join(__dirname, '..', 'Blog-Export-05-02-2026.xml');
const WRITING_DIR = path.join(__dirname, '..', 'src', 'pages', 'writing');

// XML title → .astro filename
const TITLE_TO_FILE = {
  'The UX / UI Design Process':                                              'the-ux-ui-design-process.astro',
  'Arrr, Know Yer Personæ':                                                  'arrr-know-yer-personae.astro',
  'Hey UI: Say what you mean, and mean what you Said':                       'hey-ui-say-what-you-mean.astro',
  'Flight of the Buffalo':                                                   'flight-of-the-buffalo.astro',
  'The Service Design of Nest':                                              'the-service-design-of-nest.astro',
  'Empathy In Your (inter)Face':                                             'empathy-in-your-interface.astro',
  'Don’t die with your music still in you.':                            'dont-die-with-your-music-still-in-you.astro',
  'Who Are You?':                                                            'who-are-you.astro',
  'How To Succeed Towards Failure':                                          'how-to-succeed-towards-failure.astro',
  'Define Success to Achieve It':                                            'define-success-to-achieve-it.astro',
  'Only You Can Prevent Dumpster Fires':                                     'only-you-can-prevent-dumpster-fires.astro',
  'I Failed. But I’m Getting Better.':                                  'i-failed-but-im-getting-better.astro',
  'Delivering Quality Experiences':                                          'delivering-quality-experiences.astro',
  'Can Great UX Be Novel and Risky Too?':                                    'can-great-ux-be-novel-and-risky-too.astro',
  'The Triforce of UX : Part I — Empathy':                             'the-triforce-of-ux-part-i-empathy.astro',
  'The Triforce of UX : Part II — Curiosity':                          'the-triforce-of-ux-part-ii-curiosity.astro',
  'The Triforce of UX : Part III — Humility':                          'the-triforce-of-ux-part-iii-humility.astro',
  'Creating ARTE: 5 Steps to Agile Repeated Testing for Enhancement':        'how-to-curate-arte-5-steps-to-agile-repeated-testing-enhanced.astro',
  'Great Power':                                                             'great-power.astro',
  'Human-Centered, Robot-Driven: Ethical Considerations for ML in Design':  'human-centered-robot-driven-ethical-considerations-for-ai-in-design.astro',
  "The Designer's Secret Weapon: How ML is Revolutionizing Web Design":     'the-designers-secret-weapon-how-ai-is-revolutionizing-web-design.astro',
  'The Truth About Simplicity: Why Clarity Beats the Buzzword':             'the-truth-about-simplicity-why-clarity-beats-the-buzzword.astro',
  'The Race':                                                                'the-race.astro',
};

// ---------- XML parsing ----------

function extractItems(xml) {
  const items = new Map();
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const item = m[1];
    const titleM = /<title>([\s\S]*?)<\/title>/.exec(item);
    const contentM = /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/.exec(item);
    if (titleM && contentM) {
      const title = titleM[1].trim();
      items.set(title, contentM[1]);
    }
  }
  return items;
}

// ---------- HTML conversion ----------

function convertSquarespaceHTML(raw) {
  let html = raw;

  // Drop WordPress-style [caption]...[/caption] shortcodes (whole block)
  html = html.replace(/\[caption[^\]]*\][\s\S]*?\[\/caption\]/g, '');

  // Drop leading standalone Squarespace CDN images (hero image already in .astro figure)
  html = html.replace(/^\s*<a[^>]*>\s*<img[^>]*squarespace-cdn[^>]*\/?>\s*<\/a>\s*/s, '');
  html = html.replace(/^\s*<img[^>]*squarespace-cdn[^>]*\/?>\s*/s, '');

  // Drop any remaining Squarespace CDN images (inline figures)
  html = html.replace(/<a[^>]*>\s*<img[^>]*squarespace-cdn[^>]*\/?>\s*<\/a>/g, '');
  html = html.replace(/<img[^>]*squarespace-cdn[^>]*\/?>/g, '');

  // Unwrap sqs-html-content divs
  html = html.replace(/<div[^>]*sqs-html-content[^>]*>/g, '');

  // Remove all remaining bare </div> closing tags
  html = html.replace(/<\/div>/g, '');

  // Clean p tags: strip class/style
  html = html.replace(/<p\s[^>]*>/g, '<p>');

  // Convert h4 / h3 → h2 (template only styles h2)
  html = html.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, '<h2>$1</h2>');
  html = html.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, '<h2>$1</h2>');
  html = html.replace(/<h2[^>]*>/g, '<h2>');

  // Unwrap blockquote > p: <blockquote><p>text</p></blockquote> → <blockquote>text</blockquote>
  html = html.replace(/<blockquote[^>]*>\s*<p>([\s\S]*?)<\/p>\s*<\/blockquote>/g, '<blockquote>$1</blockquote>');
  html = html.replace(/<blockquote[^>]*>/g, '<blockquote>');

  // Clean list containers
  html = html.replace(/<ul[^>]*>/g, '<ul>');
  html = html.replace(/<ol[^>]*>/g, '<ol>');

  // Unwrap li > p: <li><p>text</p></li> → <li>text</li>
  html = html.replace(/<li[^>]*>\s*<p>([\s\S]*?)<\/p>\s*<\/li>/g, '<li>$1</li>');
  html = html.replace(/<li[^>]*>/g, '<li>');

  // Drop empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');

  // Drop stray empty lines left by removed images
  html = html.replace(/\n{3,}/g, '\n\n');

  return html.trim();
}

// ---------- .astro file patching ----------

function patchAstroFile(filePath, convertedBody) {
  const src = fs.readFileSync(filePath, 'utf8');

  const ARTICLE_OPEN = '<article class="reading-column essay-body">';
  const ARTICLE_CLOSE = '</article>';

  const openIdx = src.indexOf(ARTICLE_OPEN);
  const closeIdx = src.indexOf(ARTICLE_CLOSE, openIdx);
  if (openIdx === -1 || closeIdx === -1) {
    return { ok: false, reason: 'article boundaries not found' };
  }

  const before = src.slice(0, openIdx + ARTICLE_OPEN.length);
  const after  = src.slice(closeIdx); // includes </article> and everything after

  const existingBody = src.slice(openIdx + ARTICLE_OPEN.length, closeIdx);

  // Extract leading <figure>...</figure> (hero image — already has correct local path)
  const figureMatch = /^\s*(<figure>[\s\S]*?<\/figure>)/m.exec(existingBody);
  const leadingFigure = figureMatch ? figureMatch[1].trimEnd() : null;

  // Extract <div class="essay-end">...</div> block (two nested divs)
  const essayEndMatch = /(<div class="essay-end">[\s\S]*?<\/div>\s*<\/div>)/.exec(existingBody);
  const essayEnd = essayEndMatch ? essayEndMatch[1] : null;

  // Extract poem-attribution if present (e.g. the-race.astro)
  const attrMatch = /(<div class="poem-attribution">[\s\S]*?<\/div>)/.exec(existingBody);
  const poemAttribution = attrMatch ? attrMatch[1] : null;

  // Build replacement body with consistent 4-space indent
  const indent = '    ';
  const lines = [];

  lines.push('');
  lines.push('');

  if (leadingFigure) {
    for (const l of leadingFigure.split('\n')) lines.push(indent + l.trim());
    lines.push('');
  }

  for (const l of convertedBody.split('\n')) {
    lines.push(l.trim() ? indent + l : '');
  }

  if (poemAttribution) {
    lines.push('');
    for (const l of poemAttribution.split('\n')) lines.push(indent + l.trim());
  }

  if (essayEnd) {
    lines.push('');
    for (const l of essayEnd.split('\n')) lines.push(indent + l.trim());
  }

  lines.push('');
  lines.push('  ');

  const newBody = lines.join('\n');
  fs.writeFileSync(filePath, before + newBody + after, 'utf8');
  return { ok: true };
}

// ---------- main ----------

const xml   = fs.readFileSync(XML_PATH, 'utf8');
const items = extractItems(xml);

console.log(`Loaded ${items.size} XML items.\n`);

let ok = 0, skipped = 0, failed = 0;

for (const [title, filename] of Object.entries(TITLE_TO_FILE)) {
  const filePath = path.join(WRITING_DIR, filename);

  if (!fs.existsSync(filePath)) {
    console.log(`SKIP  ${filename}  (file not found)`);
    skipped++;
    continue;
  }

  if (!items.has(title)) {
    console.log(`SKIP  ${filename}  (title not found in XML: "${title}")`);
    skipped++;
    continue;
  }

  const converted = convertSquarespaceHTML(items.get(title));
  const result    = patchAstroFile(filePath, converted);

  if (result.ok) {
    console.log(`OK    ${filename}`);
    ok++;
  } else {
    console.log(`FAIL  ${filename}  (${result.reason})`);
    failed++;
  }
}

console.log(`\nDone. ${ok} updated, ${skipped} skipped, ${failed} failed.`);
