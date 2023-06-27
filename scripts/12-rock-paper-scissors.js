
  
  // getting score from localstorage then converting to Javascript. 
  let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

  // above code does shortcut way of what is done below check if score is null
/*
  of (score === null) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    }
  } 

  */
let playerMove = '';
let result = '';
let computerMove = '';

function updateResult(gameresult) {
  document.querySelector('.js-result')
    .innerHTML = `${gameresult}.`;
}

function updateMove(yourmove, compmove) {
  document.querySelector('.js-moves')
    .innerHTML = ` You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
}




function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 

}

function pickComputerMove() {
  const randomNumber = Math.random();
  if ((0 < randomNumber) && (randomNumber < 1/3)  ) {
     computerMove = 'rock';
  }
    else if ((1/3 < randomNumber) && (randomNumber < 2/3) ) {
    computerMove = 'paper';
    }

    else {
    computerMove = 'scissors';
    }

    return computerMove;
}

let isAutoPlaying = false;
let intervalID;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(function() {
      const playerMove = pickComputerMove();
      updateMove(playerMove,computerMove);
      PlayGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }
  else {
    clearInterval(intervalID);
    isAutoPlaying= false;
  }
 
}

  document.querySelector('.js-rock-button').addEventListener(
    'click', () => {
      pickComputerMove();
   
      playerMove = 'rock';
  
      updateMove(playerMove, computerMove);
  
     PlayGame(playerMove);
    }
  )

  document.querySelector('.js-paper-button').addEventListener(
    'click', () => {
      pickComputerMove();
   
      playerMove = 'paper';
  
      updateMove(playerMove, computerMove);
  
     PlayGame(playerMove);
    }
  )

  document.querySelector('.js-scissors-button').addEventListener(
    'click', () => {
      pickComputerMove();
   
      playerMove = 'scissors';
  
      updateMove(playerMove, computerMove);
  
     PlayGame(playerMove);
    }
  )

  document.body.addEventListener('keydown', () => {
    if(event.key === 'r') {
      pickComputerMove();
   
      playerMove = 'rock';
  
      updateMove(playerMove, computerMove);
  
     PlayGame(playerMove);

    }
    else if (event.key === 'p') {
      pickComputerMove();
   
      playerMove = 'paper';
  
      updateMove(playerMove, computerMove);
  
     PlayGame(playerMove);
    }
    else if (event.key === 's') {
      pickComputerMove();
   
      playerMove = 'scissors';
  
      updateMove(playerMove, computerMove);
  
     PlayGame(playerMove);
    }
  })

function PlayGame(PlayerMove) {


  if(playerMove === 'rock'){

      if (computerMove === 'rock') {
        result = 'Tie';
      }
      else if (computerMove === 'paper') {
        result = 'You lose';
      }
      else {
        result = 'You win';
      }

      if (result === 'You win') {
        score.wins++;
      } else if (result === 'You lose') {
        score.losses++;
      } else if (result === 'tie') {
        score.ties++;
      }

      // saving score into local storage but local storage only uses strings so we first convert JAVA Object > JSON string
      localStorage.setItem('score', JSON.stringify(score));
      updateResult(result);
      updateScoreElement();


  }

  else if(playerMove === 'paper') {

    
    if (computerMove === 'rock') {
      result = 'You win';
    }
    else if (computerMove === 'paper') {
      result = 'tie';
    }
    else {
      result = 'You lose';
    }

    if (result === 'You win') {
        score.wins++;
      } else if (result === 'You lose') {
        score.losses++;
      } else if (result === 'tie') {
        score.ties++;
      }

      localStorage.setItem('score', JSON.stringify(score));
      updateResult(result);
      updateScoreElement();


  }

  else if (playerMove === 'scissors') {

    if (computerMove === 'rock') {
        result = 'You lose';
      }
      else if (computerMove === 'paper') {
        result = 'You win';
      }
      else {
        result = 'tie';
      }

      if (result === 'You win') {
        score.wins++;
      } else if (result === 'You lose') {
        score.losses++;
      } else if (result === 'tie') {
        score.ties++;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateResult(result);

      updateScoreElement();

  }

  

}

