const person1 = {
  firstName: "Sergio Tomás",
  lastName: "Vargas Villarreal",
  age: 21,
  overview: function () {
    console.log(
      `Hi there, my name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old`
    );
  },
};

const person2 = {
  firstName: "Sofía",
  lastName: "Schneider Jiménez",
  age: 23,
  overview: function () {
    console.log(
      `Hi there, my name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old`
    );
  },
};

person1.overview();
person2.overview();
