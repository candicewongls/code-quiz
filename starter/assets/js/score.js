var initialsInput = document.querySelector("#initials");
var highScore = document.querySelector("#highscores")
var submitButton = document.querySelector("#submit");

/*submitButton.addEventListener("click", function(event) {
    event.preventDefault();
})*/

var user = {
    initialsInput,
    highScore
  };

  console.log(user);

  localStorage.setItem("user", JSON.stringify(user));