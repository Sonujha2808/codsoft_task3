document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const clearButton = document.getElementById("clear");
    const calculateButton = document.getElementById("calculate");
  
    let currentInput = "";
    let firstOperand = null;
    let operator = null;
  
    numbers.forEach(number => {
      number.addEventListener("click", function() {
        currentInput += this.value;
        display.value = currentInput;
      });
    });
  
    operators.forEach(op => {
      op.addEventListener("click", function() {
        if (currentInput !== "") {
          if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
          } else {
            calculate();
          }
          operator = this.value;
          currentInput = "";
        }
      });
    });
  
    clearButton.addEventListener("click", function() {
      clear();
    });
  
    calculateButton.addEventListener("click", function() {
      if (operator !== null && currentInput !== "") {
        calculate();
      }
    });
  
    function calculate() {
      const secondOperand = parseFloat(currentInput);
      let result = 0;
      switch (operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
      }
      display.value = result;
      firstOperand = result;
      currentInput = "";
      operator = null;
    }
  
    function clear() {
      currentInput = "";
      firstOperand = null;
      operator = null;
      display.value = "";
    }
  });