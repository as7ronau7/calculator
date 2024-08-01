// get display element
const display = document.querySelector('.display');

// get button HTMLcollection
const buttons = document.querySelectorAll('.btn-num');

//
let displayData = '';
let firstNum = null;
let secondNum = null;
let operator = null;
let calculation;

const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', () => {
    console.log('clicked')
    display.textContent = '';
    displayData = '';
    firstNum = null;
    secondNum = null;
    operator = null;
})
// add function
const add = (num1, num2) => num1 + num2;
// subtract function
const subtract = (num1, num2) => num1 - num2;
// multiply function
const multiply = (num1, num2) => num1 * num2;
// divide function
const divide = (num1, num2) => num1 / num2;

const calcResults = (num1, num2, operation) => {
    if (operator === '+') {
        calculation = add(num1, num2);
        return calculation
    } else if (operator === '-') {
        calculation = subtract(num1, num2);
        return calculation
    } else if (operator === '*') {
        calculation = multiply(num1, num2);
        return calculation
    } else if (operator === '/') {
        calculation = divide(num1, num2);
        return calculation
    }
    
}

// event listener to get button value
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`${button.value}`);
        displayData += `${button.value}`;
        display.textContent = displayData;

        switch(`${button.value}`) {
            case '+':
            case '-':
            case '*':
            case '/':
                console.log(`operator: ${button.value} selected`);
                firstNum = parseInt(displayData);
                operator = `${button.value}`;
                break;
            case '=':
                secondNum = parseInt(displayData.replace(/^.*[+\-*\/]/, ''));
                display.textContent = calcResults(firstNum, secondNum, operator);
                break;
        }
    })
})


