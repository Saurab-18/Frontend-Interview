// Polyfill of Only Once Function

// function onlyOnce(fn) {
//   let called = false;
//   return function (...args) {
//     if (!called) {
//       called = true;
//       return fn.apply(this, args);
//     }
//   };
// }

// let x = onlyOnce(() => {
//   console.log("Function Runs Only Once");
// });
// x();
// x();

// Polyfill of Memoize fuction

// function memoize(cb) {
//   let cache = new Map();
//   return function (...args) {
//     let key = JSON.stringify(args);
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     let result = cb(...args);
//     cache.set(key, result);
//     return result;
//   };
// }

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

// Array.prototype.polyMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// let arr = [1, 2, 3, 4];
// let mapResult = arr.polyMap((e) => e * 2);
// console.log(result);

// Polyfill of Reduce function

// Array.prototype.polyFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// let filterArr = [5, 4, 8, 7, 21];
// let resultFilter = reduceArr.polyFilter((e) => e > 7);
// console.log(resultFilter);

// Polyfill of Reduce

// Array.prototype.polyReduce = function (cb, initialValue) {
//   let acc = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i], i, this) : this[i];
//   }
//   return acc;
// };
// let reduceArr = [1, 2];
// let reduceResult = reduceArr.polyReduce((acc, cur) => {
//   return (acc = acc + cur);
// }, 0);
// console.log(reduceResult);
