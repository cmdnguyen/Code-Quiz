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
        question: "My first question?",
        answerA: "answer 1",
        answerB: "answer 2",
        answerC: "answer 3",
        answerD: "answer 4", 
        correctAnswer: "answerB"
    },

    { 
        question: "second question",
        answerA: "answer 5",
        answerB: "answer 6",
        answerC: "answer 7",
        answerD: "answer 8", 
        correctAnswer: "answerD"
    },
    
    { 
        question: "third question",
        answerA: "answer 9",
        answerB: "answer 10",
        answerC: "answer 11",
        answerD: "answer 12", 
        correctAnswer: "answerA"
    },
    
    {
        question: "fourth question",
        answerA: "answer 13",
        answerB: "answer 14",
        answerC: "answer 15",
        answerD: "answer 16", 
        correctAnswer: "answerD"
    },
    
    {
        question: "fifth question",
        answerA: "answer 17",
        answerB: "answer 18",
        answerC: "answer 19",
        answerD: "answer 20", 
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
    scoreContainer.style.display = "inline";
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