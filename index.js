#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Please write a sentence to count words"
    }
]);
const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence has word count ${words.length}`);
