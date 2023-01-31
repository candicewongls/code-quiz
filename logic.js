const quizQuestions = [
    {
        question: '1. What is the symbol for class',
        choices: ['!', '.', '#'],
        correct: '.'
    },
    {
        question: 'What is the symbol for id',
        choices: ['!', '.', '#'],
        correct: '#'
    },
    {
        question: 'what do we use to decorate and organise a website',
        choices: ['html', 'css', 'js'],
        correct: 'css'
    },
]

var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start");
var startScreen = document.querySelector("#start-screen")
var questionsContainer = document.querySelector('#questions')
var endScreen = document.querySelector('#end-screen')
var finalScore = document.querySelector("#final-score")


var chosenWord = "";
var numBlanks = 0;
var score = 0;
var isWin = false;
var timerCount = 100;
var questionIndex = 0

function init() {
    getWins();
    getlosses();
}

function startGame() {
    isWin = false;
    // Prevents start button from being clicked when round is in progress
    // startButton.disabled = true;
    startScreen.classList.add('hide')
    startTimer()
    showQuestions()
}

function showQuestions() {
    questionsContainer.textContent = ''
    if (questionIndex > quizQuestions.length - 1) return

    var questionEl = document.createElement('h3')
    questionEl.textContent = quizQuestions[questionIndex].question
    questionsContainer.append(questionEl)

    for (var i = 0; i < quizQuestions[questionIndex].choices.length; i++) {
        var choiceBtn = document.createElement('button')
        choiceBtn.textContent = quizQuestions[questionIndex].choices[i]

        questionsContainer.append(choiceBtn)

        choiceBtn.addEventListener('click', function (event) {
            if (event.target.textContent === quizQuestions[questionIndex].correct) {
                console.log('correct')
            } else {
                console.log('incorrect')
                timerCount -= 10
            }

            questionIndex++
            showQuestions()
        })
    }


}

function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    winCounter++
    startButton.disabled = false;
    setWins()
}

function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
}

function startTimer() {
    // Sets timer
    var timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0 || questionIndex > quizQuestions.length - 1) {
            clearInterval(timer)
            endQuiz()
        }
    }, 1000);
}

function endQuiz() {
    questionsContainer.classList.add('hide')
    endScreen.classList.remove('hide')
    finalScore.textContent = timerCount

    document.querySelector('#submit').addEventListener('click', function() {
        var userObj = {
            initials: document.querySelector('#initials').value
            
        }

        console.log(userObj)

        

    })
}

startButton.addEventListener('click', startGame)