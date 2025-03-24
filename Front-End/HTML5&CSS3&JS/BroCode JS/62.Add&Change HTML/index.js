// Step 1 create the element

const newH1 = document.createElement("h1");

// Step 2 Add Attributes/properties

newH1.innerHTML = "I like pizza";
newH1.id = "myH1";
newH1.style.textAlign = "center";

// Step 3 Append element to DOM

// document.body.prepend(newH1);
// document.body.append(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[3]);

// Step 4 remove HTML element

document.body.removeChild(newH1);
