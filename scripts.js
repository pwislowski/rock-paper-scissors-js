// @ts-check

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let rand = Math.floor(Math.random() * 3);

    return options[rand].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    updateSelection(
        playerSelection,
        computerSelection
      );

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return true;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return true;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return true;
    } else if (playerSelection == computerSelection) {
        playRound(playerSelection, getComputerChoice());
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
    } else {
        announceWinner('');
    }

}

function updateScores(id) {
    let score = document.querySelector('#' + id);
    let currentScore = parseInt(score?.textContent);
    score.textContent = currentScore + 1;

}

function currentScores(id) {
    let score = document.querySelector('#' + id);

    return parseInt(score?.textContent);
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

function getPlayerSelection() {
    // originally prompt
    buttons = document.querySelectorAll("button");
    buttons.forEach((element) => {
        element.addEventListener(
            'click',
            (e) => {
                let selection = e.target.textContent.toLowerCase();

                return selection
            }
        )
    });
}

function updateSelection(human_param, cpu_param) {
    let spanH = document.querySelector('#human-choice');
    let spanC = document.querySelector('#cpu-choice');

    spanH.textContent = human_param;
    spanC.textContent = cpu_param;

}

function main() {
    let round = 0;
    
    let human = 0;
    let cpu = 0;

    const button = document.querySelectorAll("button");

    // game triggered by buttons

    button.forEach(
        (b) => {
            b.addEventListener("click", function(e) {
                round ++;
                if (round < 4) {

                  let playerSelection = e.target.textContent.toLowerCase();
                  let cpuSelection = getComputerChoice();
                  let r = playRound(playerSelection, cpuSelection);

                  if (r) { // human wins
                    human += 1;
                    updateScores('human-score');
                  } else {
                    cpu += 1;
                    updateScores('cpu-score');
                  }
                }

                if (round == 3) {
                    if (human > cpu) {
                        announceWinner('human');
                    } else {
                        announceWinner('cpu');
                    }
                }
              });          
        }
    )

}

main();