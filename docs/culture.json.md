The schema defines the following types:

## CultureBase 

Provides unique properties to identify individual records of a culture.

**CultureBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **type** | ✅ | `"ale"`<br/>`"bacteria"`<br/>`"brett"`<br/>`"champagne"`<br/>`"kveik"`<br/>`"lacto"`<br/>`"lager"`<br/>`"malolactic"`<br/>`"mixed-culture"`<br/>`"other"`<br/>`"pedio"`<br/>`"spontaneous"`<br/>`"wine"`|  |
| **form** | ✅ | `"liquid"`<br/>`"dry"`<br/>`"slant"`<br/>`"culture"`<br/>`"dregs"`|  |
| **producer** |  | string|  |
| **product_id** |  | string|  |

## CultureInformation 

CultureInformation collects the attributes of a microbial culture.

**CultureInformation** is an object with all properties from [CultureBase](#culturebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **temperature_range** |  | [TemperatureRangeType](measureable_units.json.md#temperaturerangetype)|  |
| **flocculation** |  | [QualitativeRangeType](measureable_units.json.md#qualitativerangetype)|  |
| **attenuation_range** |  | [PercentRangeType](measureable_units.json.md#percentrangetype)|  |
| **alcohol_tolerance** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **notes** |  | string|  |
| **best_for** |  | string| Recommended styles for a particular culture. |
| **max_reuse** |  | integer| Maximum number of times to reuse a culture before a new lab source is recommended. |
| **inventory** |  | [CultureInventoryType](#cultureinventorytype)|  |
| **zymocide** |  | [Zymocide](#zymocide)|  |

## CultureAdditionType 

CultureAdditionType collects the attributes of each culture ingredient for use in a recipe.

**CultureAdditionType** is an object with all properties from [CultureBase](#culturebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **attenuation** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **times_cultured** |  | integer|  |
| **timing** |  | [TimingType](timing.json.md#timingtype)|  |
| **cell_count_billions** |  | integer|  |
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype) or  [UnitType](measureable_units.json.md#unittype)|  |

## CultureInventoryType 

*no description yet*

**CultureInventoryType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **liquid** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **dry** |  | [MassType](measureable_units.json.md#masstype)|  |
| **slant** |  | [VolumeType](measureable_units.json.md#volumetype)|  |
| **culture** |  | [VolumeType](measureable_units.json.md#volumetype)|  |

## Zymocide 

Zymocide, also known as killer yeast properties, is common among wine yeast. There are also some ale and brett yeasts that are immune to some zymocidic properties, these are known as killer neutral.

**Zymocide** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **1** |  | boolean|  |
| **2** |  | boolean|  |
| **28** |  | boolean|  |
| **klus** |  | boolean|  |
| **neutral** |  | boolean|  |

