const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const countDigit = document.getElementById("digit");
let count = 0;

decrease.onclick = function () {
  count--;
  countDigit.textContent = count;
};

increase.onclick = function () {
  count++;
  countDigit.textContent = count;
};

reset.onclick = function () {
  count = 0;
  countDigit.textContent = count;
};
o;
