const tsFormatter = require('./typescript-formatter.js')
const parser = require('./parser.js')
const tsConvert = parser(tsFormatter)

module.exports = tsConvert
