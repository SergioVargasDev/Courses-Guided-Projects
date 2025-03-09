const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * pi * radius;

// document.getElementById(
//   "h2"
// ).textContent = `The circumference of the circle is ${circumference}`;

// console.log(circumference);

document.getElementById("btn").onclick = function () {
  radius = document.getElementById("question").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  console.log(circumference);
  document.getElementById(
    "h2"
  ).textContent = `The circumference is ${circumference}`;
};
