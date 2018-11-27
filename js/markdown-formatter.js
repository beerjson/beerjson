module.exports = {
  addFileWrapper: str => str,

  addTypeWrapper: str =>
    str ? `The schema defines the following types:\n\n${str}` : '',

  formatTypeDefinition: (typeName, typeDef, formattedDef) => `## ${typeName} 

${typeDef.description ? typeDef.description : '*no description yet*'}

${formattedDef}
`,

  addPropListWrapper: str =>
    str
      ? `|Name|Required|Type|Description|
|--|--|--|--|
${str}`
      : '',
  formatEnum: enumValues =>
    enumValues.reduce(
      (str, val) => (str ? str + `<br/>\`"${val}"\`` : `\`"${val}"\``),
      ''
    ),
  formatArray: (ref, formattedType) => `array of ${formattedType}`,

  formatOneOf: (str, formattedRef) =>
    str + `${str ? ' or ' : ''} ${formattedRef}`,

  formatParsedTypeRef: ({ typeName, fileName }) =>
    `[${typeName}](${
      fileName ? fileName + '.md' : ''
    }#${typeName.toLowerCase()})`,

  formatPattern: pattern => `RegExp pattern: \`${pattern}\``,

  formatPropTypeName: name => name,

  formatAllOf: (name, formattedType1Ref, formattedPropList) =>
    `**${name}** is an object with all properties from ${formattedType1Ref}${
      formattedPropList
        ? ` and these additional properties:\n\n${formattedPropList}`
        : '\n\n'
    }`,

  formatPropList: (name, formattedPropList) =>
    `**${name}** is an object with these properties:\n\n${formattedPropList}`,

  formatNestedType: propType =>
    '❌ Cannot generate document for a nested type! ' + propType.type,

  formatPropDefinition: (propName, required, formattedPropType, description) =>
    `| **${propName}** | ${required ? '✅' : ''} | ${formattedPropType}| ${
      description ? description : ''
    } |\n`
}
