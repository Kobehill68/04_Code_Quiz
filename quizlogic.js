var timeEl = document.getElementById("time");
var startBtn = document.getElementById("startquiz");
var questionsEl = document.getElementById("questions");
var uLContainerEl = document.getElementById("uLContainer");


var timeLeft = 0;
var question = 0;
var answer = 0;
var userScore = 0;




function init() {
   timeLeft = 60;
   question = 0;
   userScore = 0;
   setTime();
};


function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if (secondsLeft === 0 || question === questionArray.length) {
        userScore = secondsLeft;
        clearInterval(timerInterval);
        quizOver();
      }
    }, 1000);
  }
  
