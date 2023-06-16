let player = 0;
let computer = 0;

function getComputerChoice() {
    var choice = Math.floor(1+Math.random() * 3);
    if(choice == 1) {
        return "rock";
    } else if(choice == 2) {
        return "paper";
    } else if(choice == 3) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It's a tie.";
    }
    if(playerSelection.toLowerCase() === 'rock') {
        if(computerSelection === 'paper') {
            return "You Lose! Paper beats Rock";
        }
        if(computerSelection === 'scissors') {
            return "You Win! Rock beats Scissors";
        }
    }
    if(playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            return "You Lose! Scissors beats Paper";
        }
        if (computerSelection === 'rock') {
            return "You Win! Paper beats Rock";
        }
    }
    if(playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection === 'paper') {
            return "You Win! Scissors beats Paper";
        }
    }
}

const scissorsBtn = document.getElementById('scissors-btn');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const winnerInfo = document.getElementById('winner');
const endgameScreen = document.getElementById('endgame-screen');
const endgameMessage = document.getElementById('endgame-message');
const restartBtn = document.getElementById('restart-btn');

scissorsBtn.addEventListener('click', () => handleClick('scissors'));
rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
restartBtn.addEventListener('click', restartGame);

function updateImg(playerSelection, computerSelection) {
    let playerImg = document.querySelector('#player-image');
    let computerImg = document.querySelector('#computer-image');

    if (playerSelection == 'rock') {
        playerImg.setAttribute('src', '/images/rock.png');
    } else if (playerSelection == 'paper') {
        playerImg.setAttribute('src', '/images/paper.webp');
    } else if (playerSelection == 'scissors') {
        playerImg.setAttribute('src', '/images/scissors.png');
    }
    if (computerSelection == 'rock') {
        computerImg.setAttribute('src', '/images/rock.png');
    } else if (computerSelection == 'paper') {
        computerImg.setAttribute('src', '/images/paper.webp');
    } else if (computerSelection == 'scissors') {
        computerImg.setAttribute('src', '/images/scissors.png');
    }
}
function handleClick(btnPressed) {
    let computerChoice = getComputerChoice();
    let roundResults = playRound(btnPressed, computerChoice);
    //updates score
    if(roundResults.toLowerCase().includes("win")) {
        player++;
    } else if(roundResults.toLowerCase().includes("lose")) {
        computer++;
    }
    //updates text 
    winnerInfo.textContent = roundResults;
    playerScore.textContent = `Player: ${player}`
    computerScore.textContent = `Computer: ${computer}`
    //updates images
    updateImg(btnPressed, computerChoice);
    //checks if the game is over
    if (player === 5 || computer === 5) {
        endGameScreen();
    }
}

function endGameScreen() {
    endgameScreen.classList.add('active');
    if(player > computer) {
        endgameMessage.textContent = "Congrats You Beat the Computer";
    } else {
        endgameMessage.textContent = "Better Luck Next Time";
    }
}

function restartGame() {
    player = 0;
    computer = 0;
    winnerInfo.textContent = "Choose your weapon";
    playerScore.textContent = "Player: ";
    computerScore.textContent = "Computer: ";
    endgameScreen.classList.remove('active');
}