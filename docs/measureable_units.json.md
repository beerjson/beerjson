The schema defines the following types:

## VolumeType

_no description yet_

`VolumeType` type: `undefined`

### Properties

|           | Type                              | Description | Required           |
| --------- | --------------------------------- | ----------- | ------------------ |
| **unit**  | [VolumeUnitType](#volumeunittype) |             | :white_check_mark: |
| **value** | number                            |             | :white_check_mark: |

## MassType

_no description yet_

`MassType` type: `undefined`

### Properties

|           | Type                          | Description | Required           |
| --------- | ----------------------------- | ----------- | ------------------ |
| **unit**  | [MassUnitType](#massunittype) |             | :white_check_mark: |
| **value** | number                        |             | :white_check_mark: |

## DiastaticPowerType

_no description yet_

`DiastaticPowerType` type: `undefined`

### Properties

|           | Type                                              | Description | Required           |
| --------- | ------------------------------------------------- | ----------- | ------------------ |
| **unit**  | [DiastaticPowerUnitType](#diastaticpowerunittype) |             | :white_check_mark: |
| **value** | number                                            |             | :white_check_mark: |

## TemperatureType

_no description yet_

`TemperatureType` type: `undefined`

### Properties

|           | Type                                        | Description | Required           |
| --------- | ------------------------------------------- | ----------- | ------------------ |
| **unit**  | [TemperatureUnitType](#temperatureunittype) |             | :white_check_mark: |
| **value** | number                                      |             | :white_check_mark: |

## PressureType

_no description yet_

`PressureType` type: `undefined`

### Properties

|           | Type                                  | Description | Required           |
| --------- | ------------------------------------- | ----------- | ------------------ |
| **unit**  | [PressureUnitType](#pressureunittype) |             | :white_check_mark: |
| **value** | number                                |             | :white_check_mark: |

## AcidityType

_no description yet_

`AcidityType` type: `undefined`

### Properties

|           | Type                                | Description | Required           |
| --------- | ----------------------------------- | ----------- | ------------------ |
| **unit**  | [AcidityUnitType](#acidityunittype) |             | :white_check_mark: |
| **value** | number                              |             | :white_check_mark: |

## TimeType

_no description yet_

`TimeType` type: `undefined`

### Properties

|           | Type                          | Description | Required           |
| --------- | ----------------------------- | ----------- | ------------------ |
| **unit**  | [TimeUnitType](#timeunittype) |             | :white_check_mark: |
| **value** | number                        |             | :white_check_mark: |

## ColorType

_no description yet_

`ColorType` type: `undefined`

### Properties

|           | Type                            | Description | Required           |
| --------- | ------------------------------- | ----------- | ------------------ |
| **unit**  | [ColorUnitType](#colorunittype) |             | :white_check_mark: |
| **value** | number                          |             | :white_check_mark: |

## GravityType

_no description yet_

`GravityType` type: `undefined`

### Properties

|           | Type                                | Description | Required           |
| --------- | ----------------------------------- | ----------- | ------------------ |
| **unit**  | [GravityUnitType](#gravityunittype) |             | :white_check_mark: |
| **value** | number                              |             | :white_check_mark: |

## SpecificHeatType

_no description yet_

`SpecificHeatType` type: `undefined`

### Properties

|           | Type                                          | Description | Required           |
| --------- | --------------------------------------------- | ----------- | ------------------ |
| **unit**  | [SpecificHeatUnitType](#specificheatunittype) |             | :white_check_mark: |
| **value** | number                                        |             | :white_check_mark: |

## ConcentrationType

_no description yet_

`ConcentrationType` type: `undefined`

### Properties

|           | Type                                            | Description | Required           |
| --------- | ----------------------------------------------- | ----------- | ------------------ |
| **unit**  | [ConcentrationUnitType](#concentrationunittype) |             | :white_check_mark: |
| **value** | number                                          |             | :white_check_mark: |

## SpecificVolumeType

_no description yet_

`SpecificVolumeType` type: `undefined`

### Properties

|           | Type                                              | Description | Required           |
| --------- | ------------------------------------------------- | ----------- | ------------------ |
| **unit**  | [SpecificVolumeUnitType](#specificvolumeunittype) |             | :white_check_mark: |
| **value** | number                                            |             | :white_check_mark: |

## UnitType

_no description yet_

`UnitType` type: `undefined`

### Properties

|           | Type                          | Description | Required           |
| --------- | ----------------------------- | ----------- | ------------------ |
| **unit**  | [UnitUnitType](#unitunittype) |             | :white_check_mark: |
| **value** | number                        |             | :white_check_mark: |

## QuantitativeRangeType

_no description yet_

`QuantitativeRangeType` type: `object`

### Properties

|             | Type   | Description | Required           |
| ----------- | ------ | ----------- | ------------------ |
| **minimum** | number |             | :white_check_mark: |
| **maximum** | number |             | :white_check_mark: |

## TemperatureRangeType

_no description yet_

`TemperatureRangeType` type: `object`

### Properties

|             | Type                                | Description | Required           |
| ----------- | ----------------------------------- | ----------- | ------------------ |
| **minimum** | [TemperatureType](#temperaturetype) |             | :white_check_mark: |
| **maximum** | [TemperatureType](#temperaturetype) |             | :white_check_mark: |

## ColorRangeType

_no description yet_

`ColorRangeType` type: `object`

### Properties

|             | Type                    | Description | Required           |
| ----------- | ----------------------- | ----------- | ------------------ |
| **minimum** | [ColorType](#colortype) |             | :white_check_mark: |
| **maximum** | [ColorType](#colortype) |             | :white_check_mark: |

## GravityRangeType

_no description yet_

`GravityRangeType` type: `object`

### Properties

|             | Type                        | Description | Required           |
| ----------- | --------------------------- | ----------- | ------------------ |
| **minimum** | [GravityType](#gravitytype) |             | :white_check_mark: |
| **maximum** | [GravityType](#gravitytype) |             | :white_check_mark: |

## PercentRangeType

_no description yet_

`PercentRangeType` type: `object`

### Properties

|             | Type                        | Description | Required           |
| ----------- | --------------------------- | ----------- | ------------------ |
| **minimum** | [PercentType](#percenttype) |             | :white_check_mark: |
| **maximum** | [PercentType](#percenttype) |             | :white_check_mark: |

## VolumeUnitType

_no description yet_

`VolumeUnitType` type: `string`

## MassUnitType

_no description yet_

`MassUnitType` type: `string`

## DiastaticPowerUnitType

_no description yet_

`DiastaticPowerUnitType` type: `string`

## TemperatureUnitType

_no description yet_

`TemperatureUnitType` type: `string`

## AcidityUnitType

_no description yet_

`AcidityUnitType` type: `string`

## PressureUnitType

_no description yet_

`PressureUnitType` type: `string`

## TimeUnitType

_no description yet_

`TimeUnitType` type: `string`

## ColorUnitType

_no description yet_

`ColorUnitType` type: `string`

## GravityUnitType

_no description yet_

`GravityUnitType` type: `string`

## DensityUnitType

_no description yet_

`DensityUnitType` type: `string`

## ConcentrationUnitType

_no description yet_

`ConcentrationUnitType` type: `string`

## SpecificHeatUnitType

_no description yet_

`SpecificHeatUnitType` type: `string`

## SpecificVolumeUnitType

_no description yet_

`SpecificVolumeUnitType` type: `string`

## UnitUnitType

_no description yet_

`UnitUnitType` type: `string`

## DateType

_no description yet_

`DateType` type: `string`

## PercentType

_no description yet_

`PercentType` type: `number`

## QualitativeRangeType

_no description yet_

`QualitativeRangeType` type: `string`

## VersionType

_no description yet_

`VersionType` type: `number`
