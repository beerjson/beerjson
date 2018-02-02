The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## VolumeType
`VolumeType` (undefined)

* [volume](#volume)

### volume
 `volume` (VolumeUnitType)

## MassType
`MassType` (undefined)

* [mass](#mass)

### mass
 `mass` (MassUnitType)

## TemperatureType
`TemperatureType` (undefined)

* [degrees](#degrees)

### degrees
 `degrees` (TemperatureUnitType)

## DistanceType
`DistanceType` (undefined)

* [length](#length)

### length
 `length` (DistanceUnitType)

## PressureType
`PressureType` (undefined)

* [pressure](#pressure)

### pressure
 `pressure` (PressureUnitType)
 
 ## AcidityType
`AcidityType` (undefined)

* [acidity](#acidity)

### Acidity
 `acidity` (AcidityUnitType)

## TimeType
`TimeType` (undefined)

* [duration](#duration)

### duration
 `duration` (TimeUnitType)

## ColorType
`ColorType` (undefined)

* [scale](#scale)

### scale
 `scale` (ColorUnitType)

## DensityType
`DensityType` (undefined)

* [density](#density)

### density
 `density` (DensityUnitType)
 
 ## SpecificHeatType
`SpecificHeatType` (undefined)

* [specificheat](#specificheat)

### specificheat
 `specific heat` (SpecificHeatUnitType)

 ## SpecificVolumeType
`SpecificVolumeType` (undefined)

* [specificvolume](#specificvolume)

### specificvolume
 `specific volume` (SpecificVolumeType)

## QuantitativeRangeType
`QuantitativeRangeType` (object)

Properties of the `QuantitativeRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (number, required)

### maximum
 `maximum` (number, required)

## TemperatureRangeType
`TemperatureRangeType` (object)

Properties of the `TemperatureRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (TemperatureType, required)

### maximum
 `maximum` (TemperatureType, required)

## ColorRangeType
`ColorRangeType` (object)

Properties of the `ColorRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (ColorType, required)

### maximum
 `maximum` (ColorType, required)

## DensityRangeType
`DensityRangeType` (object)

Properties of the `DensityRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (DensityType, required)

### maximum
 `maximum` (DensityType, required)

## PercentRangeType
`PercentRangeType` (object)

Properties of the `PercentRangeType` object:

* [minimum](#minimum)
* [maximum](#maximum)

### minimum
 `minimum` (PercentType, required)

### maximum
 `maximum` (PercentType, required)

## VolumeUnitType
`VolumeUnitType` (string)

## MassUnitType
`MassUnitType` (string)

## TemperatureUnitType
`TemperatureUnitType` (string)

## DistanceUnitType
`DistanceUnitType` (string)

## PressureUnitType
`PressureUnitType` (string)

## AcidityUnitType
`AcidityUnitType` (string)

## TimeUnitType
`TimeUnitType` (string)

## ColorUnitType
`ColorUnitType` (string)

## DensityUnitType
`DensityUnitType` (string)

## DateType
`DateType` (string)

## PercentType
`PercentType` (number)

## QualitativeRangeType
`QualitativeRangeType` (string)

## VersionType
`VersionType` (number)
