let operator;
let firstNumber = 0;
let secondNumber = 0;
let display = document.querySelector(".display");
let displayValue = 0;
let counter = 0;
let isItAProduct = 0;


function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function divide(a, b){
    return Math.round((a/b) * 100) / 100;
}

function multiply(a, b){
    return a*b;
}

function operate(operator, firstNumber, secondNumber){
    switch (operator){
        case '+':
            displayValue = add(firstNumber, secondNumber);
            display.innerText = displayValue;
            //firstNumber = displayValue;
            isItAProduct = 1;
            break;
        case '-':
            displayValue = substract(firstNumber, secondNumber);
            display.innerText = displayValue;
            //firstNumber = displayValue;
            isItAProduct = 1;
            break;
        case '/':
            displayValue = divide(firstNumber, secondNumber);
            display.innerText = displayValue;
            //firstNumber = displayValue;
            isItAProduct = 1;
            break;
        case '*':
            displayValue = multiply(firstNumber, secondNumber);
            display.innerText = displayValue;
            //firstNumber = displayValue;
            isItAProduct = 1;
            break;
    }

}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

function displayNum(num){
    if(isItAProduct){
        display.innerText = '';
        firstNumber = displayValue;
        isItAProduct = 0;
    }
    display.innerText += num;
    displayValue = parseInt(display.innerText);
}

btn1.addEventListener("click", () => {
    displayNum(1);
})

btn2.addEventListener("click", () => {
    displayNum(2);
})

btn3.addEventListener("click", () => {
    displayNum(3);
})

btn4.addEventListener("click", () => {
    displayNum(4);
})

btn5.addEventListener("click", () => {
    displayNum(5);
})

btn6.addEventListener("click", () => {
    displayNum(6);
})

btn7.addEventListener("click", () => {
    displayNum(7);
})

btn8.addEventListener("click", () => {
    displayNum(8);
})

btn9.addEventListener("click", () => {
    displayNum(9);
})

const addBtn = document.getElementById("+");
const subBtn = document.getElementById("-");
const devBtn = document.getElementById("/");
const mulBtn = document.getElementById("*");
const equBtn = document.getElementById("=");
const cleBtn = document.getElementById("clear");

addBtn.addEventListener("click", () => {
    display.innerText = '';
    if(operator!='+' && counter>0){
        secondNumber = displayValue;
        operate(operator, firstNumber, secondNumber);
        operator = '+';
     }
    else if(counter){
        secondNumber = displayValue;
        operate('+', firstNumber, secondNumber);

    }
    else{
        operator = '+';
        firstNumber = displayValue;
        counter++;
    }
})

subBtn.addEventListener("click", () => {
    display.innerText = '';
    if(operator!='-' && counter>0){
        secondNumber = displayValue;
        operate(operator, firstNumber, secondNumber);
        operator = '-';
     }
    else if(counter){
        secondNumber = displayValue;
        operate('-', firstNumber, secondNumber);

    }
    else{
        operator = '-';
        firstNumber = displayValue;
        counter++;
    }
})

devBtn.addEventListener("click", () => {
    display.innerText = '';
    if(operator!='/' && counter>0){
        secondNumber = displayValue;
        operate(operator, firstNumber, secondNumber);
        operator = '/';
     }
    else if(counter){
        secondNumber = displayValue;
        operate('/', firstNumber, secondNumber);

    }
    else{
        operator = '/';
        firstNumber = displayValue;
        counter++;
    }
})

mulBtn.addEventListener("click", () => {
    display.innerText = '';
    if(operator!='*' && counter>0){
        secondNumber = displayValue;
        operate(operator, firstNumber, secondNumber);
        operator = '*';
     }
    else if(counter){
        secondNumber = displayValue;
        operate('*', firstNumber, secondNumber);

    }
    else{
        operator = '*';
        firstNumber = displayValue;
        counter++;
    }
})

equBtn.addEventListener("click", () => {
    secondNumber = displayValue;
    operate(operator, firstNumber, secondNumber);
    counter = 0;
})

cleBtn.addEventListener("click", () => {
    display.innerText = '';
    operator = '';
    firstNumber = 0;
    secondNumber = 0;
})