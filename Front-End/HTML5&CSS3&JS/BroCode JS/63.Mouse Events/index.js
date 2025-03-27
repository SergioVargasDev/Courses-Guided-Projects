const cmyBox = document.getElementById("container");
const myTxt = document.getElementById("myTxt");

myBox.addEventListener("click", () => {
  myBox.style.backgroundColor = "red";
  myTxt.innerHTML = "Nice! 😇";
});

myBox.addEventListener("mouseover", () => {
  myBox.style.backgroundColor = "green";
  myTxt.innerHTML = "You sure?";
});

myBox.addEventListener("mouseout", () => {
  myBox.style.backgroundColor = "white";
  myTxt.innerHTML = "Click me 🤪";
});
