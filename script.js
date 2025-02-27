function computerMove() {
    const x = Math.random();
    if (x < 0.34) {
        return 'rock';
    } else if (x <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
function playGame(playerMove, computer) {
    const resultContainer = document.getElementsByClassName('js-result-container')[0];
    
    if (playerMove === computer) {
        resultContainer.innerHTML = `It's a tie!`;
        return ("tie");
    } else if (playerMove === 'rock' && computer === 'scissors' || playerMove === 'paper' && computer === 'rock' || playerMove === 'scissors' && computer === 'paper') {
        resultContainer.innerHTML = 'You Win!';
        return ("win");
    } else {
        resultContainer.innerHTML = 'You Lose!';
        return ("lose");
    } 
}

let wins = 0;
let losses = 0;	
let ties = 0;
function score(result) { 
		if (result ==='win') {
			wins++;
	} else if (result ==='lose') {
			losses++;
	} else {
			ties++;
	}
document.getElementById(`js-score-container`).innerHTML = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
}

function choiceDisplay(playermove, computer) {
    document.getElementById(`js-choices-container`).innerHTML = `You : <img class="choiceDisplay "src="./Images/${playermove}-emoji.png"> - Computer : <img class="choiceDisplay" src="./Images/${computer}-emoji.png">`;
}


function main(playermove) { 
  const computer = computerMove();
  playGame(playermove, computer);  
  score(playGame(playermove, computer));
  choiceDisplay(playermove, computer);
}