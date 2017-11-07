The schema defines the following properties:

# `beer_xml` (object, required)

Root element of all BeerXML 3 documents.

Properties of the `beer_xml` object:

## `version` (VersionType, required)

## `fermentables` (object, required)

Records for any ingredient that contributes to the gravity of the beer.

Properties of the `fermentables` object:

### `fermentable` (FermentableType, required)

## `miscellaneous_ingredients` (object, required)

Records for adjuncts which do not contribute to the gravity of the beer.

Properties of the `miscellaneous_ingredients` object:

### `miscellaneous` (MiscellaneousType, required)

## `hop_varieties` (object, required)

Records detailing the many properties of unique hop varieties.

Properties of the `hop_varieties` object:

### `hop` (VarietyInformation, required)

## `cultures` (object, required)

Records detailing the wide array of unique yeast cultures.

Properties of the `cultures` object:

### `yeast` (CultureInformation, required)

## `profiles` (object, required)

Records for regional water profiles used in style-specific beer brewing.

Properties of the `profiles` object:

### `water` (WaterType, required)

## `styles` (object, required)

Records detailing the characteristics of the beer styles for which judging guidelines have been established.

Properties of the `styles` object:

### `style` (StyleType, required)

## `procedure` (object, required)

A collection of steps providing process information for common mashing procedures.

Properties of the `procedure` object:

### `mash` (MashProcedureType, required)

## `recipes` (object, required)

Records containing a minimal collection of the description of ingredients, procedures and other required parameters necessary to recreate a batch of beer.

Properties of the `recipes` object:

### `recipe` (RecipeType, required)

---

# Sub Schemas

The schema defines the following additional types:

## `VolumeType` (undefined)

### `volume` (VolumeUnitType)

## `MassType` (undefined)

### `mass` (MassUnitType)

## `TemperatureType` (undefined)

### `degrees` (TemperatureUnitType)

## `DistanceType` (undefined)

### `length` (DistanceUnitType)

## `PressureType` (undefined)

### `pressure` (PressureUnitType)

## `TimeType` (undefined)

### `duration` (TimeUnitType)

## `ColorType` (undefined)

### `scale` (ColorUnitType)

## `DensityType` (undefined)

### `density` (DensityUnitType)

## `QuantitativeRangeType` (object)

Properties of the `QuantitativeRangeType` object:

### `minimum` (number, required)

### `maximum` (number, required)

## `TemperatureRangeType` (object)

Properties of the `TemperatureRangeType` object:

### `minimum` (TemperatureType, required)

### `maximum` (TemperatureType, required)

## `ColorRangeType` (object)

Properties of the `ColorRangeType` object:

### `minimum` (ColorType, required)

### `maximum` (ColorType, required)

## `DensityRangeType` (object)

Properties of the `DensityRangeType` object:

### `minimum` (DensityType, required)

### `maximum` (DensityType, required)

## `PercentRangeType` (object)

Properties of the `PercentRangeType` object:

### `minimum` (PercentType, required)

### `maximum` (PercentType, required)

## `FermentableBase` (object)

Fermentable Base Desc

Properties of the `FermentableBase` object:

### `name` (string, required)

### `type` (string, enum, required)

This element must be one of the following enum values:

* `adjunct`
* `dry extract`
* `extract`
* `grain`
* `sugar`

### `color` (ColorType, required)

### `origin` (string)

### `supplier` (string)

### `group` (string, enum)

This element must be one of the following enum values:

* `base`
* `caramel`
* `flakes`
* `roasted`
* `speciality`
* `wheat`

## `FermentableType` (object)

Properties of the `FermentableType` object:

### `yield_dry_basis` (object, required)

Properties of the `yield_dry_basis` object:

#### `fine_grind` (PercentType, required)

#### `coarse_grind` (PercentType, required)

#### `fine_coarse_difference` (PercentType)

### `notes` (string)

### `moisture` (PercentType)

### `diastatic_power` (number)

### `protein` (PercentType)

### `soluble_nitrogen_ratio` (number)

### `max_in_batch` (PercentType)

### `recommend_mash` (boolean)

### `ibu_gal_per_lb` (number)

### `potential` (DensityType)

### `inventory` (MassType)

## `FermentableAdditionType` (object)

Addition of Fermentable Type to recipe

Properties of the `FermentableAdditionType` object:

### `addition` (FermentableBase, required)

## `MiscellaneousBase` (object)

Properties of the `MiscellaneousBase` object:

### `name` (string, required)

### `type` (string, enum, required)

This element must be one of the following enum values:

* `spice`
* `fining`
* `water agent`
* `herb`
* `fruit`
* `flavor`
* `other`

### `use` (string, enum, required)

This element must be one of the following enum values:

* `boil`
* `mash`
* `primary`
* `secondary`
* `bottling`

## `MiscellaneousType` (object)

Properties of the `MiscellaneousType` object:

### `use_for` (string)

### `notes` (string)

### `inventory` (object)

Properties of the `inventory` object:

#### `amount` (VolumeType, required)

#### `amount_as_weight` (MassType, required)

## `MiscellaneousAdditionType` (object)

Properties of the `MiscellaneousAdditionType` object:

### `addition` (MiscellaneousBase, required)

## `HopVarietyBase` (object)

Hop Variety Base Desc

Properties of the `HopVarietyBase` object:

### `name` (string, required)

### `origin` (string, required)

### `alpha_acid_units` (number, required)

### `beta_acid_units` (number)

## `VarietyInformation` (object)

Hop Variety Record Information

Properties of the `VarietyInformation` object:

### `type` (string, enum)

This element must be one of the following enum values:

* `aroma`
* `bittering`
* `flavor`
* `aroma/bittering`
* `bittering/flavor`
* `aroma/flavor`
* `aroma/bittering/flavor`

### `notes` (string)

### `percent_lost` (PercentType)

### `substitutes` (string)

### `humulene` (number)

### `caryophyllene` (number)

### `cohumulone` (number)

### `myrcene` (number)

### `farnesene` (number)

### `inventory` (object)

Properties of the `inventory` object:

#### `leaf` (MassType)

#### `pellet` (MassType)

#### `plug` (MassType)

## `HopAdditionType` (object)

Addition of hops to recipe

Properties of the `HopAdditionType` object:

### `addition` (HopVarietyBase, required)

## `IBUEstimateType` (undefined)

### `method` (IBUMethodType)

## `CultureBase` (object)

The descriptive base type for both yeast culture records and yeast recipe additions.

Properties of the `CultureBase` object:

### `name` (string, required)

### `type` (string, enum, required)

This element must be one of the following enum values:

* `ale`
* `lager`
* `wheat`
* `wine`
* `champagne`

### `form` (string, enum, required)

This element must be one of the following enum values:

* `liquid`
* `dry`
* `slant`
* `culture`

### `laboratory` (string, required)

### `product_id` (string, required)

## `CultureInformation` (object)

Yeast Culture Record Information

Properties of the `CultureInformation` object:

### `temperature_range` (TemperatureRangeType)

### `flocculation` (QualitativeRangeType)

### `attenuation` (PercentType)

### `alcohol_tolerance` (PercentRangeType)

### `notes` (string)

### `best_for` (string)

### `max_reuse` (integer)

### `inventory` (object)

Properties of the `inventory` object:

#### `liquid` (VolumeType)

#### `dry` (MassType)

#### `slant` (VolumeType)

#### `culture` (VolumeType)

## `YeastAdditionType` (object)

Addition of yeast to recipe

Properties of the `YeastAdditionType` object:

### `addition` (CultureBase, required)

## `WaterBase` (object)

Properties of the `WaterBase` object:

### `name` (string, required)

### `calcium` (number, required)

### `bicarbonate` (number, required)

### `sulfate` (number, required)

### `chloride` (number, required)

### `sodium` (number, required)

### `magnesium` (number, required)

## `WaterType` (object)

Properties of the `WaterType` object:

### `pH` (number)

### `notes` (string)

## `WaterAdditionType` (object)

Properties of the `WaterAdditionType` object:

### `addition` (WaterBase, required)

## `StyleBase` (object)

The descriptive base type for both beer style guideline records and recipe style provisions.

Properties of the `StyleBase` object:

### `name` (string, required)

### `category` (string, required)

### `category_number` (integer, required)

### `style_letter` (string, required)

Additional restrictions:

* Regex pattern: `[A-Z ]`

### `style_guide` (string, required)

### `type` (StyleCategories, required)

## `StyleType` (object)

Style Type Record Information

Properties of the `StyleType` object:

### `original_gravity` (DensityRangeType, required)

### `final_gravity` (DensityRangeType, required)

### `international_bitterness_units` (QuantitativeRangeType, required)

### `color` (ColorRangeType, required)

### `carbonation` (QuantitativeRangeType)

### `alcohol_by_volume` (PercentRangeType)

### `notes` (string)

### `aroma` (string)

### `appearance` (string)

### `flavor` (string)

### `mouthfeel` (string)

### `overall_impression` (string)

### `ingredients` (string)

### `examples` (string)

## `RecipeStyleType` (undefined)

Recipe Style Type Description

## `MashProcedureType` (object)

Properties of the `MashProcedureType` object:

### `name` (string, required)

### `grain_temperature` (TemperatureType, required)

### `sparge_temperature` (TemperatureType)

### `pH` (number)

### `notes` (string)

### `mash_steps` (object, required)

Properties of the `mash_steps` object:

#### `step` (MashStepType, required)

## `MashStepType` (object)

Properties of the `MashStepType` object:

### `name` (string, required)

### `type` (string, enum, required)

This element must be one of the following enum values:

* `infusion`
* `temperature`
* `decoction`

### `infuse_amount` (VolumeType)

### `step_temperature` (TemperatureType, required)

### `step_time` (TimeType, required)

### `ramp_time` (TimeType)

### `end_temperature` (TemperatureType)

### `description` (string)

### `water_grain_ratio` (number)

### `decoction_amount` (VolumeType)

### `infuse_temperature` (TemperatureType)

## `FermentationStageType` (object)

Properties of the `FermentationStageType` object:

### `aging` (TimeType, required)

### `temperature` (TemperatureType, required)

## `RecipeType` (object)

Properties of the `RecipeType` object:

### `name` (string, required)

### `type` (string, enum, required)

This element must be one of the following enum values:

* `extract`
* `partial mash`
* `all grain`

### `author` (string, required)

### `coauthor` (string)

### `created` (DateType)

### `batch_size` (VolumeType, required)

### `boil_size` (VolumeType, required)

### `boil_time` (TimeType, required)

### `efficiency` (PercentType)

### `style` (RecipeStyleType)

### `ingredients` (object, required)

Properties of the `ingredients` object:

#### `grain_bill` (FermentableAdditionType, required)

#### `hop_bill` (HopAdditionType)

#### `adjuncts` (MiscellaneousAdditionType)

#### `yeast_additions` (YeastAdditionType)

#### `water_profile` (WaterAdditionType)

### `mash` (MashProcedureType)

### `notes` (string)

### `original_gravity` (DensityType)

### `final_gravity` (DensityType)

### `alcohol_by_volume` (PercentType)

### `ibu_estimate` (IBUEstimateType)

### `color_estimate` (ColorType)

### `carbonation` (number)

### `fermentation_stages` (object)

Properties of the `fermentation_stages` object:

#### `primary` (FermentationStageType)

#### `secondary` (FermentationStageType)

#### `tertiary` (FermentationStageType)

#### `conditioning` (FermentationStageType)

### `taste` (object)

Properties of the `taste` object:

#### `notes` (string, required)

#### `rating` (number, required)

### `calories_per_pint` (number)

## `VolumeUnitType` (string)

## `MassUnitType` (string)

## `TemperatureUnitType` (string)

## `DistanceUnitType` (string)

## `PressureUnitType` (string)

## `TimeUnitType` (string)

## `ColorUnitType` (string)

## `DensityUnitType` (string)

## `DateType` (string)

## `PercentType` (number)

## `QualitativeRangeType` (string)

## `VersionType` (number)

## `IBUMethodType` (string)

## `StyleCategories` (string)