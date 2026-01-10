// choice variables
let computerChoice = "";
const computerChoicePreview = document.getElementById("computerChoicePreview");
let humanChoice = "";
const playerChoicePreview = document.getElementById("playerChoicePreview");

//randomizer computer choice function
function getComputerChoice(){
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];  
  return choices[Math.floor(Math.random()*100)%3];
}

//score variables
round = 0;
let humanScore = 0;
const humanScoreBoard = document.getElementById("playerScore");
let computerScore = 0;
const computerScoreBoard = document.getElementById("computerScore");
function updateScoreBoard() {
  humanScoreBoard.textContent = `Your Score: ${humanScore}`;
  computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
}

//updated game function
const statusMessage = document.getElementById("statusMessage");
function determineWinner(humanChoice, computerChoice) {  
  switch (humanChoice + "|" + computerChoice){
    case "ROCK|SCISSORS":
    case "PAPER|ROCK":
    case "SCISSORS|PAPER":
      console.log("You win!");
      statusMessage.textContent = "You win this round!";
      humanScore++;
      break;
    case "ROCK|PAPER":
    case "PAPER|SCISSORS":
    case "SCISSORS|ROCK":
      console.log("Computer wins!");
      statusMessage.textContent = "You lose this round!";
      computerScore++;
      break;
    default:
      statusMessage.textContent = "It's a tie!";
      console.log("It's a tie!");
  }
}

//function that prompt user for input
function getHumanChoice(){
  const rockButton = document.getElementById("rockButton");
  const paperButton = document.getElementById("paperButton");
  const scissorsButton = document.getElementById("scissorsButton");
  const buttons = [rockButton, paperButton, scissorsButton];
  for (const button of buttons){
    button.addEventListener("click", function(){    
      round++;  
      humanChoice = button.textContent.toUpperCase();
      playerChoicePreview.textContent = button.textContent; 
      computerChoice = getComputerChoice();
      computerChoicePreview.textContent = computerChoice.charAt(0) + computerChoice.slice(1).toLowerCase();     
      determineWinner(humanChoice, computerChoice);   
      updateScoreBoard();
      finalScore(5);      
    });  
  }
}
getHumanChoice();

//final report
function finalScore(maxrounds){
  if (round === maxrounds -1){
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore){
      alert("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore){
      alert("Computer is the overall winner! Better luck next time.");
    } else {
      alert("The game ends in a tie!");
    }
    round = 0
    humanScore = 0;
    computerScore = 0;
    updateScoreBoard();
    statusMessage.textContent = "Let's play again!";
  }  
}

//game loop function
function playGame(rounds){
  for (let i = 0; i < rounds; i++){
    round = i;
    playRound(getHumanChoice(), getComputerChoice(), round);    
  }
  
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore){
    console.log("Congratulations! You are the overall winner!");
  } else if (computerScore > humanScore){
    console.log("Computer is the overall winner! Better luck next time.");
  } else {
    console.log("The game ends in a tie!");
  }
}

//start game with 5 rounds
// playGame(5);

