The schema defines the following types:

## PackagingGraphicType 

PackagingGraphicType - a representation of a graphic to be placed on a vessel.

**PackagingGraphicType** is an object with these properties:

|Name|Required|Type|Description|
|--|--|--|--|
| **position** | ✅ | `"body front"`<br/>`"body back"`<br/>`"body wrap around"`<br/>`"neck front"`<br/>`"neck back"`<br/>`"neck wrap around"`<br/>`"cap"`<br/>`"carrier"`|  |
| **type** | ✅ | `"svg"`<br/>`"svgz"`<br/>`"ai"`<br/>`"cdr"`<br/>`"cdx"`<br/>`"odg"`<br/>`"eps"`<br/>`"pdf"`<br/>`"png"`<br/>`"jpg"`<br/>`"gif"`| File type |
| **base64_data** |  | string| base64 encoded file. |
| **URLS** |  | array of string| URLS to hosted version of image. |
| **dpi** |  | number| Dots per inch. |
| **width** |  | number|  |
| **height** |  | number|  |
| **units** |  | `"mm"`<br/>`"in"`| The unit type which are used for measurements. |

