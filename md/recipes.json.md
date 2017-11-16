The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `FermentationStageType` (object)

Properties of the `FermentationStageType` object:

* [aging](#aging)
* [temperature](#temperature)

### aging
 `aging` (, required)

### temperature
 `temperature` (, required)

## `RecipeType` (object)

RecipeType composes the information stored in a beer_xml recipe

Properties of the `RecipeType` object:

* [name](#name)
* [type](#type)
* [author](#author)
* [coauthor](#coauthor)
* [created](#created)
* [batch_size](#batch_size)
* [boil_size](#boil_size)
* [boil_time](#boil_time)
* [efficiency](#efficiency)
* [style](#style)
* [ingredients](#ingredients)
* [mash](#mash)
* [notes](#notes)
* [original_gravity](#original_gravity)
* [final_gravity](#final_gravity)
* [alcohol_by_volume](#alcohol_by_volume)
* [ibu_estimate](#ibu_estimate)
* [color_estimate](#color_estimate)
* [carbonation](#carbonation)
* [fermentation_stages](#fermentation_stages)
* [taste](#taste)
* [calories_per_pint](#calories_per_pint)

### name
 `name` (string, required)

### type
 `type` (string, enum, required)

This element must be one of the following enum values:

* `extract`
* `partial mash`
* `all grain`

### author
 `author` (string, required)

### coauthor
 `coauthor` (string)

### created
 `created`

### batch_size
 `batch_size` (, required)

### boil_size
 `boil_size` (, required)

### boil_time
 `boil_time` (, required)

### efficiency
 `efficiency`

### style
 `style` (RecipeStyleType)

### ingredients
 `ingredients` (object, required)

Properties of the `ingredients` object:

* [grain_bill](#grain_bill)
* [hop_bill](#hop_bill)
* [adjuncts](#adjuncts)
* [yeast_additions](#yeast_additions)
* [water_profile](#water_profile)

#### grain_bill
 `grain_bill` (, required)

#### hop_bill
 `hop_bill`

#### adjuncts
 `adjuncts`

#### yeast_additions
 `yeast_additions`

#### water_profile
 `water_profile`

### mash
 `mash`

### notes
 `notes` (string)

### original_gravity
 `original_gravity`

### final_gravity
 `final_gravity`

### alcohol_by_volume
 `alcohol_by_volume`

### ibu_estimate
 `ibu_estimate`

### color_estimate
 `color_estimate`

### carbonation
 `carbonation` (number)

### fermentation_stages
 `fermentation_stages` (object)

Properties of the `fermentation_stages` object:

* [primary](#primary)
* [secondary](#secondary)
* [tertiary](#tertiary)
* [conditioning](#conditioning)

#### primary
 `primary` (FermentationStageType)

#### secondary
 `secondary` (FermentationStageType)

#### tertiary
 `tertiary` (FermentationStageType)

#### conditioning
 `conditioning` (FermentationStageType)

### taste
 `taste` (object)

Properties of the `taste` object:

* [notes](#notes)
* [rating](#rating)

#### notes
 `notes` (string, required)

#### rating
 `rating` (number, required)

### calories_per_pint
 `calories_per_pint` (number)

## `RecipeStyleType` (undefined)

Recipe Style Type Description