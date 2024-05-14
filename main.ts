#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
            
        } 
    ]
);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!")

    let operationAns = await inquirer.prompt(
        [

            {
                name: "operation",
                message: "Please select option",
                type: "list",
                choices: ["withdraw","check Balance","fast cash"]
            }
        ]
    );

if(operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]
    );

    if(amountAns.amount > myBalance){
        console.log("insufficient balance")
    }
    // == += -=
     else {
        myBalance -= amountAns.amount;

    console.log(`your remaining balance is ${myBalance}`)
    }
}
  if(operationAns.operation === "check Balance"){
    console.log(`your remaining balance is ${myBalance}`)
  }
 
else if(operationAns.operation === "fast cash"){
    let fast = await inquirer.prompt(
        [
            {
                name: "fastcash",
                message: "select the amount which you withdrawal",
                type: "list",
                choices:["1000", "2000", "5000","10000"]
            }
        ]
    );

    myBalance -= fast.fastcash;
    console.log(`Your remaining balance is ${myBalance}`)    
 
}
}
    else {
    console.log("Incorrect Pin code");
 }