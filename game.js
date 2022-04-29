"use script";
console.log("hello world");

//trying out how to return a random string from an array

function computerPlay() {
  const randomOutput = ["rock", "paper", "scissors"];

  const computer = Math.floor(Math.random() * 3);
  const answ = randomOutput[computer];

  return answ;
}
let computerSelection;
let playerSelection;
let computerScore;
let playerScore;

game();
function game() {
  computerScore = 0;
  playerScore = 0;
  for (i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    console.log(computerSelection);
    playerOption();
  }
  console.log(declareWinner());
  function declareWinner() {
    if (playerScore === computerScore) {
      alert(`${playerScore} - ${computerScore} \nTie Game`);
      return `${playerScore} - ${computerScore} \nTie Game`;
    } else if (playerScore > computerScore) {
      alert(`${playerScore} - ${computerScore} \nYou Win`);
      return `${playerScore} - ${computerScore} \nYou win`;
    } else {
      alert(
        `${playerScore} - ${computerScore} \nYou Lost, Better luck Next time!`
      );
      return `${playerScore} - ${computerScore} \nYou Lost, Better luck Next time!`;
    }
  }
}
function playerOption() {
  playerSelection = prompt("Rock,paper or scissors");
  console.log(playerSelection);

  if (
    playerSelection.toLowerCase() == "rock" ||
    playerSelection.toLowerCase() == "paper" ||
    playerSelection.toLowerCase() == "scissors"
  ) {
    console.log(playRound(playerSelection, computerSelection));
  } else {
    alert("That's not a Valid Choice");
    playerOption();
  }
}

computerSelection = computerPlay();
console.log(computerSelection);
playerSelection = playerOption();

function playRound(playerSelection, computerSelection) {
  // your code here!
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    alert("it's a tie");
    return "it's a tie";
  } else if (
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    alert("you lose");
    return "You lose!!, paper beat rock";
  } else alert("you win");
  return "you WIN!! scissors beats paper";
}
