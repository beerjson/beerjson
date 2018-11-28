const tab = '    '

module.exports = {
  addRootWrapper: str => `${tab} type BeerJSON = ${str}`,
  addTypeWrapper: str => (str ? `${str}` : ''),

  formatTypeDefinition: (typeName, typeDef, formattedDef) =>
    `${tab}type ${typeName} = ${formattedDef}\n`,

  addPropListWrapper: str => (str ? `{\n${str}${tab}}\n` : ''),

  formatEnum: enumValues =>
    enumValues.reduce((str, val) => str + ` | "${val}"`, ''),

  formatArray: (ref, formattedType) => `[${formattedType}]`,

  formatOneOf: (str, formattedRef) => str + ` | ${formattedRef}`,

  formatParsedTypeRef: ({ typeName, fileName }) => typeName,

  formatPattern: pattern => 'string',

  formatPropTypeName: name => name,

  formatAllOf: (name, formattedType1Ref, formattedPropList) =>
    ` ${formattedType1Ref} ${
      formattedPropList ? `& ${formattedPropList}` : '\n\n'
    }`,

  formatPropList: (name, formattedPropList) => formattedPropList,

  formatNestedType: propType =>
    '❌ Cannot generate document for a nested type! ' + propType.type,

  formatPropDefinition: (propName, required, formattedPropType, description) =>
    `${tab}${tab}${propName}${required ? '' : '?'}: ${formattedPropType},\n`
}
