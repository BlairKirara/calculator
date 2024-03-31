const btnClear = document.getElementById("clear");
const btnEqual = document.getElementById("=");
btnEqual.disabled = true;
const btnDecimal = document.getElementById(".");
btnDecimal.disabled = true;

const display = document.querySelector(".display");
const buttonsNum = document.querySelectorAll(".numButton");
const buttonsOperator = document.querySelectorAll(".operatorButtons")

let sum;
let firstTime = true;
let operator;
let secondNumber;
let isItProduct = false;

const audio = new Audio("meow.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});



function add(a, b){
    return Math.round((a + b)*100)/100;
}

function substract(a, b){
    return Math.round((a - b)*100)/100;
}

function multiply(a, b){
    return Math.round((a * b)*100)/100;
}

function divide(a, b){
    return Math.round((a / b)*100)/100;
}

function operate(operator, firstNumber, secondNumber){
    switch (operator){
        case '+':
            return add(firstNumber, secondNumber);
            break;
        case '-':
            return substract(firstNumber, secondNumber);
            break;
        case '*':
            return multiply(firstNumber, secondNumber);
            break;
        case '/':
            if(secondNumber===0){
                alert("You can't devide by 0!");
                return firstNumber;
            }
            return divide(firstNumber, secondNumber);
            break;
    }
}

buttonsNum.forEach(function (button) {
    button.addEventListener('click', function() {
        if(!display.innerText.includes('.')){
            btnDecimal.disabled = false;
        }
        if(secondNumber == 'end'){
            display.innerText = '';
            btnEqual.disabled = false; 
            secondNumber = 'beginning';
        }
      display.innerText += button.innerText;
      secondNumber = parseFloat(display.innerText);
    });
  });

btnDecimal.addEventListener('click', function(){
    if(btnDecimal.disabled){
        return
    }
    else{
        display.innerText += btnDecimal.innerText;
        btnDecimal.disabled = true;
    }
})

  buttonsOperator.forEach(function (button) {
    button.addEventListener('click', function() {
        btnDecimal.disabled = false;
        if(isItProduct == true){
            operator = button.innerText;
            display.innerText += ` ${operator}`;
            isItProduct = false;
            return;
        }
        if(secondNumber == 'end'){
            operator = button.innerText;
            display.innerText = display.innerText.slice(0, -2);
            display.innerText += ` ${operator}`;
            return;
        }
        if(firstTime){
            firstTime = false;
            operator = button.innerText;
            sum = parseFloat(display.innerText);
            secondNumber = 'end';
        }
        else{           
            secondNumber = parseFloat(display.innerText);
            sum = operate(operator, sum, secondNumber);
            operator = button.innerText;
            display.innerText = sum + ` ${operator}`;
            secondNumber = 'end';            
        }
    });
  });

btnClear.addEventListener("click", () => {
    display.innerText = '';
    sum = '';
    secondNumber = '';
    operator = '';
    firstTime = true;
    btnDecimal.disabled = true;
})

btnEqual.addEventListener("click", () => {
    btnEqual.disabled = true;
    sum = operate(operator, sum, secondNumber);
    display.innerText = sum;
    isItProduct = true;
    secondNumber = 'end';
})
