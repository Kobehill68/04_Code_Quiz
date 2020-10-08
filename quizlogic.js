var timeElement = document.getElementById("time");
var startButton = document.getElementById("startQuiz");
var questionsElement = document.getElementById("theQuestions");
var uLContainer = document.getElementById("ul-container");
var choicesListUl = document.getElementById("choices-list");


var userScore = 0;
var timeLeft = 0;
var title = 0;
var answer = "";


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
    title = 0;
    userScore = 0;
    setTime();
    theQuestion();
};


function setTime() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        timeElement.textContent = timeLeft;

        if (timeLeft === 0 || questionsElement === questionsArray.length) {
            userScore = timeLeft;
            clearInterval(timeInterval);
            quizEnded();
        }
    }, 1000);
};

function theQuestion() {
    if (title < questionsArray.length) {
        questionsElement.textContent = questionsArray[title].question;
        answer = questionsArray[title].answer;
        theChoices();
    }
};




function theChoices() {
   
    UlElement() 
    for (var i = 0; i < questionsArray[title].choices.length; i++) {
        var choices = questionsArray[title].choices[i];

        var li = document.createElement("li");
        li.textContent = choices;
        choicesListUl.appendChild(choices);

    }

};


function UlElement() {
    choicesListUl = document.createElement("ul");
    choicesListUl.setAttribute("id", "choices-list");
    document.getElementById("ul-container").appendChild(choicesListUl);

};

function removeUlEl() {

    choicesListUl.remove();
};

function answerCheck(userChooses) {
    if (userChooses !== answer) {
        timeLeft -= 10
    }

    title++;
};

function quizEnded() {
    timeElement.textContent = "Quiz has Ended!";
    questionsElement.textContent = "Your Score is" +  userScore;
    removeUlEl();

    startButton.style.display = "inline-block";
};

startButton.addEventListener("click", startQuiz);


//uLContainerElement.addEventListener("click", function (event) {
   // answerCheck(event.target.trim());
    //removeUlEl();
    //theQuestions();
//})

