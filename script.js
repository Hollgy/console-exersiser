import { question } from 'readline-sync'



// -------------------------------------------------
// UPPGIFT 5:5
const number = Number(question("Enter a number: "));

//check if the number is even
while(number > 2 ){
    if (number % 2 == 0){
        console.log("The number is even.");
        break;
    }
    // if the number is odd
    else if {
        console.log(`${number} is too low;`);
        break;
    }
    else (number % 3 == 0 ) {
        console.log("The number is odd.");
        break;
    }
}

// -------------------------------------------------

// UPPGIFT 5:4
// let count = 20;
// while (count >= 2){

//     if ( count % 2 == 0){
//         console.log (count)
//     }else{
//         console.log('')
//     }
//     count = count - 1;
// }


// -------------------------------------------------

// UPPGIFT 5:3
// let count = 0

// while ( count < 5 ) {
    //     let ord1 = question('enter a number: ')
    //     let ord2 = question('enter a phrase: ')
    
//     if ( ord1 == '' || ord1 == '.') {   
    //         break;
    //     }
//     else if ( ord2 == '' || ord2 == '.') {   
//         break;
//     }
//     else {
    //         console.log( ord1 + ' ' + ord2 );
    //     }
    // }
    
// -------------------------------------------------

    // // let result = ord1.concat(" ", ord2); (concat adderar string bakom varann) inte del av lösningen dock)

    
// -------------------------------------------------

// FIZZ 
//for-loop från 1 till 20, öker med 1 varje gång
// for ( let i=1; i<20; i = i + 1) {
//     const dividesBy3 = i % 3 == 0
//     const dividesBy5 = i % 5 == 0

//     if( dividesBy3 && (i % 5 != 0)){
//     console.log('Fizz')
//     }else if (dividesBy5 && ( i % 3 != 0)){
//         console.log('Buzz')
//     }else if (dividesBy3 && dividesBy5){
//         console.log('FizzBuzz')
//     }else{
//         console.log(i)
//     }
// }
// 
// for (let number = 1; number <=100; number++) {

//     if(number % 15 == 0 )
//     console.log('Fizzbuzz');

//     else if(number % 3 == 0)
//     console.log('Fizz')

//     else if(number % 5 ==0)
//     console.log('Buzz')

//     else
//     console.log(number)
// }

// -------------------------------------------------

// UPPGIFT 5C
//  let secret = Math.floor(Math.random() * 100) + 1
// for ( let x = 0;x < 10 ;x ++) {
//     let input = Number(question( 'Guess the number' ))
//     if( input == secret){
//     console.log( 'That is the correct number ' + `number of tries ${x}` )
//       break;
// }
//     else if (input > secret ) {
//     console.log( 'your guess was too high, try again' )
// }
//     else if (input < secret ) {
//     console.log( 'your guess was too small, try again' )
// }
//     else {
//         console.log ( 'guess again' )
// }
// }

// -------------------------------------------------

// UPPGIFT 5B
// let secret = Math.floor(Math.random() * 100) + 1
// for ( let x = 0;x < 10 ;x ++) {
//     let input = Number(question( 'Guess the number' ))
//     if( input == secret){
//     console.log( 'That is the correct number' + secret )
// }
//     else if (input > secret ) {
//     console.log( 'your guess was too high, try again' )
// }
//     else if (input < secret ) {
//     console.log( 'your guess was too small, try again' )
// }
//     else {
//         console.log ( 'guess again' )
// }
// }

// -------------------------------------------------

// UPPGIFT 5A
// let secret = Math.floor(Math.random() * 100) + 1
// let input = question( 'Guess the number' )
// if( input == secret ){
//     console.log( 'That is the correct number' + secret )
// }
// else if (input > secret ) {
//     console.log( 'your guess was too high, try again' )
// }
// else if (input < secret ) {
//     console.log( 'your guess was too small, try again' )
// }
//     else {
//         console.log ( 'guess again' )
//     }

// -------------------------------------------------

// UPPGIFT 4
// let numb = question('enter a number')
//     if( numb == 100 ) {
//     console.log('number is correct')
//     }
//     else if( numb > 100 ) {
//         console.log('number is too great')
//     }
//     else {
//     console.log('number is too pathetic')
//     }

// ---------------------------------------------------

// UPPGIFT 3
// let password = question('Enter password ');

// let save = question('Enter same password again ') 
// if(save == password){
//     console.log('True');
// }
// else{
//     console.log('False')
// }


// tidigare uppgifter försvann pga fel med git


// let answer = question('What is your favorite color?')
// console.log(answer)

// let x = Number(question('What is your favorite number?'))
// console.log(x)
