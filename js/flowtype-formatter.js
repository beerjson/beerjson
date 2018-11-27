const tab = '    '

module.exports = {
  addFileWrapper: str => `//@flow\n\n${str}`,

  addTypeWrapper: str => (str ? `${str}` : ''),

  formatTypeDefinition: (typeName, typeDef, formattedDef) =>
    `${tab}type ${typeName} = ${formattedDef}`,

  addPropListWrapper: str => (str ? `{\n${str}${tab}}\n` : ''),

  formatEnum: enumValues =>
    enumValues.reduce((str, val) => (str + str ? ' | ' : '' + `"${val}"`), ''),

  formatArray: (ref, formattedType) => `[${formattedType}]`,

  formatOneOf: (str, formattedRef) =>
    str + `${str ? ' or ' : ''} ${formattedRef}`,

  formatParsedTypeRef: ({ typeName, fileName }) => typeName,

  formatPattern: pattern => `RegExp pattern: \`${pattern}\``,

  formatPropTypeName: name => name,

  formatAllOf: (name, formattedType1Ref, formattedPropList) =>
    `**${name}** is an object with all properties from ${formattedType1Ref}${
      formattedPropList
        ? ` and these additional properties:\n\n${formattedPropList}`
        : '\n\n'
    }`,

  formatPropList: (name, formattedPropList) => formattedPropList,

  formatNestedType: propType =>
    '❌ Cannot generate document for a nested type! ' + propType.type,

  formatPropDefinition: (propName, required, formattedPropType, description) =>
    `${tab}${tab}${propName}: ${formattedPropType},\n`
}
