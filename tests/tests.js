const Ajv = require('ajv')
const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))
ajv.addSchema(require('../json/grain.json'))
ajv.addSchema(require('../json/hops.json'))
ajv.addSchema(require('../json/mash_step.json'))
ajv.addSchema(require('../json/mash.json'))
ajv.addSchema(require('../json/measureable_units.json'))
ajv.addSchema(require('../json/misc.json'))
ajv.addSchema(require('../json/recipes.json'))
ajv.addSchema(require('../json/style.json'))
ajv.addSchema(require('../json/water.json'))
ajv.addSchema(require('../json/yeast.json'))

const validate = ajv.compile(require('../json/BeerXML.json'))

const testJson = path => {
  console.log(path)
  if (!validate(require(path))) {
    console.log(validate.errors)
    process.exit(1)
  }
}

testJson('./min-valid-recipe.json')
testJson('./MedievalAle.json')
testJson('./FermentableRecord.json')
testJson('./HoppedExtract.json')
