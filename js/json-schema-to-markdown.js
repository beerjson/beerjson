const parseTypeRefStr = ref => {
  const regex = /^(\S+)?#\/definitions\/(\S+)/
  const matches = ref.match(regex)
  const fileName = matches[1]
  const typeName = matches[2]
  return { typeName, fileName }
}

const formatTypeRef = ({ typeName, fileName }) =>
  `[${typeName}](${fileName ? fileName + '.md' : ''}#${typeName.toLowerCase()})`

const formatEnum = enumValues =>
  enumValues.reduce(
    (str, val) => (str ? str + `<br/>\`"${val}"\`` : `\`"${val}"\``),
    ''
  )
const formatPropDefinition = requiredList => ([propName, propDef]) =>
  `| **${propName}** | ${
    requiredList.includes(propName) ? ':white_check_mark:' : ''
  } | ${formatPropType(propDef)}| ${
    propDef.description ? propDef.description : ''
  } |
`

const formatPropType = propType => {
  if (propType.enum) return formatEnum(propType.enum)
  if (propType.type) return propType.type
  if (propType.$ref) return formatTypeRef(parseTypeRefStr(propType.$ref))
}

const addTableHeader = str => `### Properties

|Name|Required|Type|Description|
|--|--|--|--|
${str}`

const mapProps = (obj, mapFn) =>
  obj ? Object.keys(obj).map((key, index) => mapFn(key, obj[key])) : []

const formatProperties = requiredList => def => {
  const result = mapProps(def.properties, (propName, typeDef) => [
    propName,
    typeDef
  ]).reduce((acc, pair) => acc + formatPropDefinition(requiredList)(pair), '')
  return result !== '' ? addTableHeader(result) : ''
}

const formatParentType = ({ $ref }) =>
  $ref ? `Parent: ${formatTypeRef(parseTypeRefStr($ref))}\n\n` : ''

const getRequiredList = ({ required = [] }) => required

const log = x => {
  console.log('LOG', x)
  return x
}

const formatPropertyList = def => {
  const newdef = def.allOf ? { ...def.allOf[0], ...def.allOf[1] } : def
  return (
    formatParentType(newdef) + formatProperties(getRequiredList(def))(newdef)
  )
}

const formatTypeDefinition = ([typeName, typeDef]) =>
  `## ${typeName} 

${typeDef.description ? typeDef.description : '*no description yet*'}

\`${typeName}\` type: \`${typeDef.type}\`

${formatPropertyList(typeDef)}
`

const addTypeHeader = str => `The schema defines the following types:\n\n${str}`

const formatDefinitions = schema => {
  const result = mapProps(schema.definitions, (typeName, typeDef) => [
    typeName,
    typeDef
  ]).reduce((acc, pair) => acc + formatTypeDefinition(pair), '')
  return result !== '' ? addTypeHeader(result) : ''
}
const formatRootSchema = ({ properties: { beerjson } = {} }) => {
  return beerjson ? formatPropertyList(beerjson) : ''
}

const jsonSchemaToMarkdown = s => formatRootSchema(s) + formatDefinitions(s)

module.exports = jsonSchemaToMarkdown
