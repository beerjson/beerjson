The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `CultureBase` (object)

The descriptive base type for both yeast culture records and yeast recipe additions. Provides unique properties to identify individual records of a yeast culture

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

CultureInformation collects the attributes of a yeast culture to store as record information

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

YeastAdditionType collects the attributes of a yeast ingredient for use in a recipe

Properties of the `YeastAdditionType` object:

### `addition` (CultureBase, required)

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