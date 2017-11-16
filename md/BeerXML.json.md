The schema defines the following properties:

* [beer_xml](#beer_xml)

# beer_xml
 `beer_xml` (object, required)

Root element of all BeerXML 3 documents.

Properties of the `beer_xml` object:

* [version](#version)
* [fermentables](#fermentables)
* [miscellaneous_ingredients](#miscellaneous_ingredients)
* [hop_varieties](#hop_varieties)
* [cultures](#cultures)
* [profiles](#profiles)
* [styles](#styles)
* [procedure](#procedure)
* [recipes](#recipes)

## version
 `version`

## fermentables
 `fermentables` (object)

Records for any ingredient that contributes to the gravity of the beer.

Properties of the `fermentables` object:

* [fermentable](#fermentable)

### fermentable
 `fermentable` (, required)

## miscellaneous_ingredients
 `miscellaneous_ingredients` (object)

Records for adjuncts which do not contribute to the gravity of the beer.

Properties of the `miscellaneous_ingredients` object:

* [miscellaneous](#miscellaneous)

### miscellaneous
 `miscellaneous` (, required)

## hop_varieties
 `hop_varieties` (object)

Records detailing the many properties of unique hop varieties.

Properties of the `hop_varieties` object:

* [hop](#hop)

### hop
 `hop` (, required)

## cultures
 `cultures` (object)

Records detailing the wide array of unique yeast cultures.

Properties of the `cultures` object:

* [yeast](#yeast)

### yeast
 `yeast` (, required)

## profiles
 `profiles` (object)

Records for regional water profiles used in style-specific beer brewing.

Properties of the `profiles` object:

* [water](#water)

### water
 `water` (, required)

## styles
 `styles` (object)

Records detailing the characteristics of the beer styles for which judging guidelines have been established.

Properties of the `styles` object:

* [style](#style)

### style
 `style` (, required)

## procedure
 `procedure` (object)

A collection of steps providing process information for common mashing procedures.

Properties of the `procedure` object:

* [mash](#mash)

### mash
 `mash` (, required)

## recipes
 `recipes` (object)

Records containing a minimal collection of the description of ingredients, procedures and other required parameters necessary to recreate a batch of beer.

Properties of the `recipes` object:

* [recipe](#recipe)

### recipe
 `recipe` (, required)