// The schemas are JSON Schema 2020-12, so the draft-specific ajv entry point is
// required: the default `ajv` export only understands draft-07 and would reject
// `unevaluatedProperties`.
const Ajv = require('ajv/dist/2020')
// allErrors so a caller sees every problem in a document, not just the first.
const ajv = new Ajv({ allErrors: true })
ajv.addSchema(require('../json/fermentation'))
ajv.addSchema(require('../json/fermentation_step'))
ajv.addSchema(require('../json/fermentable'))
ajv.addSchema(require('../json/hop'))
ajv.addSchema(require('../json/mash_step'))
ajv.addSchema(require('../json/mash'))
ajv.addSchema(require('../json/measureable_units'))
ajv.addSchema(require('../json/misc'))
ajv.addSchema(require('../json/recipe'))
ajv.addSchema(require('../json/style'))
ajv.addSchema(require('../json/water'))
ajv.addSchema(require('../json/culture'))
ajv.addSchema(require('../json/equipment'))
ajv.addSchema(require('../json/packaging'))
ajv.addSchema(require('../json/packaging_vessel'))
ajv.addSchema(require('../json/packaging_graphic'))
ajv.addSchema(require('../json/boil'))
ajv.addSchema(require('../json/boil_step'))
ajv.addSchema(require('../json/timing'))

module.exports = ajv.compile(require('../json/beer'))
