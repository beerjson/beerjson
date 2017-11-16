The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `HopVarietyBase` (object)

HopVarietyBase provides unique properties to identify individual records of a hop variety

Properties of the `HopVarietyBase` object:

* [name](#name)
* [origin](#origin)
* [alpha_acid_units](#alpha_acid_units)
* [beta_acid_units](#beta_acid_units)

### name
 `name` (string, required)

### origin
 `origin` (string, required)

### alpha_acid_units
 `alpha_acid_units` (number, required)

### beta_acid_units
 `beta_acid_units` (number)

## `VarietyInformation` (object)

VarietyInformation collects the attributes of a hop variety to store as record information

## `HopAdditionType` (object)

HopAdditionType collects the attributes of a hop ingredient for use in a recipe hop bil

Properties of the `HopAdditionType` object:

* [addition](#addition)

### addition
 `addition` (, required)

## `IBUEstimateType` (undefined)

* [method](#method)

### method
 `method` (IBUMethodType)

## `IBUMethodType` (string)