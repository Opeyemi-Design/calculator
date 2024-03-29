// Creating functions to perform calculations
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

// Initialising variables of the operator and the two numbers to be operated on
let num1 = ''
let num2 = ''
let operator = ''

// Function to perform calculation
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
    if (operator && num2 === '') {
      display.textContent = '';
    }
    if (operator) {
      num2 += number;
      display.textContent += number;
    } else {
      num1 += number;
      display.textContent = num1;
    }
}

// Function to handle decimal button click
function handleDecimalButtonClick() {
    if (operator && num2 === '') {
      display.textContent = '0.';
      num2 = '0.';
    } else if (operator && !num2.includes('.')) {
      num2 += '.';
      display.textContent += '.';
    } else if (!num1.includes('.')) {
      num1 += '.';
      display.textContent += '.';
    }
}

// Function to handle operator button clicks
function handleOperatorButtonClick(clickedOperator) {
    if (num1 && num2 && operator) {
      const result = (operate(operator, parseFloat(num1), parseFloat(num2))).toFixed(16);
      num1 = result.toString();
      num2 = '';
      operator = clickedOperator;
      display.textContent = num1;
    } else {
      operator = clickedOperator;
    }
}

// Function to handle equals button click
function handleEqualsButtonClick() {
    if (num1 && num2 && operator) {
      let result = operate(operator, parseFloat(num1), parseFloat(num2));
      result = parseFloat(result); // Convert result to number type
      display.textContent = formatResult(result);
      num1 = result.toString();
      operator = '';
      num2 = '';
    }
}

// Function to format the result with a maximum of 16 decimal places
function formatResult(value) {
    const stringValue = value.toString();
    const decimalIndex = stringValue.indexOf('.');
    if (decimalIndex !== -1 && stringValue.length - decimalIndex - 1 > 16) {
      return parseFloat(value.toFixed(16)).toString();
    }
    return stringValue;
}

// Function to handle clear button click
function handleClearButtonClick() {
    if (num2) {
      num2 = num2.slice(0, -1); // Remove the last character from num2
      display.textContent = display.textContent.slice(0, -1); // Update the display
    } else if (operator) {
      operator = ''; // Clear the operator
      display.textContent = num1; // Restore the display to num1
    } else if (num1) {
      num1 = num1.slice(0, -1); // Remove the last character from num1
      display.textContent = display.textContent.slice(0, -1); // Update the display
    }
}

// Function to handle all clear button click
function handleAllClearButtonClick() {
    num1 = '';
    operator = '';
    num2 = '';
    display.textContent = '';
}

// Adding click event listeners to the number buttons
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

// Add click event listener to the decimal button
document.getElementById('decimal').addEventListener('click', handleDecimalButtonClick);

// Adding click event listeners to the operator buttons
document.getElementById('multiply').addEventListener('click', () => handleOperatorButtonClick('*'));
document.getElementById('add').addEventListener('click', () => handleOperatorButtonClick('+'));
document.getElementById('subtract').addEventListener('click', () => handleOperatorButtonClick('-'));
document.getElementById('divide').addEventListener('click', () => handleOperatorButtonClick('/'));

// Adding click event listener to the equals button
document.getElementById('equals').addEventListener('click', handleEqualsButtonClick);

// Add click event listener to clear and all clear buttons
document.querySelector('.clear').addEventListener('click', handleClearButtonClick);
document.querySelector('.all-clear').addEventListener('click', handleAllClearButtonClick);