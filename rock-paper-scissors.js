buttonRock = document.querySelector(".rock");
buttonPaper = document.querySelector(".paper");
buttonScissor = document.querySelector(".scissor");
textComputerChoice = document.querySelector(".computerChoice .wins h4");
imgComputerChoice = document.querySelector(".computerChoice .choiceImg img");
changeUserChoice = document.querySelector(".userChoice .wins h4");
imgUserChoice = document.querySelector(".userChoice .choiceImg img");
h3Results = document.querySelector(".scoreBoard .result");
ScoreBoard= document.querySelector(".scoreBoard .score");
roundResult = document.querySelector(".scoreBoard h2");
see = document.querySelectorAll(".see");

let userWin = 0, computerWin = 0;

buttonRock.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let userChoice = "pedra";
    const results = playRound(userChoice, computerChoice);
    constructResult(userChoice, computerChoice, results);
});

buttonPaper.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let userChoice = "papel";
    const results = playRound(userChoice, computerChoice);
    constructResult(userChoice, computerChoice, results);
});

buttonScissor.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let userChoice = "tesoura";
    const results = playRound(userChoice, computerChoice);
    constructResult(userChoice, computerChoice, results);
});

function constructResult(userChoice, computerChoice, results) {
    textComputerChoice.textContent = computerChoice;
    imgComputerChoice.setAttribute('src', "images/" + computerChoice + ".svg");

    changeUserChoice.textContent = userChoice;
    imgUserChoice.setAttribute('src', "images/" + userChoice + ".svg");

    roundResult.textContent = results[0]; // Win, loss or draw
    h3Results.textContent = results[1]; // Round result
    ScoreBoard.textContent = results[2]; // Current score
    
    see.forEach((seeLocal) => {
	seeLocal.setAttribute('style', "display: flex");
    });
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 1) {
	return "pedra";
    } else if(choice == 2) {
	return "papel";
    } else {
	return "tesoura";
    }
}

function playRound(userChoice, computerChoice) {
    if(userChoice == computerChoice) {
	return [`Empate!`, `${userChoice} empata com ${computerChoice}`, `${getScoreboard(userWin, computerWin)}`];
    } else if(
	(userChoice == "pedra" && computerChoice == "papel") ||
	(userChoice == "papel" && computerChoice == "tesoura") ||
	(userChoice == "tesoura" && computerChoice == "pedra")
    ) {
	computerWin++;
	return [`Você perdeu a rodada!`, `${userChoice} perde para ${computerChoice}`, `${getScoreboard(userWin, computerWin)}`];
    } else if(
	(userChoice == "pedra" && computerChoice == "tesoura") ||
	(userChoice == "papel" && computerChoice == "pedra") ||
	(userChoice == "tesoura" && computerChoice == "papel")
    ) {
	userWin++;
	return [`Você ganhou a rodada!`, `${userChoice} vence ${computerChoice}`, `${getScoreboard(userWin, computerWin)}`];
    }
}

function getScoreboard(userWinL, computerWinL) {
    if(userWinL == 5 || computerWinL == 5) {
	userWin = 0, computerWin = 0;
	return getResults(userWinL, computerWinL);
    } else {
	return `Placar: ${userWin} a ${computerWin}!`;
    }
}

function getResults(userWin, computerWin) {
    if(userWin > computerWin) {
	return `Você venceu por ${userWin} a ${computerWin}!`;
    } else {
	return `Você perdeu por ${computerWin} a ${userWin}!`;
    }
}

