const calculationElement = document.getElementById("calculation");
const resultElement = document.getElementById("result");

let resultDisplayed = false;

///TODO: only one operater after number entry
///TODO: add sign switch function
///TODO: add percentage function

function addNumber(number: string): void {
    if (calculationElement) {
        if (resultDisplayed) {
            calculationElement.textContent = '';
            resultDisplayed = false;
        }
        calculationElement.textContent += number;
    }
}

function addOperator(operator: string): void {
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

function clearCalculation(){
    if (calculationElement && resultElement) {
        calculationElement.textContent = '';
        resultElement.textContent = '';
        resultDisplayed = false;
    }
}

function switchSign(){

}

function calculateResult(){
    if (calculationElement && resultElement) {
        try {
            const expression = calculationElement.textContent || '';
            const result = eval(expression);
            resultElement.textContent = result.toString();
            resultDisplayed = true;
        } catch (error) {
            resultElement.textContent = 'Error';
            console.error('Error evaluating expression:', error);
        }
    }
}

function addDot(){
    if (calculationElement) {
        const parts = calculationElement.textContent?.split(/[+\-*\/\s]+/);
        const currentPart = parts?.pop();
        if (currentPart && !currentPart.includes('.')) {
            calculationElement.textContent += '.';
        }
    }
}