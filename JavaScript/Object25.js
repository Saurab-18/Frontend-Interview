// Write a function for deepClone of object
function deepClone(value) {
  if (typeof value === null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(deepClone);
  }
  let clonedObj = {};
  for (let key in value) {
    clonedObj[key] = deepClone(value[key]);
  }
  return clonedObj;
}

// Write a function for shallowClone of object

function shallowClone(value) {
  if (typeof value === null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.slice();
  }
  return { ...value };
}
