const mdFormatter = require('./markdown-formatter.js')
const parser = require('./parser.js')
const mdParse = parser(mdFormatter)
console.log(mdParse)
module.exports = mdParse
