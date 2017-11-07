The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `MashProcedureType` (object)

MashProcedureType defines the procedure for performing unique mashing styles

Properties of the `MashProcedureType` object:

### `name` (string, required)

### `grain_temperature` (TemperatureType, required)

### `sparge_temperature` (TemperatureType)

### `pH` (number)

### `notes` (string)

### `mash_steps` (object, required)

Properties of the `mash_steps` object:

#### `step` (MashStepType, required)

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