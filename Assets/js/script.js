var startButton = document.getElementbyId("start-button");
var timerSpan = document.getElementbyId("time-left");
var timeLeft = 75;


function startGame() {
    timerSpan.textContext = timeLeft;
    var gameInterval = setInterval<(() => {
        
        timerSpan.textContext = timeLeft--;
        if (!timeLeft){
            clearInterval(gameInterval);
            window.location.href = "highscore.html";
        }
    }, 1000);
}

startButton.addEventListener("click", startGame);