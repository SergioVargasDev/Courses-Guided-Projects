const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

console.log(answer);

let guess;
let attempts = 0;
let running = true;

while (running) {
  guess = window.prompt("Please enter a number");
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a number within the range");
  } else {
    if (guess < answer) {
      window.alert("Too low");
      attempts++;
    } else if (guess > answer) {
      window.alert("Too high");
      attempts++;
    } else {
      window.alert(
        `Congratulations! You have guessed the secret number in ${attempts} attempts. The secret number was ${answer}`
      );
      running = false;
    }
  }
}
