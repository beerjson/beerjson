The schema defines the following types:

## VolumeType 

*no description yet*

**VolumeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [VolumeUnitType](#volumeunittype)|  |
| **value** | :white_check_mark: | number|  |

## MassType 

*no description yet*

**MassType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [MassUnitType](#massunittype)|  |
| **value** | :white_check_mark: | number|  |

## DiastaticPowerType 

*no description yet*

**DiastaticPowerType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [DiastaticPowerUnitType](#diastaticpowerunittype)|  |
| **value** | :white_check_mark: | number|  |

## TemperatureType 

*no description yet*

**TemperatureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [TemperatureUnitType](#temperatureunittype)|  |
| **value** | :white_check_mark: | number|  |

## PressureType 

*no description yet*

**PressureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [PressureUnitType](#pressureunittype)|  |
| **value** | :white_check_mark: | number|  |

## AcidityType 

*no description yet*

**AcidityType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [AcidityUnitType](#acidityunittype)|  |
| **value** | :white_check_mark: | number|  |

## TimeType 

*no description yet*

**TimeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [TimeUnitType](#timeunittype)|  |
| **value** | :white_check_mark: | number|  |

## ColorType 

*no description yet*

**ColorType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [ColorUnitType](#colorunittype)|  |
| **value** | :white_check_mark: | number|  |

## CarbonationType 

*no description yet*

**CarbonationType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [CarbonationUnitType](#carbonationunittype)|  |
| **value** | :white_check_mark: | number|  |

## BitternessType 

*no description yet*

**BitternessType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [BitternessUnitType](#bitternessunittype)|  |
| **value** | :white_check_mark: | number|  |

## GravityType 

*no description yet*

**GravityType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [GravityUnitType](#gravityunittype)|  |
| **value** | :white_check_mark: | number|  |

## SpecificHeatType 

*no description yet*

**SpecificHeatType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [SpecificHeatUnitType](#specificheatunittype)|  |
| **value** | :white_check_mark: | number|  |

## ConcentrationType 

*no description yet*

**ConcentrationType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [ConcentrationUnitType](#concentrationunittype)|  |
| **value** | :white_check_mark: | number|  |

## SpecificVolumeType 

*no description yet*

**SpecificVolumeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [SpecificVolumeUnitType](#specificvolumeunittype)|  |
| **value** | :white_check_mark: | number|  |

## UnitType 

*no description yet*

**UnitType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [UnitUnitType](#unitunittype)|  |
| **value** | :white_check_mark: | number|  |

## CarbonationRangeType 

*no description yet*

**CarbonationRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | :white_check_mark: | [CarbonationType](#carbonationtype)|  |
| **maximum** | :white_check_mark: | [CarbonationType](#carbonationtype)|  |

## BitternessRangeType 

*no description yet*

**BitternessRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | :white_check_mark: | [BitternessType](#bitternesstype)|  |
| **maximum** | :white_check_mark: | [BitternessType](#bitternesstype)|  |

## TemperatureRangeType 

*no description yet*

**TemperatureRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | :white_check_mark: | [TemperatureType](#temperaturetype)|  |
| **maximum** | :white_check_mark: | [TemperatureType](#temperaturetype)|  |

## ColorRangeType 

*no description yet*

**ColorRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | :white_check_mark: | [ColorType](#colortype)|  |
| **maximum** | :white_check_mark: | [ColorType](#colortype)|  |

## GravityRangeType 

*no description yet*

**GravityRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | :white_check_mark: | [GravityType](#gravitytype)|  |
| **maximum** | :white_check_mark: | [GravityType](#gravitytype)|  |

## PercentRangeType 

*no description yet*

**PercentRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | :white_check_mark: | [PercentType](#percenttype)|  |
| **maximum** | :white_check_mark: | [PercentType](#percenttype)|  |

## VolumeUnitType 

*no description yet*

`"ml"`<br/>`"l"`<br/>`"tsp"`<br/>`"tbsp"`<br/>`"floz"`<br/>`"cup"`<br/>`"pt"`<br/>`"qt"`<br/>`"gal"`<br/>`"bbl"`<br/>`"ifloz"`<br/>`"ipt"`<br/>`"iqt"`<br/>`"igal"`<br/>`"ibbl"`
## MassUnitType 

*no description yet*

`"mg"`<br/>`"g"`<br/>`"kg"`<br/>`"lb"`<br/>`"oz"`
## DiastaticPowerUnitType 

*no description yet*

`"Lintner"`<br/>`"WK"`
## TemperatureUnitType 

*no description yet*

`"C"`<br/>`"F"`
## AcidityUnitType 

*no description yet*

`"pH"`
## PressureUnitType 

*no description yet*

`"kPa"`<br/>`"psi"`<br/>`"bar"`
## TimeUnitType 

*no description yet*

`"sec"`<br/>`"min"`<br/>`"hr"`<br/>`"day"`<br/>`"week"`<br/>`"month"`<br/>`"year"`
## ColorUnitType 

*no description yet*

`"EBC"`<br/>`"Lovi"`<br/>`"SRM"`
## CarbonationUnitType 

*no description yet*

`"vols"`
## BitternessUnitType 

*no description yet*

`"IBUs"`
## GravityUnitType 

*no description yet*

`"sg"`<br/>`"plato"`<br/>`"brix"`
## DensityUnitType 

*no description yet*

`"sg"`<br/>`"plato"`<br/>`"brix"`
## ConcentrationUnitType 

*no description yet*

`"ppm"`<br/>`"ppb"`<br/>`"mg/l"`
## SpecificHeatUnitType 

*no description yet*

`"Cal/(g C)"`<br/>`"J/(kg K)"`<br/>`"BTU/(lb F)"`
## SpecificVolumeUnitType 

*no description yet*

`"qt/lb"`<br/>`"gal/lb"`<br/>`"gal/oz"`<br/>`"l/g"`<br/>`"l/kg"`<br/>`"floz/oz"`<br/>`"m^3/kg"`<br/>`"ft^3/lb"`
## UnitUnitType 

*no description yet*

`"1"`<br/>`"unit"`<br/>`"each"`<br/>`"dimensionless"`
## DateType 

*no description yet*

RegExp pattern: `\d{4}-\d{2}-\d{2}|\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}`
## PercentType 

*no description yet*

**PercentType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | :white_check_mark: | [PercentUnitType](#percentunittype)|  |
| **value** | :white_check_mark: | number|  |

## PercentUnitType 

*no description yet*

`"%"`
## QualitativeRangeType 

*no description yet*

`"very low"`<br/>`"low"`<br/>`"medium low"`<br/>`"medium"`<br/>`"medium high"`<br/>`"high"`<br/>`"very high"`
## VersionType 

*no description yet*

number
