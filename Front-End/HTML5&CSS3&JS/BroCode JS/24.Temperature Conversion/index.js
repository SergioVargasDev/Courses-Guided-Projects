const formInput = document.getElementById("formInput");
const formRadioCel = document.getElementById("formRadioCel");
const formRadioFah = document.getElementById("formRadioFah");
const formResult = document.getElementById("formResult");

let temp;

function convert() {
  temp = Number(formInput.value);

  if (formRadioCel.checked) {
    temp = Math.round((temp * 9) / 5 + 32);
    formResult.innerHTML = `${temp}°F`;
  } else if (formRadioFah.checked) {
    temp = Math.round((temp - 32) * (5 / 9));
    formResult.innerHTML = `${temp}°C`;
  } else {
    formResult.innerHTML = "you didn´t check";
  }
}
