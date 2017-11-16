var parse = require('./js/json-schema-to-markdown.js')
var fs = require('fs')

var jsons = fs.readdirSync('./json')

jsons.forEach(j => {
  var schema = fs.readFile('./json/' + j, (err, data) => {
    var markdown = parse(JSON.parse(data))
    fs.writeFileSync('./md/' + j + '.md', markdown)
  })
})
