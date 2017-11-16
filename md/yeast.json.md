The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## CultureBase
`CultureBase` (object)

The descriptive base type for both yeast culture records and yeast recipe additions. Provides unique properties to identify individual records of a yeast culture

Properties of the `CultureBase` object:

* [name](#name)
* [type](#type)
* [form](#form)
* [laboratory](#laboratory)
* [product_id](#product_id)

### name
 `name` (string, required)

### type
 `type` (string, enum, required)

This element must be one of the following enum values:

* `ale`
* `lager`
* `wheat`
* `wine`
* `champagne`

### form
 `form` (string, enum, required)

This element must be one of the following enum values:

* `liquid`
* `dry`
* `slant`
* `culture`

### laboratory
 `laboratory` (string, required)

### product_id
 `product_id` (string, required)

## CultureInformation
`CultureInformation` (object)

CultureInformation collects the attributes of a yeast culture to store as record information

## YeastAdditionType
`YeastAdditionType` (object)

YeastAdditionType collects the attributes of a yeast ingredient for use in a recipe

Properties of the `YeastAdditionType` object:

* [addition](#addition)

### addition
 `addition` (, required)

The object must be one of the following types:

* `undefined`