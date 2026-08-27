# Security Policy

## Reporting a vulnerability

**Do not open a public issue for a security vulnerability.**

Report it privately through GitHub:
[Report a vulnerability](https://github.com/beerjson/beerjson/security/advisories/new).
This opens a private advisory visible only to you and the repository
administrators.

### What to include

- What the problem is, and which file or package it affects
- How to reproduce it
- What an attacker could achieve
- A suggested fix, if you have one

### What to expect

The working group is volunteer-run, so response times are best effort rather
than contractual. We aim to acknowledge a report within a week, and to agree a
disclosure timeline with you before publishing anything.

If you would like credit in the advisory, say so; if you would prefer to remain
anonymous, that is fine too.

## Scope

This repository publishes JSON Schema files, generated documentation and type
declarations, and the `@beerjson/beerjson` npm package. Realistic concerns are:

- A dependency of the npm package with a known vulnerability
- A schema construct that causes pathological behaviour in a validator, for
  example catastrophic backtracking in a `pattern`
- Anything in the repository that could compromise a machine running `npm test`
  or the generators

Out of scope:

- Vulnerabilities in third-party validator libraries. Report those to the
  library.
- A BeerJSON document being malicious in itself. A document is data; treating
  untrusted input safely is the consuming application's responsibility. Note
  that `PackagingGraphicType` can carry `base64_data` and `URLS`, so a consumer
  that renders or fetches those is handling untrusted content and should treat
  it accordingly.

## Supported versions

Only the latest published release receives fixes. Older versions are not
patched.

| Version | Supported |
| ------- | --------- |
| 1.0.x   | Yes       |
| < 1.0   | No        |
