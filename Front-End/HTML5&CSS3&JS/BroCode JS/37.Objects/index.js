const person1 = {
  firstName: "Sergio Tomás",
  lastName: "Vargas Villarreal",
  age: 21,
  // you cannot use "this" in arrow functions.
  overview: () => console.log("My name is Sergio"),
};

const person2 = {
  firstName: "Sofía",
  lastName: "Schneider Jiménez",
  age: 23,
  overview: function () {
    return "my name is Sofia";
  },
};

person1.bachelor = "Computer Science";
person2.eat = function () {
  return "I eat lasaña";
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.bachelor);
console.log(person1.overview());

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.eat());
console.log(person2.overview());

console.log(person1);
