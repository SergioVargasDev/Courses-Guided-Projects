class Animal {
  constructor(name, age, alive) {
    this.name = name;
    this.age = age;
    this.alive = alive;
  }
  move(speed) {
    return `It moves at ${speed} km/h`;
  }
}

class Rabbit extends Animal {
  constructor(name, age, alive, runSpeed) {
    super(name, age, alive);
    this.runSpeed = runSpeed;
  }

  overview() {
    return `The ${this.name} is ${
      this.age
    } years old, so it still alive. ${this.move(this.runSpeed)}`;
  }
}

const rabbit = new Rabbit("rabbit", 2, true, 12);

console.log(rabbit.overview());
