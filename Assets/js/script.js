var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var timeLeft = 75;
var currentIndex;


function startGame() {
    currentIndex = 0

    var gameInterval = setInterval(function() {
        timerSpan.textContent = timeLeft;
        timeLeft--;
        if (timeLeft === 0){
            clearInterval(gameInterval);
            endGame();
        }

    }, 1000);

    var startGameContainer = document.getElementById("before-start")
    startGameContainer.style.display = "none"
    var gameContainer = document.getElementById("question-container")
    gameContainer.style.display = "block"
    showQuestion()
}

function endGame() {
    window.location.href = "highscore.html";
}

startButton.addEventListener("click", startGame);

var questionBank = [
    {
        prompt: "My first question?",
        answers: ["answer 1", "answer 2", "answer 3", "answer 4"], 
        correctAnswer: "answer 2"
    },

    { 
        prompt: "second question",
        answers: ["answer 5", "answer 6", "answer 7", "answer 8"],
        correctAnswer: "answer 8"
    },
    
    { 
        prompt: "third question",
        answers: ["answer 9", "answer 10", "answer 11" , "answer 12"],
        correctAnswer: "answer 9"
    },
    
    {
        prompt: "fourth question", 
        answers: ["answer 13", "answer 14", "answer 15" , "answer 16"],
        correctAnswer: "answer 14"
    },
    
    {
        prompt: "fifth question",
        answers:  ["answer 17", "answer 18", "answer 19" , "answer 20"],
        correctAnswer: "answer 19"
    }]



function showQuestion (){
    console.log('SHOWING THE QUESTION!')
    var currentQuestion = questionBank[currentIndex]
    var currentPrompt = currentQuestion.prompt
    var questionElement = document.getElementById("question")
    questionElement.innerHTML = currentPrompt
    var answersChoices = currentQuestion.answers
    console.log(answersChoices)
    //Find a way to know which question to render
        //stop when i = 4
    var answersContainer = document.getElementById("question-answers")
    answersContainer.innerHTML = ""

  
    for(let i= 0; i< answersChoices.length; i++){
        var currentAnswerChoice = answersChoices[i]
        var button = document.createElement("button")
        button.innerHTML = currentAnswerChoice
        button.addEventListener("click", checkAnswer)
        answersContainer.append(button)
    }
     
}

var userAnswer = (currentQuestion.querySelector(selector))

function checkAnswer(event){
    console.log(event)
    console.log(event.target)
    if (userAnswer === questionBank.correctAnswer) {
        console.log ("Correct!");
        currentIndex++,
        showQuestion();
    } else {
        console.log("Wrong!");
    }
    //explore the event.target
    //check if its correct or not?

    //check if you have more questions!
    //if you have more questions  you can move currentIndex ++ and call showQuestion()
    //if you don't have more questions?
    endGame()
}
