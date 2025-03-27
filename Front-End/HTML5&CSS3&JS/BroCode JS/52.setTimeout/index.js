let timeOutId;
let name = "Sergio";

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () => {
  timeOutId = setTimeout(() => window.alert(`Hi there ${name}`), 3000);
  console.log("Start");
});

btn2.addEventListener("click", function () {
  clearTimeout(timeOutId);
  console.log("Stop");
});
