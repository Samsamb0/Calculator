let operand = "";
let previousValue = "";
let currentValue = "";

function load() {
  //initialisation
  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");
  let equal = document.querySelector(".equal");
  let clear = document.querySelector("#clear");
  let currentScreen = document.querySelector("#current");
  let previousScreen = document.querySelector("#previous");
  //Event
  //numbers
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      currentValue += numbers[i].innerText;
      console.log(currentValue);
      currentScreen.innerText = currentValue;
    });
  }

  //operator
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
      operand = operators[i].innerText;
      console.log(operand);
      previousValue = currentValue;
      previousScreen.innerText = previousValue + operand;
      currentScreen.innerText = "";
      currentValue = "";
    });
  }

  //equal
  equal.addEventListener("click", function () {
    previousValue = parseFloat(previousValue);
    currentValue = parseFloat(currentValue);
    if (operand === "+") {
      previousValue += currentValue;
    } else if (operand === "-") {
      previousValue -= currentValue;
    } else if (operand === "x") {
      previousValue *= currentValue;
    } else {
      previousValue /= currentValue;
    }
    console.log(previousValue);
    previous.innerText = "";
    current.innerText = previousValue;
  });
  //clear
  clear.addEventListener("click", function () {
    previousValue = "";
    currentValue = "";
    operand = "";
    previous.innerText = previousValue;
    current.innerText = currentValue;
  });
}
