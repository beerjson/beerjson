const fs = require('fs')
const path = require('path')
const Ajv = require('ajv')
const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04'))
ajv.addSchema(
  fs
    .readdirSync(path.resolve(__dirname, '../json/'))
    .map(json => require(path.resolve(__dirname, '../json/', json)))
)

module.exports = ajv.compile(require('../json/beer'))
