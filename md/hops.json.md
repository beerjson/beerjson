The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `HopVarietyBase` (object)

HopVarietyBase provides unique properties to identify individual records of a hop variety

Properties of the `HopVarietyBase` object:

### `name` (string, required)

### `origin` (string, required)

### `alpha_acid_units` (number, required)

### `beta_acid_units` (number)

## `VarietyInformation` (object)

VarietyInformation collects the attributes of a hop variety to store as record information

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

HopAdditionType collects the attributes of a hop ingredient for use in a recipe hop bil

Properties of the `HopAdditionType` object:

### `addition` (HopVarietyBase, required)

## `IBUEstimateType` (undefined)

### `method` (IBUMethodType)

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

## `IBUMethodType` (string)

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