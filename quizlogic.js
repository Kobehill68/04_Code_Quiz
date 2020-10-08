var timeElement = document.getElementById("time");
var startButton = document.getElementById("startQuiz");
var questionsElement = document.getElementById("questions");
var uLContainerElement = document.getElementById("ul-container");
var choicesListUl = document.getElementById("choices-list");

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
        question: "How do you make a for Loop?",
        choices: ["For=loop", "for()", "none of the above",],
        answer: "for()",
    },

];




function startQuiz() {
    timeLeft = 60;
    question = 0;
    userScore = 0;
    setTime();
    theQuestions();
};


function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft = 60;
        timeElement.textContent = secondsLeft;

        if (secondsLeft === 0 || questions === questionsArray.length) {
            userScore = secondsLeft;
            clearInterval(timeInterval);
            quizOver();
        }
    }, 1000);
};

function theQuestions() {
    if (questions < questionsArray.length) {
        questionsElement.textContent = questionsArray[questions].questions;
        answer = questionsArray[questions].answer;
        theChoices();
    };
};




function theChoices() {
    appendUlEl();

    for (var i = 0; i < questionsArray[questions].choices.length; i++) {
        var choices = questionsArray[questions].choices[i];

        var li = document.createElement("li");
        li.textContent = choices;
        choicesListul.appendChild(li);

    };

};


function appendUlEl() {
    choicesListul = document.createElement("<ul>");
    choicesListul.setAttribute("id", "choices-list");
    document.getElementById("ul-container").appendChild(choicesListUl);

};

function removeUlEl() {

    choicesListUl.remove();
};

function answerCheck(userChooses) {
    if (userChooses !== answer) {
        timeLeft -= 10
    }

    questions++;
};

function quizEnded() {
    timeElement.textContent = "Quiz has Ended!";
    questionsElement.textContent = "Your Score is" + userScore;
    removeUlEl();

    startButton.style.display = "inline-block";
};

startButton.addEventListener("click", startQuiz);


uLContainerElement.addEventListener("click", function (event) {
    answerCheck(event.target.trim());
    removeOlEl();
    theQuestions();

})

