let signs = ["rock", "paper", "scissors"];
const MAX_SCORE = 5;
let playerScore = 0;
let computerScore = 0;
const pScore = document.querySelector('#player-score>span');
const cScore = document.querySelector('#computer-score>span');
const gameMessages = document.querySelector('#game-messages');
const playerOptions = document.querySelector("#player-options");
const computerOptions = document.querySelectorAll('#computer-options div')
const gameScore = document.querySelector('#game-score');
const textConstants = document.querySelectorAll('#game-score>p');


const buttons = document.querySelectorAll('#player-options button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let computerSign = computerSelection();
        let computerSignToChange = 'c' + computerSign.charAt(0).toUpperCase() + computerSign.slice(1);
        playRound(button.id, computerSign);
        computerOptions.forEach(div => div.style.backgroundColor = "#f5f5f5");
        document.getElementById(computerSignToChange).style.backgroundColor = "#E61C6D";
        if (playerScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
            if (playerScore > computerScore)
            {
                gameMessages.textContent = "You win the game!";
                
                textConstants.forEach(text => gameScore.removeChild(text));
                gameScore.appendChild(restartButton);
            }
            else {
                gameMessages.textContent = "You Lose the game!";
                textConstants.forEach(text => gameScore.removeChild(text));
                
                gameScore.appendChild(restartButton);
            }
        }
    })
})

function playRound(playerSelection, computerSelection) {
    let p = playerSelection;
    let c = computerSelection;
    let r = "rock";
    let pa = "paper";
    let s = "scissors";
    if ((p == r && c == s) || (p == pa && c == r) || (p == s && c == pa)) {
        playerScore++;
        pScore.textContent = playerScore;
        gameMessages.textContent = "You win this round! " + p + " beats " + c + "!";

    }
    else if ((p == r && c == r) || (p == pa && c == pa) || (p == s && c == s)) {
        gameMessages.textContent = "It's tied!";

    }
    else {
        computerScore++;
        cScore.textContent = computerScore;
        gameMessages.textContent = "You lose this round! " + c + " beats " + p + "!";

    }
}
function computerSelection() {
    return signs[Math.floor(Math.random() * 3)];
}

const restartButton = document.createElement('button');
restartButton.textContent = 'Play Again!';
restartButton.addEventListener('click', () => {
    gameScore.removeChild(restartButton);
    textConstants.forEach(text => gameScore.insertBefore(text, gameMessages));
    playerScore = 0;
    computerScore = 0;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    gameMessages.textContent = "";
})
