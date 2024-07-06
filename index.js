#! /usr/bin/env node
//import inquirer;
//object;
//user input;
import inquirer from "inquirer";
import chalk from "chalk";
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
// Function to perform currency conversion
async function convertCurrency() {
    console.log(chalk.green("Welcome to the Currency Converter!"));
    let userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "PKR", "GBP", "EUR", "CAD", "AED", "AUD", "SAR"]
        },
        {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ["USD", "PKR", "GBP", "EUR", "CAD", "AED", "AUD", "SAR"]
        },
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
            validate: (input) => {
                if (isNaN(input) || input <= 0) {
                    return chalk.red("Please enter a valid number greater than 0.");
                }
                return true;
            }
        }
    ]);
    let fromAmount = currency[userAnswer.from];
    let toAmount = currency[userAnswer.to];
    let Amount = userAnswer.amount;
    let baseAmount = Amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    let roundedConvertedAmount = parseInt(convertedAmount);
    console.log(chalk.blue(`The converted amount is: ${roundedConvertedAmount}`));
}
// Function to ask if the user wants to continue or exit
async function askToContinue() {
    let continueAnswer = await inquirer.prompt([
        {
            name: "continue",
            message: "Do you want to convert another currency?",
            type: "confirm",
            default: false,
        }
    ]);
    return continueAnswer.continue;
}
// Main function to control the flow
async function main() {
    let continueConversion = true;
    while (continueConversion) {
        await convertCurrency();
        continueConversion = await askToContinue();
    }
    // Closing message
    console.log(chalk.yellow("Thank you for using the Currency Converter!"));
}
main();
