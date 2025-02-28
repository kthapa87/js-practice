let randomNumber =parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess =parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);

    });
}

function validateGuess(guess){
    // checking whether the input is number or not 
    // validate if it is between 1 and 100

    if (isNaN(guess)){
        alert('please enter a valid number');
    }else if (guess < 1 || guess > 100){
        alert('please enter a number between 1 and 100 only');
    }else {
        prevGuess.push(guess);
        if(numGuess >9){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
    // checking the guess is correct or not and display the message
    // if the guess is equal to random number generated then game over and congratulate the user
    // if the guess is less than random number then give hint to user that the user entered number is less than random number so that user can increase the number next time 
    // if the guess is greater than random number then give hint to user that the user unput number is greater than random number so that user can decrease the number next time 
    if(guess === randomNumber){
        displayMessage(`congratulation you guessed it right`);
        endGame();
        }else if(guess < randomNumber){
        displayMessage(`nmber is too low`);
    }else if(guess > randomNumber){
        displayMessage(`number is too high`);
    }
}

function displayGuess(guess){
    // display the guess number in the guess slot
    // increment the number of guess
    // display the remaining number of guess
    userInput.value ='';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;

}

function displayMessage(message){
    // display the message in the low or high slot
    // lowOrHi.innerHTML = `<h2>message</h2>`;
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    // display the message that the game is over
    // disable the input field
    // create a new game button and add the button to the start over slot
    // remove the button when the user click on the button
    // set the playGame variable value to false
    userInput.value ='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();

}
function newGame(){
    // generate a new random number
    // clear the previous guess
    // clear the guess slot
    // clear the remaining guess
    // enable the input field
    // remove the new game button
    // set the playGame variable value to true again
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',()=>{
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
        lowOrHi.innerHTML = '';


    })
}


// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   })};
