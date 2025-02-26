// this inside a object method

let user = {
  name: "Saurab",
  age: 24,
  getAge: function () {
    return `${this.name} and ${this.age}`;
  },
};

// console.log(user.getAge());

// this inside a object

var a = "Game";

let p1 = {
  a: "Virat",
  b: this,
};
// console.log(p1.b);

// this inside a function

var a = 0;

function x() {
  return this.a;
}

// console.log(x());

// Call, Apply and Bond

let player = {
  name: "Virat",
  age: 37,
  jerseyNo: 18,
  playerDetails(iplTeam, trophies) {
    return `Player Name is ${this.name}, jersey no is ${this.jerseyNo} and age is ${this.age} plays for ${iplTeam} in IPL has ${trophies} trophies`;
  },
};

let player2 = {
  name: "Rohit Sharma",
  age: 38,
  jerseyNo: 45,
};

console.log(player.playerDetails("RCB", 0));
// let p2 = player.playerDetails.call(player2, "MI", 5);
// console.log(p2);

// let p2Apply = player.playerDetails.apply(player2, ["MI", 5]);
// console.log(p2Apply);

// let p2Bind = player.playerDetails.bind(player2, "MI", 5);
// let result = p2Bind();
// console.log(result);
