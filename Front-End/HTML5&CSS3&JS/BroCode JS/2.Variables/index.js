let userName = "Sergio";
let age = 20;
let isStudent = true;

console.log(`Hi there, my name is ${userName}`);
console.log(`Currently I'm ${age}`);
console.log(`Enrolled: ${isStudent}`);

document.getElementById("h1").innerHTML = userName;
document.getElementById("p1").innerHTML = `Currently I´m ${age}`;
document.getElementById("p2").innerHTML = `Enrolled: ${isStudent}`;
