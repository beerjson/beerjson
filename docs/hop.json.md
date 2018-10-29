The schema defines the following types:

## HopVarietyBase

HopVarietyBase provides unique properties to identify individual records of a hop variety

`HopVarietyBase` type: `object`

### Properties

|                      | Type                                                             | Description | Required           |
| -------------------- | ---------------------------------------------------------------- | ----------- | ------------------ |
| **name**             | string                                                           |             | :white_check_mark: |
| **origin**           | string                                                           |             |                    |
| **form**             | 'extract' , 'leaf' , 'leaf (wet)' , 'pellet' , 'powder' , 'plug' |             |                    |
| **alpha_acid_units** | number                                                           |             | :white_check_mark: |
| **beta_acid_units**  | number                                                           |             |                    |

## VarietyInformation

VarietyInformation collects the attributes of a hop variety to store as record information

`VarietyInformation` type: `object`

Parent: [HopVarietyBase](#hopvarietybase)

### Properties

|                  | Type                                                                                                                  | Description                                                                                               | Required |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------- |
| **type**         | 'aroma' , 'bittering' , 'flavor' , 'aroma/bittering' , 'bittering/flavor' , 'aroma/flavor' , 'aroma/bittering/flavor' |                                                                                                           |          |
| **notes**        | string                                                                                                                |                                                                                                           |          |
| **percent_lost** | [PercentType](measureable_units.json.md#percenttype)                                                                  |                                                                                                           |          |
| **substitutes**  | string                                                                                                                |                                                                                                           |          |
| **oil_content**  | object                                                                                                                | oil_content collects all information of a hop variety pertaining to oil content, polyphenols, and thiols. |          |
| **inventory**    | object                                                                                                                |                                                                                                           |          |

## HopAdditionType

HopAdditionType collects the attributes of each hop ingredient for use in a recipe hop bil

`HopAdditionType` type: `object`

Parent: [HopVarietyBase](#hopvarietybase)

### Properties

|            | Type                                    | Description | Required |
| ---------- | --------------------------------------- | ----------- | -------- |
| **timing** | [TimingType](timing.json.md#timingtype) |             |          |
| **amount** | undefined                               |             |          |

## IBUEstimateType

_no description yet_

`IBUEstimateType` type: `undefined`

### Properties

|            | Type                            | Description | Required |
| ---------- | ------------------------------- | ----------- | -------- |
| **method** | [IBUMethodType](#ibumethodtype) |             |          |

## IBUMethodType

_no description yet_

`IBUMethodType` type: `string`
