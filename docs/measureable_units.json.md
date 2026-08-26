The schema defines the following types:

## VolumeType 

A volume, as a magnitude and its unit.

**VolumeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [VolumeUnitType](#volumeunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## MassType 

A mass, as a magnitude and its unit.

**MassType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [MassUnitType](#massunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## DiastaticPowerType 

Diastatic power is a measurement of malted grains enzymatic content. A value of 35 Lintner is needed to self convert, while a value of 100 or more is desirable for base malts.

**DiastaticPowerType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [DiastaticPowerUnitType](#diastaticpowerunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## TemperatureType 

A temperature, as a magnitude and its unit.

**TemperatureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [TemperatureUnitType](#temperatureunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## PressureType 

A pressure, as a magnitude and its unit.

**PressureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [PressureUnitType](#pressureunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## AcidityType 

An acidity, as a magnitude and its unit.

**AcidityType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [AcidityUnitType](#acidityunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## TimeType 

A duration, as a magnitude and its unit.

**TimeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [TimeUnitType](#timeunittype)|  |
| **value** | ✅ | integer| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## ColorType 

ColorType supports both grain color properties, such as Lovibond, and wort color properties such as SRM and EBC.

**ColorType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [ColorUnitType](#colorunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## CarbonationType 

A carbonation level, as a magnitude and its unit.

**CarbonationType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [CarbonationUnitType](#carbonationunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## BitternessType 

A bitterness, as a magnitude and its unit.

**BitternessType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [BitternessUnitType](#bitternessunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## GravityType 

Gravity refers to the both the measurements of percent of sugar content, ie plato and brix, as well as relative density ie specific gravity.

**GravityType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [GravityUnitType](#gravityunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## SpecificHeatType 

Specific heat is the measurement of the amount of heat required to raise a given mass one degree..

**SpecificHeatType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [SpecificHeatUnitType](#specificheatunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## ConcentrationType 

Examples for concentration include ppm, ppb, and mg/l. 

**ConcentrationType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [ConcentrationUnitType](#concentrationunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## SpecificVolumeType 

Specific volume is the inverse of density, with units of volume over mass, ie qt/lb or L/kg. Commonly used for mash thickness.

**SpecificVolumeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [SpecificVolumeUnitType](#specificvolumeunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## UnitType 

UnitType is used where unitless amounts are required, such as 1 apple, or 1 yeast packet.

**UnitType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [UnitUnitType](#unitunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## ViscosityType 

Viscosity of fluids

**ViscosityType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [ViscosityUnitType](#viscosityunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## CarbonationRangeType 

A range of carbonation levels, as a minimum and a maximum.

**CarbonationRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | ✅ | [CarbonationType](#carbonationtype)|  |
| **maximum** | ✅ | [CarbonationType](#carbonationtype)|  |

## BitternessRangeType 

A range of bitterness values, as a minimum and a maximum.

**BitternessRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | ✅ | [BitternessType](#bitternesstype)|  |
| **maximum** | ✅ | [BitternessType](#bitternesstype)|  |

## TemperatureRangeType 

A range of temperatures, as a minimum and a maximum.

**TemperatureRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | ✅ | [TemperatureType](#temperaturetype)|  |
| **maximum** | ✅ | [TemperatureType](#temperaturetype)|  |

## ColorRangeType 

A range of colors, as a minimum and a maximum.

**ColorRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | ✅ | [ColorType](#colortype)|  |
| **maximum** | ✅ | [ColorType](#colortype)|  |

## GravityRangeType 

A range of gravities, as a minimum and a maximum.

**GravityRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | ✅ | [GravityType](#gravitytype)|  |
| **maximum** | ✅ | [GravityType](#gravitytype)|  |

## PercentRangeType 

A range of percentages, as a minimum and a maximum.

**PercentRangeType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **minimum** | ✅ | [PercentType](#percenttype)|  |
| **maximum** | ✅ | [PercentType](#percenttype)|  |

## VolumeUnitType 

Units in which a volume may be expressed.

`"ml"`<br/>`"l"`<br/>`"tsp"`<br/>`"tbsp"`<br/>`"floz"`<br/>`"cup"`<br/>`"pt"`<br/>`"qt"`<br/>`"gal"`<br/>`"bbl"`<br/>`"ifloz"`<br/>`"ipt"`<br/>`"iqt"`<br/>`"igal"`<br/>`"ibbl"`
## MassUnitType 

Units in which a mass may be expressed.

`"mg"`<br/>`"g"`<br/>`"kg"`<br/>`"lb"`<br/>`"oz"`
## DiastaticPowerUnitType 

Units in which diastatic power may be expressed.

`"Lintner"`<br/>`"WK"`
## TemperatureUnitType 

Units in which a temperature may be expressed.

`"C"`<br/>`"F"`
## AcidityUnitType 

Units in which acidity may be expressed.

`"pH"`
## PressureUnitType 

Units in which a pressure may be expressed.

`"kPa"`<br/>`"psi"`<br/>`"bar"`
## TimeUnitType 

Units in which a duration may be expressed.

`"sec"`<br/>`"min"`<br/>`"hr"`<br/>`"day"`<br/>`"week"`
## ColorUnitType 

Units in which a color may be expressed.

`"EBC"`<br/>`"Lovi"`<br/>`"SRM"`
## CarbonationUnitType 

Units in which carbonation may be expressed.

`"vols"`<br/>`"g/l"`
## BitternessUnitType 

Units in which bitterness may be expressed.

`"IBUs"`
## GravityUnitType 

Units in which a gravity may be expressed.

`"sg"`<br/>`"plato"`<br/>`"brix"`
## ConcentrationUnitType 

Units in which a concentration may be expressed.

`"ppm"`<br/>`"ppb"`<br/>`"mg/l"`
## SpecificHeatUnitType 

Units in which specific heat may be expressed.

`"Cal/(g C)"`<br/>`"J/(kg K)"`<br/>`"BTU/(lb F)"`
## SpecificVolumeUnitType 

Units in which a specific volume may be expressed.

`"qt/lb"`<br/>`"gal/lb"`<br/>`"gal/oz"`<br/>`"l/g"`<br/>`"l/kg"`<br/>`"floz/oz"`<br/>`"m^3/kg"`<br/>`"ft^3/lb"`
## UnitUnitType 

Units in which a countable or dimensionless quantity may be expressed.

`"1"`<br/>`"unit"`<br/>`"each"`<br/>`"dimensionless"`<br/>`"pkg"`
## DateType 

A date, as ISO 8601 YYYY-MM-DD, optionally with a time as YYYY-MM-DDThh:mm:ss.

RegExp pattern: `\d{4}-\d{2}-\d{2}|\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}`
## PercentType 

A percentage, as a magnitude and its unit.

**PercentType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **unit** | ✅ | [PercentUnitType](#percentunittype)|  |
| **value** | ✅ | number| The magnitude of the measurement. Its unit is given by the sibling unit property. |

## PercentUnitType 

Units in which a percentage may be expressed.

`"%"`
## QualitativeRangeType 

A qualitative scale, for a property that is judged rather than measured.

`"very low"`<br/>`"low"`<br/>`"medium low"`<br/>`"medium"`<br/>`"medium high"`<br/>`"high"`<br/>`"very high"`
## VersionType 

The version of the BeerJSON format this document is written against, as MAJOR.MINOR. Note that JSON has no decimal type, so 1.0 is written as the number 1.

 `1`<br/>`1.1` or  `2.01`<br/>`2.06`
## ViscosityUnitType 

Units in which a viscosity may be expressed.

`"cP"`<br/>`"mPa-s"`
