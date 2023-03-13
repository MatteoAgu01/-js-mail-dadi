/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// Listener button
document.querySelector("button[name='rollBtn']").addEventListener("click", (roll));

let games = 1;

function roll(){
	// Generate the dice roll
	let userDice = (Math.random() * 5 + 1).toFixed(0);
	let cpuDice = (Math.random() * 5 + 1).toFixed(0);

	console.clear();

	console.log("Game n." + games);
	console.log("");

	console.log("You: " + userDice);
	console.log("CPU: " + cpuDice);

	if(userDice > cpuDice){
		console.log("User wins");
	}
	else if(userDice == cpuDice){
		console.log("Tie");
	}
	else{
		console.log("CPU wins");
	}

	games++;
}
