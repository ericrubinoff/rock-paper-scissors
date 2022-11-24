// Strings to be returned on each play

const rockScissors = "Rock beats Scissors, you win!";
const rockPaper = "Paper beats Rock, you lose!";
const paperRock = "Paper beats Rock, you win!";
const paperScissors = "Scissors beat Paper, you lose!";
const scissorsRock = "Rock beats Scissors, you lose!";
const scissorsPaper = "Scissors beats Paper, you win!";
const draw = "It's a draw!";
const playerWins = "You are the winner!";
const computerWins = "The computer wins, you lose!";
const keepPlaying = "It's a draw, continue playing!";

// Generate computer's random choice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Initial Score

let playerScore = 0;
let computerScore = 0;

// Single Round

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection == "rock" && computerSelection == "scissors":
      playerScore++; // Add score to player
      document.getElementById("printPlayerSelection").innerHTML =
        playerSelection; // Print player's selection
      document.getElementById("printComputerSelection").innerHTML =
        computerSelection; // Print computer's selection
      document.getElementById("gameOutcome").innerHTML = rockScissors; // Print game outcome
      break;
    case playerSelection == "rock" && computerSelection == "paper":
      computerScore++;
      document.getElementById("printPlayerSelection").innerHTML =
        playerSelection;
      document.getElementById("printComputerSelection").innerHTML =
        computerSelection;
      document.getElementById("gameOutcome").innerHTML = rockPaper;
      break;
    case playerSelection == "paper" && computerSelection == "rock":
      playerScore++;
      document.getElementById("printPlayerSelection").innerHTML =
        playerSelection;
      document.getElementById("printComputerSelection").innerHTML =
        computerSelection;
      document.getElementById("gameOutcome").innerHTML = paperRock;
      break;
    case playerSelection == "paper" && computerSelection == "scissors":
      computerScore++;
      document.getElementById("printPlayerSelection").innerHTML =
        playerSelection;
      document.getElementById("printComputerSelection").innerHTML =
        computerSelection;
      document.getElementById("gameOutcome").innerHTML = paperScissors;
      break;
    case playerSelection == "scissors" && computerSelection == "rock":
      computerScore++;
      document.getElementById("printPlayerSelection").innerHTML =
        playerSelection;
      document.getElementById("printComputerSelection").innerHTML =
        computerSelection;
      document.getElementById("gameOutcome").innerHTML = scissorsRock;
      break;
    case playerSelection == "scissors" && computerSelection == "paper":
      playerScore++;
      document.getElementById("printPlayerSelection").innerHTML =
        playerSelection;
      document.getElementById("printComputerSelection").innerHTML =
        computerSelection;
      document.getElementById("gameOutcome").innerHTML = scissorsPaper;
      break;
    default:
      document.getElementById("printPlayerSelection").innerHTML =
        playerSelection;
      document.getElementById("printComputerSelection").innerHTML =
        computerSelection;
      document.getElementById("gameOutcome").innerHTML = draw;
  }
}

// Events

// Play single round and print Scores
function playRoundPrintValue(playerSelection) {
  playRound(playerSelection, getComputerChoice());
  document.getElementById("printPlayerScore").innerHTML = playerScore;
  document.getElementById("printComputerScore").innerHTML = computerScore;
  announceWinner();
}

// Play individual round by pressing button
let btnRock = (document.getElementById("rockBtn").onclick = function () {
  playRoundPrintValue("rock");
});

let btnPaper = (document.getElementById("paperBtn").onclick = function () {
  playRoundPrintValue("paper");
});

let btnScissors = (document.getElementById("scissorsBtn").onclick =
  function () {
    playRoundPrintValue("scissors");
  });

// Announce Winner

function announceWinner() {
  if (playerScore === 5) {
    console.log("You win!");
  } else if (computerScore === 5) {
    console.log("Computer wins!");
  }
}

