#! /usr/bin/env node

import inquirer from"inquirer";

// 1) computer will generate a random number = Done.

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result


const randomnumber = 13;

const answer = await inquirer.prompt([
{
    name:"userGuessednumber",
    type:"number",
    message:"please guess a nummber:",
}
]);
if(answer.userGuessednumber === randomnumber) {
   console.log("congtratulation! you guessed right number.");
} else {
    console.log("you guessed wrong number");
}
