var initialsInput = document.querySelector("#initials");
var highScoreContainer = document.querySelector("#highscores")
var submitButton = document.querySelector("#submit");
var highScore = document.querySelector("#final-score")

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var scoreBoard = document.createElement('h3')
    scoreBoard.textContent = user
    highScoreContainer.append(scoreBoard)

})

document.addEventListener("click", function () {
  highScoreContainer.addEventListener("click", swapper, false);
  var scoreBoard = document.createElement('h3')
  scoreBoard.textContent = user
  highScoreContainer.append(scoreBoard)
});

var user = {
    initialsInput,
    highScore
  };

  console.log(user);

  localStorage.setItem("user", JSON.stringify(user));

  if (initialsInput === "") {
    displayMessage("error", "initials cannot be blank");
  }