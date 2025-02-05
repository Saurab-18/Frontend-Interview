// 1. Write a program to remove duplicates from an array ?

// function removeDuplicates(arr) {
//   let set = new Set();
//   for (let val of arr) {
//     set.add(val);
//   }
//   console.log(Array.from(set));
// }

// let array = [2, 3, 5, 7, 3, 1, 9, 7];
// removeDuplicates(array);

// function removeDuplicates(arr) {
//   console.log(arr.filter((e, index) => arr.indexOf(e) == index));
// }
// let array = [2, 3, 5, 7, 3, 1, 9, 7];
// removeDuplicates(array);

// 2.  Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// function evenNumbers(arr) {
//   console.log(arr.filter((e) => e % 2 == 0));
// }
// let array = [2, 3, 5, 7, 3, 1, 9, 7];
// evenNumbers(array);

// 3. How to check whether a string is palindrome or not ?
// function checkPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   if (str == reversed) {
//     return "Yes its Paindrome";
//   }
//   return "No its not palindrome";
// }
// console.log(checkPalindrome("moom"));

// 4. Find the factorial of given number ?
// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(factorial(3));

// 5. Program to find longest word in a given sentence ?
// const longestWord = (sentence) => {
//   let strToArr = sentence.split(" ");
//   let longest = 0;
//   let index = -1;
//   for (let i = 0; i < strToArr.length; i++) {
//     if (strToArr[i].length > longest) {
//       longest = strToArr[i].length;
//       index = i;
//     }
//   }
//   return strToArr[index];
// };

// let result = longestWord("Hi Iam Saikrishna Iam a UI Developer");
// console.log(result);

// 6. Write a JavaScript program to find the maximum number in an array.

// const maxNumber = (arr) => {
//   //   return Math.max(...arr);
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(maxNumber([5, 10, 31]));
