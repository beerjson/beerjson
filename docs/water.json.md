The schema defines the following types:

## WaterBase 

WaterBase provides unique properties to identify individual records of regional brewing water

`WaterBase` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **calcium** | number|  | :white_check_mark: |
| **bicarbonate** | number|  | :white_check_mark: |
| **sulfate** | number|  | :white_check_mark: |
| **chloride** | number|  | :white_check_mark: |
| **sodium** | number|  | :white_check_mark: |
| **magnesium** | number|  | :white_check_mark: |

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


