/**
 * Entry point for the @beerjson/beerjson package.
 *
 *   const beerjson = require('@beerjson/beerjson')
 *
 *   const { valid, errors } = beerjson.validate(document)
 *   beerjson.schemas['hop.json']       // the raw JSON Schema
 *   beerjson.rootSchema               // beer.json, the document entry point
 *
 * The schemas are also importable directly, which is what a consumer wanting
 * to drive its own validator should do:
 *
 *   require('@beerjson/beerjson/json/hop.json')
 */

const SCHEMA_FILES = [
  'beer.json',
  'boil.json',
  'boil_step.json',
  'culture.json',
  'equipment.json',
  'fermentable.json',
  'fermentation.json',
  'fermentation_step.json',
  'hop.json',
  'mash.json',
  'mash_step.json',
  'measureable_units.json',
  'misc.json',
  'packaging.json',
  'packaging_graphic.json',
  'packaging_vessel.json',
  'recipe.json',
  'style.json',
  'timing.json',
  'water.json'
]

const schemas = {}
for (const file of SCHEMA_FILES) {
  schemas[file] = require('./json/' + file)
}

// ajv compiles all 20 schemas on first use. Deferred so that requiring this
// package to read the schemas costs nothing.
let compiled = null
const validator = () => {
  if (!compiled) compiled = require('./js/validation.js')
  return compiled
}

/**
 * Validates a BeerJSON document against the schema.
 *
 * @param {object|string} document A parsed document, or a JSON string.
 * @returns {{valid: boolean, errors: Array<{path: string, message: string, params: object}>}}
 */
const validate = document => {
  let data = document

  if (typeof document === 'string') {
    try {
      data = JSON.parse(document)
    } catch (error) {
      return {
        valid: false,
        errors: [{ path: '/', message: 'Invalid JSON: ' + error.message, params: {} }]
      }
    }
  }

  const validateFn = validator()

  if (validateFn(data)) {
    return { valid: true, errors: [] }
  }

  return {
    valid: false,
    errors: (validateFn.errors || []).map(error => ({
      path: error.instancePath || '/',
      message: error.message || 'validation failed',
      params: error.params || {}
    }))
  }
}

module.exports = {
  validate,
  schemas,
  rootSchema: schemas['beer.json'],
  schemaFiles: SCHEMA_FILES
}
