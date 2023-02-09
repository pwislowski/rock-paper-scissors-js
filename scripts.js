// @ts-check

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let rand = Math.floor(Math.random() * 3);

    return options[rand].toLowerCase();
}

function playRound(playerSelection) {
    // returns int
    // `1` human wins
    // `-1` cpu wins
    // `0` draw

    let cpuSelection = getComputerChoice();

    updateSelection(
        playerSelection,
        cpuSelection
      );

    if (playerSelection == "rock" && cpuSelection == "scissors") {
        return 1;
    } else if (playerSelection == "paper" && cpuSelection == "rock") {
        return 1;
    } else if (playerSelection == "scissors" && cpuSelection == "paper") {
        return 1;
    } else if (playerSelection == cpuSelection) {
        return 0;
    } else {
        return -1;
    }
}

function updateScores(id) {
    let score = document.querySelector('#' + id);
    let currentScore = parseInt(score?.textContent);
    score.textContent = currentScore + 1;

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
                if (round <= 3) {

                  let playerSelection = e.target.textContent.toLowerCase();
                  let outcome = playRound(playerSelection);

                  if (outcome == 1) { // human wins
                    human += 1;
                    updateScores('human-score');
                    round += 1;
                  } else if (outcome == -1) {
                    cpu += 1;
                    updateScores('cpu-score');
                    round += 1;
                  } else {
                    null
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