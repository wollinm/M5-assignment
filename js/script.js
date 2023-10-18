/*
   Author: Magdalena Wollin
   multiple functions
   rock, paper, scissors
   calculate
   NOTE: all will run sequentially
*/

function displayMFTitle() {
    "use strict";
    alert('Multiple Functions');
}
function displayRPS() {
    "use strict";
    alert('Rock, Paper, Scissors');
}
function displayCalculator() {
    "use strict";
    alert('Calculator');
}
function halfNumber(x) {
    let y = x / 2;
    console.log(`Half of ${x} is ${y}.`);
    return y;
}
function squareNumber(x) {
    let y = x * x;
    console.log(`Square number ${x} is ${y}.`);
    return y;
}
function percentOf(x,y){
    p = (x/y)*100;
    return p;
}
function findModulus(x,y){
    m = x%y;
    return m; 
}

function RPS() {
    "use strict";
    let number, userSelection, computerSelection, validSelection, winnerIs;
    number = Math.floor(Math.random() * 3 + 1);
    validSelection = true
    do {
       userSelection = prompt('Select Rock, Paper, Scissors');
       validSelection = !(userSelection == "Rock" || userSelection == "Paper"||userSelection == "Scissors")
       //console.log(`valid selection ${validSelection}.`)
    } while (validSelection)

    console.log(`user selection was ${userSelection}.`)
    number = Math.floor(Math.random() * 3 + 1);
    console.log(`random number is ${number}.`)
    if(number == 1) {
        computerSelection = "Rock"
    } else if (number == 2) {
        computerSelection = "Paper"
    } else {
        computerSelection = "Scissors"
    }
    console.log(`computer selection was ${computerSelection}.`)
 
    if (userSelection == "Rock" && computerSelection == "Paper") { winnerIs = "computer"}
    if (userSelection == "Rock" && computerSelection == "Scissors") { winnerIs = "user"}
    if (userSelection == "Paper" && computerSelection == "Scissors") { winnerIs = "computer"}
    if (userSelection == "Paper" && computerSelection == "Rock") { winnerIs = "user"}
    if (userSelection == "Scissors" && computerSelection == "Rock") { winnerIs = "computer"}
    if (userSelection == "Scissors" && computerSelection == "Paper") { winnerIs = "user"}
    if (userSelection == computerSelection) {
        console.log(`it was a tie`)
        alert(`We got a tie.`)
    } else {
        console.log(`${winnerIs} won.`)
        alert(`The winner is the ${winnerIs}.`)
    }
  
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

    displayMFTitle();
    x = prompt('Enter a number to divide by 2');
    y = halfNumber(x);
    console.log(`result value of dividing by ${x} is ${y}.`)

    x = prompt('Enter a number to get square value');
    y = squareNumber(x);
    console.log(`return value of square function of ${x} is ${y}.`)

    x = prompt('Enter first number to calculate percentage');
    y = prompt('Enter second number');
    p = percentOf(x,y);
    console.log(`${x} is %${p} of ${y}.`)

    x = prompt('Enter first number to find the modulus');
    y = prompt('Enter second number');
    m = findModulus(x,y);
    console.log(`${m} is the modulus of ${x} and ${y}.`)

    //Rock, Paper, Scissors Game
    displayRPS();
    let playAgain = "y";
    while (playAgain === "y") {
        RPS();
        playAgain = prompt('Do you want to play Rock, Paper, Scissors ? (y or n)');
    }

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
