function getComputerChoice() {
    var choice = Math.floor(1+Math.random() * 3);
    if(choice == 1) {
        return "Rock";
    } else if(choice == 2) {
        return "Paper";
    } else if(choice == 3) {
        return "Scissors";
    }
}

function singleRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It's a tie.";
    }
    if(playerSelection.toLowerCase() === 'rock') {
        if(computerSelection === 'Paper') {
            return "You Lose! Paper beats Rock";
        }
        if(computerSelection === 'Scissors') {
            return "You Win! Rock beats Scissors";
        }
    }
    if(playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'Scissors') {
            return "You Lose! Scissors beats Paper";
        }
        if (computerSelection === 'Rock') {
            return "You Win! Paper beats Rock";
        }
    }
    if(playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'Rock') {
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection === 'Paper') {
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 5 && computerScore < 5) {
        let playerSelection = window.prompt("Choose your weapon: Rock, Paper or Scissors ");
        let computerSelection = getComputerChoice();
        var results = singleRound(playerSelection, computerSelection).toLowerCase();
        if(results.includes("win")) {
            playerScore++;
        } else if(results.includes("lose")) {
            computerScore++;
        }
    }
    if(playerScore > computerScore) {
        return "CONGRATS YOU BEAT THE COMPUTER";
    } else {
        return "BETTER LUCK NEXT TIME";
    }
}

console.log(getComputerChoice());
game();