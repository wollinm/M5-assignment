/*
   Author: Magdalena Wollin
   
   NOTE: all will run sequentially
*/

function displayCalculator() {
    "use strict";
    alert('Calculator');
}

function calculate(x,y,operation) {
    console.log(`x is ${x}`)
    console.log(`y is ${y}`)
    console.log(`operation is ${operation}`)
    result = 0;

       switch (true){
        case (operation === "add"):
            result = x + y;
            break;
        case (operation === "subtract"):
            result = x - y;
            break;
        case (operation === "multiply"):
            result = x * y;
            break;
        case (operation === "divide"):
            result = x / y;
            break;    
     }
    console.log(`result is ${result}`)
    //alert(`The result of the operation is ${result}`);
    return result;
}

function main() {
    "use strict";
    let x,y,p,m;

    //Basic Calculator
    displayCalculator()
    let operation,result,validSelection,invalidSelection,notValidNumber;
    let calculateAgain = "y";
    while (calculateAgain === "y") {
        //get first number and keep asking until it's a valid number
        notValidNumber = true;
        do {
            x = parseInt(prompt('Enter first number'));
            notValidNumber = isNaN(x);
            //console.log(`notValidNumber ${notValidNumber}.`)
        } while (notValidNumber)

        //get second number and keep asking until it's a valid number
        notValidNumber = true;
        do {
            y = parseInt(prompt('Enter second number'));
            notValidNumber = isNaN(y);
            //console.log(`notValidNumber ${notValidNumber}.`)
        } while (notValidNumber)

        //get operation and keep asking until is a valid selection
        invalidSelection = ""
        validSelection = true;
        do {
            operation = prompt(invalidSelection + "Enter operation to perform (add, subtract, multiply, or divide");
            validSelection = !(operation == "add" || operation == "subtract"||operation == "multiply" ||operation == "divide")
            //console.log(`valid selection ${validSelection}.`)
            invalidSelection = "Invalid value entered. "
        } while (validSelection)
        // call function to calculate operation
        result = parseFloat(calculate(x,y,operation));
        // display the result
        alert(`the result of the calculation is : ${result}`);
        //ask user if they want to perform another calculation
        calculateAgain = prompt('Do you want to perform another calculation ? (y or n)');
    }   
}

main();
