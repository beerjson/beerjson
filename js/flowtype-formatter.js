const tab = '    '

const formatInt = type => (type == 'integer' ? 'number' : type)

module.exports = {
  addRootWrapper: str => `${tab} export type BeerJSON = ${str}`,
  addTypeWrapper: str => (str ? `${str}` : ''),

  formatTypeDefinition: (typeName, typeDef, formattedDef) =>
    `${tab}export type ${typeName} = ${formattedDef}\n`,

  addPropListWrapper: str => (str ? `{|\n${str}${tab}|}\n` : ''),

  // A numeric enum is a union of number literals, not of quoted strings.
  formatEnum: enumValues =>
    enumValues.reduce(
      (str, val) =>
        str + (typeof val === 'number' ? ` | ${val}` : ` | "${val}"`),
      ''
    ),

  formatArray: (ref, formattedType) => `${formattedType}[]`,

  // A branch that is itself a union already carries a leading `|`; keeping both
  // would emit `| | "a"`.
  formatOneOf: (str, formatted) =>
    str + ` | ${String(formatted).replace(/^\s*\|\s*/, '')}`,

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

  formatPropDefinition: (
    propName,
    required,
    formattedPropType,
    description,
    deprecated
  ) =>
    `${
      deprecated ? `${tab}${tab}/** @deprecated */\n` : ''
    }${tab}${tab}${propName}${required ? '' : '?'}: ${formatInt(
      formattedPropType
    )},\n`
}
