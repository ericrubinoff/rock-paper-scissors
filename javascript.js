/* Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. */

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

/* Strings */

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

// Single Round

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection == "rock" && computerSelection == "scissors":
      playerScore++;
      console.log(rockScissors);
      break;
    case playerSelection == "rock" && computerSelection == "paper":
      computerScore++;
      console.log(rockPaper);
      break;
    case playerSelection == "paper" && computerSelection == "rock":
      playerScore++;
      console.log(paperRock);
      break;
    case playerSelection == "paper" && computerSelection == "scissors":
      computerScore++;
      console.log(paperScissors);
      break;
    case playerSelection == "scissors" && computerSelection == "rock":
      computerScore++;
      console.log(scissorsRock);
      break;
    case playerSelection == "scissors" && computerSelection == "paper":
      playerScore++;
      console.log(scissorsPaper);
      break;
    default:
      console.log(draw);
  }
}

/* Play 5 Rounds and announce winner */

function game() {
  for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
    
    getComputerChoice();
    const computerSelection = getComputerChoice();
    
    
    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

    playRound(playerSelection, computerSelection);

    console.log("You: " + playerSelection);
    console.log("Computer: " + computerSelection);
    console.log("Your Score: ", playerScore);
    console.log("Computer Score: ", computerScore);
    console.log("---");
  }

  console.log("Player Score: ", playerScore);
  console.log("Computer Score: ", computerScore);

  if (playerScore > computerScore) {
    console.log(playerWins);
  } else if (playerScore < computerScore) {
    console.log(computerWins);
  } else {
    console.log(keepPlaying);
  }
}

game();
