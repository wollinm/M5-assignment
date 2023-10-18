/*
   Author: Magdalena Wollin
   rock, paper, scissors
*/

function displayRPS() {
    "use strict";
    alert('Rock, Paper, Scissors');
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
  return;
}

function main() {
    "use strict";
    let x,y,p,m;

    //Rock, Paper, Scissors Game
    displayRPS();
    let playAgain = "y";
    while (playAgain === "y") {
        RPS();
        playAgain = prompt('Do you want to play Rock, Paper, Scissors ? (y or n)');
    }
  
}

main();
