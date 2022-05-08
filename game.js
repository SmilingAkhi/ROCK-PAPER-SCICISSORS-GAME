"use script";
console.log("hello world");

let computerScore;
let playerScore;
let computerSelection;
let playerSelection;
function computerPlay() {
  const randomOutput = ["rock", "paper", "scissors"];

  const computer = Math.floor(Math.random() * 3);
  const answ = randomOutput[computer];
  return answ;
}
// computerSelection = computerPlay();
// console.log(computerSelection);
// playerSelection = playerOption();
// console.log(playerSelection);

game();
function game() {
  computerScore = 0;
  playerScore = 0;
  for (let i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    console.log(computerSelection);

    playerSelection = playerOption();
    console.log(playerSelection);

    console.log(`computer: ${computerSelection}
    you: ${playerSelection}`);
    playRound(playerSelection, computerSelection);
  }

  console.log(declareWinner());
  function declareWinner() {
    if (computerScore === playerScore) {
      console.log(`${playerScore} - ${computerScore} \nTie Game`);
      return `${playerScore} - ${computerScore} \nTie Game`;
    } else if (playerScore > computerScore) {
      console.log(`${playerScore} - ${computerScore} \nYou Win`);
      return `${playerScore} - ${computerScore} \nYou win`;
    } else {
      console.log(
        `${playerScore} - ${computerScore} \nYou Lost, Better luck Next time!`
      );
      return `${playerScore} - ${computerScore} \nYou Lost, Better luck Next time!`;
    }
  }
}

function playerOption() {
  choices = prompt("Rock,paper or scissors");
  validateOption();
  // console.log(choices);
  return choices;
}

function validateOption() {
  if (
    choices.toLowerCase() == "rock" ||
    choices.toLowerCase() == "paper" ||
    choices.toLowerCase() == "scissors"
  ) {
    return choices;
  } else alert("input a value");
  playerOption();
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
    console.log("tie game");
    return console.log(
      "computer Score:" + computerScore + "\nYour Score:" + playerScore
    );
  } else if (
    (computerSelection.toLowerCase() === "rock" &&
      playerSelection.toLowerCase() === "scissors") ||
    (computerSelection.toLowerCase() === "scissors" &&
      playerSelection.toLowerCase() === "paper") ||
    (computerSelection.toLowerCase() === "paper" &&
      playerSelection.toLowerCase() === "rock")
  ) {
    console.log(`you lost! ${computerSelection} beats ${playerSelection}`);
    return console.log(
      "computer Score:" + ++computerScore + "\nYour Score:" + playerScore
    );
  } else console.log(`you win! ${playerSelection} beats ${computerSelection}`);
  return console.log(
    "computer Score:" + computerScore + "\nYour Score:" + ++playerScore
  );
}
