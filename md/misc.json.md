The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `MiscellaneousBase` (object)

MiscellaneousBase provides unique properties to identify individual records of adjunct ingredients

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

MiscellaneousType collects the attributes of a adjunct ingredient to store as record information

Properties of the `MiscellaneousType` object:

### `use_for` (string)

### `notes` (string)

### `inventory` (object)

Properties of the `inventory` object:

#### `amount` (VolumeType, required)

#### `amount_as_weight` (MassType, required)

## `MiscellaneousAdditionType` (object)

MiscellaneousAdditionType collects the attributes of an adjunct ingredient for use in a recipe adjunct bill

Properties of the `MiscellaneousAdditionType` object:

### `addition` (MiscellaneousBase, required)

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