let a = 5;

try {
  let a = window.prompt("Please insert a value");
  let b = window.prompt("Please insert a value");
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Values must be a number");
  }

  const result = a * b;
  console.log(`The result is ${result}`);
} catch (error) {
  console.error(error);
} finally {
  console.log("This always executes");
}

console.log(a);
