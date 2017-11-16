The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `VolumeType` (undefined)

* [volume](#volume)

### volume
 `volume` (VolumeUnitType)

## `MassType` (undefined)

* [mass](#mass)

### mass
 `mass` (MassUnitType)

## `TemperatureType` (undefined)

* [degrees](#degrees)

### degrees
 `degrees` (TemperatureUnitType)

## `DistanceType` (undefined)

* [length](#length)

### length
 `length` (DistanceUnitType)

## `PressureType` (undefined)

* [pressure](#pressure)

### pressure
 `pressure` (PressureUnitType)

## `TimeType` (undefined)

* [duration](#duration)

### duration
 `duration` (TimeUnitType)

## `ColorType` (undefined)

* [scale](#scale)

### scale
 `scale` (ColorUnitType)

## `DensityType` (undefined)

* [density](#density)

### density
 `density` (DensityUnitType)

## `QuantitativeRangeType` (object)

Properties of the `QuantitativeRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (number, required)

### maximum
 `maximum` (number, required)

## `TemperatureRangeType` (object)

Properties of the `TemperatureRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (TemperatureType, required)

### maximum
 `maximum` (TemperatureType, required)

## `ColorRangeType` (object)

Properties of the `ColorRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (ColorType, required)

### maximum
 `maximum` (ColorType, required)

## `DensityRangeType` (object)

Properties of the `DensityRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (DensityType, required)

### maximum
 `maximum` (DensityType, required)

## `PercentRangeType` (object)

Properties of the `PercentRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (PercentType, required)

### maximum
 `maximum` (PercentType, required)

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