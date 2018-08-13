The schema defines the following types:

## WaterBase 

WaterBase provides unique properties to identify individual records of regional brewing water

`WaterBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **calcium** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  | :white_check_mark: |
| **bicarbonate** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  | :white_check_mark: |
| **carbonate** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |  |
| **potassium** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |  |
| **iron** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |  |
| **nitrate** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |  |
| **nitrite** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |  |
| **flouride** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  |  |
| **sulfate** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  | :white_check_mark: |
| **chloride** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  | :white_check_mark: |
| **sodium** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  | :white_check_mark: |
| **magnesium** | [ConcentrationType](measureable_units.json.md#concentrationtype)|  | :white_check_mark: |

## WaterType 

WaterType collects the attributes of a regional brewing water to store as record information

`WaterType` type: `object`

Parent: [WaterBase](#waterbase)

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **pH** | number|  |  |
| **notes** | string|  |  |

## WaterAdditionType 

WaterAdditionType collects the attributes of each water addition for use in a recipe

`WaterAdditionType` type: `object`

Parent: [WaterBase](#waterbase)


