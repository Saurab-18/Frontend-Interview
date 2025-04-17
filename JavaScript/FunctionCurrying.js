// Currying with help of bind

// function multiply(a, b, c) {
//   return a * b * c;
// }

// const multiplyValues = multiply.bind(this, 3, 4);
// console.log(multiplyValues(1));

//Currying with help of closure

// function evaluate(opr) {
//   return function (a) {
//     return function (b) {
//       if (opr == "sum") return a + b;
//       else if (opr == "minus") return a - b;
//       else if (opr == "multiply") return a * b;
//       else if (opr == "divide") return a / b;
//       else return "Not Valid opr";
//     };
//   };
// }

// let result = evaluate("sum")(1)(2);
// console.log(result);

// Infinite Currying

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// let sum = add(2)(3)(5)();
// console.log(sum);

// Convert a normal function into curried Function

// function curry(fn) {
//   return function curriedFunction(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...nextArgs) {
//         return curriedFunction(...args, ...nextArgs);
//       };
//     }
//   };
// }
