The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## FermentableBase
`FermentableBase` (object)

FermentableBase provides unique properties to identify individual records of fermentable ingredients

Properties of the `FermentableBase` object:

* [name](#name)
* [type](#type)
* [color](#color)
* [origin](#origin)
* [supplier](#supplier)
* [group](#group)

### name
 `name` (string, required)

### type
 `type` (string, enum, required)

This element must be one of the following enum values:

* `adjunct`
* `dry extract`
* `extract`
* `grain`
* `sugar`

### color
 `color` ([ColorType](measureable_units.json.md/#colortype), required)

### origin
 `origin` (string)

### supplier
 `supplier` (string)

### group
 `group` (string, enum)

This element must be one of the following enum values:

* `base`
* `caramel`
* `flakes`
* `roasted`
* `speciality`
* `wheat`

## FermentableType
`FermentableType` (object)

FermentableType collects the attributes of a fermentable ingredient to store as record information

## FermentableAdditionType
`FermentableAdditionType` (object)

FermentableAdditionType collects the attributes of a fermentable ingredient for use in a recipe grain bill

Properties of the `FermentableAdditionType` object:

* [addition](#addition)

### addition
 `addition` (, required)