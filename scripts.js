// @ts-check

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let rand = Math.floor(Math.random() * 3);

    return options[rand].toLowerCase();
}

function getPlayerSelection() {
    buttons = document.querySelectorAll("button");
    buttons.forEach((element) => {
        element.addEventListener(
            'click',
            (e) => {
                let selection = e.target.textContent.toLowerCase();
                return selection;
            }
        )
    });
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return true;
    } else if (playerSelection == "paper" && computerSelection == "rock" ){
        return true;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return true;
    } else if (playerSelection == computerSelection) {
        playRound(getPlayerSelection(), getComputerChoice());
    } else {
        return false;
    }
}

function game(rounds = 3) {
    let player = 0;
    let cpu = 0;

    console.log(getPlayerSelection());

    for (let i = 0; i < rounds; i++) {

        if (playRound(
            getPlayerSelection(),
            getComputerChoice()
        )) {
            player += 1;
            updateScores('human-score');
        } else {
            cpu += 1;
            updateScores('cpu-score');
        }
    }

    if (player > cpu) {
        announceWinner('human');
    }

    announceWinner('human');

}

function updateScores(id) {
    let score = document.querySelector('#' + id);
    let currentScore = parseInt(score?.textContent);
    score.textContent = currentScore + 1;

}

function currentScores(id) {
    let score = document.querySelector('#' + id);

    return parseInt(score?.textContent)
}

function announceWinner(winner) {
    const content = document.querySelector('.content');

    let div = document.createElement('div');
    
    if (winner == "human") {
        div.textContent = "You have won!";
        div.style.color = 'green';
    } else {
        div.textContent = "You have lost...";
        div.style.color = 'red';
    };
    
    div.style.fontFamily = 'monospace';
    div.style.textAlign = 'center'
    div.style.fontSize = '16px'
    div.style.fontWeight = 'bolder'


    content?.appendChild(
        div
    );
}

// ADD FUNCTIONALITY THAT BUTTONS ARE INPUTS

game();