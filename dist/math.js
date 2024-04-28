"use strict";
const calculationElement = document.getElementById("calculation");
const resultElement = document.getElementById("result");
///TODO: add percentage function
///TODO: either make transition from result string to calc string OR transfer calculation from result string to calc string
let calculationInput = [];
let resultDisplayed = false;
function updateCalculationDisplay() {
    calculationElement.textContent = calculationInput.join(' ');
}
function addNumber(number) {
    if (calculationElement) {
        if (resultDisplayed) {
            calculationInput = [];
            resultDisplayed = false;
        }
        if (calculationInput.length && !isNaN(+calculationInput[calculationInput.length - 1])) {
            calculationInput[calculationInput.length - 1] += number;
        }
        else {
            calculationInput.push(number);
        }
        updateCalculationDisplay();
    }
}
function addOperator(operator) {
    if (calculationElement) {
        if (calculationInput.length === 0) {
            if (operator === '-') {
                calculationInput.push(operator);
            }
            else {
                console.error('Cannot start expression with an operator.');
                return;
            }
        }
        else if (isNaN(+calculationInput[calculationInput.length - 1])) {
            calculationInput[calculationInput.length - 1] = operator;
        }
        else {
            calculationInput.push(operator);
        }
        resultDisplayed = false;
        updateCalculationDisplay();
    }
}
function clearCalculation() {
    calculationInput = [];
    resultDisplayed = false;
    if (calculationElement)
        calculationElement.textContent = '';
    if (resultElement)
        resultElement.textContent = '';
}
function switchSign() {
    if (calculationElement && calculationInput.length > 0) {
        let lastInput = calculationInput[calculationInput.length - 1];
        if (!isNaN(parseFloat(lastInput))) {
            lastInput = lastInput.startsWith('-') ? lastInput.slice(1) : `-${lastInput}`;
            calculationInput[calculationInput.length - 1] = lastInput;
        }
        else if (lastInput === '-') {
            calculationInput.pop();
        }
        else {
            calculationInput.push('-');
        }
        updateCalculationDisplay();
    }
}
function calculatePercentage() {
    if (calculationElement && calculationInput.length > 1) {
        const lastNumberStr = calculationInput.pop();
        if (lastNumberStr) {
            const lastNumber = parseFloat(lastNumberStr);
            let subtotalExpression = calculationInput.join('');
            subtotalExpression = subtotalExpression.replace(/[+\-*\/]$/, '');
            const subtotal = subtotalExpression ? Function(`"use strict"; return (${subtotalExpression});`)() : 0;
            const percentageValue = subtotal * (lastNumber / 100);
            calculationInput.push(percentageValue.toString());
            updateCalculationDisplay();
        }
    }
}
function calculateResult() {
    if (calculationElement && resultElement) {
        try {
            const result = eval(calculationInput.join(' '));
            const roundedResult = Math.round((result + Number.EPSILON) * 100) / 100;
            resultElement.textContent = roundedResult.toString();
            calculationInput = [roundedResult.toString()];
            resultDisplayed = true;
        }
        catch (error) {
            resultElement.textContent = 'Error';
            calculationInput = [];
            console.error('Error evaluating expression:', error);
        }
    }
}
function addDot() {
    if (calculationElement && !resultDisplayed) {
        const lastInput = calculationInput[calculationInput.length - 1];
        if (lastInput !== undefined && !isNaN(+lastInput) && !lastInput.includes('.')) {
            calculationInput[calculationInput.length - 1] += '.';
            updateCalculationDisplay();
        }
        else if (lastInput === undefined || isNaN(+lastInput)) {
            calculationInput.push('0.');
            updateCalculationDisplay();
        }
    }
}
