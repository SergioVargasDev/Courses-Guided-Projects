function birthday(username, age) {
  console.log(`Hi there! ${username}, you are ${age} old`);
}

function addition(x, y) {
  return x + y;
}

function substraction(x, y) {
  return x - y;
}

function product(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}

function isEvenOrOdd(number) {
  if (!(number % 2)) {
    console.log("The number is even");
  } else {
    console.log("Your number is odd");
  }
}

birthday("Sergio", 20);
let result = addition(10, 2);
console.log(result);
console.log(substraction(10, 2));
console.log(product(10, 2));
console.log(division(10, 2));
console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(3));
