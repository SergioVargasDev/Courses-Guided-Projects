let timeOutId;
let name = "Sergio";

function startTimer() {
  timeOutId = setTimeout(() => window.alert(`Hi there ${name}`), 3000);
  console.log("Start");
}

function stopTimer() {
  clearTimeout(timeOutId);
  console.log("Stop");
}
