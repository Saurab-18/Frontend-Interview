// Callback

// let batBrands = ["SG", "SS", "GM", "MRF", "CEAT"];

// function selectBrand(arr, cb) {
//   setTimeout(() => {
//     let brand = arr[3];
//     cb(brand);
//   }, 3000);
// }

// function buyBat(brand, cb) {
//   setTimeout(() => {
//     let message = `I have bought bat of ${brand} of Rs 1000`;
//     cb(message);
//   }, 3000);
// }

// function playCricket(message, cb) {
//   setTimeout(() => {
//     cb(`${message} and I have scored 100 runs `);
//   }, 3000);
// }

// selectBrand(batBrands, (brand) => {
//   buyBat(brand, (message) => {
//     playCricket(message, (message) => {
//       console.log(message);
//     });
//   });
// });

// Promises

// let batBrands = ["SG", "SS", "GM", "MRF", "CEAT"];

// function selectBrand(arr) {
//   return new Promise((resolve, reject) => {
//     if (arr.length > 1) {
//       let brand = arr[3];
//       resolve(brand);
//     } else {
//       let err = "You have not selected brand";
//       reject(err);
//     }
//   });
// }

// function buyBat(data) {
//   return new Promise((resolve, reject) => {
//     if (data) {
//       let message = `I have ${data} bat of Rs 10000`;
//       resolve(message);
//     } else {
//       let err = "I did not buy bat";
//       reject(err);
//     }
//   });
// }

// function playCricket(data) {
//   return new Promise((resolve, reject) => {
//     if (data) {
//       let result = `${data} and i scored 100 Runs`;
//       resolve(result);
//     } else {
//       let err = "I got Out at 0";
//       reject(err);
//     }
//   });
// }

// let result = selectBrand(batBrands)
//   .then((res) => {
//     return buyBat(res);
//   })
//   .then((res) => {
//     return playCricket(res);
//   })
//   .catch((err) => {
//     return err.message;
//   })
//   .then((res) => {
//     return res;
//   });
// console.log(result);

// Async Await

// let batBrands = ["SG", "SS", "GM", "MRF", "CEAT"];

// function selectBrand(arr) {
//   return new Promise((resolve, reject) => {
//     if (arr.length > 1) {
//       let brand = arr[3];
//       resolve(brand);
//     } else {
//       let err = "You have not selected brand";
//       reject(err);
//     }
//   });
// }

// function buyBat(data) {
//   return new Promise((resolve, reject) => {
//     if (data) {
//       let message = `I have ${data} bat of Rs 10000`;
//       resolve(message);
//     } else {
//       let err = "I did not buy bat";
//       reject(err);
//     }
//   });
// }

// function playCricket(data) {
//   return new Promise((resolve, reject) => {
//     if (data) {
//       let result = `${data} and i scored 100 Runs`;
//       resolve(result);
//     } else {
//       let err = "I got Out at 0";
//       reject(err);
//     }
//   });
// }

// async function Cricket() {
//   try {
//     let brand = await selectBrand(batBrands);
//     let bat = await buyBat(brand);
//     let result = await playCricket(bat);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// Cricket();
