"use strict";

const againButton = document.querySelector(".again");
const numberEl = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const bodyEl = document.body;


let secretNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

checkButton.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);
    console.log(guess , typeof guess);
    // no guess
    if(!guess){
        messageEl.textContent = "⛔ No number";
    // correct guess
    }else if(guess === secretNum){
        messageEl.textContent = "🎉 Correct Number";
        bodyEl.style.backgroundColor = "green";
        numberEl.style.width = "300px";


    if(score > highscore){
        highscore = score;
        highscoreEl.textContent = highscore;
    }
    // num is higher
    }else if(guess > secretNum){
        if(score > 1){
            messageEl.textContent = "📈 Too high!";
            score-- ;
            scoreEl.textContent = score;
            scoreEl.textContent = 0;
        }else{
            messageEl.textContent = "🔥 You lost the game!"
        }
    // num is lower
    }else if(guess < secretNum){
        if(score > 1){
            messageEl.textContent = "📈 Too low!";
            score-- ;
            scoreEl.textContent = score;
        }else{
            messageEl.textContent = "🔥 You lost the game!"
            scoreEl.textContent = 0;
        }
    }  
});

againButton.addEventListener("click", () => {
    score = 20;
    secretNum = Math.floor(Math.random() * 20) + 1;
    messageEl.textContent = "start guessing ...";
    scoreEl.textContent = score;

    numberEl.textContent = secretNum;
    numberEl.textContent = "?";
    numberEl.style.width = "150px";
    bodyEl.style.backgroundColor = "#222";
    guessInput.value = "";
})







