const flowFormatter = require('./flowtype-formatter.js')
const parser = require('./parser.js')
const flowParse = parser(flowFormatter)

module.exports = flowParse
