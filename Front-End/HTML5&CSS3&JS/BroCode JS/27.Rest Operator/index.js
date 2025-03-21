let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
array3 = [...array1, ...array2];
console.log(array3);

let array4 = [8, 9, 10];
console.log(array4);

maxNumber = Math.max(...array4);
console.log(maxNumber);

function Sum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

let sum = Sum(1, 2, 3, 4, 5, 6);
console.log(sum);
