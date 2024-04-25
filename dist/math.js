"use strict";
const calculationElement = document.getElementById("calculation");
const resultElement = document.getElementById("result");
let resultDisplayed = false;
function addNumber(number) {
    if (calculationElement) {
        if (resultDisplayed) {
            calculationElement.textContent = '';
            resultDisplayed = false;
        }
        calculationElement.textContent += number;
    }
}
function addOperator(operator) {
    if (calculationElement) {
        if (resultDisplayed) {
            if (resultElement && resultElement.textContent) {
                calculationElement.textContent = resultElement.textContent;
                resultDisplayed = false;
            }
        }
        calculationElement.textContent += ` ${operator} `;
    }
}
function clearCalculation() {
    if (calculationElement && resultElement) {
        calculationElement.textContent = '';
        resultElement.textContent = '';
        resultDisplayed = false;
    }
}
function switchSign() {
}
function calculateResult() {
    if (calculationElement && resultElement) {
        try {
            const expression = calculationElement.textContent || '';
            const result = eval(expression);
            resultElement.textContent = result.toString();
            resultDisplayed = true;
        }
        catch (error) {
            resultElement.textContent = 'Error';
            console.error('Error evaluating expression:', error);
        }
    }
}
function addDot() {
    var _a;
    if (calculationElement) {
        const parts = (_a = calculationElement.textContent) === null || _a === void 0 ? void 0 : _a.split(/[+\-*\/\s]+/);
        const currentPart = parts === null || parts === void 0 ? void 0 : parts.pop();
        if (currentPart && !currentPart.includes('.')) {
            calculationElement.textContent += '.';
        }
    }
}
