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
    const rawJSON = fs.readFileSync(path, 'utf8')

    expect(JsonLint.parse(rawJSON)).toBeValidBeerJson()
  })
}

const convertFromXML = (dataDir, convertedDir) => {
  fs.readdirSync(dataDir).forEach(file => {
    const xmlString = fs.readFileSync(dataDir + file, 'utf8')
    const recipe = importFromBeerXml(xmlString)
    fs.writeFileSync(convertedDir + file.replace('.xml', '.json'), recipe)
  })
}

const testsDir = __dirname

const runTests = () => {
  fs.readdirSync(testsDir).forEach(dir => {
    if (dir !== 'xml' && dir !== 'samples.test.js') {
      fs.readdirSync(testsDir + '/' + dir).forEach(file => {
        testJson(testsDir + '/' + dir + '/' + file)
      })
    }
  })
}

convertFromXML(testsDir + '/xml/', testsDir + '/converted/')

runTests()
