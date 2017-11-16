The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `MiscellaneousBase` (object)

MiscellaneousBase provides unique properties to identify individual records of adjunct ingredients

Properties of the `MiscellaneousBase` object:

* [name](#name)
* [type](#type)
* [use](#use)

### name
 `name` (string, required)

### type
 `type` (string, enum, required)

This element must be one of the following enum values:

* `spice`
* `fining`
* `water agent`
* `herb`
* `fruit`
* `flavor`
* `other`

### use
 `use` (string, enum, required)

This element must be one of the following enum values:

* `boil`
* `mash`
* `primary`
* `secondary`
* `bottling`

## `MiscellaneousType` (object)

MiscellaneousType collects the attributes of a adjunct ingredient to store as record information

## `MiscellaneousAdditionType` (object)

MiscellaneousAdditionType collects the attributes of an adjunct ingredient for use in a recipe adjunct bill

Properties of the `MiscellaneousAdditionType` object:

* [addition](#addition)

### addition
 `addition` (, required)

The object must be one of the following types:

* `undefined`