// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that 
// will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.



// Generate random number between 1 and 3
// If 0, return Rock
// Else if 1, return Paper
// Else 2, return Scissor

function getComputerChoice(){
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber == 1) {
        return("Rock");
    } else if (randomNumber == 2) {
        return("Paper");
    } else {
        return("Scissors");
    }
}

// Write a function that plays a single round of Rock Paper Scissors.
//  The function should take two parameters - the playerSelection 
//  and computerSelection - and then return a string that declares 
//  the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "Rock" && computerSelection == "Scissors") {
        return("Rock beats Scissors, you win!");
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return("Paper beats Rock, you lose!");
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return("Paper beats rock, you win!");
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return("Scissors beat Paper, you lose!");
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return("Rock beats Scissors, you lose!");
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return("Scissors beat Paper, you win!");
    } else {
        return("It's a draw!");
    }
}


const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log("You: " + playerSelection);
console.log("Computer: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));