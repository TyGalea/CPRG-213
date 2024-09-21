let startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

function startGame() {
  // generate a random number between 1 and 100
  let secretNumber = Math.floor(Math.random() * 100 + 1);
  let numberGuesses = 1;

  let guess = prompt("What is your guess at the secret number?");
  // prompt the user for a number

  while (parseInt(guess) != secretNumber) {
    if (parseInt(guess) > secretNumber) {
      guess = prompt("Your guess was too high! What is your new guess?");
    } else {
      guess = prompt("Your guess was too low! What is your new guess?");
    }
    numberGuesses++;
  }

  alert(
    "Congratulations! The secret number was " +
      secretNumber +
      " and you guessed it in " +
      numberGuesses +
      " guesses!"
  );
  if (numberGuesses <= 5) {
    document.getElementById("demo").innerHTML = "🥇";
  } else if (numberGuesses <= 10) {
    document.getElementById("demo").innerHTML = "🥈";
  } else if (numberGuesses <= 15) {
    document.getElementById("demo").innerHTML = "🥉";
  }
}
