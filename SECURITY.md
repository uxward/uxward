# Security Policy

This is the source for [uxward.com](https://uxward.com), a static personal
portfolio site (Astro, deployed to Cloudflare). There's no login system,
user accounts, or database — but if you find a way to compromise the build,
the deployed site, or its hosting, I want to know.

## Supported Versions

There isn't a versioned release line to track — the `main` branch is what's
built and deployed to production. Security fixes are made against `main`
and go live on the next deploy.

## Reporting a Vulnerability

Please report vulnerabilities privately rather than opening a public GitHub
issue.

**Email:** [brandon@uxward.com](mailto:brandon@uxward.com)

When reporting, please include:

- A description of the issue and its potential impact
- Steps to reproduce (or a proof of concept)
- The URL or file/commit affected

**What to expect:**

- Acknowledgment within a few days
- I'll investigate and let you know if it's confirmed, and roughly when a
  fix will ship
- Credit in the fix commit/notes if you'd like it (or full anonymity if you
  prefer)

This is a solo personal-site project, not a funded product, so there's no
bug bounty — but I do appreciate responsible disclosure and will fix
confirmed issues promptly.

**Out of scope:** vulnerabilities in Cloudflare's platform itself, or in
third-party dependencies that should be reported to their own maintainers
(though a heads-up is still welcome).
