import { question } from 'readline-sync'



// -------------------------------------------------

// UPPGIFT 6B
let entryOne = Number(question('Enter the first number'))
let operand = question('Enter operator ( either +, -, * or / ): ')
let entryTwo = Number(question('Enter the second number'))
let sum;

if      (operand == '+' ) { sum = entryOne + entryTwo;}
else if (operand == '-' ) { sum = entryOne - entryTwo;}
else if (operand == '/' ) { sum = entryOne / entryTwo;}
else { sum = entryOne * entryTwo;}

console.log(` ${entryOne} ${operand} ${entryTwo} = ${sum}` )


// -------------------------------------------------

// UPPGIFT 6A
// let entryOne = Number(question('Enter the first number'))
// let entryTwo = Number(question('Enter the second number'))
// let sum = entryOne + entryTwo;
// console.log('the sum total is' + entryOne + '+' + entryTwo + '=' + sum)

// let operator = question('Enter operator ( either +, -, * or / ): ') 
// let numberOne = question('Enter first number: ') 
// let numberTwo = question('Enter second number: ') 
// let result; 

// if (operator == '+') { 
//     result = numberOne + numberTwo; 
// } 
// else if (operator == '-') { 
//     result = numberOne - numberTwo; 
// } 
// else if (operator == '') { 
//     result = numberOne numberTwo; 
// } 
// else { 
//     result = numberOne / numberTwo; 
// } 

// console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);