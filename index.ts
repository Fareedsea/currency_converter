import inquirer from "inquirer";
const currency = {
    USD: 1,
    EURO: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};


let user_answer = await inquirer.prompt([
    { 
        name: 'fcurrency',
        message: "Enter from Currency :",
        type: 'list',
        choices: ['USD', 'EURO', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'tcurrency',
        message: "Enter to Currency :",
        type: 'list',
        choices: ['USD', 'EURO', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter Your Amount :",
        type: 'number'
    }
]
);
// if (user_answer.fcurrency == currency.USD){
//     user_answer.fcurrency = 1;
// } else if (user_answer.fcurrency == currency.EURO){
//     user_answer.fcurrency = 0.91;
// } else if (user_answer.fcurrency == currency.GBP){
//     user_answer.fcurrency = 0.76;
// } else if (user_answer.fcurrency == currency.PKR){
//     user_answer.fcurrency = 280;
// }
let fromAmount = currency(user_answer.fcurrency);
let toAmount = user_answer.tcurrency;
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);


