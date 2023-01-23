/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */
class calculator {
  constructor() {
    this.history = [];
  }
  history(value) {
    this.history.push(value);
  }
  getHistory() {
    return this.history;
  }
  equals(value) {
    const result = eval(value);
    this.history(result);
    return result;
  }
  clear() {
    this.history = [];
  }
}
const calculatorInastance = new calculator();

const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
  calculatorScreen.innerHTML += val;
}

//this code listen to every key on the calculator and add the value on the screen
document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText !== "=") {
    key.addEventListener("click", (e) => print(e.target.innerText));
  }
});

document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText === "=") {
    key.addEventListener("click", (e) => {
      calculatorScreen.innerHTML = calculatorInastance.equals(
        calculatorScreen.innerHTML
      );
      console.log(calculatorInastance.getHistory());
    });
  }
});

document.querySelector("#calculator .clear").addEventListener("click", () => {
  calculatorScreen.innerHTML = "";
  calculatorInastance.clear();
});

// Implement here the event when the = key is pressed
