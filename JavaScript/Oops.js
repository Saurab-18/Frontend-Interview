let player1 = {
  name: "Virat",
  jerseyNo: 18,
  age: 36,
  team: "INDIA",
  getInfo: function () {
    console.log(`${this.name} plays for ${this.team}`);
  },
};

let player2 = Object.create(player1, {
  batBrand: { value: "NB" },
});
player2.team = "AUS";

// player1.getInfo();
// console.log(`${player1.team} v/s ${player2.team},${player2.batBrand}`);

// Objects using Factories and Constructors

// Factory Function
function createPlayer(name, age, team) {
  return {
    name,
    age,
    team,
    getInfo: function () {
      console.log(`${this.name}`);
    },
  };
}

// let a1 = createPlayer("Virat", 18, "IND");
// console.log(a1.getInfo());

//Constructor Function

function PlayerC(name, age, team) {
  this.name = name;
  this.age = age;
  this.team = team;
}

let d1 = new PlayerC("Virat", 36, "INDIA");
console.log(d1);

class player {
  constructor(name, age, team) {
    this.name = name;
    this.age = age;
    this.team = team;
  }
  getInfo() {
    console.log(`${this.name}`);
  }
}

let c1 = new player("Virat", 36, "INDIA");
// c1.getInfo();
// console.log(c1);

let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

console.log(Rabbit);

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// alert( rabbit.eats ); // true

// document.getElementById("GrandParent").addEventListener(
//   "click",
//   () => {
//     console.log("GrandParent");
//   },
//   true
// );
// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent");
//   },
//   false
// );
// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("Child");
//   },
//   true
// );

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class student extends User {
  constructor(firstName, lastName, age, mark) {
    super(firstName, lastName, age);
    this.mark = mark;
  }
}

const student1 = new student("balu", "yadav", 34, 1);
console.log(student1);
