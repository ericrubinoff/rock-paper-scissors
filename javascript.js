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

// Player and Computer Selection

const playerSelection = "rock".toLowerCase();
const computerSelection = getComputerChoice();

// Function to play a single round

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    switch (true) {
    case playerSelection == "rock" && computerSelection == "scissors":
        playerScore = 1;
        return (rockScissors);
    case playerSelection == "rock" && computerSelection == "paper":
        computerScore = 1;
        return (rockPaper);
    case playerSelection == "paper" && computerSelection == "rock":
        playerScore = 1;
        return (paperRock);
    case playerSelection == "paper" && computerSelection == "scissors":
        computerScore = 1;
        return (paperScissors);
    case playerSelection == "scissors" && computerSelection == "rock":
        computerScore = 1;
        return (scissorsRock);
    case playerSelection == "scissors" && computerSelection == "paper":
        playerScore = 1;
        return (scissorsPaper);
    default:
      return (draw);
  }
}

console.log("You: " + playerSelection);
console.log("Computer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log("Player Score: ", playerScore);
console.log("Computer Score: ", computerScore);


/*
const rockScissors = "Rock beats Scissors, you win!";
const rockPaper = "Paper beats Rock, you lose!";
const paperRock = "Paper beats Rock, you win!";
const paperScissors = "Scissors beat Paper, you lose!";
const scissorsRock = "Rock beats Scissors, you lose!";
const scissorsPaper = "Scissors beats Paper, you win!";
const draw = "It's a draw!"; */



/* Write a NEW function called game(). Call the playRound 
function inside of this one to play a 5 round game that 
keeps score and reports a winner or loser at the end. */

/* When the user inputs a number
Initialize a counter variable and set its value to zero
While counter is smaller than user inputted number increment the counter by one
Print the value of the counter variable */
