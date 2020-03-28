const { camelCase } = require('change-case');
const objectRecursion = require('../helpers/objectRecursion');

module.exports = (object) => objectRecursion(camelCase, object);
