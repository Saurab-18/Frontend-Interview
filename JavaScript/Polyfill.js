// Polyfill of Only Once Function

function onlyOnce(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn.apply(this, args);
    }
  };
}

let x = onlyOnce(() => {
  console.log("Function Runs Only Once");
});
// x();
// x();

// Polyfill of Memoize fuction

export default function memoize(func) {
  let cache = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// function square(num) {
//   return num * num;
// }

// let memoizeResult = memoize(square);
// console.time("1st");
// console.log(22222222);
// console.timeEnd("1st");
// console.time("2st");
// console.log(22222222);
// console.timeEnd("2st");

// Polyfill of Map function

Array.prototype.polyMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let arr = [1, 2, 3, 4];
let mapResult = arr.polyMap((e) => e * 2);
// console.log(result);

// Polyfill of Filter function

Array.prototype.polyFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let filterArr = [5, 4, 8, 7, 21];
let resultFilter = reduceArr.polyFilter((e) => e > 7);
// console.log(resultFilter);

// Polyfill of Reduce

Array.prototype.polyReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};
let reduceArr = [1, 2];
let reduceResult = reduceArr.polyReduce((acc, cur) => {
  return (acc = acc + cur);
}, 0);
// console.log(reduceResult);

// Polyfill for Promise.all()

Promise.polyAll = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, i) => {
      Promise.resolve(promise).then((res) => {
        results[i] = res;
        pending--;
        if (pending == 0) {
          resolve(results);
        }
      }, reject);
    });
  });
};

// Polyfill for Promise.allSettled()

export default function promiseAllSettled(iterable) {
  let promises = Array.from(iterable)
  let results = []
  return new Promise((resolve,reject) => {
    let pending = promises.length
    if(pending === 0){
      resolve(results)
      return
    }
    promises.forEach((promise,i) => {
      Promise.resolve(promise)
      .then((res) => {
        results[i] = {status:'fulfilled', value: res}
      })
      .catch((err) => {
        results[i] = {status: 'rejected', reason:err}
      })
      .finally(() => {
        pending--
        if(pending == 0){
          resolve(results)
        }
      })
    })
  })
}

//Polyfill for Promise.race()

Promise.polyRace = (promises) => {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
};

// Polyfill for Promise.any()

Promise.PolyAny = function (promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let pending = promises.length;
    if (pending == 0) {
      reject(new AggregateError([], "No Promises to be setteled"));
      return;
    }
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors.push(error);
          pending--;
          if (pending == 0) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
};

// <-- TODO !-->
// Poyfill for Promise

// Polyfill for Call

Function.prototype.PolyCall = function (thisArgs, ...argsArray) {
  thisArgs = thisArgs ?? globalThis;
  let uniqueKey = Symbol();
  thisArgs[uniqueKey] = this;
  let result = thisArgs[uniqueKey](...argsArray);
  delete thisArgs[uniqueKey];
  return result;
};

// Polyfill for Apply

Function.prototype.PolyApply = function (thisArgs, argsArray) {
  thisArgs = thisArgs ?? globalThis;
  let uniqueKey = Symbol();
  thisArgs[uniqueKey] = this;
  let result = thisArgs[uniqueKey](...argsArray);
  delete thisArgs[uniqueKey];
  return result;
};

function greet(greeting, name) {
  return `${greeting}, ${name}`;
}

console.log(greet.PolyApply(null, ["Hello", "Alice"]));

// <-- TODO !-->
// Polyfill for Bind

// Polyfill for Debounce

let debounce = (callback, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

// Polyfill for throttle

function throttle(callback, delay) {
  let flag = true;
  return function (...args) {
    if (flag) {
      callback.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}


const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com"
});

const user2 = createUser({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com"
});

console.log(user1);
console.log(user2);
