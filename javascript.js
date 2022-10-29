// Your game is going to play against the computer,
// so begin with a function called getComputerChoice that
// will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

// Generate random number between 1 and 3
// If 0, return rock
// Else if 1, return paper
// Else 2, return Scissor

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

// Write a function that plays a single round of rock paper scissors.
//  The function should take two parameters - the playerSelection
//  and computerSelection - and then return a string that declares
//  the winner of the round like so: "You Lose! paper beats rock"

const rockScissors = "Rock beats Scissors, you win!";
const rockPaper = "Paper beats Rock, you lose!";
const paperRock = "Paper beats Rock, you win!";
const paperScissors = "Scissors beat Paper, you lose!";
const scissorsRock = "Rock beats Scissors, you lose!";
const scissorsPaper = "Scissors beats Paper, you win!";
const draw = "It's a draw!";


function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection == "rock" && computerSelection == "scissors":
      return rockScissors;
      break;
    case playerSelection == "rock" && computerSelection == "paper":
      return rockPaper;
      break;
    case playerSelection == "paper" && computerSelection == "rock":
      return paperRock;
      break;
    case playerSelection == "paper" && computerSelection == "scissors":
      return paperScissors;
      break;
    case playerSelection == "scissors" && computerSelection == "rock":
      return scissorsRock;
      break;
    case playerSelection == "scissors" && computerSelection == "paper":
      return scissorsPaper;
      break;
    default:
      return draw;
  }
}

const playerSelection = "rock".toLowerCase();
const computerSelection = getComputerChoice();

console.log("You: " + playerSelection);
console.log("Computer: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));
