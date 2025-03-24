class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("The name is not valid");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("The name is not valid");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 18) {
      this._age = newAge;
    } else {
      console.error("The age is not valid");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._firstName;
  }

  get age() {
    return this._age;
  }
}

const user1 = new User("Sergio Tomás", "Vargas Villarreal", 21);
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);
