const toSnakeCase = require('../../cases/toSnakeCase');
const { snake_case, camelCase } = require('../constants/objects');

test('toSnakeCase',() => {
  expect(toSnakeCase(camelCase)).toEqual(snake_case);
})