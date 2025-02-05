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

// let result = memoize(square);
// console.time("1st");
// console.log(22222222);
// console.timeEnd("1st");
// console.time("2st");
// console.log(22222222);
// console.timeEnd("2st");
