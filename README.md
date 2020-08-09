[![Build Status](https://travis-ci.org/beerjson/beerjson.svg?branch=master)](https://travis-ci.org/beerjson/beerjson)
[![Join the chat at https://gitter.im/beerjson/beerjson](https://badges.gitter.im/beerjson/beerjson.svg)](https://gitter.im/beerjson/beerjson?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# Welcome to BeerJSON 2.0-draft working group repository

This is a repository for development of BeerJSON interchange format
specification. It is based on yet unfinished
[BeerXML 2 standard (PDF)](http://users.speakeasy.net/%7Eantonw/beer_xml/BeerXML_v2_01.pdf).

## Documentation

Current documentation is published at https://beerjson.github.io/beerjson/

## Overview of significant changes from BeerXML 1.0

- Addition timing object supports any ingredient being added to any process step on a basis of time, temperature, or gravity.

- Ingredient addition property of time is now duration to improve clarity, and decrease confusion with new timing object properties.

- All process steps include temperature, pH, and gravity.

- Grain absorption rate is a property of the mash tun.

- Sparge, and wort run offs are treated as mash steps.

- Explicit boil steps to support production of more complex boil procedures such as raw ales, and common whirlpooling processes.

- Yeast schema becomes culture schema, for clearer support for non\*yeast cultures.

- Extensive ingredient properties, such as hop oil content, culture floculation, pof, glucoamylase production, and full support for maltster spec sheet properties.

- Explicit integrated support for common sour wort, and sour beer production. Souring steps can be included in mash, boil, or fermentation.

- Explicit support for different chilling methods, forced vs passive, in line vs batch chilling.

- Explicit support for all efficiency types, conversion, lauter, mash, and brewhouse.

- Explicit support for fermenting under pressure.

## Structure of the repository

- Current development is done in the Master branch.
- Each published version has its own branch or tag
- Changes are proposed by creating a
  [pull request](https://github.com/beerjson/beerjson/pulls) that should be
  reviewed by members of working group.
- Issues, questions and suggestions should be posted to
  [Issues](https://github.com/beerjson/beerjson/issues)

## CI and tests

For safe manipulations with json schemas, we have set of tests in the tests
folder. We check that json is valid for serializations and json is valid
according to the beerjson schema. To run tests do following steps after repo
fork or clone

```bash
yarn
yarn test
```

or

```bash
npm i
npm test -- -u
npm run gen-docs
npm run precommit
```

## Version

This is BeerJSON 2.0-draft (currently in progress)

## State

This spec is unfinished yet, JSON schema is being converted from BeerXML 2.0 XSD
files.

## How to contribute

- If you have an issue or question related to the schema -
  [submit an issue](https://github.com/beerjson/beerjson/issues)
- To propose a schema change
  [submit a pull request](https://github.com/beerjson/beerjson/pulls).
  [Learn more about pull requests](https://help.github.com/articles/about-pull-requests/).
  Note that one of the benefits of using json schemas is a possibility to use
  tests and CI. Please ensure that tests are green before submitting a pull
  request. And all new entities in the json schema are covered.
- To chat with others, join our Gitter chat:
  [![Join the chat at https://gitter.im/beerjson/beerjson](https://badges.gitter.im/beerjson/beerjson.svg)](https://gitter.im/beerjson/beerjson?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
