const mdConvert = require('../js/json-schema-to-markdown.js')
const flowConvert = require('../js/json-schema-to-flow.js')
const fs = require('fs')

const schemaDir = __dirname + '/../json/'

console.log('Generating docs...')

fs.readdirSync(schemaDir).forEach(fileName =>
  fs.writeFileSync(
    './docs/' + fileName + '.md',
    mdConvert(require(schemaDir + fileName))
  )
)

console.log('Generating types...')

let s = '// @flow\n\n'
fs.readdirSync(schemaDir).forEach(
  fileName => (s = s + flowConvert(require(schemaDir + fileName)))
)
fs.writeFileSync('./flow-typed/beerjson.js', s)
