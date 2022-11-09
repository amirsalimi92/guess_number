let but = document.querySelector("#button");
let number = Math.floor(Math.random() * 10000);
let best = document.querySelector("#bestScore");
let last = document.querySelector("#lastNumber");
let lastGuess = document.querySelector("#lastGuess");

//set the first bydefault value
let bestScoreRound = 0;

//get the best score from storage
let bestScore = Number(localStorage.getItem("bestScore"));
console.log(bestScore);

best.innerHTML = bestScore;
//for first time
if (bestScore == null) {
  best.innerHTML = "Try for your best!";
}

//button operator
but.addEventListener("click", () => {
  //counter for score
  bestScoreRound += 1;

  lastGuess.style.visibility = "visible";

  //get the number from input
  let input = Number(document.querySelector("#input").value);
  last.innerHTML = input;

  //last number box
  let output = document.querySelector("#footer > h4");

  //main conditions
  if (input < number) {
    output.innerHTML = "It's too small";
  } else if (input > number) {
    output.innerHTML = "It's too big";
  } else if (input == number) {
    //set the best score in storage
    if (bestScoreRound <= bestScore || bestScore == null) {
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

  //test data for console
  console.log(number);
});

function ending() {
  console.log("hey");
}
