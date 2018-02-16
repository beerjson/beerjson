The schema defines the following types:

## VolumeType

*no description yet*

`VolumeType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [VolumeUnitType](#volumeunittype)|  | :white_check_mark: |
| **volume** | number|  | :white_check_mark: |

## MassType

*no description yet*

`MassType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [MassUnitType](#massunittype)|  | :white_check_mark: |
| **mass** | number|  | :white_check_mark: |

## TemperatureType

*no description yet*

`TemperatureType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [TemperatureUnitType](#temperatureunittype)|  | :white_check_mark: |
| **degrees** | number|  | :white_check_mark: |

## PressureType

*no description yet*

`PressureType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [PressureUnitType](#pressureunittype)|  | :white_check_mark: |
| **pressure** | number|  | :white_check_mark: |

## AcidityType

*no description yet*

`AcidityType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [AcidityUnitType](#acidityunittype)|  | :white_check_mark: |
| **Acidity** | number|  |  |

## TimeType

*no description yet*

`TimeType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [TimeUnitType](#timeunittype)|  | :white_check_mark: |
| **duration** | number|  | :white_check_mark: |

## ColorType

*no description yet*

`ColorType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [ColorUnitType](#colorunittype)|  | :white_check_mark: |
| **scale** | number|  | :white_check_mark: |

## DensityType

*no description yet*

`DensityType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [DensityUnitType](#densityunittype)|  | :white_check_mark: |
| **density** | number|  | :white_check_mark: |

## SpecificHeatType

*no description yet*

`SpecificHeatType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [SpecificHeatType](#specificheattype)|  | :white_check_mark: |
| **specific heat** | number|  | :white_check_mark: |

## SpecificVolumeType

*no description yet*

`SpecificVolumeType` type: `undefined`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **units** | [SpecificVolumeType](#specificvolumetype)|  | :white_check_mark: |
| **specific volume** | number|  | :white_check_mark: |

## QuantitativeRangeType

*no description yet*

`QuantitativeRangeType` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **minimum** | number|  | :white_check_mark: |
| **maximum** | number|  | :white_check_mark: |

## TemperatureRangeType

*no description yet*

`TemperatureRangeType` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **minimum** | [TemperatureType](#temperaturetype)|  | :white_check_mark: |
| **maximum** | [TemperatureType](#temperaturetype)|  | :white_check_mark: |

## ColorRangeType

*no description yet*

`ColorRangeType` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **minimum** | [ColorType](#colortype)|  | :white_check_mark: |
| **maximum** | [ColorType](#colortype)|  | :white_check_mark: |

## DensityRangeType

*no description yet*

`DensityRangeType` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **minimum** | [DensityType](#densitytype)|  | :white_check_mark: |
| **maximum** | [DensityType](#densitytype)|  | :white_check_mark: |

## PercentRangeType

*no description yet*

`PercentRangeType` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **minimum** | [PercentType](#percenttype)|  | :white_check_mark: |
| **maximum** | [PercentType](#percenttype)|  | :white_check_mark: |

## VolumeUnitType

*no description yet*

`VolumeUnitType` type: `string`


## MassUnitType

*no description yet*

`MassUnitType` type: `string`


## TemperatureUnitType

*no description yet*

`TemperatureUnitType` type: `string`


## AcidityUnitType

*no description yet*

`AcidityUnitType` type: `string`


## PressureUnitType

*no description yet*

`PressureUnitType` type: `string`


## TimeUnitType

*no description yet*

`TimeUnitType` type: `string`


## ColorUnitType

*no description yet*

`ColorUnitType` type: `string`


## DensityUnitType

*no description yet*

`DensityUnitType` type: `string`


## DateType

*no description yet*

`DateType` type: `string`


## PercentType

*no description yet*

`PercentType` type: `number`


## QualitativeRangeType

*no description yet*

`QualitativeRangeType` type: `string`


## VersionType

*no description yet*

`VersionType` type: `number`


