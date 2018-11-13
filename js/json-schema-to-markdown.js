const mapProps = (obj, mapFn) =>
  obj ? Object.keys(obj).map((key, index) => mapFn(key, obj[key])) : []

const parseTypeRefStr = ref => {
  const regex = /^(\S+)?#\/definitions\/(\S+)/
  const matches = ref.match(regex)
  const fileName = matches[1]
  const typeName = matches[2]
  return { typeName, fileName }
}

const formatParsedTypeRef = ({ typeName, fileName }) =>
  `[${typeName}](${fileName ? fileName + '.md' : ''}#${typeName.toLowerCase()})`

const formatTypeRef = ref => formatParsedTypeRef(parseTypeRefStr(ref))

const formatEnum = enumValues =>
  enumValues.reduce(
    (str, val) => (str ? str + `<br/>\`"${val}"\`` : `\`"${val}"\``),
    ''
  )

const formatArray = ({ $ref }) => `array of ${formatTypeRef($ref)}`

const formatOneOf = types =>
  types.reduce(
    (str, { $ref }) => str + `${str ? ' or ' : ''} ${formatTypeRef($ref)}`,
    ''
  )

const formatPropDefinition = requiredList => ([propName, propDef]) =>
  `| **${propName}** | ${
    requiredList.includes(propName) ? '✅' : ''
  } | ${formatPropType(propDef)}| ${
    propDef.description ? propDef.description : ''
  } |
`
const formatSimpleTypeDefinition = (typeName, typeDef) =>
  formatPropType(typeDef)

const formatPropType = propType => {
  if (propType.enum) return formatEnum(propType.enum)
  if (propType.type === 'array') return formatArray(propType.items)
  if (propType.type === 'object')
    return '❌ Cannot generate document for a nested type! ' + propType.type
  if (propType.pattern) return `RegExp pattern: \`${propType.pattern}\``
  if (propType.type) return propType.type
  if (propType.$ref) return formatTypeRef(propType.$ref)
  if (propType.oneOf) return formatOneOf(propType.oneOf)
}

const addTableHeader = str =>
  str
    ? `|Name|Required|Type|Description|
|--|--|--|--|
${str}`
    : ''

const formatProperties = requiredList => def => {
  return addTableHeader(
    mapProps(def.properties, (propName, typeDef) => [propName, typeDef]).reduce(
      (acc, pair) => acc + formatPropDefinition(requiredList)(pair),
      ''
    )
  )
}

const getRequiredList = ({ required = [] }) => required

const formatPropertyList = (name, def) => {
  const formatProps = formatProperties(getRequiredList(def))
  if (def.allOf) {
    const { $ref } = def.allOf[0]
    return `**${name}** is an object with all properties from ${formatTypeRef(
      $ref
    )}${
      def.allOf[1]
        ? ` and these additional properties:\n\n${formatProps(def.allOf[1])}`
        : '\n\n'
    }`
  } else {
    return `**${name}** is an object with these properties:\n\n${formatProps(
      def
    )}`
  }
}

const formatTypeDefinition = ([typeName, typeDef]) =>
  `## ${typeName} 

${typeDef.description ? typeDef.description : '*no description yet*'}

${
    typeDef.type === 'object'
      ? formatPropertyList(typeName, typeDef)
      : formatSimpleTypeDefinition(typeName, typeDef)
  }
`

const addTypeHeader = str =>
  str ? `The schema defines the following types:\n\n${str}` : ''

const formatDefinitions = schema =>
  addTypeHeader(
    mapProps(schema.definitions, (typeName, typeDef) => [
      typeName,
      typeDef
    ]).reduce((acc, pair) => acc + formatTypeDefinition(pair), '')
  )

const formatRootSchema = ({ properties: { beerjson } = {} }) => {
  return beerjson ? formatPropertyList('beerjson', beerjson) : ''
}

const jsonSchemaToMarkdown = s => formatRootSchema(s) + formatDefinitions(s)

module.exports = jsonSchemaToMarkdown
