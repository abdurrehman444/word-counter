#! /usr/bin/env node

//  Import the 'inquirer' module, which is the command line interface for Node.js
import inquirer from "inquirer";

// Declare a const 'answers' and assign it to the result of inquirer.prompt function.

const answers : {
    Sentence : string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the word."
        }
    ]
)

const words = answers.Sentence.trim().split(" ")  //TRIM WILL REMOVE ALL SPACES! AND SPLIL WILL REMOVE IT WILL COUNT ALL ALPHABETS NOT WORDS!

// Print the array of words to the console.
console.log(words);

// Print the word count of the sentence to console.

console.log(`Your sentence word count is ${words.length}`)
