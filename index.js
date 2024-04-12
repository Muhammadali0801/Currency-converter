#! /usr/bin/env node
//import inquirer;
//object;
//user input;
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 277.98,
    GBP: 0.79,
    EUR: 0.92,
    CAD: 1.36,
    AED: 3.67,
    AUD: 1.51,
    SAR: 3.75,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "EUR", "CAD", "AED", "AUD", "SAR"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "PKR", "GBP", "EUR", "CAD", "AED", "AUD", "SAR"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let Amount = userAnswer.amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let roundedconvertedAmount = parseInt(convertedAmount);
console.log(roundedconvertedAmount);
