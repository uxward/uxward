#!/usr/bin/env python3
"""
Clean up WordPress-migrated article .astro files:
  1. Remove empty <style> blocks
  2. Fix malformed blockquotes (broken <p> nesting from WP export)
  3. Reformat <article> body from single-line blobs to readable multiline HTML

Usage: python3 scripts/clean-articles.py [--dry-run]
"""

import re
import os
import sys

WRITING_DIR = 'src/pages/writing'
DRY_RUN = '--dry-run' in sys.argv

# Block-level tags that get their own lines
BLOCK_TAGS = [
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'blockquote', 'figure', 'figcaption',
    'ol', 'ul', 'li',
    'div', 'section', 'hr',
]


def remove_empty_style(content):
    return re.sub(r'[ \t]*<style>\s*</style>[ \t]*\n?', '', content)


def fix_blockquotes(content):
    """
    Fix two common malformed patterns from the WordPress export:

      A) <blockquote>Text</p><p>— Attribution</blockquote>
         Missing opening <p>; stray </p><p> splice.

      B) <blockquote>Text<p>— Attribution</p></blockquote>
         Quote text not wrapped in <p>.

    Both become: <blockquote><p>Text</p><p>— Attribution</p></blockquote>
    """
    def fix_bq(m):
        inner = m.group(1).strip()

        # Pattern A: starts with text (not <p>), contains </p><p> splice from WP export
        if not inner.startswith('<p>') and '</p><p>' in inner:
            inner = '<p>' + inner
            # Ensure the last segment is closed
            if not inner.rstrip().endswith('</p>'):
                inner = inner + '</p>'

        # Pattern B: starts with text (not <p>), contains <p> mid-way for attribution
        elif not inner.startswith('<p>') and '<p>' in inner:
            split = inner.index('<p>')
            pre = inner[:split].rstrip()
            rest = inner[split:]
            inner = f'<p>{pre}</p>{rest}'
            if not inner.rstrip().endswith('</p>'):
                inner = inner + '</p>'

        return f'<blockquote>{inner}</blockquote>'

    return re.sub(r'<blockquote>(.*?)</blockquote>', fix_bq, content, flags=re.DOTALL)


def format_html(html):
    """
    Insert newlines around block-level tags so each element sits on its own line.
    Keeps inline content (links, em, strong, etc.) on the same line as its parent.
    """
    for tag in BLOCK_TAGS:
        # Newline before opening tag (including self-closing)
        html = re.sub(rf'(?<!\n)(<{tag}(?:\s[^>]*)?>)', r'\n\1', html)
        # Newline after closing tag
        html = re.sub(rf'(</{tag}>)(?!\n)', r'\1\n', html)
        # Self-closing (e.g. <hr />)
        html = re.sub(rf'(?<!\n)(<{tag}\s*/?>)(?!\n)', r'\n\1\n', html)

    # Collapse 3+ consecutive blank lines to 1
    html = re.sub(r'\n{3,}', '\n\n', html)
    return html.strip()


def process_file(filepath):
    with open(filepath) as f:
        original = f.read()

    content = original

    # 1. Empty <style> blocks
    content = remove_empty_style(content)

    # 2. Malformed blockquotes
    content = fix_blockquotes(content)

    # 3. Reformat the <article> body only
    article_re = re.compile(
        r'(<article[^>]*>)(.*?)(</article>)',
        re.DOTALL
    )
    m = article_re.search(content)
    if m:
        formatted_inner = format_html(m.group(2))
        content = (
            content[:m.start()]
            + m.group(1) + '\n\n'
            + formatted_inner + '\n\n'
            + m.group(3)
            + content[m.end():]
        )

    if content == original:
        return False

    if not DRY_RUN:
        with open(filepath, 'w') as f:
            f.write(content)

    return True


def main():
    files = sorted(
        f for f in os.listdir(WRITING_DIR)
        if f.endswith('.astro') and f != 'index.astro'
    )

    changed, unchanged = [], []
    for filename in files:
        path = os.path.join(WRITING_DIR, filename)
        if process_file(path):
            changed.append(filename)
        else:
            unchanged.append(filename)

    label = '[DRY RUN] Would update' if DRY_RUN else 'Updated'
    print(f'{label} {len(changed)} file(s):')
    for f in changed:
        print(f'  {f}')
    if unchanged:
        print(f'\nNo changes needed in {len(unchanged)} file(s):')
        for f in unchanged:
            print(f'  {f}')


if __name__ == '__main__':
    main()
