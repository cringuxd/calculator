//Operation Variables
let number1 = "";
let operator = "";
let number2 = "";

//Calculator Variables
const num_button = document.querySelector(".num-button");
const num_buttons = document.querySelectorAll(".num-button");
const calc_buttons = document.querySelectorAll(".calc-button");
const text = document.querySelector(".textbox");

//Button Functions

/*Number Buttons*/
for(let i = 0; i < num_buttons.length; i++) {
    num_buttons[i].onclick = () => {
        if(number2 == "" && operator != "") {
            text.textContent = "0";
        }
        if(text.textContent == "0" || text.textContent == "you do know you can't divide by zero, right?") {
            text.textContent = num_buttons[i].textContent;
        }
        else {
            text.textContent += num_buttons[i].textContent;
        }
        if(operator == "") {
            number1 += num_buttons[i].textContent;
        }
        else {
            number2 += num_buttons[i].textContent;
        }
    };
}

/*Function Buttons*/

//Arithmetic Cases
/**Case 1: First number (num1/num2 empty): populate first number and operator variables
   Case 2: Second number (num2 empty): populate second number -> evaluate -> store result in first num var. -> set second num var. to ""
   Case 3:  **/
// +
calc_buttons[0].onclick = () => {
    if(operator == "") {
        operator = "+";
    } 
    else if(number2 == "0" && operator == "/") {
        text.textContent = "you do know you can't divide by zero, right?"
        number1 = "";
        operator = "";
        number2 = "";
    }
    else {
        number1 = (Math.round(operate(Number(number1),operator,Number(number2)))).toString();
        text.textContent = number1;
        operator = "+";
        number2 = "";
    }
}
// -
calc_buttons[1].onclick = () => {
    if(operator == "") {
        operator = "-";
    } 
    else if(number2 == "0" && operator == "/") {
        text.textContent = "you do know you can't divide by zero, right?"
        number1 = "";
        operator = "";
        number2 = "";
    }
    else {
        number1 = (Math.round(operate(Number(number1),operator,Number(number2)))).toString();
        text.textContent = number1;
        operator = "-";
        number2 = "";
    }
}
// *
calc_buttons[2].onclick = () => {
    if(operator == "") {
        operator = "*";
    }
    else if(number2 == "0" && operator == "/") {
        text.textContent = "you do know you can't divide by zero, right?"
        number1 = "";
        operator = "";
        number2 = "";
    }
    else {
        number1 = (Math.round(operate(Number(number1),operator,Number(number2)))).toString();
        text.textContent = number1;
        operator = "*";
        number2 = "";
    }
}
// /
calc_buttons[3].onclick = () => {
    if(operator == "") {
        operator = "/";
    } 
    else if(number2 == "0" && operator == "/") {
        text.textContent = "you do know you can't divide by zero, right?"
        number1 = "";
        operator = "";
        number2 = "";
    }
    else {
        number1 = (Math.round(operate(Number(number1),operator,Number(number2)))).toString();
        console.log(number1);
        text.textContent = number1;
        operator = "/";
        number2 = "";
    }
}
// =
calc_buttons[4].onclick = () => {
    if(number2 == "0" && operator == "/") {
        text.textContent = "you do know you can't divide by zero, right?"
        number1 = "";
        operator = "";
        number2 = "";
    }
    else if(number1 != "" && number2 != "" && operator != "") {
        number1 = (Math.round(operate(Number(number1),operator,Number(number2)))).toString();
        text.textContent = number1;
        operator = "";
        number2 = "";
    }
}
// CLEAR
calc_buttons[5].onclick = () => {
    number1 = "";
    operator = "";
    number2 = "";
    text.textContent = "0";
}

//Calculator Functions (Add/Sub/Mult/Div)
function add(num1,num2) {
    return num1+num2;
}

function subtract(num1,num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}

//Combines two numbers and an operator 
function operate(num1,op,num2) {
    finalVal = 0;
    switch(op) {
        case "+":
            finalVal = add(num1,num2);
            break;
        case "-":
            finalVal = subtract(num1,num2);
            break;
        case "*":
            finalVal = multiply(num1,num2);
            break;
        case "/":
            finalVal = divide(num1,num2);
            break;
        default:
            return "ERROR";
    }
    operator = "";
    return finalVal;
}

