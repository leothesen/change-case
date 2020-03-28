const { snakeCase } = require('change-case');
const objectRecursion = require('../helpers/objectRecursion');

module.exports = (object) => objectRecursion(snakeCase, object);