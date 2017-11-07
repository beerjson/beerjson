The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `WaterBase` (object)

WaterBase provides unique properties to identify individual records of regional brewing water

Properties of the `WaterBase` object:

### `name` (string, required)

### `calcium` (number, required)

### `bicarbonate` (number, required)

### `sulfate` (number, required)

### `chloride` (number, required)

### `sodium` (number, required)

### `magnesium` (number, required)

## `WaterType` (object)

WaterType collects the attributes of a regional brewing water to store as record information

Properties of the `WaterType` object:

### `pH` (number)

### `notes` (string)

## `WaterAdditionType` (object)

WaterAdditionType collects the attributes of a water salt addition for use in a recipe

Properties of the `WaterAdditionType` object:

### `addition` (WaterBase, required)

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