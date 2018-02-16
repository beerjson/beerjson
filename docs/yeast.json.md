The schema defines the following types:

# CultureBase
The descriptive base type for both yeast culture records and yeast recipe additions. Provides unique properties to identify individual records of a yeast culture
  
`CultureBase` type: `object`

|   |Type|Description|Required|
|---|----|-----------|--------|
|**name**|string|| |
|**type**|string|| |
|**form**|string|| |
|**laboratory**|string|| |
|**product_id**|string|| |
# CultureInformation
CultureInformation collects the attributes of a yeast culture to store as record information
  
`CultureInformation` type: `object`

# YeastAdditionType
YeastAdditionType collects the attributes of a yeast ingredient for use in a recipe
  
`YeastAdditionType` type: `array`

