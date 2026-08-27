const mdConvert = require('../js/json-schema-to-markdown.js')
const flowConvert = require('../js/json-schema-to-flow.js')
const tsConvert = require('../js/json-schema-to-ts.js')
const fs = require('fs')

const schemaDir = __dirname + '/../json/'

const schemaFiles = fs.readdirSync(schemaDir)

// Name the schema that failed: the generators throw from deep inside the
// recursive walk, where the stack trace alone does not say which file it was on.
const convert = (convertFn, fileName) => {
  try {
    return convertFn(require(schemaDir + fileName))
  } catch (error) {
    error.message = `${fileName}: ${error.message}`
    throw error
  }
}

console.log('Generating docs...')

schemaFiles.forEach(fileName =>
  fs.writeFileSync('./docs/' + fileName + '.md', convert(mdConvert, fileName))
)

console.log('Generating Flow types...')

let s = '// @flow\n\n'
schemaFiles.forEach(fileName => (s = s + convert(flowConvert, fileName)))
fs.writeFileSync('./types/flow-typed/beerjson.js', s)

console.log('Generating TypeScript types...')

s = 'declare namespace BeerJSON {\n'
schemaFiles.forEach(fileName => (s = s + convert(tsConvert, fileName)))
s = s + '\n}\n'
fs.writeFileSync('./types/ts/beerjson.d.ts', s)

console.log('Done.')
