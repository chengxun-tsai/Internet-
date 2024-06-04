let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstNumber !== '') {
        calculateResult();
    }
    firstNumber = currentInput;
    operator = op;
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    if (firstNumber === '' || currentInput === '') return;
    let result;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result;
    firstNumber = '';
    operator = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    firstNumber = '';
}