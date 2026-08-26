The schema defines the following types:

## FermentationProcedureType 

FermentationProcedureType defines the procedure for performing fermentation.

**FermentationProcedureType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **name** | ✅ | string| Name of the fermentation procedure. |
| **description** |  | string| Free text description of the fermentation procedure. |
| **notes** |  | string| Free text notes about the fermentation procedure. |
| **fermentation_steps** | ✅ | array of [FermentationStepType](fermentation_step.json.md#fermentationsteptype)| The steps that make up the fermentation, in the order they are performed. |

