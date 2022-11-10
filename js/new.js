let but = document.querySelector("#button");
let inputFirst = document.querySelector("#input");
let number = Math.floor(Math.random() * 10000);
let best = document.querySelector("#bestScore");
let round = document.querySelector("#round");
let last = document.querySelector("#lastNumber");
let lastGuess = document.querySelector("#lastGuess");

// It's the answer. you can delete it
console.log(number);

//set the first bydefault value
let bestScoreRound = 0;

//get the best score from storage
let bestScore = Number(localStorage.getItem("bestScore"));

//for first time
if (bestScore == null) {
  best.innerHTML = "Try for your best!";
}

// tip: bestScore is the bestscore had the player, bestScoreRound is the actual score
// and best is the place to put the score
best.innerHTML = bestScore;

//button operator
but.addEventListener("click", () => {
  //counter for score
  bestScoreRound += 1;

  // bydefault we don't have first data, then we see that after first entry of user
  lastGuess.style.visibility = "visible";

  //get the number from input
  let input = Number(inputFirst.value);
  last.innerHTML = input;

  //last number box
  let output = document.querySelector("#middle > h4");

  //main conditions
  if (input < number) {
    if (number - input >= 1000) {
      output.innerHTML = "It's too small";
    } else if (number - input < 1000 && number - input > 10) {
      output.innerHTML = "It's small";
    } else if (number - input <= 10) {
      output.innerHTML = "It's close but still small";
    }
  } else if (input > number) {
    if (input - number >= 1000) {
      output.innerHTML = "It's too big";
    } else if (input - number < 1000 && input - number > 10) {
      output.innerHTML = "It's big";
    } else if (input - number <= 10) {
      output.innerHTML = "It's close but still big";
    }
  } else if (input == number) {
    //set the best score in storage
    if (bestScoreRound <= bestScore || bestScore == null || bestScore == 0) {
      localStorage.setItem("bestScore", bestScoreRound);
    }

    output.innerHTML = "Exactly";

    //style editings
    output.style.color = "green";
    // disable the input after final answer
    document.querySelector("#input").disabled = "true";
    // run the end function to refresh the page automatically
    ending();
  } else {
    output.innerHTML = "Import invalid number";
  }
  round.innerHTML = bestScoreRound;
});

// refresh teh page after correct answer
function ending() {
  setTimeout(function () {
    window.location.reload();
  }, 3000);
}

// use enter as submit button
inputFirst.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode == 13) {
    but.click();
  }
});

// shaking
but.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputFirst.value) {
    inputFirst.classList.add("apply-shake");
  }
});

// it needs to repeat the shaking after every guess
inputFirst.addEventListener("animationend", (e) => {
  inputFirst.classList.remove("apply-shake");
});
