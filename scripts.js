function getComputerChoice() {
    options = ["Rock", "Paper", "Scissors"];
    rand = Math.floor(Math.random() * 3);

    return options[rand].toLowerCase();
}

function getPlayerSelection() {
    let input = String(prompt("What do you pick? : "));

    return input.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
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

function game(rounds = 5) {
    let player = 0;
    let cpu = 0;

    for (let i = 0; i < rounds; i++) {
        if (playRound(
            getPlayerSelection(),
            getComputerChoice()
        )) {
            player += 1;
        } else {
            cpu += 1;
        }
    }

    if (player > cpu) {
        return "You have won!";
    }

    return "You have lost...";


}

console.log(game())