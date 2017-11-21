const parse = require('../js/json-schema-to-markdown.js')
const fs = require('fs')

const schemaDir = __dirname + '/../json/'

fs
  .readdirSync(schemaDir)
  .forEach(j =>
    fs.writeFileSync('./docs/' + j + '.md', parse(require(schemaDir + j)))
  )
