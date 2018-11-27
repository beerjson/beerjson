const mapProps = (obj, mapFn) =>
  obj ? Object.keys(obj).map((key, index) => mapFn(key, obj[key])) : []

const parser = formatter => schema => {
  const parseTypeRefStr = ref => {
    const regex = /^(\S+)?#\/definitions\/(\S+)/
    const matches = ref.match(regex)
    const fileName = matches[1]
    const typeName = matches[2]
    return { typeName, fileName }
  }

  const processTypeRef = ref =>
    formatter.formatParsedTypeRef(parseTypeRefStr(ref))

  const processArray = ({ $ref }) =>
    formatter.formatArray($ref, processTypeRef($ref))

  const processOneOf = types =>
    types
      .map(({ $ref }) => processTypeRef($ref))
      .reduce(formatter.formatOneOf, '')

  const processPropDefinition = requiredList => ([propName, propDef]) =>
    formatter.formatPropDefinition(
      propName,
      requiredList.includes(propName),
      processPropType(propDef),
      propDef.description
    )

  const processSimpleTypeDefinition = (typeName, typeDef) =>
    processPropType(typeDef)

  const processPropType = propType => {
    if (propType.enum) return formatter.formatEnum(propType.enum)
    if (propType.type === 'array') return processArray(propType.items)
    if (propType.type === 'object') return formatter.formatNestedType(propType)
    if (propType.pattern) return formatter.formatPattern(propType.pattern)
    if (propType.type) return formatter.formatPropTypeName(propType.type)
    if (propType.$ref) return processTypeRef(propType.$ref)
    if (propType.oneOf) return processOneOf(propType.oneOf)
  }

  const processProperties = requiredList => def => {
    return formatter.addPropListWrapper(
      mapProps(def.properties, (propName, typeDef) => [
        propName,
        typeDef
      ]).reduce(
        (acc, pair) => acc + processPropDefinition(requiredList)(pair),
        ''
      )
    )
  }

  const getRequiredList = ({ required = [] }) => required

  const processPropertyList = (name, def) => {
    const processProps = processProperties(getRequiredList(def))
    if (def.allOf) {
      const { $ref } = def.allOf[0]
      const formattedType1Ref = processTypeRef($ref)
      const formattedPropList = def.allOf[1] ? processProps(def.allOf[1]) : ''

      return formatter.formatAllOf(name, formattedType1Ref, formattedPropList)
    } else {
      const formattedPropList = processProps(def)
      return formatter.formatPropList(name, formattedPropList)
    }
  }

  const processTypeDefinition = ([typeName, typeDef]) =>
    formatter.formatTypeDefinition(
      typeName,
      typeDef,
      typeDef.type === 'object'
        ? processPropertyList(typeName, typeDef)
        : processSimpleTypeDefinition(typeName, typeDef)
    )

  const formatDefinitions = schema =>
    formatter.addTypeWrapper(
      mapProps(schema.definitions, (typeName, typeDef) => [
        typeName,
        typeDef
      ]).reduce((acc, pair) => acc + processTypeDefinition(pair), '')
    )

  const formatRootSchema = ({ properties: { beerjson } = {} }) => {
    return beerjson ? processPropertyList('beerjson', beerjson) : ''
  }

  return formatRootSchema(schema) + formatDefinitions(schema)
}

module.exports = parser
module.exports.mapProps = mapProps
