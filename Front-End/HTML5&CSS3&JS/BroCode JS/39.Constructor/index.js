function Person(firstName, lastName, age, bachelor, car) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.age = age),
    (this.bachelor = bachelor),
    (this.car = car);
  this.overview = function () {
    return `Hi there. My name is ${this.firstName} ${this.lastName}, and I'm currently ${this.age} years old. I study ${this.bachelor}. I drive a ${this.car}`;
  };
}

const person1 = new Person(
  "Sergio Tomás",
  "Vargas Villarreal",
  21,
  "Computer Science",
  "Challenger"
);

person1.food = "Chicken Soup";
person1.music = function () {
  return "I love piano";
};

Person.prototype.nationality = "Mexican";
Person.prototype.series = "Breaking Bad";

console.log(person1.overview());
console.log(person1.food);
console.log(person1.music());
console.log(person1.nationality);
console.log(person1.series);
