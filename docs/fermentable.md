# FermentableBase

type: object

FermentableBase provides unique properties to identify individual records of fermentable ingredients

## Properties

name

type: string

required

type

required

type": string

            "dry extract",
            "extract",
            "grain",
            "sugar",
            "fruit",
            "juice",
            "honey",
            "other"

origin

type: string

supplier

type: string

grain_group

type: string

            "base",
            "caramel",
            "flaked",
            "roasted",
            "specialty",
            "smoked",
            "adjunct"

# FermentableType

type: object

FermentableType collects the attributes of a fermentable ingredient to store as record information

### Properties

This object should include **all** properties from the [FermentableBase](#fermentablebase) type plus these:

#### yield

required

type: object

At least 1 propety required

No additional properties allowed

##### Properties

fine_grind: [PercentType](measureable_units.json.md#percenttype)

coarse_grind: [PercentType](measureable_units.json.md#percenttype)

fine_coarse_difference: [PercentType](measureable_units.json.md#percenttype)

potential: [PercentType](measureable_units.json.md#percenttype)

#### bitterness

": {
"type": "object",
"additionalProperties": false,
"properties": {
"ibu_per_lb_per_gal": {
"type": "number"
},
"ibu_per_kg_per_liter": {
"type": "number"
},
"ibu": {
"type": "number"
}
}
},
"notes": {
"type": "string"
},
"moisture": {
"$ref": "measureable_units.json#/definitions/PercentType"
},
"alpha_amylase": {
"type": "number"
},
"diastatic_power": {
"type": "number"
},
"protein": {
"$ref": "measureable_units.json#/definitions/PercentType"
},
"soluble_nitrogen_ratio": {
"type": "number"
},
"max_in_batch": {
"$ref": "measureable_units.json#/definitions/PercentType"
},
"recommend_mash": {
"type": "boolean"
},
"color": {
"$ref": "measureable_units.json#/definitions/ColorType"
},
"inventory": {
"type": "object",
"additionalProperties": false,
"properties": {
"amount": {
"oneOf": [
{
"$ref": "measureable_units.json#/definitions/VolumeType"
},
{
"$ref": "measureable_units.json#/definitions/MassType"
}
]
}
}
}
}
}
],
"required": ["yield", "color"]
},
