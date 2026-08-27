# ADR-0001: Record format decisions as ADRs

**Status:** Accepted
**Date:** 2026-08-21

## Context

BeerJSON has been developed since 2017 by a working group whose membership has
changed over that time. Several decisions embedded in the schemas cannot be
recovered from the files themselves, and the reasoning survives only in issue
threads, if at all:

- Why `wheat` was dropped from the culture types that BeerXML 1.0 had (#217).
  The issue explicitly asks whether this was deliberate or an oversight, and
  nobody can answer.
- Why 20 object types omit `additionalProperties` while every other type
  declares it. The answer (draft-07 cannot express it next to `allOf`) is
  invisible in the schema and looks like inconsistency.
- What number belongs in a document's `version` field, given that the test
  corpus contains both `2.01` and `2.06` while the published format is 1.0.
- Why `time` on a boil addition counts backwards from the end of the step while
  a fermentation addition counts forwards from the start (#220).

Each of these has cost someone an issue, and in some cases years of waiting for
an answer that never came. The cost is higher than for an ordinary library
because the format is implemented by software the working group does not
control: a decision reversed later invalidates other people's files.

## Decision

Significant format decisions are recorded as Architecture Decision Records in
`adr/`, numbered sequentially, following `adr/TEMPLATE.md`. An ADR is opened as
part of the pull request that implements the decision, and is immutable once
accepted: a changed decision means a new ADR that supersedes the old one.

An ADR is warranted when the decision constrains future changes, when a
reasonable alternative was rejected, or when the question is likely to be asked
again. Routine additive changes do not need one.

## Alternatives considered

**Issue threads as the record.** This is the status quo. Issues capture
discussion well but not conclusions: #217 and #104 are both threads where the
decision is either absent or buried, and neither is discoverable from the schema
it concerns. Issues also get closed, and a closed issue reads as resolved even
when it records no answer.

**Comments in the schema files.** JSON Schema has `$comment`, but the schemas
are the specification and are consumed as data by generators and validators.
Loading them with rationale would bloat the published artefact, and there is
nowhere in a JSON file to record a decision that spans several types.

**The GitHub wiki.** Already enabled and already unused. Wiki pages are not
reviewed, not versioned alongside the change they describe, and not visible in a
pull request diff.

## Consequences

- **Easier:** answering "why is it like this", onboarding new working group
  members, and revisiting a decision deliberately rather than by accident.
- **Harder:** slightly more work per significant change, and a judgement call
  about what counts as significant.
- **Breaking:** nothing.
