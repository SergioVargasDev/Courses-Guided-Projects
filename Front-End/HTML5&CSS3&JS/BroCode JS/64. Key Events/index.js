const myBox = document.getElementById("myBox");
const myTxt = document.getElementById("myTxt");

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keyup", () => {
  myBox.style.backgroundColor = "white";
  myTxt.innerHTML = "😀";
});

document.addEventListener("keydown", (event) => {
  myBox.style.backgroundColor = "blue";
  myTxt.innerHTML = "🥹";
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
