# Contributing to BeerJSON

Thank you for your interest in BeerJSON. This document explains how to propose
changes to the format, how schema changes are reviewed, and how to work with the
repository.

BeerJSON is an interchange format. Every accepted change has to be implemented
by brewing software that already reads and writes BeerJSON files, so the review
bar is deliberately higher than for an ordinary library.

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md). By
participating, you agree to uphold it.

## What lives in this repository

| Path     | Contents                                                                                            | Hand-edited?      |
| -------- | --------------------------------------------------------------------------------------------------- | ----------------- |
| `json/`  | The JSON Schema files. This is the specification.                                                   | Yes               |
| `docs/`  | Markdown reference published to [beerjson.github.io/beerjson](https://beerjson.github.io/beerjson/) | **No, generated** |
| `types/` | TypeScript and Flow type declarations shipped on npm                                                | **No, generated** |
| `js/`    | Schema-to-docs/types generators, the BeerXML importer, the validator                                | Yes               |
| `tests/` | Sample documents validated against the schema in CI                                                 | Yes               |
| `xsd/`   | BeerXML 1.0 schemas, kept for reference by the importer                                             | Yes               |
| `adr/`   | Architecture Decision Records for format decisions                                                  | Yes               |

`docs/` and `types/` are produced from `json/` by `npm run gen-docs`. Never edit
them by hand: run the generator and commit its output. CI fails a pull request
whose generated files do not match its schemas.

## How to contribute

### Reporting issues

- Search [existing issues](https://github.com/beerjson/beerjson/issues) first
- Use the issue templates
- For a question or an idea that is not yet a concrete proposal, open a
  [discussion](https://github.com/beerjson/beerjson/discussions) instead
- For a security vulnerability, follow the [security policy](.github/SECURITY.md)
  rather than opening a public issue

### Proposing a schema change

Open an issue with the **Schema change** template before writing a pull
request. A schema proposal is judged on:

1. **Real-world need.** Which brewing practice, ingredient property, or piece of
   software cannot be represented today?
2. **Compatibility.** Additive or breaking (see below)?
3. **Fit with existing types.** Does a measurement type in
   `measureable_units.json` already cover it? Does it duplicate a property that
   another type already carries?
4. **Conformance with [SCHEMA_STYLE.md](SCHEMA_STYLE.md).**

Significant or contested decisions are recorded as an
[ADR](adr/) so the reasoning survives. Write one when a decision constrains
future changes, when a reasonable alternative was rejected, or when the
question is likely to be asked again.

### Compatibility

Classify every schema change before proposing it:

- **Additive** (minor release): a new optional property, a new value in an
  existing enum, a new type, a clarified `description`. A document valid against
  the previous version stays valid, and existing software keeps working.
- **Breaking** (major release): renaming or removing a property, changing a
  property's type, adding a `required` entry, removing an enum value, or
  tightening a constraint. Existing files or existing implementations stop
  working.

Breaking changes are batched into a single release rather than dribbled out, and
are announced in [CHANGELOG.md](CHANGELOG.md) with upgrade notes. Where a
transition is possible, the old form is kept alongside the new one and marked
deprecated for at least one release.

Note that the format version (`beerjson.version` inside a document) and the npm
package version are separate things. A pull request that changes the format must
say which one it is bumping.

### Submitting changes

1. **Fork and clone** the repository
2. **Create a branch** from `main`
3. **Make your changes**, following [SCHEMA_STYLE.md](SCHEMA_STYLE.md) for
   anything under `json/`
4. **Add a test document** under `tests/` exercising any new property, and
   regenerate `docs/` and `types/` with `npm run gen-docs`
5. **Run the test suite** and make sure it passes
6. **Add a CHANGELOG entry** under `## [Unreleased]`
7. **Open a pull request** describing what changes and why

### Pull request process

- Every pull request needs at least one approving review from a maintainer
- All CI checks must pass
- Keep pull requests focused: one logical change each
- Schema changes should reference the issue that proposed them

## Development setup

### Prerequisites

Node.js 22 or 24. These are the versions CI runs; the project follows Node's
active and maintenance LTS lines and drops a version once it goes
end-of-life.

### Install

```bash
npm ci
```

The repository uses npm and ships a `package-lock.json`. Do not add a
`yarn.lock` or a `pnpm-lock.yaml`.

### Test

```bash
npm test
```

The suite validates every document under `tests/` against the schema, converts
the BeerXML fixtures in `tests/xml/` and validates the result, checks the
generators against snapshots, and enforces the conventions in
[SCHEMA_STYLE.md](SCHEMA_STYLE.md).

### Regenerate documentation and types

```bash
npm run gen-docs
```

Run this after any change under `json/` and commit the result.

### Git hooks

Optional, and recommended. Point git at the repository's hooks once:

```bash
git config core.hooksPath .githooks
```

The pre-commit hook checks formatting and runs the test suite. The suite takes
under a second.

### Formatting

```bash
npm run format        # write
npm run format:check  # verify
```

Prettier settings live in `.prettierrc`. `docs/` is excluded because it is
generated.

## Commit messages

Write clear commit messages:

```
Short summary (50 chars or less)

Longer description if needed. Explain what and why,
not how (the schema shows how).

Fixes #123
```

The repository merges pull requests by squash, so the pull request title becomes
the commit summary on `main`. Make it descriptive.

## Getting help

- [Discussions](https://github.com/beerjson/beerjson/discussions) for questions
  and ideas
- [Issues](https://github.com/beerjson/beerjson/issues) for bugs and concrete
  proposals

## License

By contributing, you agree that your contributions will be licensed under the
[MIT License](LICENSE).
