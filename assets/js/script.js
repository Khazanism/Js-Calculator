//  Calculator
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }
}
//  clear out our different variables 
clear() {
  this.currentOpeerand = ''
  this.previousOperand = ''
  this.operation = undefined
}
// removing a single number 
delete() {

}
// add a number every time iclick on a number to add to screen
appendNumber(number) {

}
// every time the op is clicked it picks the op the user selected
chooseOperation(operation) {

}
// take our values inside our calc. and compute a single value
// for what we need to display.
compute() {

} 
// update the vaues inside our output
updateDisplay(){

}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const allClearButtons = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
