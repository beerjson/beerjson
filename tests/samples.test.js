const JsonLint = require('json-dup-key-validator')
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
    // Same layout prettier's json-stringify parser produces, without depending
    // on prettier at test time.
    const recipe =
      JSON.stringify(JSON.parse(importFromBeerXml(xmlString)), null, 2) + '\n'
    fs.writeFileSync(convertedDir + file.replace('.xml', '.json'), recipe)
  })
}

const testsDir = __dirname

// Every directory under tests/ holds BeerJSON documents to validate, except
// xml/, whose BeerXML sources are converted into converted/ first.
const runTests = () => {
  fs.readdirSync(testsDir)
    .filter(entry => entry !== 'xml' && !entry.startsWith('.'))
    .filter(entry => fs.statSync(testsDir + '/' + entry).isDirectory())
    .forEach(dir => {
      fs.readdirSync(testsDir + '/' + dir).forEach(file => {
        testJson(testsDir + '/' + dir + '/' + file)
      })
    })
}

convertFromXML(testsDir + '/xml/', testsDir + '/converted/')

runTests()
