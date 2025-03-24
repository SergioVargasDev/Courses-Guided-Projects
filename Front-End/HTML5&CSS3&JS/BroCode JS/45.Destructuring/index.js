// Extract values from arrays and objects, then assign them
// to variables in a convenient way. Basically unpacking.
// [] to perform array destructuring
// {} to perfom object destructuring.

// Swap two variables

let a = 3;
let b = 5;

[a, b] = [b, a];
console.log(a);
console.log(b);

// Swap elements in an array

const colors = ["red", "blue", "yellow", "purple"];
[colors[0], colors[1], colors[2], colors[3]] = [
  colors[1],
  colors[0],
  colors[3],
  colors[2],
];
console.log(colors);

// Assign array elements to variables
const colors2 = ["red", "blue", "yellow", "purple", "white", "black"];
const [firstColor, secondColor, thirdColor, ...rest] = colors2;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(rest);

for (let i in rest) {
  console.log(i);
}

// Extract values from objects

const person1 = {
  completeName: "Sergio",
  age: 21,
  occupation: "Meta Software Engineer",
};

const person2 = {
  completeName: "Sofia",
  age: 23,
};

const { completeName, age, occupation } = person1;
console.log(completeName);
console.log(age);
console.log(occupation);

// const { completeName, age, occupation = "meta" } = person2;
// console.log(completeName);
// console.log(age);
// console.log(occupation);

// Destructure in function parameters

function displayPerson({ completeName, age, occupation }) {
  return `My name is ${completeName}, I am ${age} years old and I am a ${occupation}
    `;
}
console.log(displayPerson(person1));
