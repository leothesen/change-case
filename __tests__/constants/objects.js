const snake_case = {
  plain_field: 'text',
  null_field: null,
  numeric_field: 42,
  object_field: {
    plain_field: 'text',
    numeric_field: 42
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
      mixed_object_field: {
        numeric_field: 42,
        arrary_field: [42, 'fourty two', { fourty_two: 42 }]
      }
    }
  ]
}

const camelCase = {
  plainField: 'text',
  numericField: 42,
  nullField: null,
  objectField: {
    plainField: 'text',
    numericField: 42
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
      mixedObjectField: {
        numericField: 42,
        arraryField: [42, 'fourty two', { fourtyTwo: 42 }]
      }
    }
  ]
}

module.exports = {
  snake_case,
  camelCase
}