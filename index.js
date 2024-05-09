import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Please write a sentence to count words"
    }
]);
const words = answer.sentence.trim();
console.log(words);
console.log(`Your sentence has word count ${words.length}`);
