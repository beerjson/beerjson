The schema defines the following types:

## FermentationProcedureType 

FermentationProcedureType defines the procedure for performing fermentation.

**FermentationProcedureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string|  |
| **type** |  | string|  |
| **description** |  | string|  |
| **notes** |  | string|  |
| **fermentation_steps** | ✅ | array of [FermentationStepType](fermentation_step.json.md#fermentationsteptype)|  |

