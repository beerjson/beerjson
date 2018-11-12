**beerjson** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **version** | :white_check_mark: | [VersionType](measureable_units.json.md#versiontype)| Explicitly encode beerjson version within list of records. |
| **fermentables** |  | array| Records for any ingredient that contributes to the gravity of the beer. |
| **miscellaneous_ingredients** |  | array| Records for adjuncts which do not contribute to the gravity of the beer. |
| **hop_varieties** |  | array| Records detailing the many properties of unique hop varieties. |
| **cultures** |  | array| Records detailing the wide array of unique cultures. |
| **profiles** |  | array| Records for regional water profiles used in style-specific beer brewing. |
| **styles** |  | array| Records detailing the characteristics of the beer styles for which judging guidelines have been established. |
| **mashes** |  | array| A collection of steps providing process information for common mashing procedures. |
| **fermentations** |  | array| A collection of steps providing process information for common fermentation procedures. |
| **recipes** |  | array| Records containing a minimal collection of the description of ingredients, procedures and other required parameters necessary to recreate a batch of beer. |
| **equipments** |  | array| Provides necessary information for brewing equipment. |
| **boil** |  | array| A collection of steps providing process information for common boil procedures. |
| **packaging** |  | array| A collection of steps providing process information for common packaging procedures. |
