const ages = [19, 17, 20, 15, 14, 25];
const fruits = ["banana", "apple", "orange", "watermelon"];

lowAgeArray = ages.filter((element) => element > 18);
longFruitsArray = fruits.filter((element) => element.length === 6);
console.log(lowAgeArray);
console.log(longFruitsArray);
