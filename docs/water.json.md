The schema defines the following types:

## WaterBase 

WaterBase provides unique properties to identify individual records of  brewing water.

**WaterBase** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the water profile. |
| **producer** |  | string| The utility or source the profile describes. |
| **calcium** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of calcium (Ca) in the water. |
| **bicarbonate** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of bicarbonate (HCO3) in the water. |
| **carbonate** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of carbonate (CO3) in the water. |
| **potassium** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of potassium (K) in the water. |
| **iron** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of iron (Fe) in the water. |
| **nitrate** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of nitrate (NO3) in the water. |
| **nitrite** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of nitrite (NO2) in the water. |
| **fluoride** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of fluoride in the water. |
| **flouride** |  | [ConcentrationType](measureable_units.json.md#concentrationtype)| ⚠️ **Deprecated.** Misspelling of fluoride, kept so existing documents stay valid. Write fluoride instead; readers should accept either and prefer fluoride when both are present. |
| **sulfate** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of sulfate (SO4) in the water. |
| **chloride** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of chloride (Cl) in the water. |
| **sodium** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of sodium (Na) in the water. |
| **magnesium** | ✅ | [ConcentrationType](measureable_units.json.md#concentrationtype)| The concentration of magnesium (Mg) in the water. |

## WaterType 

WaterType collects the attributes of a brewing water to store as record information

**WaterType** is an object with all properties from [WaterBase](#waterbase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **pH** |  | number| The pH of the water. |
| **notes** |  | string| Free text notes about the water profile. |

## WaterAdditionType 

WaterAdditionType collects the attributes of each water addition for use in a recipe

**WaterAdditionType** is an object with all properties from [WaterBase](#waterbase) and these additional properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **amount** |  | [VolumeType](measureable_units.json.md#volumetype)| The volume of this water used in the recipe. |

