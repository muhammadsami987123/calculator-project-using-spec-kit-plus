document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.calculator input');
    const buttons = document.querySelectorAll('.calculator button');
    let currentValue = '0';
    let operator = null;
    let previousValue = null;
    let waitingForNewValue = false;

    const updateDisplay = () => {
        display.value = currentValue;
    };

    const clearAll = () => {
        currentValue = '0';
        operator = null;
        previousValue = null;
        waitingForNewValue = false;
        updateDisplay();
    };

    const handleNumberClick = (number) => {
        if (waitingForNewValue) {
            currentValue = number;
            waitingForNewValue = false;
        } else {
            currentValue = currentValue === '0' ? number : currentValue + number;
        }
        updateDisplay();
    };

    const handleOperatorClick = (nextOperator) => {
        const inputValue = parseFloat(currentValue);

        if (previousValue === null && !isNaN(inputValue)) {
            previousValue = inputValue;
        } else if (operator && !waitingForNewValue) {
            const result = performCalculation[operator](previousValue, inputValue);
            currentValue = String(result);
            previousValue = result;
        }

        waitingForNewValue = true;
        operator = nextOperator;
        updateDisplay();
    };

    const handleEqualsClick = () => {
        const inputValue = parseFloat(currentValue);
        if (operator && previousValue !== null && !isNaN(inputValue)) {
            currentValue = String(performCalculation[operator](previousValue, inputValue));
            operator = null;
            previousValue = null;
            waitingForNewValue = false;
            updateDisplay();
        }
    };

    const toggleSign = () => {
        currentValue = String(parseFloat(currentValue) * -1);
        updateDisplay();
    };

    const inputDecimal = () => {
        if (waitingForNewValue) {
            currentValue = '0.';
            waitingForNewValue = false;
        } else if (!currentValue.includes('.')) {
            currentValue += '.';
        }
        updateDisplay();
    };

    const performCalculation = {
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
        'x': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === 'AC') {
                clearAll();
                return;
            }

            if (buttonText === '+/-') {
                toggleSign();
                return;
            }

            if (buttonText === '.') {
                inputDecimal();
                return;
            }

            if (['/', 'x', '-', '+'].includes(buttonText)) {
                handleOperatorClick(buttonText);
                return;
            }

            if (buttonText === '=') {
                handleEqualsClick();
                return;
            }

            if (!isNaN(parseFloat(buttonText))) {
                handleNumberClick(buttonText);
            }
        });
    });

    updateDisplay();
});
