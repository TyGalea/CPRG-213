/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDays = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let monButton = document.getElementById("monday");
monButton.addEventListener("click", () => colourChangeDay("monday"));
let tueButton = document.getElementById("tuesday");
tueButton.addEventListener("click", () => colourChangeDay("tuesday"));
let wedButton = document.getElementById("wednesday");
wedButton.addEventListener("click", () => colourChangeDay("wednesday"));
let thuButton = document.getElementById("thursday");
thuButton.addEventListener("click", () => colourChangeDay("thursday"));
let friButton = document.getElementById("friday");
friButton.addEventListener("click", () => colourChangeDay("friday"));

function colourChangeDay(day) {
  let dayColour = document.getElementById(day);
  if (!dayColour.classList.contains("clicked")) {
    dayColour.classList.add("clicked");
    numberOfDays++;
    recalculate();
  }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDay);

function clearDay() {
  let dayColour = document.getElementById("monday");
  dayColour.classList.remove("clicked");
  dayColour = document.getElementById("tuesday");
  dayColour.classList.remove("clicked");
  dayColour = document.getElementById("wednesday");
  dayColour.classList.remove("clicked");
  dayColour = document.getElementById("thursday");
  dayColour.classList.remove("clicked");
  dayColour = document.getElementById("friday");
  dayColour.classList.remove("clicked");
  numberOfDays = 0;
  recalculate();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let fullButton = document.getElementById("full");
fullButton.addEventListener("click", changeRateFull);

function changeRateFull() {
  let fullColour = document.getElementById("full");
  fullColour.classList.add("clicked");
  let halfColour = document.getElementById("half");
  halfColour.classList.remove("clicked");
  costPerDay = 35;
  recalculate();
}

let halfButton = document.getElementById("half");
halfButton.addEventListener("click", changeRateHalf);

function changeRateHalf() {
  let halfColour = document.getElementById("half");
  halfColour.classList.add("clicked");
  let fullColour = document.getElementById("full");
  fullColour.classList.remove("clicked");
  costPerDay = 20;
  recalculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
  let costLabel = document.getElementById("calculated-cost");
  costLabel.innerHTML = costPerDay * numberOfDays;
}
