The schema defines the following properties:

---

# Sub Schemas

The schema defines the following additional types:

## `FermentableBase` (object)

FermentableBase provides unique properties to identify individual records of fermentable ingredients

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

FermentableType collects the attributes of a fermentable ingredient to store as record information

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

FermentableAdditionType collects the attributes of a fermentable ingredient for use in a recipe grain bill

Properties of the `FermentableAdditionType` object:

### `addition` (FermentableBase, required)

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