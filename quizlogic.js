var timeEl = document.getElementById("time");
var startButton = document.getElementById("startquiz");
var questionsEl = document.getElementById("questions");
var oLContainerEl = document.getElementById("ol-container");
var choicesListOl = document.getElementById("choices-list");

var timeLeft = 0;
var question = 0;
var answer = 0;
var userScore = 0;

var questionsArray = [

    {
        question: "What does CSS stand for?",
        choices: ["Color Style Sheet", "Cascading Style Sheets", "Cascading Sheets Style",],
        answer: "Cascading Style Sheets",
    },
    {
        question: "How do you define variables in javascript?",
        choices: ["var", "VAR", "<var>",],
        answer: "var",
    },
    {
        question: "Who Invented JavaScript?",
        choices: ["Bill Gates", "Brendan Eirch", "Kobe Hill",],
        answer: "Brendan Eirch",
    },
    {
        question : "How do you make a for Loop?",
        choices: ["For=loop", "for()", "none of the above",],
        answer: "for()",
    },
   
];




function startTimeQuiz() {
    timeLeft = 60;
    question = 0;
    userScore = 0;
    setTime();
    theQuestions();
};


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0 || questions === questionsArray.length) {
            userScore = secondsLeft;
            clearInterval(timerInterval);
            quizOver();
        }
    }, 100);
};

function theQuestions() {
    if(questions < questionsArray.length){
        questionsEl.textContent = questionsArray[questions].questions;
        answer = questionsArray[questions].answer;
        theChoices();
0   };
};


function theChoices(){
    appendOlEl();

    for(var i = 0; i < questionsArray[questions].choices.length; i++){
        var choices = questionsArray[questions].choices[i];

        var li = document.createElement("li");
        li.textContent = choices;
        choicesListOl.appendChild(li);

    };

};


function appendOlEl(){
    choicesListOl = document.createElement("ol");
    choicesListOl.setAttribute("id", "choices-list");
    document.getElementById("ol-container").appendChild(choicesListOl);

};

function removeOlEl(){

    choicesListOl.remove();
};

function answerCheck(userChooses){
    if (userChooses !== answer){
       timeLeft -= 10 
    }

    questions++;
};

function quizEnded(){
    timeEl.textContent ="Quiz has Ended!";
    questionsEl.textContent = "Your Score is" + userScore;
    removeOlEl();

    startBtn.style.display ="inline-block";
};





startButton.onclick= function(event) {
    event.startTimeQuiz();
  };




