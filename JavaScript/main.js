/*
1. Declear a function variable called computerPlay
2. Function computerPlay will randomly return 'Rock', 'Paper' or 'Scissors'
3. 
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
