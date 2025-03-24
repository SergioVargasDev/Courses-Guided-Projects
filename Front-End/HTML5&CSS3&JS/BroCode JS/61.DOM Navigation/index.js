const allUlElement = document.querySelectorAll("ul");
const ulElementFruit = document.getElementById("fruits");
const ulElementVegetable = document.getElementById("vegetables");

// firstElementChild

const firstChild = ulElementFruit.firstElementChild;
firstChild.style.backgroundColor = "yellow";

allUlElement.forEach((ulElement) => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});

// lastElementChild
const lastChild = ulElementVegetable.lastElementChild;
lastChild.style.backgroundColor = "red";

allUlElement.forEach((ulElement) => {
  const lastChild = ulElement.lastElementChild;
  lastChild.style.backgroundColor = "red";
});

// nextElementSibling

const nextFruitSibling = ulElementFruit.nextElementSibling;
nextFruitSibling.style.backgroundColor = "yellow";

const cake = document.getElementById("cake");
const cakeSibling = cake.nextElementSibling;
cakeSibling.style.backgroundColor = "blue";

// previosElementSibling

const orange = document.getElementById("orange");
const orangePrevSibling = orange.previousElementSibling;
orangePrevSibling.style.backgroundColor = "brown";

// parentElement

const onion = document.getElementById("onions");
const onionParent = onion.parentElement;
onionParent.style.backgroundColor = "orange";

// children
const fruitChildrens = ulElementFruit.children;
console.log(fruitChildrens);

const fruit1 = fruitChildrens[0];
const fruit2 = fruitChildrens[1];
const fruit3 = fruitChildrens[2];
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

Array.from(fruitChildrens).forEach((fruit) => {
  fruit.style.backgroundColor = "purple";
});
