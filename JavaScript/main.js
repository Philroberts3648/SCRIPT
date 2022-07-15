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

    if(playerSelection === 'rock'){
        if(computerSelection === 'paper' || computerSelection === 'Scissors'){
            return 'You lose! computer wins'
        }else {
            return 'Player wins!'
        }
    }
    if(playerSelection === 'paper'){
        if(computerSelection === rock || computerSelection === 'scissors'){
            return 'You lose!';
        } else {
            return 'Player wins!';
        }
    } 

    if(playerSelection === 'scissors'){
        if(computerSelection === 'Paper' || computerSelection === 'rock'){
            return 'Player wins!'
        } else{
            return 'computer win!;'
        }
    }
    
}
const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(singleRound(playerSelection, computerSelection));


const game = () => {
    for(let i = 0; i < 5; i++){
        playerSelection = i;
        singleRound(playerSelection, computerSelection);
    }
}
game();





