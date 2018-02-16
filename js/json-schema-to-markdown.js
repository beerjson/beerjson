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
  (str, val) => (str ? str + ` | '${val}' ` : ` '${val}' `),
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

const formatTypeDefinition = ([typeName, typeDef]) =>
  `## ${typeName}

${R.propOr('*no description yet*', 'description', typeDef)}

\`${typeName}\` type: \`${typeDef.type}\`

${formatProperties(R.propOr([], 'required', typeDef))(typeDef)}
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
