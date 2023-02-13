// this variable defines the 03 available choices inside the game.
const choices = ['rock', 'paper', 'scissors']

// this function starts the game when the site is loaded or reloaded
function game(){
    round();
}

// this function calls both the getComputerChoice function and the playerSelection function, than calls the checkWin function to see who wins, then displays it on the console.
function round(){

    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log('You chose: ' + playerSelection);
    console.log('Computer chose: ' + computerSelection);

    const winner = checkWin(playerSelection, computerSelection);
    console.log(winner);   
    console.log('---------------------------------------------------------');
}

// this funcion gets a random item from the choices array. this function is called inside the 'round function'
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

// this function pops up a prompt asking for the player's choice. it contains another function called validadeChoice which filters valid from invalid inputs.
function getPlayerChoice(){
    let input = prompt('Type rock, paper or scissors to begin the round');
    input = input.toLowerCase();
    validateChoice(input);
    return input;
}

// this function checks if player typed a valid option and displays an alert in case of a typo. this function is called inside getPlayerChoice function.
function validateChoice(choice){
    if(choices.includes(choice))
    { }
    else{
        alert('Spelling might be incorrect. Try again.');
    }
} 

// this function runs the player's choice against the computer's and determines who's the winner of the round.
function checkWin(Player, Computer){
    if(Player === Computer){
        return 'It\'s a tie!'
    }
    else if
    ((Player === 'rock' && Computer === 'paper') || (Player === 'paper' && Computer === 'scissors') || (Player === 'scissors' && Computer === 'rock'))
        {
        return 'Oh no, you lost.'
    }
    else{
        return 'You won!'
    }
}




