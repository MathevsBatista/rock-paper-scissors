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
	return 0;
    } else if(
	(userChoice == "pedra" && computerChoice == "papel") ||
	(userChoice == "papel" && computerChoice == "tesoura") ||
	(userChoice == "tesoura" && computerChoice == "pedra")
    ) {
	return 1;
    } else if(
	(userChoice == "pedra" && computerChoice == "tesoura") ||
	(userChoice == "papel" && computerChoice == "pedra") ||
	(userChoice == "tesoura" && computerChoice == "papel")
    ) {
	return 2;
    }
}

function game() {
    let userWin = 0, computerWin = 0;

    for(let i = 0; i < 5; i++) {
	let userChoice = prompt("Pedra, papel ou tesoura: ");
	let computerChoice = getComputerChoice()
	let result = playRound(userChoice, computerChoice);
	if(result == 0) {
	    console.log(`Empate! ${userChoice} empata com ${computerChoice}`);
	} else if(result == 1) {
	    console.log(`Você perdeu! ${userChoice} perde para ${computerChoice}`);
	    computerWin++;
	} else {
	    console.log(`Você ganhou! ${userChoice} vence ${computerChoice}`);
	    userWin++;
	}
    }

    getResults(userWin, computerWin);
}

function getResults(userWin, computerWin) {
    if(userWin > computerWin) {
	console.log(`Você venceu por ${userWin} a ${computerWin}!`);
    } else if(userWin < computerWin){
	console.log(`Você perdeu por ${computerWin} a ${userWin}!`);
    } else {
	console.log(`Empate`);
    }
}

game();
