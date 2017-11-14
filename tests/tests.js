const Ajv = require('ajv')
const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

const validate = ajv.compile(require('../beerjson.json'))

const testJson = path => {
  if (!validate(require(path))) {
    console.log(validate.errors)
    process.exit(1)
  }
}

testJson('./RRBrownAle.json')
