let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loss: 0,
  ties: 0,
};

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
  playerMove = "Rock";
  compMove = randomiser();

  if (compMove === "rock") {
    result = "Tie.";
  } else if (compMove === "paper") {
    result = "You Lose!";
  } else if (compMove === "scissors") {
    result = "You Win!";
  }
  winLose(result);
  userMove(playerMove);
  computerMove(compMove);
  console.log(score);
  score = addScore(result);
  displayScore(score);
  console.log(score.wins + score.loss + score.ties);

  /*
  alert(`You picked rock. Computer picked ${compMove}.
    ${result} 
    Wins: ${score.wins} Losses: ${score.loss} Ties: ${score.ties}`);
    */

  localStorage.setItem("score", JSON.stringify(score));
}

function opt2() {
  playerMove = "Paper";
  compMove = randomiser();
  if (compMove === "paper") {
    result = "Tie.";
  } else if (compMove === "rock") {
    result = "You Win!";
  } else if (compMove === "scissors") {
    result = "You Lose!";
  }
  winLose(result);
  userMove(playerMove);
  computerMove(compMove);
  console.log(score);
  score = addScore(result);
  displayScore(score);
  console.log(score.wins + score.loss + score.ties);

  /*
  alert(`You picked paper. Computer picked ${compMove}.
    ${result} 
    Wins: ${score.wins} Losses: ${score.loss} Ties: ${score.ties}`);
    */

  localStorage.setItem("score", JSON.stringify(score));
}

function opt3() {
  playerMove = "Scissors";
  compMove = randomiser();
  if (compMove === "scissors") {
    result = "Tie.";
  } else if (compMove === "paper") {
    result = "You Win!";
  } else if (compMove === "rock") {
    result = "You Lose!";
  }
  winLose(result);
  userMove(playerMove);
  computerMove(compMove);
  console.log(score);
  score = addScore(result);
  displayScore(score);
  console.log(score.wins + score.loss + score.ties);

  /*
  alert(
    `You picked scissors. Computer picked ${compMove}.
    ${result} 
    Wins: ${score.wins} Losses: ${score.loss} Ties: ${score.ties}`,
  );
  */

  localStorage.setItem("score", JSON.stringify(score));
}

function winLose(result) {
  let phrase = document.querySelector(".win_lose");

  if (result === "You Win!") {
    phrase.innerHTML = "You Win!";
  } else if (result === "You Lose!") {
    phrase.innerHTML = "You Lose!";
  } else {
    phrase.innerHTML = "Tie.";
  }
}

function userMove(playerMove) {
  document.querySelector(".user_move").innerHTML = "You: " + playerMove;
}

function computerMove(compMove) {
  let move = document.querySelector(".comp_move");
  if (compMove === "scissors") {
    move.innerHTML = "Computer: Scissors";
  }
  if (compMove === "paper") {
    move.innerHTML = "Computer: Paper";
  }
  if (compMove === "rock") {
    move.innerHTML = "Computer: Rock";
  }
}

function displayScore(score) {
  let score1 = document.querySelector(".score_1");
  let score2 = document.querySelector(".score_2");
  let score3 = document.querySelector(".score_3");

  score1.innerHTML = "Wins: " + score.wins;
  score2.innerHTML = "Losses: " + score.loss;
  score3.innerHTML = "Ties: " + score.ties;
}

function reset() {
  console.log(score);
  score.wins = 0;
  score.loss = 0;
  score.ties = 0;
  console.log(score.wins + score.loss + score.ties);
  displayScore(score);
}

/*
console.log(document.title);
document.title = "Good Job";
console.log(document.title);

console.log(document.body.innerHTML);
document.body.innnerHTML = '<button>Hello</button>';   //why does line #123 work but not line #120???
console.log(document.body.innerHTML);
console.log(document.body.innerHTML);


document.body.innerHTML = "<button>BYE</button> <button class='second_button'>Second button</button>";

console.log(document.querySelector("button").innerHTML);
document.querySelector("button").innerHTML = "Changed";
console.log(document.querySelector('.second_button'));
const buttonElement = document.querySelector('.second_button');
console.log(buttonElement);


let basket_ball = {
  name: "Basketball",
  price: 2095,
  ["delivery time"]: "3 days",
};
console.log(basket_ball);
basket_ball.price -= 500;
console.log(basket_ball);

let product1 = basket_ball;
let product2 = basket_ball;
function comparePrice(product1, product2) {
  return product1.price > product2.price ? product2.price : product1.price;
}
console.log(
  comparePrice({ name: "ball1", price: 10 }, { name: "ball2", price: 20 }),
);

function isSameProduct(product1, product2) {
  return product1.name === product2.name && product1.price === product2.price
    ? true
    : false;
}
console.log(
  isSameProduct({ name: "ball4", price: 59 }, { name: "ball4", price: 53 }),
);

let string = "Good Morning";
console.log(string.toLowerCase());
console.log(string.repeat(7));
*/
