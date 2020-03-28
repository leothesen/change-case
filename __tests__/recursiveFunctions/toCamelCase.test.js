const toCamelCase = require('../../recursiveFunctions/toCamelCase');
const { snake_case, camelCase } = require('../constants/objects');

test('toCamelCase',() => {
  expect(toCamelCase(snake_case)).toEqual(camelCase);
})