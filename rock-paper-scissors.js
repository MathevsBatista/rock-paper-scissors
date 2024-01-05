buttonRock = document.querySelector(".rock");
buttonPaper = document.querySelector(".paper");
buttonScissor = document.querySelector(".scissor");
pResults = document.querySelector(".results");
let userWin = 0, computerWin = 0;

buttonRock.addEventListener("click", () => {
    pResults.textContent = playRound("pedra", getComputerChoice());
});

buttonPaper.addEventListener("click", () => {
    pResults.textContent = playRound("papel", getComputerChoice());
});

buttonScissor.addEventListener("click", () => {
    pResults.textContent = playRound("tesoura", getComputerChoice());
});

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
	return `Empate! ${userChoice} empata com ${computerChoice}\n${getScoreboard(userWin, computerWin)}`;
    } else if(
	(userChoice == "pedra" && computerChoice == "papel") ||
	(userChoice == "papel" && computerChoice == "tesoura") ||
	(userChoice == "tesoura" && computerChoice == "pedra")
    ) {
	computerWin++;
	return `Você perdeu! ${userChoice} perde para ${computerChoice}\n${getScoreboard(userWin, computerWin)}`;
    } else if(
	(userChoice == "pedra" && computerChoice == "tesoura") ||
	(userChoice == "papel" && computerChoice == "pedra") ||
	(userChoice == "tesoura" && computerChoice == "papel")
    ) {
	userWin++;
	return `Você ganhou! ${userChoice} vence ${computerChoice}\n${getScoreboard(userWin, computerWin)}`;
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

