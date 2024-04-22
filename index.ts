#!/usr/bin/env node
import inquirer from "inquirer";
const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt(
[
    { 
        name: 'fcurrency',
        message: "Enter from Currency :",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'tcurrency',
        message: "Enter to Currency :",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter Your Amount :",
        type: 'number'
    }
]
);


let fromAmount = currency[user_answer.fcurrency];
let toAmount = currency[user_answer.tcurrency];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);


