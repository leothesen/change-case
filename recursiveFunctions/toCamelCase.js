const { camelCase } = require('change-case');

function camellify(object) {
  const camelled = {};
  Object.keys(object).map((key) => {
    const keyCamelCase = camelCase(key);
    if (Array.isArray(object[key])) {
      camelled[keyCamelCase] = object[key].map((arraryElement) => {
        if (typeof arraryElement === 'string') return arraryElement;
        return camellify(arraryElement);
      })
    } else if (typeof object[key] === 'object') {
      camelled[keyCamelCase] = camellify(object[key]);
    } else {
      camelled[keyCamelCase] = object[key];
    }
    return keyCamelCase;
  });
  return camelled;
}

module.exports = (object) => {
  return camellify(object);
};