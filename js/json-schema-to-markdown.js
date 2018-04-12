const R = require('ramda')

const formatTypeRef = ref => {
  const regex = /^(\S+)?#\/definitions\/(\S+)/
  const matches = ref.match(regex)
  const fileName = matches[1]
  const typeName = matches[2]
  return `[${typeName}](${fileName ? fileName + '.md' : ''}#${R.toLower(
    typeName
  )})`
}

const formatEnum = R.reduce(
  (str, val) => (str ? str + ` , '${val}' ` : ` '${val}' `),
  ''
)

const formatPropType = R.cond([
  [R.has('enum'), R.pipe(R.prop('enum'), formatEnum)],
  [R.has('type'), R.prop('type')],
  [R.has('$ref'), R.pipe(R.prop('$ref'), formatTypeRef)]
])

const formatPropDefinition = requiredList => ([propName, propDef]) =>
  `| **${propName}** | ${formatPropType(propDef)}| ${R.propOr(
    '',
    'description',
    propDef
  )} | ${R.contains(propName, requiredList) ? ':white_check_mark:' : ''} |
`
const addTableHeader = str => `### Properties

|   |Type|Description|Required|
|---|----|-----------|--------|
${str}`

const formatProperties = requiredList =>
  R.pipe(
    R.prop('properties'),
    R.toPairs,
    R.reduce((md, pair) => md + formatPropDefinition(requiredList)(pair), ''),
    R.ifElse(R.isEmpty, R.empty, addTableHeader)
  )

const formatParentType = R.ifElse(
  R.has('$ref'),
  R.pipe(
    R.prop('$ref'),
    ref => `Parent: ${formatTypeRef(ref)}

`
  ),
  R.always('')
)

const formatPropertyList = typeDef =>
  R.pipe(
    R.when(R.has('allOf'), R.pipe(R.prop('allOf'), R.mergeAll)),

    t =>
      R.join('', [
        formatParentType(t),
        formatProperties(R.propOr([], 'required', typeDef))(t)
      ])
  )(typeDef)

const formatTypeDefinition = ([typeName, typeDef]) =>
  `## ${typeName} 

${R.propOr('*no description yet*', 'description', typeDef)}

\`${typeName}\` type: \`${typeDef.type}\`

${formatPropertyList(typeDef)}
`

const addTypeHeader = str => `The schema defines the following types:\n\n${str}`

const formatDefinitions = R.pipe(
  R.prop('definitions'),
  R.toPairs,
  R.reduce((md, pair) => md + formatTypeDefinition(pair), ''),
  R.ifElse(R.isEmpty, R.empty, addTypeHeader)
)

const jsonSchemaToMarkdown = formatDefinitions

module.exports = jsonSchemaToMarkdown
module.exports.formatTypeDefinition = formatTypeDefinition
