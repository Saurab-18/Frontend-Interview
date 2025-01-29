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
