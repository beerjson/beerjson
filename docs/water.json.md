The schema defines the following types:

## WaterBase 

WaterBase provides unique properties to identify individual records of regional brewing water

**WaterBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **producer** |  | string|  |
| **calcium** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **bicarbonate** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **carbonate** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **potassium** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **iron** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **nitrate** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **nitrite** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **flouride** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **sulfate** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **chloride** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **sodium** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |
| **magnesium** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |

## WaterType 

WaterType collects the attributes of a regional brewing water to store as record information

**WaterType** is an object with all properties from [WaterBase](#waterbase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **pH** |  | number|  |
| **notes** |  | string|  |

## WaterAdditionType 

WaterAdditionType collects the attributes of each water addition for use in a recipe

**WaterAdditionType** is an object with all properties from [WaterBase](#waterbase)


