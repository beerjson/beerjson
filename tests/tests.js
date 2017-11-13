const rootSchema = require('../json/BeerXML.json')
const grain = require('../json/grain.json')
const hops = require('../json/hops.json')
const mashStep = require('../json/mash_step.json')
const mash = require('../json/mash.json')
const measureableUnits = require('../json/measureable_units.json')
const misc = require('../json/misc.json')
const recipes = require('../json/recipes.json')
const style = require('../json/style.json')
const water = require('../json/water.json')
const yeast = require('../json/yeast.json')

var Ajv = require('ajv');
var ajv = new Ajv();
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
ajv.addSchema(grain);
ajv.addSchema(hops);
ajv.addSchema(mashStep);
ajv.addSchema(mash);
ajv.addSchema(measureableUnits);
ajv.addSchema(misc);
ajv.addSchema(recipes);
ajv.addSchema(style);
ajv.addSchema(water);
ajv.addSchema(yeast);

const data = require('./min-valid-recipe.json')

var validate = ajv.compile(rootSchema);
var valid = validate(data);
if (!valid) console.log(validate.errors);