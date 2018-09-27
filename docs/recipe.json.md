The schema defines the following types:

## RecipeType

RecipeType composes the information stored in a beerjson recipe

`RecipeType` type: `object`

### Properties

|                       | Type                                                                        | Description | Required           |
| --------------------- | --------------------------------------------------------------------------- | ----------- | ------------------ |
| **name**              | string                                                                      |             | :white_check_mark: |
| **type**              | 'extract' , 'partial mash' , 'all grain'                                    |             | :white_check_mark: |
| **author**            | string                                                                      |             | :white_check_mark: |
| **coauthor**          | string                                                                      |             |                    |
| **created**           | [DateType](measureable_units.json.md#datetype)                              |             |                    |
| **batch_size**        | [VolumeType](measureable_units.json.md#volumetype)                          |             | :white_check_mark: |
| **boil_size**         | [VolumeType](measureable_units.json.md#volumetype)                          |             | :white_check_mark: |
| **boil_time**         | [TimeType](measureable_units.json.md#timetype)                              |             | :white_check_mark: |
| **efficiency**        | object                                                                      |             | :white_check_mark: |
| **style**             | [RecipeStyleType](style.json.md#recipestyletype)                            |             |                    |
| **ingredients**       | object                                                                      |             | :white_check_mark: |
| **mash**              | [MashProcedureType](mash.json.md#mashproceduretype)                         |             |                    |
| **notes**             | string                                                                      |             |                    |
| **original_gravity**  | [GravityType](measureable_units.json.md#gravitytype)                        |             |                    |
| **final_gravity**     | [GravityType](measureable_units.json.md#gravitytype)                        |             |                    |
| **alcohol_by_volume** | [PercentType](measureable_units.json.md#percenttype)                        |             |                    |
| **ibu_estimate**      | [IBUEstimateType](hop.json.md#ibuestimatetype)                              |             |                    |
| **color_estimate**    | [ColorType](measureable_units.json.md#colortype)                            |             |                    |
| **beer_pH**           | [AcidityType](measureable_units.json.md#aciditytype)                        |             |                    |
| **carbonation**       | number                                                                      |             |                    |
| **fermentation**      | [FermentationProcedureType](fermentation.json.md#fermentationproceduretype) |             |                    |
| **packaging**         | [PackagingProcedureType](packaging.json.md#packagingproceduretype)          |             |                    |
| **taste**             | object                                                                      |             |                    |
| **calories_per_pint** | number                                                                      |             |                    |
