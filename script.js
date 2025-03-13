//Operation Variables
let number1 = 0;
let operator = "";
let number2 = 0;

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
    return finalVal;
}