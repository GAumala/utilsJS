export const renameKeys = (obj, newKeys) => {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};

export const removeKeys = (obj, ...keysToRemove) =>
  Object.keys(obj)
    .filter((key) => !keysToRemove.includes(key))
    .reduce((res, key) => {
      res[key] = obj[key];
      return res;
    }, {});

export const parseIntKeys = (obj, ...intKeys) => {
  const keyValues = Object.keys(obj).map((key) => {
    const value = intKeys.includes(key) ? parseInt(obj[key]) : obj[key];
    return { [key]: value };
  });
  return Object.assign({}, ...keyValues);
};

export const isValidObject = (obj) => typeof obj === "object" && obj !== null;
