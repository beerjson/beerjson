The schema defines the following types:

## CultureBase 

Identifies a microbial culture. Nothing is calculated from it directly, so it carries identity alone. `CultureInformation` extends it into a full catalogue record, and `CultureAdditionType` extends it with a pitch.

**CultureBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the culture, usually the name its producer sells it under. |
| **type** | ✅ | `"ale"`<br/>`"bacteria"`<br/>`"brett"`<br/>`"champagne"`<br/>`"kveik"`<br/>`"lacto"`<br/>`"lager"`<br/>`"malolactic"`<br/>`"mixed-culture"`<br/>`"other"`<br/>`"pedio"`<br/>`"spontaneous"`<br/>`"wheat"`<br/>`"wine"`| The kind of organism the culture is, which determines how it ferments and what flavours it contributes. |
| **form** | ✅ | `"liquid"`<br/>`"dry"`<br/>`"slant"`<br/>`"culture"`<br/>`"dregs"`| The physical form the culture is supplied or stored in. |
| **producer** |  | string| The lab or company that produced the culture. |
| **product_id** |  | string| The producer's catalogue number for the culture, such as WLP001 or 3068. |

## CultureInformation 

The full catalogue record for a culture: `CultureBase` plus the behaviour a lab publishes, such as temperature range, attenuation range and flocculation. This is the form used in the `cultures` list at the document root.

**CultureInformation** is an object with all properties from [CultureBase](#culturebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **temperature_range** |  | [TemperatureRangeType](measureable_units.json.md#temperaturerangetype)| The recommended temperature range of fermentation by the culture producer. |
| **alcohol_tolerance** |  | [PercentType](measureable_units.json.md#percenttype)| The recommended limit of abv by the culture producer before attenuation stops. |
| **flocculation** |  | [QualitativeRangeType](measureable_units.json.md#qualitativerangetype)| Floculation refers to the ability of yeast to aggregate to form large flocs which drop out of suspension. |
| **attenuation_range** |  | [PercentRangeType](measureable_units.json.md#percentrangetype)|  |
| **notes** |  | string| Free text notes about the culture. |
| **best_for** |  | string| Recommended styles for a particular culture. |
| **max_reuse** |  | integer| Maximum number of times to reuse a culture before a new lab source is recommended. |
| **pof** |  | boolean| A POF+ culture is capable of producing phenols, which is a common distinctive property of saison, and brett yeasts. |
| **glucoamylase** |  | boolean| A glucoamylase positive culture is capable of producing glucoamylase, the enzyme produced through expression of the diastatic gene, which allows yeast to attenuate dextrins and starches leading to a very low FG. This is positive in some saison/brett yeasts as well as the new gulo hybrid by Omega yeast labs. |
| **inventory** |  | [CultureInventoryType](#cultureinventorytype)|  |
| **zymocide** |  | [Zymocide](#zymocide)|  |

## CultureAdditionType 

A culture as pitched into a recipe: `CultureBase` plus how much, when, and what was measured at pitch time such as cell count and generation. Catalogue detail belongs in a `CultureInformation` record at the document root, not here.

**CultureAdditionType** is an object with all properties from [CultureBase](#culturebase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **attenuation** |  | [PercentType](measureable_units.json.md#percenttype)| The expected, or measured apparent attenuation for a given culture in a given recipe. In comparison to attenuation range, this is a single value. |
| **times_cultured** |  | integer| How many times this culture has already been harvested and repitched. Absent or zero means a fresh pitch from the producer. |
| **timing** |  | [TimingType](timing.json.md#timingtype)| The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step. |
| **cell_count_billions** |  | integer| The number of viable cells pitched, in billions. |
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype) or  [UnitType](measureable_units.json.md#unittype)| The quantity pitched: by volume for a liquid culture, by mass for a dry one, or by unit for whole packets. |

## CultureInventoryType 

The quantity of a culture held in stock, recorded separately for each form it is stored in.

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
| **no1** |  | boolean| Whether the culture expresses the K1 killer factor, a toxin lethal to strains sensitive to it. |
| **no2** |  | boolean| Whether the culture expresses the K2 killer factor, a toxin lethal to strains sensitive to it. |
| **no28** |  | boolean| Whether the culture expresses the K28 killer factor, a toxin lethal to strains sensitive to it. |
| **klus** |  | boolean| Whether the culture expresses the Klus killer factor, a toxin lethal to strains sensitive to it. |
| **neutral** |  | boolean| Whether the culture is neutral: it produces no killer factor, but is not sensitive to them either. |

