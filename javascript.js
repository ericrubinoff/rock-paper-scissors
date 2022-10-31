/*Your game is going to play against the computer,
so begin with a function called getComputerChoice that
will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

Generate random number between 1 and 3
If 0, return rock
Else if 1, return paper
Else 2, return Scissor */

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

/* Winner or loser strings */

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

// Player and Computer Selection

const playerSelection = "rock".toLowerCase();

// Function to play a single round

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

/* Write a NEW function called game(). Call the playRound 
// function inside of this one to play a 5 round game that 
keeps score and reports a winner or loser at the end. */

function game() {
  for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
    getComputerChoice();
    const computerSelection = getComputerChoice();

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
