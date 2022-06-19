"use script";
console.log("hello world");

let computerScore = 0;
let playerScore = 0;
let resultPara = document.querySelector(".resultPara");
const btns = document.querySelectorAll("button");
const result = document.querySelector(".result");
const resultBox = document.querySelector("click");
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const again = document.querySelector(".again");

again.addEventListener("click", reset);
//using mth.random to get a random pick from computer
function computerPlay() {
  const randomOutput = ["rock", "paper", "scissors"];

  const computer = Math.floor(Math.random() * 3);
  const answ = randomOutput[computer];
  return answ;
}
rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

computerSelection = computerPlay();
if (isGameOver()) {
  GameOver();
}
function handleClick(playerSelection) {
  playRound(playerSelection, computerSelection);

  if (isGameOver()) {
    GameOver();
  }
}
function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}
function GameOver() {
  alert(`GAME OVER \n Computer: ${computerScore}---PLayer: ${playerScore} `);
  declareWinner();
  appear();
}

function declareWinner() {
  if (playerScore > computerScore) {
    alert("YAY YOU WON");
  } else alert("SORRY YOU LOST, TRY AGAIN");
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();

  if (computerSelection === playerSelection) {
    resultPara.textContent = `tie game [computer: ${+computerScore} --- You: ${+playerScore}]`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    resultPara.textContent = `you lost! ${computerSelection} beats ${playerSelection}
    [computer: ${++computerScore} --- You: ${playerScore}]`;
  } else
    resultPara.textContent = `you win! ${playerSelection} beats ${computerSelection} [computer: ${computerScore} ---You: ${++playerScore}]`;
}
function appear() {
  again.classList.remove("again");
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  resultPara.textContent = "RESULT BOARD";
  again.classList.add("again");
}
