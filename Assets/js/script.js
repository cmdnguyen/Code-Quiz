//Declare variables from the HTML elements
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

//Placeholder for high scores
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

//Timer
var timeLeft = 75;
var gameInterval;
//Index to determine which question to pull up
var currentIndex = 0;
var currentQuestion;

//Function to start the game at the index of 0 and start the timer from 75 seconds
function startGame() {
    currentIndex = 0

    gameInterval = setInterval(function() {
        //Timer counts down
        timeLeft--;
        timerSpan.textContent = timeLeft;

        //if time runs out, the game ends and clears the game interval
        if (!timeLeft){
            clearInterval(gameInterval);
            endGame();
        }
    }, 1000);

    //Hides the start section of the page and shows the game when it starts
    startGameContainer.style.display = "none"
    gameContainer.style.display = "block";
    showQuestion()
}

//Function when the game ends
function endGame() {
    //Hides the game and shows the score
    gameContainer.style.display = "none";
    scoreContainer.style.display = "flex";
    //Uses the time left as the user's score
    userScore.innerHTML = timeLeft;
   clearInterval(gameInterval)
}

//Event listeners for before, during and after the game
startButton.addEventListener("click", startGame);
answersContainer.addEventListener("click",function(event){checkAnswer(event.target.id)})
submitHighScore.addEventListener("click", function(){
    highScoreList.push({name:userName.value, score: timeLeft})
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList))
    showHighScore()

})

//Displays the questions based on the index
function showQuestion (){
    if (currentIndex < questionBank.length){
    currentQuestion = questionBank[currentIndex];
    questionElement.innerHTML = currentQuestion.question;
    answerA.innerHTML = currentQuestion.answerA
    answerB.innerHTML = currentQuestion.answerB
    answerC.innerHTML = currentQuestion.answerC
    answerD.innerHTML = currentQuestion.answerD
    } else {
        //If there's no questions left, end the game
        endGame()
    }}

//Function to check for the correct answer. If wrong, takes out 10 seconds from the timer
function checkAnswer(answer){
    if (currentQuestion.correctAnswer === answer) {
        currentIndex++;
        showQuestion();
    } else {
        timeLeft -= 10;
    }}

//Shows the high score board and adds user input to it
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