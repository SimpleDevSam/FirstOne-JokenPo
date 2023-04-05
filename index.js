//Importing "promptsync library"

import prompt from 'prompt-sync';

//Instantianting input variable

const input = prompt();

//Assigning name variable with the input from the user

let name = input("Hi! First of all, let me know your name:");

//Verifying if the name is valid name(does not contain numbers)

function isValidName(name) {
    return /^[A-Za-z]+$/.test(name);
  }

let varCheckIsValidName = isValidName(name);

//Asking for a valid name without numbers

while (varCheckIsValidName===false){
    console.log("Seems that you've not entered your name.. plase enter a valid(without numbers) name:")
    name = input("Let me know your (valid) name:");
    varCheckIsValidName = isValidName(name);
}

//Assigning variables that will control if the player wanna play again

let playAgain = true;
let playAgainInput = "N";

//Creating function to stablish max and min to the random number

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Starting the actual game:

while (playAgain == true) {

//Assigning TryNumber variable to see how many tries the user will want

let tryNumber = input("Ok, "+ name + " tell me how many tries do you want (1 to 5):");

//Checking if the number is inside the stablished range

while (tryNumber <1 || tryNumber>5) {
        tryNumber = input("You must choose between 1 to 5, please enter again:");
    }

//Explaining the user how the game is going to work based on its choice

console.log("Well done, " + name + ", you're gonna have " + tryNumber + " tries against ME!\n");

console.log("Let's go?\n");

//Assigning variable that will store the user option, the option
//(randomly calculated) of the machine and the counter of victorys

let userTry = 1;
let computerTry = 0;
let victoryCounter = 0;

//Starting the loop from 0 to how many tries the user have choosen

for (let i = 0; i<tryNumber;i++) {
    
    console.log("Plase choose 1 of 3 options below :\n [1]Rock \n [2]Scissor \n [3]Paper \n")
    userTry = input("Enter here:");

//Checking if the user selected between 1 2 or 3

    while(userTry!=="1" && userTry !=="2" && userTry !=="3") {
        console.log("Sorry! You must choose between the 3 options mentioned above!\n");
        console.log("Please choose 1 of 3 options below :\n [1]Rock \n [2]Scissor \n [3]Paper \n")
        userTry = input("Enter here:");
    }

// Generating the "machine" pick for the game
    computerTry = getRndInteger(1, 3);

//Logic to se which one have won the game, based on the JokenPo rules

    if (userTry == computerTry) {
        console.log("You and me have selected the same weapons! It's a draw! No one scores.")
        victoryCounter = victoryCounter;
    } else if (userTry == 1 && computerTry == 2) {
        console.log("You won! You scored!")
        victoryCounter = victoryCounter +1;
    } else if (userTry == 1 && computerTry == 3) {
        console.log("You lost! You didnt score!")
        victoryCounter = victoryCounter;
    } else if (userTry == 2 && computerTry == 1) {
        console.log("You lost! You didnt score!")
        victoryCounter = victoryCounter;
    } else if (userTry == 2 && computerTry == 3) {
        console.log("You won! You scored!");
        victoryCounter = victoryCounter +1;
    } else if (userTry == 3 && computerTry == 1) {
        console.log("You won! You scored!");
        victoryCounter = victoryCounter +1;
    } else if (userTry == 3 && computerTry == 2) {
        console.log("You lost! You didnt score!");
        victoryCounter = victoryCounter;
    } 
}

//Displaying to the user the final result

console.log("Final result:\n You won: " + victoryCounter + " games!");

//Asking the user if wanna play again

playAgainInput = input("So.. do you wanna play with me again? (Type Y for yes or N for no) :").toUpperCase();

//Validating if the input was Y/y or N/n and asking to input again

while (playAgainInput != "Y" && playAgainInput != "N") {
    console.log("Sorry, you have to press:/\n []Y \n or\n []N")
    playAgainInput = input("Enter here:").toUpperCase();
}

if (playAgainInput ==  "Y") {
    playAgain = true;
} else {
    playAgain = false;
}

}

