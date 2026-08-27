---
name: Schema change
about: Propose a change to the BeerJSON format
title: ''
labels: enhancement
assignees: ''
---

## What cannot be represented today

The brewing practice, ingredient property, measurement, or piece of software
that the format cannot currently express. Be concrete: a proposal that starts
from a real file someone needs to write is much easier to evaluate than one that
starts from a gap in the type hierarchy.

## Proposed change

Which types and properties change, and how.

## Example

A fragment of BeerJSON showing the proposal in use.

```json
{
  "beerjson": {
    "version": 1.0
  }
}
```

## Compatibility

- [ ] **Additive.** A document valid against the current release stays valid,
      and existing software keeps working.
- [ ] **Breaking.** Renames or removes a property, changes a property's type,
      adds a `required` entry, or removes an enum value.

If breaking, say what would stop working and whether a deprecation period is
possible (see [SCHEMA_STYLE.md](../../SCHEMA_STYLE.md)).

## Alternatives

Anything else that would solve the problem, including doing nothing. If an
existing type nearly covers this, say why it does not.

## Software support

Which applications would read or write this, and are you in a position to
implement it in one of them? A property no software writes is a property nobody
can rely on reading.

## Checklist

- [ ] I have searched existing issues and discussions
- [ ] I have checked whether `measureable_units.json` already has a suitable
      measurement type
- [ ] I have read [SCHEMA_STYLE.md](../../SCHEMA_STYLE.md)
