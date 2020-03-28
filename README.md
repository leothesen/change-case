# change-case
Recursive functions for changing the case of object fields. Best

## Install

```bash
npm install @leothesen/change-case
```

## Usage

```js
const { 
  toCamelCase,
  toSnakeCase
} = require('@leothesen/change-case');

const snake_case = {
  mixed_array_field: [
    'text',
    {
      plain_field: 'text',
      mixed_object_field: {
        numeric_field: 42,
        arrary_field: [
          42,
          'fourty two',
          { fourty_two: 42 }
        ]
      }
    }
  ]
};

const camelCase = toCamelCase(snake_case);
/**
 * camelCase = {
 *  plainField: 'text',
 *  mixedObjectField: {
 *    numericField: 42,
 *    arrayField: [
 *      42,
 *      'fourty two',
 *      { fourtyTwo: 42}
 *    ]
 *  }
 * }
 */
```

## License

MIT