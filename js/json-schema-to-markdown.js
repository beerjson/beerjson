const mdFormatter = require('./markdown-formatter.js')
const parser = require('./parser.js')
const mdParse = parser(mdFormatter)

module.exports = mdParse
