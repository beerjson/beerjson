const importFromBeerXml = require('../js/beerxml-to-beerjson')

const JsonLint = require('json-dup-key-validator')
const Ajv = require('ajv')
const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04'))
ajv.addSchema(require('../json/fermentation'))
ajv.addSchema(require('../json/fermentation_step'))
ajv.addSchema(require('../json/fermentable'))
ajv.addSchema(require('../json/hop'))
ajv.addSchema(require('../json/mash_step'))
ajv.addSchema(require('../json/mash'))
ajv.addSchema(require('../json/measureable_units'))
ajv.addSchema(require('../json/misc'))
ajv.addSchema(require('../json/recipe'))
ajv.addSchema(require('../json/style'))
ajv.addSchema(require('../json/water'))
ajv.addSchema(require('../json/culture'))
ajv.addSchema(require('../json/equipment'))
ajv.addSchema(require('../json/packaging'))
ajv.addSchema(require('../json/packaging_vessel'))
ajv.addSchema(require('../json/boil'))
ajv.addSchema(require('../json/boil_step'))

const validate = ajv.compile(require('../json/beer'))
const fs = require('fs')

expect.extend({
  toBeValidBeerJson(received) {
    const passed = validate(received)
    return {
      message: () => JSON.stringify(validate.errors, null, 2),
      pass: passed
    }
  }
})

const testJson = path => {
  test('validate JSON ' + path, () => {
    const rawJSON = fs.readFileSync(__dirname + '/' + path + '.json', 'utf8')

    expect(JsonLint.parse(rawJSON)).toBeValidBeerJson()
  })
}

const testXMLtoJSON = path => {
  test('XML -> JSON ' + path, () => {
    const xmlString = fs.readFileSync(__dirname + '/' + path + '.xml', 'utf8')
    const recipe = importFromBeerXml(xmlString)

    expect(JsonLint.parse(recipe)).toBeValidBeerJson()
  })
}

testJson('generic/beer')
testJson('generic/cultures')
testJson('generic/equipment')
testJson('generic/fermentable')
testJson('generic/hop_varieties')
testJson('generic/miscellaneous_ingredients')
testJson('generic/mash')
testJson('generic/fermentation')
testJson('generic/water')
testJson('generic/recipes')
testJson('generic/styles')
testJson('generic/packaging')
testJson('generic/boil')

testJson('real/MedievalAle')
testJson('real/FermentableRecord')
testJson('real/HoppedExtract')
testJson('real/CrystalMaltSpecialtyGrain')
testJson('real/IrishMoss')
testJson('real/CorianderSpice')
testJson('real/HopWithRequiredFieldsOnly')
testJson('real/HopRecordWithAllFields')
testJson('real/YeastWithRequiredFieldsOnly')
testJson('real/YeastWithMorePopularFields')
testJson('real/SampleWaterProfile')
testJson('real/StyleBohemianPilsner')
testJson('real/StyleDryIrishStoutWithAllFields')
testJson('real/MashSingleStepInfusion')
testJson('real/MashTwoStepTemperature')
testJson('real/BrettDosedKegsSaison')
testJson('real/boil_whirlpool_chill')

testXMLtoJSON('data/GenericOneHF')
testXMLtoJSON('data/Kolsh')
testXMLtoJSON('data/Londonpride')
testXMLtoJSON('data/punk-ipa-2010-current')
testXMLtoJSON('data/RRSummerBitter')

testJson('styles/bjcp_styleguide-2015')
testJson('styles/ba_styleguide-2017')
