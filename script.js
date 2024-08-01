let displayData = "";
let firstNum;
let secondNum;
let operand;
let result;

// grab display
const display = document.querySelector('.display');

// grab buttons
const numBtns = document.querySelectorAll('.btn-num');
const operators = document.querySelectorAll('.btn-operate');



const calculator = {
    add: (num1, num2) => {
        return num1 + num2;
    },
    subtract: (num1, num2) => {
        return num1 - num2;
    },
    divide: (num1, num2) => {
        return num1 / num2;
    },
    multiply: (num1, num2) => {
        return num1 * num2;
    },
    clear: () => {
        display.textContent = '';
        displayData = '';
    }
}

numBtns.forEach(button => {
    button.addEventListener('click', () => {
        displayData += `${button.value}`;
        display.textContent = displayData;
        firstNum = Number.parseInt(displayData);   
    })
})



