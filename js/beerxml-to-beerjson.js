const XML = require('pixl-xml')
const _ = require('lodash')

const parseBool = s => s === 'TRUE'
const isBIAB = mashName => mashName.includes('BIAB')

// TODO: May be it is not so good idea. But At the moment I can't figure out best practices for rounding operations.
const dirtyRound = n => Math.round(n * 100000000000) / 100000000000

const importFromBeerXml = xml => {
  try {
    const recipe = XML.parse(xml)
    console.log(recipe)
    return JSON.stringify(recipe)
  } catch (err) {
    console.log('XML Parser Error: ' + err)
    throw err
  }
}

module.exports = importFromBeerXml
