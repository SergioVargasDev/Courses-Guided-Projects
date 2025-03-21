function rollDice() {
  const diceInput = document.getElementById("diceInput").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  let values = [];
  let images = [];

  for (let i = 0; i < diceInput; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="images/dice-${value}.jpg">`);
    console.log(values, images);
  }

  diceResult.innerHTML;
}
