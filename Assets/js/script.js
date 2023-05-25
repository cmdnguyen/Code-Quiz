var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var timeLeft = 75;
var currentIndex = 0;

var questionElement = document.getElementById("question");
var answersContainer = document.getElementById("question-answers");
var startGameContainer = document.getElementById("before-start")
var gameContainer = document.getElementById("question-container");
var scoreContainer = document.getElementById("scoreContainer");
//var highScore = document.getElementbyID();

function startGame() {
    currentIndex = 0

    var gameInterval = setInterval(function() {
        timeLeft--;
        timerSpan.textContent = timeLeft;
        if (!timeLeft){
            clearInterval(gameInterval);
            endGame();
        }
    }, 1000);

    startGameContainer.style.display = "none"
    gameContainer.style.display = "block"
    showQuestion()
}

function endGame() {
    window.location.href = "highscore.html";
   clearInterval(gameInterval)
}

startButton.addEventListener("click", startGame);

var questionBank = [
    {
        question: "My first question?",
        answers: ["answer 1", "answer 2", "answer 3", "answer 4"], 
        correctAnswer: "answer 2"
    },

    { 
        question: "second question",
        answers: ["answer 5", "answer 6", "answer 7", "answer 8"],
        correctAnswer: "answer 8"
    },
    
    { 
        question: "third question",
        answers: ["answer 9", "answer 10", "answer 11" , "answer 12"],
        correctAnswer: "answer 9"
    },
    
    {
        question: "fourth question",
        answers: ["answer 13", "answer 14", "answer 15" , "answer 16"],
        correctAnswer: "answer 14"
    },
    
    {
        question: "fifth question",
        answers:  ["answer 17", "answer 18", "answer 19" , "answer 20"],
        correctAnswer: "answer 19" 
    }]



function showQuestion (){
    console.log('SHOWING THE QUESTION!')
    var currentQuestion = questionBank[currentIndex];
    var currentPrompt = currentQuestion.question;
    console.log(currentPrompt)
    questionElement.innerHTML = currentPrompt;
    var answersChoices = currentQuestion.answers;
    var answerRight = currentQuestion.correctAnswer;
    console.log(answersChoices);
    console.log(answerRight);
    //Find a way to know which question to render
        //stop when i = 4
    answersContainer.innerHTML = ""

  

    for(let i= 0; i< answersChoices.length; i++){
        var currentAnswerChoice = answersChoices[i]
        var button = document.createElement("button")
        button.innerHTML = currentAnswerChoice
        button.addEventListener("click", checkAnswer)
        answersContainer.append(button)
    }
}

//var userAnswer = (currentQuestion.querySelector(selector).currentIndex)

function checkAnswer(answer){
    console.log(answer)
    if (answerRight === answer) {
        score++;
        console.log ("Correct!");
        currentIndex++;
        showQuestion();
    } else {
        console.log("Wrong!");
    }
    //explore the event.target
    //check if its correct or not?

    //check if you have more questions!
    //if you have more questions  you can move currentIndex ++ and call showQuestion()
    //if you don't have more questions?
    
}
