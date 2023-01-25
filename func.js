import { question, questionNewPassword } from 'readline-sync'

// 6 Funktioner


// -------------------------------------------------


// -------------------------------------------------

// Uppgift 13

// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(randomInt(1, 10));


// -------------------------------------------------

// Uppgift 12

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str.charAt(i);
//     }
//     return reversed;
// }
// console.log(reverseString("Hello World!"));


// -------------------------------------------------

// Uppgift 11

// variant 2 

// function sumOfFirst100Numbers() {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//     sum += i;
//     }
//     return sum;
// }
// console.log(sumOfFirst100Numbers());




// variant 1 

// function sumOfNumbers(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfNumbers(100));




// -------------------------------------------------

// Uppgift 10

// let input = question('Enter a temperature in celsius: \n')

// function faren(celsius){
//     let convert = ((input -32 )* 5) / 9; 
//     console.log(`${input} -32 * 5 / 9 = ${convert}`)
//     return;
// }

// faren( )



// -------------------------------------------------

// Uppgift 9c

// let yearOne = question('Enter a date YYYY-MM-DD: \n')
// let yearTwo = question('Enter a second date YYYY-MM-DD: \n')

// function month(x) {
//     if ( yearOne == 10) {
//         console.log(x.substring(5,7))
//     }else{
//         console.log('Incorrect input')
//     }
//     return;
// }
// function date(y){
//     if ( yearTwo == 10) {
//         console.log(y.substring(5,7))
//     }else{
//         console.log('Incorrect input')
//     }
//     return;
// }

// function daysBetween() {
//     let month1 = parseInt(month(yearOne));
//     let day1 = parseInt(day(yearOne));
//     let month2 = parseInt(month(yearTwo));
//     let day2 = parseInt(day(yearTwo));

//     return (month2 - month1) * 30 + (day2 - day1);
// }

// daysBetween(yearOne,yearTwo)

// month(yearOne)
// date(yearTwo)
// daysBetween()
// -------------------------------------------------
// Uppgift 9b 

// let year = question('YYYY-MM-DD: ')
// function date(x){
    // if (year.length == 10){
    // console.log(x.substring(0,4))
    // return;
    // }else {
        // console.log('wrong number sequence, enter 10 symbols')
    // }
    // 
// }
// date(year)
// 
// -------------------------------------------------

// Uppgift 9a

// variant 2
// function substring(startIndex, endIndex) {
//     console.log(startIndex.substring(0,3))
//     console.log(endIndex.substring(0,8))
//     return;
// }
// substring('din','mamma')


// Variant 1
// const str = 'dinMamma';

// console.log(str.substring(0,3));
// console.log(str.substring(3,8));



// -------------------------------------------------
// Uppgift 8

// let mont = question('Enter a month: ')

// function daysInMonth(month) {
//     const days = {
//     jan: 31,
//     feb: 28,
//     mar: 31,
//     apr: 30,
//     may: 31,
//     jun: 30,
//     jul: 31,
//     aug: 31,
//     sep: 30,
//     oct: 31,
//     nov: 30,
//     dec: 31,
//     };
//     if (days[month]) {
//     console.log(days[month]);
//     return days[month];
//     } else {
//     console.log("Invalid month");
//     return "Invalid month";
//     }
// }
// daysInMonth(mont) // dagar


// -------------------------------------------------

// Uppgift 7b

// function tag(container , content) {
//     console.log(`<${container}>${content}</${container}>`)
//     return;
// }
// tag('container', 'content')



// -------------------------------------------------
// Uppgift 7a

// function paragraph(parameter) {
//     console.log(`<p>${parameter}<p>`)
//     return;
// }

// paragraph("hej")


// -------------------------------------------------

// Uppgift 6

// function roundToTwoDecimals(num) {
//     return Math.round(num * 100) / 100;
// }
// console.log(roundToTwoDecimals(1.23456)); // Output: 1.23

// -------------------------------------------------

// Uppgift 5

// function areSameDataType(param1, param2) {
//     return typeof param1 === typeof param2;
// }
// console.log(areSameDataType("hello", "world")); // Output: true
// console.log(areSameDataType("hello", 123)); // Output: false
// console.log(areSameDataType(true, false)); // Output: true
// console.log(areSameDataType([1, 2, 3], [4, 5, 6])); // Output: true

// -------------------------------------------------

// Uppgift 4

// function stringToNumber(s) {
//     if (!isNaN(s)) {
//         return parseFloat(s);
//     } else {
//         return s;
//     }
// }
// let convert = stringToNumber('123')
// console.log(convert)
// console.log(convert)


// -------------------------------------------------

// Uppgift 3c

// let x = Number(question('Enter a number:\n'))
// let y = Number(question('Enter a number:\n'))
// let z = Number(question('Enter a number:\n'))
// let f = Number(question('Enter a number:\n'))
// console.log(add()); //behöver inte ha parametrar när funktionen kallas om den har definierats redan.
// function add() {
//     return x * y * z + f
// }
   // add(0,0,0,0) Alternativt så kan man skita i variablerna och definera talen i funktionen innan den kallas, gillar dock att skriva i terminalen

// -------------------------------------------------

// // Uppgift 3b
// let x = Number(question('Enter a number:\n'))
// let y = Number(question('Enter a number:\n'))
// let z = Number(question('Enter a number:\n'))
// console.log(add()); //behöver inte ha parametrar när funktionen kallas om den har definierats redan.
// function add() {
//     return x * y * z
// }
   // add(0,0,0,0) Alternativt så kan man skita i variablerna och definera talen i funktionen innan den kallas, gillar dock att skriva i terminalen



// -------------------------------------------------


// Uppgift 3a
// let x = Number(question('Enter a number:\n'))
// let y = Number(question('Enter a number:\n'))
// console.log(add(x,y));
// function add() {
//     return x * y
// }


// -------------------------------------------------

// Uppgift 2a
// var name = question('Enter Your name:\n')
// var city = question('Where are you from:\n')
// var favColor = question('Whats your favourite color?:\n')

//         function info() {
//             console.log(`Welcome ${name} from ${city} \n i can see that your favourite colour is ${favColor}... Gay.`)
//         }
        
//         info (name,city,favColor)




// -------------------------------------------------

// 1 Vad skrivs ut av följande koder?

// 1a
//     function foo() {
//         console.log("test");
//     }
//     foo("hej");

// Guess: 'test'
// Answer: 'test'

// 1b
//     var a = foo(3);
//     console.log(a);
//     function foo(i) {
//         return i * i;
//     }

// Guess: 9
// Answer: 9

// 1c
//     console.log( foo(3, 5) );
//     function foo(x, y) {
//         return x * y;
//     }

// Guess: 15
// Answer: 15

// 1d
    // let x = 2;
    // let y = 3
    // let a = foo(foo(x) + foo(y));
    // console.log(a);
    // function foo(i) {
    //     return 5 * i;
    // }

// Guess: 25
// Answer: 125

// 1e
    // let a = 5;
    // function foo(a) {
    //     a++;
    // }
    // a += 2;
    // console.log(a);

// Guess: 16
// Answer: 7

// 1f
    // var foo = function(i) {
    //     return 2*i*i;
    // };
    // var goo = function(x, y)
    // {
    //     return x(y);
    // };
    // var a = goo(foo, 3);
    // console.log(a);


// Guess: 18
// Answer: 18