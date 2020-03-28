const { snakeCase } = require('change-case');

function snakify(object) {
  const snaked = {};
  Object.keys(object).map((key) => {
    const keySnakeCase = snakeCase(key);
    if (Array.isArray(object[key])) {
      snaked[keySnakeCase] = object[key].map((arraryElement) => {
        if (typeof arraryElement !== 'object') return arraryElement;
        return snakify(arraryElement);
      })
    } else if (typeof object[key] === 'object') {
      snaked[keySnakeCase] = snakify(object[key]);
    } else {
      snaked[keySnakeCase] = object[key];
    }
    return keySnakeCase;
  });
  return snaked;
}

module.exports = (object) => {
  return snakify(object);
};