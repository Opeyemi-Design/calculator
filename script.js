function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1 = ''
let num2 = ''
let operator = ''

function operate(operator, num1, num2) {
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        return 'Invalid operator';
    }
}

// Get reference to the display div element
const display = document.querySelector('.display');

// Function to handle number button clicks
function handleNumberButtonClick(number) {
    if (operator) {
      num2 += number;
      display.textContent = num2;
    } else {
      num1 += number;
      display.textContent = num1;
    }
}

// Function to handle operator button clicks
function handleOperatorButtonClick(clickedOperator) {
    operator = clickedOperator;
    display.textContent = operator;
}

// Function to handle equals button click
function handleEqualsButtonClick() {
    if (num1 && num2 && operator) {
      const result = operate(operator, parseFloat(num1), parseFloat(num2));
      display.textContent = result;
      // Reset variables for the next operation
      num1 = result.toString();
      operator = '';
      num2 = '';
    }
}

// Add click event listeners to the number buttons
document.getElementById('one').addEventListener('click', () => handleNumberButtonClick('1'));
document.getElementById('two').addEventListener('click', () => handleNumberButtonClick('2'));
document.getElementById('three').addEventListener('click', () => handleNumberButtonClick('3'));
document.getElementById('four').addEventListener('click', () => handleNumberButtonClick('4'));
document.getElementById('five').addEventListener('click', () => handleNumberButtonClick('5'));
document.getElementById('six').addEventListener('click', () => handleNumberButtonClick('6'));
document.getElementById('seven').addEventListener('click', () => handleNumberButtonClick('7'));
document.getElementById('eight').addEventListener('click', () => handleNumberButtonClick('8'));
document.getElementById('nine').addEventListener('click', () => handleNumberButtonClick('9'));
document.getElementById('zero').addEventListener('click', () => handleNumberButtonClick('0'));

// Add click event listeners to the operator buttons
document.getElementById('multiply').addEventListener('click', () => handleOperatorButtonClick('*'));
document.getElementById('add').addEventListener('click', () => handleOperatorButtonClick('+'));
document.getElementById('subtract').addEventListener('click', () => handleOperatorButtonClick('-'));
document.getElementById('divide').addEventListener('click', () => handleOperatorButtonClick('/'));

// Add click event listener to the equals button
document.getElementById('equals').addEventListener('click', handleEqualsButtonClick);