let operator;
let firstNumber = 0;
let secondNumber = 0;
let display = document.querySelector(".display");
let displayValue = 0;
let counter = 0;
let isItAProduct = 0;
let lastFirst;

const audio = new Audio("meow.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnDec = document.getElementById(".");

const addBtn = document.getElementById("+");
const subBtn = document.getElementById("-");
const devBtn = document.getElementById("/");
const mulBtn = document.getElementById("*");
const equBtn = document.getElementById("=");
const delBtn = document.getElementById("delete");
const cleBtn = document.getElementById("clear");


btn0.addEventListener("click", () => {
    displayNum(0);
})

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


function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function divide(a, b){
    if(b===0){
        alert("You can't devide by 0!");
        return a;
    }
    return Math.round((a/b) * 100) / 100;
}

function multiply(a, b){
    return a*b;
}

function operate(operator, firstNumber, secondNumber){
    switch (operator){
        case '+':
            displayValue = Math.round((add(firstNumber, secondNumber)) * 100) / 100;
            display.innerText = displayValue;
            lastFirst = firstNumber;
            isItAProduct = 1;
            break;
        case '-':
            displayValue = Math.round((substract(firstNumber, secondNumber)) * 100) / 100;
            display.innerText = displayValue;
            lastFirst = firstNumber;
            isItAProduct = 1;
            break;
        case '/':
            displayValue = Math.round((divide(firstNumber, secondNumber)) * 100) / 100;
            display.innerText = displayValue;
            lastFirst = firstNumber;
            isItAProduct = 1;
            break;
        case '*':
            displayValue = Math.round((multiply(firstNumber, secondNumber)) * 100) / 100;
            display.innerText = displayValue;
            lastFirst = firstNumber;
            isItAProduct = 1;
            break;
    }

}


function displayNum(num){
    equBtn.disabled = false;
    if(isItAProduct){
        display.innerText = '';
        firstNumber = displayValue;
        isItAProduct = 0;
    }
    display.innerText += num;
    displayValue = parseFloat(display.innerText);
}


btnDec.addEventListener("click", () => {
    if(!btnDec.disabled){
        displayNum('.');
        btnDec.disabled = true;
    }
    else{
        return
    }
})


delBtn.addEventListener("click", () => {
    display.innerText = display.innerText.slice(0, -1);
    displayValue = parseFloat(display.innerText);
})

addBtn.addEventListener("click", () => {
    btnDec.disabled = false;
    if(counter && firstNumber == lastFirst){
        secondNumber = parseFloat(display.innerText);
        firstNumber = parseFloat(display.innerText);
        operate(operator, firstNumber, secondNumber);
        return
    }
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
    btnDec.disabled = false;
    if(counter && firstNumber == lastFirst){
        secondNumber = parseFloat(display.innerText);
        firstNumber = parseFloat(display.innerText);
        operate(operator, firstNumber, secondNumber);
        return
    }
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
    btnDec.disabled = false;
    if(counter && firstNumber == lastFirst){
        secondNumber = parseFloat(display.innerText);
        firstNumber = parseFloat(display.innerText);
        operate(operator, firstNumber, secondNumber);
        return
    }
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
    btnDec.disabled = false;
    if(counter && firstNumber == lastFirst){
        secondNumber = parseFloat(display.innerText);
        firstNumber = parseFloat(display.innerText);
        operate(operator, firstNumber, secondNumber);
        return
    }
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
    equBtn.disabled = true;
    counter = 0;
})

cleBtn.addEventListener("click", () => {
    display.innerText = '';
    operator = '';
    firstNumber = 0;
    secondNumber = 0;
    displayValue = 0;
})
