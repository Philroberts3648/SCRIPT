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


const SingleRound = (playerSelection, computerSelection) =>{
    
}
let playerSelection = /'rock'/i;
let computerSelection = computerPlay();
console.log(SingleRound(playerSelection, computerSelection));

const game = ()=>{
       
}






