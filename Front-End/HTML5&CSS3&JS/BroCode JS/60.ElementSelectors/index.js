// document
let bodyElement = document.body;
bodyElement.style.margin = 0;

document.title = "Query Selector";

// getElementById
myH1 = document.getElementById("myH1");
myH1.innerHTML = "Sergio";
myH1.style.textAlign = "center";
myH1.style.backgroundColor = "red";
myH1.style.marginTop = 0;
console.log(myH1);

// getElementsByClassName
const fruits = document.getElementsByClassName("Fruits");
let length = fruits.length;
fruits[0].innerHTML = "Grape";
fruits[1].innerHTML = "Apple";
fruits[2].innerHTML = "Watermelon";
console.log(length);
console.log(fruits);

for (let element of fruits) {
  element.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach((fruit) => (fruit.style.backgroundColor = "blue"));

// getElementsByTagName
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for (let element of h4Elements) {
  element.style.backgroundColor = "green";
}

for (let element of liElements) {
  element.style.backgroundColor = "brown";
}

Array.from(h4Elements).forEach((h4) => (h4.style.backgroundColor = "yellow"));

// querySelector
const firstElementFruits = document.querySelector(".Fruits");
firstElementFruits.style.backgroundColor = "purple";

const firstH4 = document.querySelector("H4");
firstH4.style.backgroundColor = "orange";

// querySelectorAll
const fruits1 = document.querySelectorAll(".Fruits");
console.log(fruits1);

for (let element of fruits1) {
  element.style.backgroundColor = "yellow";
}

fruits1.forEach((fruit) => (fruit.style.backgroundColor = "blue"));
console.log(fruits1);
