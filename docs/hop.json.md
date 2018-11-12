The schema defines the following types:

## HopVarietyBase 

HopVarietyBase provides unique properties to identify individual records of a hop variety

**HopVarietyBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | :white_check_mark: | string|  |
| **origin** |  | string|  |
| **form** |  | `"extract"`<br/>`"leaf"`<br/>`"leaf (wet)"`<br/>`"pellet"`<br/>`"powder"`<br/>`"plug"`|  |
| **alpha_acid_units** | :white_check_mark: | number|  |
| **beta_acid_units** |  | number|  |

## VarietyInformation 

VarietyInformation collects the attributes of a hop variety to store as record information

**VarietyInformation** is an object with all properties from [HopVarietyBase](#hopvarietybase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **type** |  | `"aroma"`<br/>`"bittering"`<br/>`"flavor"`<br/>`"aroma/bittering"`<br/>`"bittering/flavor"`<br/>`"aroma/flavor"`<br/>`"aroma/bittering/flavor"`|  |
| **notes** |  | string|  |
| **percent_lost** |  | [PercentType](measureable_units.json.md#percenttype)|  |
| **substitutes** |  | string|  |
| **oil_content** |  | :x: object| oil_content collects all information of a hop variety pertaining to oil content, polyphenols, and thiols. |
| **inventory** |  | :x: object|  |

## HopAdditionType 

HopAdditionType collects the attributes of each hop ingredient for use in a recipe hop bil

**HopAdditionType** is an object with all properties from [HopVarietyBase](#hopvarietybase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **timing** |  | [TimingType](timing.json.md#timingtype)|  |
| **amount** |  |  [VolumeType](measureable_units.json.md#volumetype) or  [MassType](measureable_units.json.md#masstype)|  |

## IBUEstimateType 

*no description yet*

undefined
## IBUMethodType 

*no description yet*

`"Rager"`<br/>`"Tinseth"`<br/>`"Garetz"`<br/>`"Other"`
