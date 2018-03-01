The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## FermentationStageType
`FermentationStageType` (object)

Properties of the `FermentationStageType` object:

* [aging](#aging)
* [temperature](#temperature)

### aging
 `aging` ([TimeType](measureable_units.json.md/#timetype), required)

### temperature
 `temperature` ([TemperatureType](measureable_units.json.md/#temperaturetype), required)

## RecipeType
`RecipeType` (object)

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
* [acidity](#acidity)
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
 `created` ([DateType](measureable_units.json.md/#datetype))

### batch_size
 `batch_size` ([VolumeType](measureable_units.json.md/#volumetype), required)

### boil_size
 `boil_size` ([VolumeType](measureable_units.json.md/#volumetype), required)

### boil_time
 `boil_time` ([TimeType](measureable_units.json.md/#timetype), required)

### efficiency
 `efficiency` ([PercentType](measureable_units.json.md/#percenttype))

### style
 `style` (RecipeStyleType)

### ingredients
 `ingredients` (object, required)

Properties of the `ingredients` object:

* [fermentable_bill](#fermentable_bill)
* [hop_bill](#hop_bill)
* [adjuncts](#adjuncts)
* [yeast_additions](#yeast_additions)
* [water_profile](#water_profile)

#### fermentable_bill
 `fermentable_bill` ([FermentableAdditionType](fermentables.json.md/#fermentableadditiontype), required)

#### hop_bill
 `hop_bill` ([HopAdditionType](hops.json.md/#hopadditiontype))

#### adjuncts
 `adjuncts` ([MiscellaneousAdditionType](misc.json.md/#miscellaneousadditiontype))

#### yeast_additions
 `yeast_additions` ([YeastAdditionType](yeast.json.md/#yeastadditiontype))

#### water_profile
 `water_profile` ([WaterAdditionType](water.json.md/#wateradditiontype))

### mash
 `mash` ([MashProcedureType](mash.json.md/#mashproceduretype))

### notes
 `notes` (string)

### original_gravity
 `original_gravity` ([DensityType](measureable_units.json.md/#densitytype))

### final_gravity
 `final_gravity` ([DensityType](measureable_units.json.md/#densitytype))

### alcohol_by_volume
 `alcohol_by_volume` ([PercentType](measureable_units.json.md/#percenttype))

### ibu_estimate
 `ibu_estimate` ([IBUEstimateType](hops.json.md/#ibuestimatetype))

 ### acidity
 `acidity` ([acidity](measureable_units.json.md/#acidityType))
 
### color_estimate
 `color_estimate` ([ColorType](measureable_units.json.md/#colortype))

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

## RecipeStyleType
`RecipeStyleType` (undefined)

Recipe Style Type Description