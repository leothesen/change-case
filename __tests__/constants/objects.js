const snake_case = {
  plain_field: 'text',
  object_field: {
    plain_field: 'text'
  },
  array_field: [
    'text'
  ],
  mixed_object_field: {
    plain_field: 'text',
    array_field: [
      'text'
    ],
    object_field: {
      plain_field: 'text'
    }
  },
  mixed_array_field: [
    'text',
    {
      plain_field: 'text',
    }
  ]
}

const camelCase = {
  plainField: 'text',
  objectField: {
    plainField: 'text'
  },
  arrayField: [
    'text'
  ],
  mixedObjectField: {
    plainField: 'text',
    arrayField: [
      'text'
    ],
    objectField: {
      plainField: 'text'
    }
  },
  mixedArrayField: [
    'text',
    {
      plainField: 'text',
    }
  ]
}

module.exports = {
  snake_case,
  camelCase
}