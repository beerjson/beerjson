const JsonLint = require('json-dup-key-validator')
const prettier = require('prettier')
const fs = require('fs')
const importFromBeerXml = require('../js/beerxml-to-beerjson')
const validate = require('./../js/validation')

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
    const rawRecipe = importFromBeerXml(xmlString)
    const recipe = prettier.format(rawRecipe, { parser: 'json-stringify' })
    fs.writeFileSync(convertedDir + file.replace('.xml', '.json'), recipe)
  })
}

const testsDir = __dirname

const runTests = () => {
  fs.readdirSync(testsDir).forEach(dir => {
    if (dir !== 'xml' && dir !== 'samples.test.js' && !dir.startsWith('.')) {
      fs.readdirSync(testsDir + '/' + dir).forEach(file => {
        testJson(testsDir + '/' + dir + '/' + file)
      })
    }
  })
}

convertFromXML(testsDir + '/xml/', testsDir + '/converted/')

runTests()
