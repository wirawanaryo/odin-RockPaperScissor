// function that randomly returns rock/paper/scissors
function getComputerChoice(){
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];  
  return choices[Math.floor(Math.random()*100)%3];
}

//function that prompt user for input
function getHumanChoice(){
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  let humanChoice = prompt("What will you choose? Rock, Paper, or Scissors?");

  while (!choices.includes(humanChoice.toUpperCase())){
    humanChoice = prompt("Invalid choice. Please choose rock, paper, or scissors.");
  }

  return humanChoice.toUpperCase();
}

//score variables
let humanScore = 0;
let computerScore = 0;

//game function
function playRound(humanChoice, computerChoice, round){
  //welcome message based on round number
  if (round === 0){
    console.log("Hello, Lets play Rock, Paper, Scissors!");
  }else{
    console.log(`Lest play again! Current Score - You: ${humanScore}, Computer: ${computerScore}`);
  } 

  //tell user their choice and computer's choice
  console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

  //determine winner
  switch (humanChoice + "|" + computerChoice){
    case "ROCK|SCISSORS":
    case "PAPER|ROCK":
    case "SCISSORS|PAPER":
      console.log("You win!");
      humanScore++;
      break;
    case "ROCK|PAPER":
    case "PAPER|SCISSORS":
    case "SCISSORS|ROCK":
      console.log("Computer wins!");
      computerScore++;
      break;
    default:
      console.log("It's a tie!");
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
playGame(5);

