/*
1. Declare a function variable called computerPlay
2. Function computerPlay will randomly return 'Rock', 'Paper' or 'Scissors'
3. declare a function singleRound
4. give the function 'singleRound'  parameters 'playerSelection' and 'computerSelection' 
5. let the function return a string that declares a winner.
6. The returned string should be like;  "You Lose! Paper beats Rock"
console.log(SingleRound(player1, player2))
7.make player selection parameter case-insentive
8.

*/

const computerPlay = () => {
    let valuesArray = ['Rock', 'Paper', 'Scissors']
    let ranNumber = Math.floor(Math.random() * valuesArray.length)
    let ranValues = valuesArray[ranNumber];
    return ranValues;  
}

const singleRound = (playerSelection, computerSelection) =>{

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return 'Game is a tie!';
    }

    if(playerSelection === 'rock', computerSelection === 'paper'){
        return 'You lose! Paper beats Rock';
    } else {
        return 'Player wins!';
    }

    if(playerSelection === 'scissors', computerSelection === 'rock'){
        return 'You lose! Paper beats Rock';
    } else {
        return 'Player wins!';
    }

    if(playerSelection === 'paper', computerSelection === 'Scissors'){
        return 'You lose! Paper beats Rock';
    } else{
        return 'Player wins!';
    }
}

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(singleRound(playerSelection, computerSelection));






