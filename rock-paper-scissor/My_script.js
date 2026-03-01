let score = JSON.parse(localStorage.getItem("score"));

function randomiser() {
  const randNum = Math.random();
  let compMove = "";
  let result = "";

  if (randNum >= 0 && randNum < 1 / 3) {
    compMove = "rock";
  } else if (randNum >= 1 / 3 && randNum < 2 / 3) {
    compMove = "paper";
  } else if (randNum >= 2 / 3 && randNum < 1) {
    compMove = "scissors";
  }
  console.log(compMove);
  return compMove;
}

function addScore(result) {
  if (result === "You Win!") {
    score.wins += 1;
    console.log(score);
  } else if (result === "You Lose!") {
    score.loss += 1;
    console.log(score);
  } else if (result === "Tie.") {
    score.ties += 1;
    console.log(score);
  } else {
    score.wins = 0;
    score.loss = 0;
    score.ties = 0;
    console.log(score.wins + score.loss + score.ties);
  }
  return score;
}

function opt1() {
  compMove = randomiser();
  if (compMove === "rock") {
    result = "Tie.";
  }
  if (compMove === "paper") {
    result = "You Lose!";
  }
  if (compMove === "scissors") {
    result = "You Win!";
  }
  console.log(score);
  score = addScore(result);
  console.log(score.wins + score.loss + score.ties);

  alert(`You picked rock. Computer picked ${compMove}.
    ${result} 
    Wins: ${score.wins} Losses: ${score.loss} Ties: ${score.ties}`);

  localStorage.setItem("score", JSON.stringify(score));
}

function opt2() {
  compMove = randomiser();
  if (compMove === "paper") {
    result = "Tie.";
  }
  if (compMove === "rock") {
    result = "You Win!";
  }
  if (compMove === "scissors") {
    result = "You Lose!";
  }
  console.log(score);
  score = addScore(result);
  console.log(score.wins + score.loss + score.ties);

  alert(`You picked paper. Computer picked ${compMove}.
    ${result} 
    Wins: ${score.wins} Losses: ${score.loss} Ties: ${score.ties}`);

  localStorage.setItem("score", JSON.stringify(score));
}

function opt3() {
  compMove = randomiser();
  if (compMove === "scissors") {
    result = "Tie.";
  }
  if (compMove === "paper") {
    result = "You Win!";
  }
  if (compMove === "rock") {
    result = "You Lose!";
  }
  console.log(score);
  score = addScore(result);
  console.log(score.wins + score.loss + score.ties);

  alert(
    `You picked scissors. Computer picked ${compMove}.
    ${result} 
    Wins: ${score.wins} Losses: ${score.loss} Ties: ${score.ties}`,
  );

  localStorage.setItem("score", JSON.stringify(score));
}

function reset() {
  console.log(score);
  score.wins = 0;
  score.loss = 0;
  score.ties = 0;
  console.log(score.wins + score.loss + score.ties);
}

