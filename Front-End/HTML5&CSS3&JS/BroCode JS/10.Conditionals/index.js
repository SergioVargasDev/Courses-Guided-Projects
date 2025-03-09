const answer = document.getElementById("age-input");
const button = document.getElementById("age-button");
const result = document.getElementById("age-result");
let age;

button.onclick = function () {
  age = answer.value;
  age = Number(age);

  if (age == 40 || age == 50) {
    result.innerHTML = "Bro";
  } else if (age > 30) {
    result.innerHTML = `For sure you can have your license! Since you´re ${age} years old`;
  } else if (age > 18) {
    result.innerHTML = `You can have your license! Since you´re ${age} years old`;
  } else {
    result.innerHTML = "Get out of here";
  }
};
