let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// function to generate a random number from 0  to 9
function generateTarget(){
  numb=Math.floor(Math.random()*9+1);
  return numb;
}
//console.log(generateTarget());

//Check which if user or computer guess closer to target
function compareGuesses(userGuess,computerGuess,targetNumber){
  userDiff=Math.abs(userGuess - targetNumber);
  computerDiff=Math.abs(computerGuess - targetNumber)
  if(userDiff < computerDiff){
    return true;
  } else if (userDiff > computerDiff){
    return false
  } else {
    return true
  }
}

//console.log(compareGuesses(4,5,10));

//Update score of user or computer
function updateScore(score){
  if (score == 'human'){
    humanScore += 1;
   } else if (score == 'computer'){
    computerScore += 1;
   }
}

//console.log(updateScore('human'));

function advanceRound(){
  currenRoundNumber += 1;
  //return currentRoundNumber
}

updateScore('human');
console.log(humanScore); // To confirm that this value increased by 1

updateScore('computer');
console.log(computerScore); // To confirm that this value increased by 1
//checking difference or distance between two numbers
function getAbsoluteDistance(numb1,numb2){
  absoluteDiff=Math.abs(numb1-numb2)
  return absoluteDiff
}

function alert(){
  if(userGuess < 0 || userGuess > 9){
    return 'Your input is out of range! Input a number from 0 to 9'
  }
}
