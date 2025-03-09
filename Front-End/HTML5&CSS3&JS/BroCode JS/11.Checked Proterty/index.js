const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.innerHTML = "You are Subscribed!";
  } else {
    subResult.innerHTML = "You are not subscribed!";
  }
  if (visaBtn.checked) {
    paymentResult.innerHTML = "You choosed Visa";
  } else if (masterCardBtn.checked) {
    paymentResult.innerHTML = "You choosed Mastercard";
  } else if (payPalBtn.checked) {
    paymentResult.innerHTML = "You choosed payPal";
  } else {
    paymentResult.innerHTML = "You did not choose any payment";
  }
};
