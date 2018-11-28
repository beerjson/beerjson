const mdConvert = require('../js/json-schema-to-markdown.js')
const flowConvert = require('../js/json-schema-to-flow.js')
const tsConvert = require('../js/json-schema-to-ts.js')
const fs = require('fs')

const schemaDir = __dirname + '/../json/'

console.log('Generating docs...')

fs.readdirSync(schemaDir).forEach(fileName =>
  fs.writeFileSync(
    './docs/' + fileName + '.md',
    mdConvert(require(schemaDir + fileName))
  )
)

console.log('Generating Flow types...')

let s = '// @flow\n\n'
fs.readdirSync(schemaDir).forEach(
  fileName => (s = s + flowConvert(require(schemaDir + fileName)))
)
fs.writeFileSync('./flow-typed/beerjson.js', s)

console.log('Generating TypeScript types...')

s = '/// <reference types="angular" />\n\ndeclare namespace BeerJSON {\n'
fs.readdirSync(schemaDir).forEach(
  fileName => (s = s + tsConvert(require(schemaDir + fileName)))
)
s = s + '\n}\n'
fs.writeFileSync('./typings/beerjson.d.ts', s)
