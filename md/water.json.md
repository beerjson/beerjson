The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `WaterBase` (object)

WaterBase provides unique properties to identify individual records of regional brewing water

Properties of the `WaterBase` object:

* [name](#name)
* [calcium](#calcium)
* [bicarbonate](#bicarbonate)
* [sulfate](#sulfate)
* [chloride](#chloride)
* [sodium](#sodium)
* [magnesium](#magnesium)

### name
 `name` (string, required)

### calcium
 `calcium` (number, required)

### bicarbonate
 `bicarbonate` (number, required)

### sulfate
 `sulfate` (number, required)

### chloride
 `chloride` (number, required)

### sodium
 `sodium` (number, required)

### magnesium
 `magnesium` (number, required)

## `WaterType` (object)

WaterType collects the attributes of a regional brewing water to store as record information

## `WaterAdditionType` (object)

WaterAdditionType collects the attributes of a water salt addition for use in a recipe

Properties of the `WaterAdditionType` object:

* [addition](#addition)

### addition
 `addition` (, required)