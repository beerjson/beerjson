//adapted from https://github.com/saibotsivad/json-schema-to-markdown
var coreSchemaTypes = [
  'array',
  'boolean',
  'integer',
  'number',
  'null',
  'object',
  'string'
]

function generateElementTitle(
  octothorpes,
  elementName,
  elementType,
  isRequired,
  isEnum,
  example
) {
  var text = [octothorpes]
  if (elementName) {
    text.push(' ' + elementName + '\n')
    text.push(' `' + elementName + '`')
  }
  if (elementType || isRequired) {
    let typeName = elementType
    let link = undefined
    if (elementType && elementType.ref) {
      typeName = elementType.ref.typeName
      link = elementType.ref.fileBase + '.json.md/#' + typeName.toLowerCase()
    }
    text.push(' (')
    if (typeName) {
      if (link) {
        text.push(`[${typeName}](${link})`)
      } else {
        text.push(typeName)
      }
    }
    if (isEnum) {
      text.push(', enum')
    }
    if (isRequired) {
      text.push(', required')
    }
    text.push(')')
  }
  if (example) {
    text.push(' eg: `' + example + '`')
  }
  return text.join('')
}

function generatePropertyRestrictions(schema) {
  var generate = generateSinglePropertyRestriction(schema)
  return [
    generate('minimum', 'Minimum'),
    generate('maximum', 'Maximum'),
    generate('pattern', 'Regex pattern'),
    generate('minItems', 'Minimum items'),
    generate('uniqueItems', 'Unique items')
  ]
    .filter(function(text) {
      return text
    })
    .join('\n')
}

function generateSinglePropertyRestriction(schema) {
  return function(key, text) {
    if (schema[key]) {
      return '* ' + text + ': `' + schema[key] + '`'
    } else {
      return null
    }
  }
}

function generateSchemaSectionText(
  octothorpes,
  name,
  isRequired,
  schema,
  subSchemas
) {
  var schemaType = getActualType(schema, subSchemas)

  var text = [
    generateElementTitle(
      octothorpes,
      name,
      schemaType,
      isRequired,
      schema.enum,
      schema.example
    ),
    schema.description
  ]

  if (schemaType === 'object') {
    if (schema.properties) {
      text.push('Properties of the `' + name + '` object:')
      generatePropertySection(octothorpes, schema, subSchemas).forEach(function(
        section
      ) {
        text = text.concat(section)
      })
    }
  } else if (schemaType === 'array') {
    var itemsType = schema.items && schema.items.type

    if (!itemsType && schema.items['$ref']) {
      itemsType = getActualType(schema.items, subSchemas)
    }

    if (itemsType && name) {
      text.push(
        'The object is an array with all elements of the type `' +
          itemsType +
          '`.'
      )
    } else if (itemsType) {
      text.push(
        'The schema defines an array with all elements of the type `' +
          itemsType +
          '`.'
      )
    } else {
      var validationItems = []

      if (schema.items.allOf) {
        text.push(
          'The elements of the array must match *all* of the following properties:'
        )
        validationItems = schema.items.allOf
      } else if (schema.items.anyOf) {
        text.push(
          'The elements of the array must match *at least one* of the following properties:'
        )
        validationItems = schema.items.anyOf
      } else if (schema.items.oneOf) {
        text.push(
          'The elements of the array must match *exactly one* of the following properties:'
        )
        validationItems = schema.items.oneOf
      } else if (schema.items.not) {
        text.push(
          'The elements of the array must *not* match the following properties:'
        )
        validationItems = schema.items.not
      }

      if (validationItems.length > 0) {
        validationItems.forEach(function(item) {
          text = text.concat(
            generateSchemaSectionText(
              octothorpes,
              undefined,
              false,
              item,
              subSchemas
            )
          )
        })
      }
    }

    if (itemsType === 'object') {
      text.push('The array object has the following properties:')
      generatePropertySection(octothorpes, schema.items, subSchemas).forEach(
        function(section) {
          text = text.concat(section)
        }
      )
    }
  } else if (schema.oneOf) {
    text.push('The object must be one of the following types:')
    text.push(
      schema.oneOf
        .map(function(oneOf) {
          return '* `' + subSchemas[oneOf['$ref']] + '`'
        })
        .join('\n')
    )
  }

  if (schema.enum) {
    text.push('This element must be one of the following enum values:')
    text.push(
      schema.enum
        .map(function(enumItem) {
          return '* `' + enumItem + '`'
        })
        .join('\n')
    )
  }

  if (schema.default !== undefined) {
    if (
      schema.default === null ||
      ['boolean', 'number', 'string'].indexOf(typeof schema.default) !== -1
    ) {
      text.push('Default: `' + JSON.stringify(schema.default) + '`')
    } else {
      text.push('Default:')
      text.push('```\n' + JSON.stringify(schema.default, null, 2) + '\n```')
    }
  }

  var restrictions = generatePropertyRestrictions(schema)

  if (restrictions) {
    text.push('Additional restrictions:')
    text.push(restrictions)
  }

  return text
}

function generatePropertySection(octothorpes, schema, subSchemas) {
  if (schema.properties) {
    var propertyTOC = Object.keys(schema.properties)
      .map(propName => {
        return `* [${propName}](#${propName})`
      })
      .join('\n')
    var propertiesDescription = Object.keys(schema.properties).map(
      propertyKey => {
        var propertyIsRequired =
          schema.required && schema.required.indexOf(propertyKey) >= 0
        return generateSchemaSectionText(
          octothorpes + '#',
          propertyKey,
          propertyIsRequired,
          schema.properties[propertyKey],
          subSchemas
        )
      }
    )
    return [propertyTOC].concat(propertiesDescription)
  } else if (schema.oneOf) {
    var oneOfList = schema.oneOf
      .map(function(innerSchema) {
        return '* `' + getActualType(innerSchema, subSchemas) + '`'
      })
      .join('\n')
    return ['This property must be one of the following types:', oneOfList]
  } else {
    return []
  }
}

function getActualType(schema, subSchemas) {
  if (schema.type) {
    return schema.type
  } else if (schema['$ref']) {
    if (subSchemas[schema['$ref']]) {
      return subSchemas[schema['$ref']]
    } else {
      let matches = []
      const regex = /(.+).json#(.*)\/([a-zA-Z]+)$/g
      match = regex.exec(schema['$ref'])
      const fileBase = match[1]
      const typeName = match[3]
      return { ref: { fileBase, typeName } }
    }
  } else {
    return undefined
  }
}

module.exports = function(schema, startingOctothorpes) {
  var subSchemaTypes = Object.keys(schema.definitions || {}).reduce(function(
    map,
    subSchemaTypeName
  ) {
    map['#/definitions/' + subSchemaTypeName] = subSchemaTypeName
    return map
  },
  {})

  var text = []
  var octothorpes = startingOctothorpes || ''

  if (schema.title) {
    octothorpes += '#'
    text.push(octothorpes + ' ' + schema.title)
  }

  if (schema.type === 'object') {
    if (schema.description) {
      text.push(schema.description)
    }
    text.push('The schema defines the following properties:')
    generatePropertySection(octothorpes, schema, subSchemaTypes).forEach(
      function(section) {
        text = text.concat(section)
      }
    )
  } else {
    text = text.concat(
      generateSchemaSectionText(
        '#' + octothorpes,
        undefined,
        false,
        schema,
        subSchemaTypes
      )
    )
  }

  if (schema.definitions) {
    text.push('---')
    text.push('# Sub Schemas')
    text.push('The schema defines the following additional types:')
    Object.keys(schema.definitions).forEach(function(subSchemaTypeName) {
      text.push(
        '## ' +
          subSchemaTypeName +
          '\n`' +
          subSchemaTypeName +
          '` (' +
          schema.definitions[subSchemaTypeName].type +
          ')'
      )
      text.push(schema.definitions[subSchemaTypeName].description)
      if (schema.definitions[subSchemaTypeName].type === 'object') {
        if (schema.definitions[subSchemaTypeName].properties) {
          text.push('Properties of the `' + subSchemaTypeName + '` object:')
        }
      }
      generatePropertySection(
        '##',
        schema.definitions[subSchemaTypeName],
        subSchemaTypes
      ).forEach(function(section) {
        text = text.concat(section)
      })
    })
  }

  return text
    .filter(function(line) {
      return !!line
    })
    .join('\n\n')
}
