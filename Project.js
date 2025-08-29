// 1. Deposit some money
// 2. Determine no.of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine.
// 5. check if the user won.
// 6. give the user their winnings
// 7. play again.

const prompt = require("prompt-sync")();  
// 'prompt-sync' is imported so we can ask the user for input in the command line

const deposit = () => {
    // program will ask this question in the terminal:
    const depositAmount = prompt("Enter a deposit amount: "); 
    
    // to change string to int
    const numberDepositAmount = parseFloat(depositAmount);

    // to check if amount is number or not (NaN => Not a number)
    if(isNaN(numberDepositAmount) || numberDepositAmount<=0)
        console.log("Invalid deposit amount, try again.");
    

    
};

deposit();


