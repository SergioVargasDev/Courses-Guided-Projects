function Game() {
  let score = 0;

  function addPoints(points) {
    score += points;
    console.log(`Now the score is ${score}`);
  }

  function subPoints(points) {
    score -= points;
    console.log(`Now the score is ${score}`);
  }

  function getScore() {
    return score;
  }

  return { addPoints, subPoints, getScore };
}

test = Game();
test.addPoints(32);
test.subPoints(3);

test1 = Game();
console.log(test1.getScore());
