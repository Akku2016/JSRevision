// how to generate random number
// how to convert decimal number in int 
//(parseInt())
//math.random()*100 +1:-if i need before decimal digit like 3.45678 likw this then we can multiply by 10 or 100

let randomNumber = parseInt(Math.random()*100+1);

 

const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");

const remaining = document.querySelector(".lastResult");

const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = []
let numGuess =1;

let playGame= true;

// we are ready for play the game
if(playGame){
    // if we are playing the game 
    submit.addEventListener('click', function(e){
  // if we are not write  this one it will direct go to the server we want value
  e.preventDefault();
  const guess = parseInt(userInput.value);// display the number here
   validateGuess(guess); 
    })
}

function validateGuess(guess){
    // kya usne ek valid number guess kiya h ya nhi or value i se kam toh nhi de rha h or jo limit di h usse jyada toh nhi diya h
       if(isNaN(guess)){
        alert("plz enter the valid Number");}
        else if(guess < 1 ){
            alert("plz enter the Number more than 1");
        }
        else if(guess > 100){
            alert("plz enter the number less than 100");
        }
        else {
            // how to add inside the array
            prevGuess.push(guess);
            // may be someone had last attempt 
           if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
           endGame()
        } else {
          displayGuess(guess)
          checkGuess(guess)
        }
        }
       }


function checkGuess(guess){
    // isme msg print krege ki vo low h aur high h 
    if(guess === randomNumber){
       displayMessage(`You guessed it right`)
       endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is TODO low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is TODO High`)
    }

}

function displayMessage(message){
    // dom manipulation means input field ko empty krna or 
    lowOrHi.innerHTML =`<h2>${message}<h2/>`
}

function displayGuess(guess){
    userInput.value= '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML =`${11-numGuess}`
}


function endGame(){
  userInput.value =''
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML =`<h2 id="newGame">Start new Game </h2>`;
  startOver.appendChild(p)
  playGame=false;
  newGame();
}

function newGame(){
     const newGameButton = document.querySelector('#newGame');
     newGameButton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML =` ${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame= true;
     })

}

