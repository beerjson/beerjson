const Ajv = require('ajv')
const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04'))
ajv.addSchema(require('../json/grain'))
ajv.addSchema(require('../json/hops'))
ajv.addSchema(require('../json/mash_step'))
ajv.addSchema(require('../json/mash'))
ajv.addSchema(require('../json/measureable_units'))
ajv.addSchema(require('../json/misc'))
ajv.addSchema(require('../json/recipes'))
ajv.addSchema(require('../json/style'))
ajv.addSchema(require('../json/water'))
ajv.addSchema(require('../json/yeast'))

const validate = ajv.compile(require('../json/BeerXML'))

const testJson = path => {
  console.log(path)
  if (!validate(require(path))) {
    console.log(validate.errors)
    process.exit(1)
  }
}

testJson('./min-valid-recipe')
testJson('./MedievalAle')
testJson('./FermentableRecord')
testJson('./HoppedExtract')
testJson('./CrystalMaltSpecialtyGrain')
testJson('./IrishMoss')
testJson('./CorianderSpice')
testJson('./HopWithRequiredFieldsOnly')
testJson('./HopRecordWithAllFields')
testJson('./YeastWithRequiredFieldsOnly')
testJson('./YeastWithMorePopularFields')
testJson('./SampleWaterProfile')
testJson('./StyleBohemianPilsner.json')
testJson('./StyleDryIrishStoutWithAllFields')
