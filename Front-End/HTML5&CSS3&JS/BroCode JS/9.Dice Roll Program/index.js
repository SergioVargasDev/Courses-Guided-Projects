const button = document.getElementById("button");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

button.onclick = function () {
  let random1 = Math.floor(Math.random() * 6) + 1;
  let random2 = Math.floor(Math.random() * 6) + 1;
  let random3 = Math.floor(Math.random() * 6) + 1;
  label1.textContent = random1;
  label2.textContent = random2;
  label3.textContent = random3;
};
