const names = ["Sergio", "Sofia", "Charles"];

const test = names.map((element, index) => `${index}: ${element}`);
const upperArray = names.map((element) => element.toUpperCase());
const upperArray2 = names.map(function upper(element) {
  console.log(element);
  return element.toUpperCase();
});

console.log(test);
console.log(upperArray);
console.log(upperArray2);
