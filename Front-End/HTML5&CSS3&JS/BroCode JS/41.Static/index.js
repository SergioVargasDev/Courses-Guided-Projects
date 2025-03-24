class User {
  static userCount = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.userCount++;
  }

  Overview() {
    return `Hi there. My name is ${this.name} and I'm ${this.age} years old`;
  }

  static Count() {
    return `The user count is ${User.userCount}`;
  }
}

const person1 = new User("Sergio", 21);
const person2 = new User("Sofía", 22);
const person3 = new User("Charles", 20);
console.log(person1.Overview());
console.log(person2.Overview());
console.log(person3.Overview());
console.log(User.Count());
