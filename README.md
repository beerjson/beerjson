# beerjson
BeerJSON format

**Why new format description**
* links on reddit
* talk to beerxml 2.0 developer and other guys

**Why json**
* xml is good but not ideal for data serialization. Since nodejs world work with json out of the box.
* it is possible to validate json structures using schemas and it is possible to prepare validation tests. Tests are better than text description.
* at the moment we develop beercomputer tool. And, ideally, we would like this to be a main tool for any homebrewer, and probably for small craft brewery. Tool is based on the js and node stack so json format is ideal for this purpose.

**Done things**
* carefully rewrite existing xsd's to json schemas for the beerxml 1.0 version and beerxml 2.0 draft.
* prepare validation tests and CI
* beerxml 1.0 [![Build Status](https://travis-ci.org/beerjson/beerjson.svg?branch=preparing-beerjson-2.0)](https://travis-ci.org/beerjson/beerjson)
* beerxml 2.0 draft [![Build Status](https://travis-ci.org/beerjson/beerjson.svg?branch=beerjson-1.0)](https://travis-ci.org/beerjson/beerjson)
* prepare bare bone for the project, see this repository

**TODO**
* convene a committee, prepare and polish beerjson format with brewers community
* maintain and use it in brewcomputer tool