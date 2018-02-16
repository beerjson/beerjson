The schema defines the following types:

## RecipeType
RecipeType composes the information stored in a beer_xml recipe
`RecipeType` type: `object`

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **type** | string|  | :white_check_mark: |
| **author** | string|  | :white_check_mark: |
| **coauthor** | string|  |  |
| **created** | [DateType](measureable_units.json.md#datetype)|  |  |
| **batch_size** | [VolumeType](measureable_units.json.md#volumetype)|  | :white_check_mark: |
| **boil_size** | [VolumeType](measureable_units.json.md#volumetype)|  | :white_check_mark: |
| **boil_time** | [TimeType](measureable_units.json.md#timetype)|  | :white_check_mark: |
| **efficiency** | [PercentType](measureable_units.json.md#percenttype)|  |  |
| **style** | [RecipeStyleType](#recipestyletype)|  |  |
| **ingredients** | object|  | :white_check_mark: |
| **mash** | [MashProcedureType](mash.json.md#mashproceduretype)|  |  |
| **notes** | string|  |  |
| **original_gravity** | [DensityType](measureable_units.json.md#densitytype)|  |  |
| **final_gravity** | [DensityType](measureable_units.json.md#densitytype)|  |  |
| **alcohol_by_volume** | [PercentType](measureable_units.json.md#percenttype)|  |  |
| **ibu_estimate** | [IBUEstimateType](hops.json.md#ibuestimatetype)|  |  |
| **color_estimate** | [ColorType](measureable_units.json.md#colortype)|  |  |
| **beer_pH** | [AcidityType](measureable_units.json.md#aciditytype)|  |  |
| **carbonation** | number|  |  |
| **fermentation** | [FermentationProcedureType](fermentation.json.md#fermentationproceduretype)|  |  |
| **taste** | object|  |  |
| **calories_per_pint** | number|  |  |

## RecipeStyleType
Recipe Style Type Description
`RecipeStyleType` type: `undefined`


