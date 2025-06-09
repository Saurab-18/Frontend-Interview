// Write a function for deepClone of object
function deepClone(value) {
  if (value === null || typeof value !== "object") {
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
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.slice();
  }
  return { ...value };
}

// Write a function to deep merge two objects
function deepMerge(valA, valB) {
  if (Array.isArray(valA) && Array.isArray(valB)) {
    return [...valA, ...valB];
  }
  if (isPlainObject(valA) && isPlainObject(valB)) {
    const newObj = { ...valA };
    for (let key in valB) {
      if (Object.prototype.hasOwnProperty.call(valA, key)) {
        newObj[key] = deepMerge(valA[key], valB[key]);
      } else {
        newObj[key] = valB[key];
      }
    }
    return newObj;
  }
  return valB;
}

function isPlainObject(val) {
  if (val === null) return false;
  const prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype == Object.prototype;
}

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 100);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve("Promise 2");
  })
  .then((res) => {
    console.log(res);
  });

console.log("End");
