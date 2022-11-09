function fizzBuzzGame(max) {
  let i = 1;
  while (i <= max) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");

      i++;
    } else if (i % 3 == 0) {
      console.log("Fizz");
      i++;
    } else if (i % 5 == 0) {
      console.log("Buzz");
      i++;
    } else {
      console.log(i);
      i++;
    }
  }
}

function SpeedControl(speed) {
  if (speed <= 74) {
    return "Ok";
  } else {
    extra = speed - 70;

    points = extra / 5;
    point = Math.floor(points);

    if (point >= 12) {
      return "Suspended";
    } else {
      return point;
    }
  }
}

function oddEven(number) {
  if (number === Math.floor(number)) {
    if (number % 2 == 0) return "Even";
    else return "Odd";
  } else return "Not valid";
}

let test = [0, null, "", 2, 3];

function truthyCounter(numbers) {
  let count = 0;
  for (const number of numbers) {
    if (number) count++;
  }
  return count;
}

function showProperties(movie) {
  console.log(`Title: ${movie["title"]} \nDirector: ${movie["director"]}`);
}

const movie = {
  title: "Friends",
  releaseYear: 2003,
  rating: 4.8,
  director: "idn",
};

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}

function calculategrade(average) {
  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else {
    return "A";
  }
}

function grade(points) {
  let total = 0;
  for (const point of points) {
    total += point;
  }
  let average = total / points.length;
  return calculategrade(average);
}

function tree(row) {
  let space, star;
  for (let i = 1; i <= row; i++) {
    space = row - i;
    star = i * 2 - 1;
    console.log(" ".repeat(space) + "*".repeat(star));
  }
}

function isPrime(number) {
  let isPrime = true;
  if (number == 1 || number == 2) {
    return isPrime;
  }
  if (number < 1) return "Invalid";
  for (let index = 2; index < number; index++) {
    if (number % index == 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

//Have a look again on this function, because it's not still working
function numberDomain(limit) {
  console.log(1 + "\n" + 2);
  for (let index = 3; index <= limit; index++) {
    let result = isPrime(index);
    if (result == true) {
      console.log(index);
    }
  }
}

// console.log(isPrime(15));
numberDomain(12);
