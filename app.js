const choices = ['rock', 'paper', 'scissors']
let p1Score = 0
let p2Score = 0


function round(){
    
    let p2 = getComputerChoice();
    let p1 = getPlayerChoice();
    console.log('Player: ' + p1);
    console.log('Computer: ' + p2);
    
    const winner = checkWin(p1, p2);
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
    
    const checkWin = (p1, p2) => {
        if (p1 === p2) return "Draw!";
        const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
        if (p2 === rules[p1]) {
          return "Player 1 won!";
        }
        else {
          return "Player 2 won!";
        }
      };
    
    
    function game(){
        for (let i = 0; i < 5; i++) {    
    round();
}
if (p1Score > p2Score){
    console.log('You beat the computer!') 
    }
    else if (p1Score === p2Score){
        console.log('It\'s a tie!')
    }
    else{
        console.log('The computer won!')
    }

}




