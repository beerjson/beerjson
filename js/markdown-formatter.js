module.exports = {
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
    )
}
