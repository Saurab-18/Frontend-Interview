let user1 = {
  name: "Saurab",
  age: 24,
};

let user2 = {
  name: "Virat",
};

user2.__proto__ = user1;
// console.log(user2.age);

let animal = {
  eats: true,
};

let rabbit = {
  dish: "carrot",
  __proto__: animal,
};

let result = [];

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if (isOwn) {
    result.push(rabbit[prop]);
  }
}

// console.log(result);

// Task

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);
