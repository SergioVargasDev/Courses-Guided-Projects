// && AND
// || OR
// ! NOT

let degrees = 25;
let degreesTomorrow = 40;

if (degrees >= 0 && degrees < 20) {
  console.log("The wheather is good!");
} else if (degrees == 35 || degreesTomorrow == 40) {
  console.log("The wheather will be hot!");
}

let sunny = true;

if (!sunny) {
  console.log("The wheather will not be sunny");
} else {
  console.log("The wheather will be sunny");
}
