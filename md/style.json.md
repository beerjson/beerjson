The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `StyleBase` (object)

The descriptive base type for both beer style guideline records and recipe style provisions. Provides unique properties to identify individual beer styles

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

StyleType provide information for BJCP Style categorization

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

RecipeStyleType defines style information stored in a recipe record

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

## `StyleCategories` (string)

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