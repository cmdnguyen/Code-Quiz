var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var questionElement = document.getElementById("question");
var answersContainer = document.getElementById("question-answers");
var startGameContainer = document.getElementById("before-start")
var gameContainer = document.getElementById("question-container");
var scoreContainer = document.getElementById("scoreContainer");
var userScore = document.getElementById("userScore")
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
var displayHighScore = document.getElementById ("displayHighScore");
var submitHighScore = document.getElementById("submitHighScore");
var userName = document.getElementById("highScoreName")

var highScoreList = [
    {name:"LS", score: 50}, 
    {name:"TT",score : 45}, 
    {name:"NA", score: 30}
]

var questionBank = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answerA: "javascript",
        answerB: "script",
        answerC: "js",
        answerD: "scripting", 
        correctAnswer: "answerB"
    },

    { 
        question: "How do you create a function in JavaScript?",
        answerA: "myFunction()",
        answerB: "function:myFunction",
        answerC: "function myFunction()",
        answerD: "function = myFunction()", 
        correctAnswer: "answerC"
    },
    
    { 
        question: "How do you write an IF statement in JavaScript?",
        answerA: "if (i === 5)",
        answerB: "if i = 5",
        answerC: "if i = 5 then",
        answerD: "if i == 5 then", 
        correctAnswer: "answerA"
    },
    
    {
        question: "How can you add a comment in a JavaScript?",
        answerA: "'This is a comment' ",
        answerB: "--This is a comment--",
        answerC: "*This is a comment",
        answerD: "//This is a comment", 
        correctAnswer: "answerD"
    },
    
    {
        question: "What is the correct way to write a JavaScript array?",
        answerA: "var colors = ['red', 'green', 'blue']",
        answerB: "var colors = 'red', 'green', 'blue'",
        answerC: "var colors = (1:'red', 2:'green', 3:'blue')",
        answerD: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", 
        correctAnswer: "answerA" 
    }]

var timeLeft = 75;
var currentIndex =0;
var currentQuestion;
var gameInterval;

function startGame() {
    currentIndex = 0

    gameInterval = setInterval(function() {
        timeLeft--;
        timerSpan.textContent = timeLeft;
        if (!timeLeft){
            clearInterval(gameInterval);
            endGame();
        }
    }, 1000);

    startGameContainer.style.display = "none"
    gameContainer.style.display = "block";
    showQuestion()
}

function endGame() {
    gameContainer.style.display = "none";
    scoreContainer.style.display = "flex";
    userScore.innerHTML = timeLeft;
   clearInterval(gameInterval)
}

startButton.addEventListener("click", startGame);
answersContainer.addEventListener("click",function(event){checkAnswer(event.target.id)})
submitHighScore.addEventListener("click", function(){
    highScoreList.push({name:userName.value, score: timeLeft})
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList))
    showHighScore()

})

function showQuestion (){
    if (currentIndex < questionBank.length){

    currentQuestion = questionBank[currentIndex];
    console.log('SHOWING THE QUESTION!')
    console.log(currentQuestion.question)
    questionElement.innerHTML = currentQuestion.question;
    answerA.innerHTML = currentQuestion.answerA
    answerB.innerHTML = currentQuestion.answerB
    answerC.innerHTML = currentQuestion.answerC
    answerD.innerHTML = currentQuestion.answerD
    } else {
        endGame()
    }}

function checkAnswer(answer){
    if (currentQuestion.correctAnswer === answer) {
        console.log ("Correct!");
        currentIndex++;
        showQuestion();
    } else {
        console.log(answer)
        console.log("Wrong!");
        timeLeft -= 10;
    }}

function showHighScore(){
    highScoreList = JSON.parse(localStorage.getItem("highScoreList"))
    
    var highScoreTable = displayHighScore.appendChild(document.createElement("table"))
    for(var i in highScoreList){
    
        let highScoreRow = highScoreTable.appendChild(document.createElement("tr"))
        let highScore1 = highScoreRow.appendChild(document.createElement("td"))
        let highScore2 = highScoreRow.appendChild(document.createElement("td"))
        highScore1.textContent = highScoreList[i].name
        highScore2.textContent = highScoreList[i].score
    }
}