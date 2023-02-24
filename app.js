            
    // UI
    const toggleButton = document.querySelector('.theme-toggle');
    const body = document.querySelector('body');

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark');
    });

    // GAME
    
    let p1Score = 0
    let p2Score = 0
    
    function startOneRound() {
        const playerSelectionButtons = document.querySelectorAll('.button');
        playerSelectionButtons.forEach(button => {
          button.addEventListener('click', () => {
            const p1 = button.dataset.selection;
            const p2 = getComputerChoice();
            roundCheck(p1, p2);
            console.log('p1 = ' + p1)
            console.log('p2 = ' + p2)
            applyRules(p1Score, p2Score);
          });
        })}


    function getComputerChoice(){
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    } 
    
    const roundCheck = (p1, p2) => {

        const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
        if (p2 === rules[p1]) {
            p1Score++
            console.log("round winner: Player 1");   
            if (p1Score === 3) {
                endGameP1win();
            }
            return "Player 1";
        }
        else {
            p2Score++
          console.log("round winner: Computer");
          if (p1Score === 3) {
            endGameP2win();
        }
        return "Computer";

        }
      };
    
    
    function applyRules(roundWinner) {
        console.log('round winner:', roundWinner);
        console.log(`Player 1: ${p1Score}, Computer: ${p2Score}`);
    }

    function endGameP1win() {
        p1Score = 0
        p2Score = 0
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('dark');

        const message = document.createElement('p');
        message.textContent = 'You beat the computer!';
        message.classList.add('dark');

        const replay = document.createElement('button');
        replay.classList.add('replay');
        replay.textContent = 'Start Over';
        replay.classList.add('dark');
        

        const image = document.createElement('img');
        image.src = 'Rock-Paper-Scissors/HaroldHappy.jpg';

        card.appendChild(message);
        card.appendChild(replay);
        card.appendChild(image);

        body.appendChild(card);
    }   

    function endGameP2win() {
        p1Score = 0
        p2Score = 0
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('dark');
        
        const message = document.createElement('p');
        message.textContent = 'The computer beat your ass';
        message.classList.add('dark');
        
        const replay = document.createElement('button');
        replay.classList.add('replay');
        replay.textContent = 'Start Over';
        replay.classList.add('dark');
        
        const image = document.createElement('img');
        image.src = 'Rock-Paper-Scissors/HaroldSad.jpg';
        
        card.appendChild(message);
        card.appendChild(replay);
        card.appendChild(image);
        
        body.appendChild(card);
    }

    startOneRound();

