// Callback hell
// function selectBrand(cb) {
//   console.log("I am selecting bat");
//   cb();
// }

// function batSelected(cb) {
//   console.log("I have selected bat and bought it");
//   cb();
// }

// function playCricket(cb) {
//   console.log("I am playing cricket");
//   cb();
// }

// selectBrand(() => {
//   batSelected(() => {
//     playCricket(() => {
//       console.log("I Scored Century");
//     });
//   });
// });

// Promise
// const batBrands = ["MRF", "SG", "SS", "Kookaburra"];

// let selectBatBrand = (arr) => {
//   return new Promise((resolve, reject) => {
//     if (arr.length > 0) {
//       resolve(arr[0]);
//     } else {
//       reject("No Bats available");
//     }
//   });
// };

// let buyBat = (data) => {
//   return new Promise((resolve, reject) => {
//     if (data) {
//       resolve(`I have selected ${data} brand of Rs 100000`);
//     } else {
//       reject("No Bats Selected");
//     }
//   });
// };

// let playCricket = (data) => {
//   return new Promise((resolve, reject) => {
//     if (data) {
//       resolve(`I am going to play cricket`);
//     } else {
//       reject("Didn't buy bat can't ply cricket");
//     }
//   });
// };

// let result = selectBatBrand(batBrands)
//   .then(buyBat)
//   .catch(() => console.error("Error Occured"))
//   .then(playCricket)
//   .catch(() => console.error("Error Occured"))
//   .then(() => {
//     console.log("Yesssssss");
//   });

// console.log(result);
