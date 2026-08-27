---
name: Bug report
about: Report an error in the schemas, the documentation, the generated types, or the tooling
title: ''
labels: bug
assignees: ''
---

## Where

- [ ] A schema under `json/` (wrong type, typo, missing constraint, inconsistency)
- [ ] The published documentation at beerjson.github.io/beerjson
- [ ] The generated TypeScript or Flow types
- [ ] The npm package
- [ ] The generators, validator, or BeerXML importer

Name the file and property, for example `water.json` / `WaterBase.flouride`.

## What is wrong

A clear description of the error.

## What you expected

## Reproduction

For a validation problem, the smallest document that shows it:

```json
{
  "beerjson": {
    "version": 1.0
  }
}
```

For a tooling problem, the command you ran and the output you got.

## Environment

Only if relevant to a tooling or npm problem.

- **BeerJSON version**:
- **Node.js version**:
- **Validator library and version**:

## Checklist

- [ ] I have searched existing issues
- [ ] I have checked the published documentation for the property in question
