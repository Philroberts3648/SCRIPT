/*
1. Declear a function variable called computerPlay
2. Function computerPlay will randomly return 'Rock', 'Paper' or 'Scissors'
3. declear a function singleRound
4. give the function 'singleRound'  parameters 'playerSelection' and 'computerSelection' 
5. let the function return a string that declears a winner.
6. The returned string should be like;  "You Lose! Paper beats Rock"
console.log(SingleRound(player1, player2))
7.make player selection parameter case-insentive
8.

*/

const computerPlay = () => {
    let randomValues = ['Rock', 'Paper', 'Scissors']
    return randomValues[Math.floor(Math.random() * randomValues.length)];
}
console.log(computerPlay())


const singleRound = (playerSelection, computerSelection) =>{
    if(playerSelection === computerSelection){
        return `It's a tie! You both picked ${playerSelection}.`;
    } else if(playerSelection === /Rock/i && computerSelection === 'Paper'){
        return 'You win! Rock beats Paper.';
    } else if(playerSelection === /Paper/i && computerSelection === 'Scissors'){
        return 'You win! Paper beats Scissors.';
    } else if(playerSelection === /Scissors/i && computerSelection ==='Rock'){
        return 'You win! Scissors beats Rock.';
    } else{
        return `You lose! ${computerSelection} won this round.`;
    }
}
const playerSelection = 'Paper';
const computerSelection = computerPlay();
console.log(singleRound(playerSelection, computerSelection));


const game = ()=>{
       
}






