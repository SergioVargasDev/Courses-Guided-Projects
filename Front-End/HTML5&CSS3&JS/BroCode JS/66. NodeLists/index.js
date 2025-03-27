let buttons = document.querySelectorAll(".btn");
console.log(buttons);

// add html/css properties

buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.textContent += "😇";
});

// Click event listener

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
  });
});

// Mouse event listener

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "purple";
    button.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "orange";
    });
  });
});

// Add an element

const newButton = document.createElement("button");
newButton.innerHTML = "Button5";
newButton.classList.add("btn");
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".btn");

// Remove an element

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    button = document.querySelectorAll(".btn");
  });
});
