The schema defines the following types:

## CultureBase 

The descriptive base type for both culture records, and recipe additions. Provides unique properties to identify individual records of a culture

`CultureBase` type: `object`



### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **name** | string|  | :white_check_mark: |
| **type** |  'ale'  , 'bacteria'  , 'brett'  , 'champagne'  , 'kviek'  , 'lacto'  , 'lager'  , 'malolactic'  , 'mixed-culture'  , 'other'  , 'pedio'  , 'spontaneous'  , 'wine' |  | :white_check_mark: |
| **form** |  'liquid'  , 'dry'  , 'slant'  , 'culture'  , 'dregs' |  | :white_check_mark: |
| **laboratory** | string|  |  |
| **product_id** | string|  |  |

## CultureInformation 

CultureInformation collects the attributes of a microbial culture to store as record information

`CultureInformation` type: `object`

Parent: [CultureBase](#culturebase)

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **temperature_range** | [TemperatureRangeType](measureable_units.json.md#temperaturerangetype)|  |  |
| **flocculation** | [QualitativeRangeType](measureable_units.json.md#qualitativerangetype)|  |  |
| **attenuation** | [PercentType](measureable_units.json.md#percenttype)|  |  |
| **alcohol_tolerance** | [PercentRangeType](measureable_units.json.md#percentrangetype)|  |  |
| **notes** | string|  |  |
| **best_for** | string|  |  |
| **max_reuse** | integer|  |  |
| **inventory** | object|  |  |

## CultureAdditionType 

CultureAdditionType collects the attributes of each culture ingredient for use in a recipe

`CultureAdditionType` type: `object`

Parent: [CultureBase](#culturebase)

### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
| **attenuation** | [PercentType](measureable_units.json.md#percenttype)|  |  |
| **times_cultured** | integer|  |  |
| **add_to_fermentation_step** | integer|  |  |
| **addition_time** | [TimeType](measureable_units.json.md#timetype)|  |  |
| **addition_sg** | [DensityRangeType](measureable_units.json.md#densityrangetype)|  |  |
| **cell_count_billions** | integer|  |  |
| **amount** | [VolumeType](measureable_units.json.md#volumetype)|  |  |
| **amount_as_weight** | [MassType](measureable_units.json.md#masstype)|  |  |

