"use script";
console.log("hello world");

//trying out how to return a random string from an array

function computerPlay() {
  const randomOutput = ["rock", "paper", "scissors"];

  const computer = Math.floor(Math.random() * 3);
  const answ = randomOutput[computer];
  // console.log(answ);
  return answ;
}

function playerOption() {
  const option = prompt("Rock,paper or scissors");
  const optionChosen = option;
  // console.log(optionChosen);
  return optionChosen;
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (computerSelection === "rock" && playerSelection === "paper") {
    return "you won!!!, paper beat rock";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You lose!!, paper beat rock";
  } else if (
    (computerSelection === "rock" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "paper") ||
    (computerSelection === "scissors" && playerSelection === "scissors")
  ) {
    return "it's a tie";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    return "you win!! rock beats scissors";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "you lose!! rock beats scissors";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    return "you win!! scissors beats paper";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "you lose!! scissors beats paper";
  } else
    computerSelection === "scissors" ||
      "rock" ||
      ("paper" && playerSelection === " ") ||
      Number ||
      Boolean;
  return alert("input either rock paper or scissors");
}

const computerSelection = computerPlay();
console.log(computerSelection);
const playerSelection = playerOption();
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));

// function game() {
//   for (let i = 0; i < 5; i++) {
//     if (i < 5) {
//       return playerOption();
//     }
//   }
// }
// game();
