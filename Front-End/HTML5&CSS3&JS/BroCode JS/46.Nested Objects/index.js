const person = {
  fullname: "Sergio",
  age: 21,
  address: {
    street: "Escorial 110",
    city: "Monterrey",
    state: "Nuevo León",
  },
};

for (const key in person) {
  console.log(person[key]);
}

for (const key in person.address) {
  console.log(person.address[key]);
}

class User {
  constructor(name, age, occupation, ...address) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  }
}

const person1 = new User(
  "Sergio",
  21,
  "Meta Software Engineer",
  "Escorial 110",
  "Monterrey",
  "Nuevo León"
);

for (const key in person1.address) {
  console.log(person1.address[key]);
}
