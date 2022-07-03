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
let randomValues;
function computerPlay(){
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if(randomNumber === 0){
    randomValues = 'Rock';
  } else if(randomNumber === 1){
    randomValues = 'Paper';
  } else{
    randomValues = 'Scissors';
  }
  return randomValues;
}
computerPlay()
console.log(randomValues);


function SingleRound(playerSelection, computerSelection){
    return "You lose! Rock beats Paper"
}
let playerSelection = /'rock'/i;
let computerSelection = computerPlay();
console.log(SingleRound(playerSelection, computerSelection));

