// element, index, array are provided

const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "orange", "banana"];

numbers.forEach((element) => console.log(element));
fruits.forEach(Upper);

function Upper(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

console.log(fruits);
