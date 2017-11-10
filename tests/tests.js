var Ajv = require('ajv');
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));

const schema = require('../json/BeerXML.json')
const data = require('./min-valid-recipe.json')

var validate = ajv.compile(schema);
var valid = validate(data);
if (!valid) console.log(validate.errors);