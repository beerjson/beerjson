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
| **temperature_range** |  | [TemperatureRangeType](measureable_units.json.md#temperaturerangetype)| The recommended temperature range of fermentation by the culture producer. |
| **alcohol_tolerance** |  | [PercentType](measureable_units.json.md#percenttype)| The recommended limit of abv by the culture producer before attenuation stops. |
| **flocculation** |  | [QualitativeRangeType](measureable_units.json.md#qualitativerangetype)|  |
| **attenuation_range** |  | [PercentRangeType](measureable_units.json.md#percentrangetype)|  |
| **notes** |  | string|  |
| **best_for** |  | string| Recommended styles for a particular culture. |
| **max_reuse** |  | integer| Maximum number of times to reuse a culture before a new lab source is recommended. |
| **pof** |  | boolean| A POF+ culture is capable of producing phenols, which is a common distinctive property of saison, and brett yeasts. |
| **glucoamylase** |  | boolean| A glucoamylase positive culture is capable of producing glucoamylase, the enzyme produced through expression of the diastatic gene, which allows yeast to attenuate dextrins and starches leading to a very low FG. This is positive in some saison/brett yeasts as well as the new gulo hybrid by Omega yeast labs. |
| **inventory** |  | [CultureInventoryType](#cultureinventorytype)|  |

## CultureAdditionType 

CultureAdditionType collects the attributes of each culture ingredient for use in a recipe.

**CultureAdditionType** is an object with all properties from [CultureBase](#culturebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **attenuation** |  | [PercentType](measureable_units.json.md#percenttype)| The expected, or measured apparent attenuation for a given culture in a given recipe. In comparison to attenuation range, this is a single value. |
| **times_cultured** |  | integer|  |
| **timing** |  | [TimingType](timing.json.md#timingtype)| The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step. |
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

