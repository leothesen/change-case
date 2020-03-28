function recursiveFunction(changeCaseFunction, object) {
  const result = {};
  Object.keys(object).map((key) => {
    const keyCaseChanged = changeCaseFunction(key);
    if (Array.isArray(object[key])) {
      result[keyCaseChanged] = object[key].map((arraryElement) => {
        if (typeof arraryElement !== 'object') return arraryElement;
        return recursiveFunction(changeCaseFunction, arraryElement);
      });
    } else if (typeof object[key] === 'object') {
      result[keyCaseChanged] = recursiveFunction(changeCaseFunction, object[key]);
    } else {
      result[keyCaseChanged] = object[key];
    }
    return keyCaseChanged;
  });
  return result;
}

module.exports = (changeCaseFunction, object) => recursiveFunction(changeCaseFunction, object);
