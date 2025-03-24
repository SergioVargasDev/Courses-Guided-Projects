class Animal {
  constructor() {
    this.alive = true;
  }

  eat() {
    return `The ${this.name} is eating`;
  }

  sleep() {
    return `The ${this.name} is sleeping`;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  jumping() {
    return `The ${this.name} is jumping`;
  }
}

class Hawk extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
  flying() {
    return `The ${this.name} is flying`;
  }
}

const rabbit = new Rabbit("Rabbit");
const hawk = new Hawk("Hawk");
console.log(rabbit.eat());
console.log(rabbit.sleep());
console.log(rabbit.jumping());
console.log(rabbit.alive);
console.log(hawk.eat());
console.log(hawk.sleep());
console.log(hawk.flying());
console.log(hawk.alive);
