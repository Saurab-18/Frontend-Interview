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

// 7 . Write a JavaScript function to check if a given number is prime.
// function isPrime(num) {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(7));

// 8. Program to find Reverse of a string without using built-in method ?
// function reverseString(str) {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//   return reversedString;
// }
// console.log(reverseString("Saurab"));

// 9. Find the smallest word in a given sentence ?
// function smallestWord(str) {
//   let strToArr = str.split(" ");
//   let smallest = strToArr[0];
//   for (let i = 1; i < strToArr.length; i++) {
//     if (strToArr[i].length < smallest.length) {
//       smallest = strToArr[i];
//     }
//   }
//   return smallest;
// }

// console.log(smallestWord("Find the smallest word to"));

// 10. Write a function sumOfThirds(arr), which takes an
// array arr as an argument. This function should return a sum of
// every third number in the array, starting from the first one.

// function sumOfThirds(arr) {
//   if (arr.length <= 3) return 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 3) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumOfThirds([1, 2, 3, 4]));

// 11. Write a JavaScript function that returns the Fibonacci
// sequence up to a given number of terms.

// function Fibonacci(num) {
//   let arr = [];
//   if (num <= 0) return arr;
//   if (num >= 1) arr.push(0);
//   if (num >= 2) arr.push(1);
//   for (let i = 2; i < num; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
// }
// console.log(Fibonacci(6));

// 12. Find the max count of consecutive 1’s in an array

// function consecutiveOnes(arr) {
//   let count = 0;
//   let maxCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 1) {
//       count++;
//       if (count > maxCount) {
//         maxCount = count;
//       }
//     } else {
//       count = 0;
//     }
//   }
//   return maxCount;
// }

// console.log(consecutiveOnes([1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]));

// 13. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

// function mergeAndSort(nums1, nums2) {
//   let mergedArray = [...nums1, ...nums2];
//   mergedArray.sort((a, b) => a - b);
//   return mergedArray;
// }

// let result13 = mergeAndSort([0, 3, 4, 31], [4, 6, 30]);
// console.log(result13);

// 14. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same. (Effecient)

function isSameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  if (arr1[0] * arr1[0] == arr2[0]) {
    return true;
  } else {
    return false;
  }
}

// let result14 = isSameFrequency([1, 2, 3], [1, 9, 4]);
// console.log(result14);

// 15. Given two strings. Find if one string can be formed by rearranging the letters of other string. (Effecient)

function isStringCreated(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1ToArr = str1.split("").sort().join("");
  str2ToArr = str2.split("").sort().join("");
  if (str1ToArr == str2ToArr) {
    return true;
  }
  return false;
}

// let result15 = isStringCreated("anagram", "nagaram");
// console.log(result15);

// 16. Write logic to get unique objects from below array ?

function getUnique(arr) {
  let uniqueArr = [...new Set(arr.map((item) => item.name))];
  return uniqueArr;
}

let result16 = getUnique([
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
]);
// console.log(result16);

// 17. Given a string, write a javascript function to count the occurrences of each character in the string.

function countCharacters(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
}

// let result17 = countCharacters("helaalo");
// console.log(result17);

// 18. Implement a javascript function that flattens a nested array into a single-dimensional array.

function flatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

let result18 = flatten([1, [2, [3, 4], [7, 5]], 6]);
// console.log(result18);

// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

function reverseWords(str) {
  let result = [];
  let strToArr = str.split(" ");
  for (let i = strToArr.length - 1; i >= 0; i--) {
    result.push(strToArr[i]);
  }
  return result;
}
let result19 = reverseWords("ChatGPT is awesome");
// console.log(result19);

// 20. Write a JavaScript program to find the largest element in a nested array.
// function findLargestElement(arr) {
//   arr.console.log("1", arr);
// }
// let result20 = findLargestElement([
//   [3, 4, 58],
//   [709, 8, 9, [10, 11]],
//   [111, 2],
// ]);
// console.log(result20);

// 21. Given an array, return an array where the each value is the product of the next two items: E.g. [3, 4, 5] -> [20, 15, 12]

const maskCreditCard = (cardNumber) => {
  if (cardNumber.length <= 4) {
    return cardNumber;
  }
  let hashCount = cardNumber.length - 4;
  cardNumber.slice(hashCount, cardNumber.length);
  return cardNumber;
};

let result = maskCreditCard("12345678833876386386");
console.log(result);
