let but = document.querySelector("#button");
let inputFirst = document.querySelector("#input");
let number = Math.floor(Math.random() * 10000);
let best = document.querySelector("#bestScore");
let round = document.querySelector("#round");
let last = document.querySelector("#lastNumber");
let lastGuess = document.querySelector("#lastGuess");

console.log(number);

//set the first bydefault value
let bestScoreRound = 0;

//get the best score from storage
let bestScore = Number(localStorage.getItem("bestScore"));

//for first time
if (bestScore == null) {
  best.innerHTML = "Try for your best!";
}

best.innerHTML = bestScore;

//button operator
but.addEventListener("click", () => {
  //counter for score
  bestScoreRound += 1;

  lastGuess.style.visibility = "visible";

  //get the number from input
  let input = Number(inputFirst.value);
  last.innerHTML = input;

  //last number box
  let output = document.querySelector("#middle > h4");

  //main conditions
  if (input < number) {
    output.innerHTML = "It's too small";
  } else if (input > number) {
    output.innerHTML = "It's too big";
  } else if (input == number) {
    //set the best score in storage
    if (bestScoreRound <= bestScore || bestScore == null || bestScore == 0) {
      localStorage.setItem("bestScore", bestScoreRound);
    }

    output.innerHTML = "Exactly";

    //style editings
    output.style.color = "green";
    document.querySelector("#input").disabled = "true";
    ending();
  } else {
    output.innerHTML = "Import invalid number";
  }
  round.innerHTML = bestScoreRound;
});

function ending() {
  setTimeout(function () {
    window.location.reload();
  }, 3000);
}

inputFirst.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode == 13) {
    but.click();
  }
});
