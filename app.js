const choices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0


function round(){
    
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log('Player: ' + playerSelection);
    console.log('Computer: ' + computerSelection);
    
    const winner = checkWin(playerSelection, computerSelection);
    console.log(winner);   
    console.log('---------------------------------------------------------');
}


function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}


function getPlayerChoice(){
    let input = prompt('Type rock, paper or scissors to begin the round');
    input = input.toLowerCase();
    while(validateChoice(input) == false){
        alert('You spelled incorrectly.');
        return getPlayerChoice();
    }

    return input;
    
}


function validateChoice(choice){
    if(choices.includes(choice)){
         return true}
    else{ 
        return false
    }
} 


function checkWin(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'It\'s a tie!'
    }
    else if(
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
        )
        {
            computerScore++
            return 'Computer wins'
        }
        else{
            playerScore++
            return 'Player wins'
    }
}
function game(){
    for (let i = 0; i < 5; i++) {    
    round();
    }
    if (playerScore > computerScore){
        console.log('You beat the computer!') 
    }
    else if (playerScore === computerScore){
        console.log('It\'s a tie!')
    }
    else{
        console.log('The computer won!')
    }

}




