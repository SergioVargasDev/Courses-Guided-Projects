const names = ["Sergio", "Sofía", "Charles"];
const person = {
  name: "Sergio",
  age: 30,
  Carrer: "Computer Science",
  hobbies: ["Football", "Reading", "Coding"],
};
const people = [
  {
    name: "Sergio",
    age: 21,
    Carrer: "Computer Science",
    hobbies: ["Football", "Reading", "Coding"],
  },
  {
    name: "Sofía",
    age: 22,
    Carrer: "Computer Science",
    hobbies: ["Football", "Reading", "Coding"],
  },
  {
    name: "Charles",
    age: 20,
    Carrer: "Computer Science",
    hobbies: ["Football", "Reading", "Coding"],
  },
];

// stringify
const jsonString = JSON.stringify(person);
// console.log(jsonString);

const jsonNames = `["Sergio", "Sofía", "Charles"]`;
const jsonPerson = `{"name": "Sergio", "age": 30, "Carrer": "Computer Science", "hobbies": ["Football", "Reading", "Coding"]}`;
const jsonPeople = `[{"name": "Sergio", "age": 21, "Carrer": "Computer Science", "hobbies": ["Football", "Reading", "Coding"]}, {"name": "Sofía", "age": 22, "Carrer": "Computer Science", "hobbies": ["Football", "Reading", "Coding"]}, {"name": "Charles", "age": 20, "Carrer": "Computer Science", "hobbies": ["Football", "Reading", "Coding"]}]`;

// parse
const parsedData = JSON.parse(jsonPeople);
// console.log(parsedData);

fetch("people.json")
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value.name)))
  .catch((error) => console.error(error));
