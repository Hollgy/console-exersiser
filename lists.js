import { question } from 'readline-sync'

// -------------------------------------------------

// uppgift 8

// let nautic = ['körde', 'jag', 'båt', 'min', 'natt', 'kulen', 'en']
// nautic.reverse()
// let amphibic = ['se', 'att', 'lustiga', 'är', 'grodorna', 'små']
// amphibic.reverse()

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str.charAt(i);
//     }
//     return reversed;
// }

// console.log(nautic); 8b
// console.log(nautic[5],nautic[1],nautic[3],nautic[2],nautic[4],nautic[0],nautic[6],)
// console.log(amphibic[5],amphibic[1],amphibic[3],amphibic[2],amphibic[4],amphibic[0]) 8c






// -------------------------------------------------

// uppgift 7


// let list = []
// let sum = 0

// function add() {

//     for (let i = 1; i <= 100; i++) {
//         list.push(i)
//         sum += i;
//     }
// console.log(sum)
// }
//     add()

// -------------------------------------------------

// uppgift 6c

// let max = 30
// let min = 20
// const antal = 10
// let list = []
// for (let i = 0; i < antal; i++){
//     let rand = Math.floor(Math.random() * (max - min + 1) + min);
//     list.push(rand)
// }
// console.log(list)

// function higher () {
//     console.log('Max' + Math.max(...list));
// }
// function lower(){ 
//     console.log('Min' + Math.min(...list) )
// }

// function mid(){
//     let med = [list[0] + list[1] + list[2] + list[3] + list[4] + list[5] +list[6] + list[7] + list[8] + list[9]]
//     let svar = med / antal
//     console.log(svar)
//     return;
// }

//     higher()
//     lower()
//     mid()
// -------------------------------------------------

// uppgift 6b

// Create the list of random integers
// let randomNumbers = [];
// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.floor(Math.random() * (30 - 20 + 1) + 20);
//     randomNumbers.push(randomNumber);
// }
// console.log(...randomNumbers);

// // Define the function to find the smallest value in a list
// function findSmallestValue(list) {
//     let smallest = list[0];
//     for (let i = 1; i < list.length; i++) {
//         if (list[i] < smallest) {
//             smallest = list[i];
//         }
//     }
//     return smallest;
// }

// // Test the function 3 times
// // console.log(findSmallestValue(randomNumbers));
// console.log(findSmallestValue(randomNumbers));
// console.log(findSmallestValue(randomNumbers));


// -------------------------------------------------

// uppgift 6a

// Create the list of random integers
// let randomNumbers = [];
// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.floor(Math.random() * (30 - 20 + 1) + 20);
//     randomNumbers.push(randomNumber);
// }
// console.log(...randomNumbers);

// // Define the function to find the largest value in a list
// function findLargestValue(list) {
//     let largest = list[0];
//     for (let i = 1; i < list.length; i++) {
//         if (list[i] > largest) {
//             largest = list[i];
//         }
//     }
//     return largest;
// }

// // Test the function 3 times
// // console.log(findLargestValue(randomNumbers));
// console.log(findLargestValue(randomNumbers));
// console.log(findLargestValue(randomNumbers));

// -------------------------------------------------

// uppgift 5

// finns ingen console log så inget kommer printas
// undefined

// -------------------------------------------------

// uppgift 4

// finns ingen console log så inget kommer printas
// undefined

// -------------------------------------------------

// uppgift 3

// finns ingen console log så inget kommer printas
// undefined

// -------------------------------------------------

// uppgift 2

// hypotes: list arrayn krymper
// let list = [2]
// for( let i=1; i<=5; i++ ) {
//     let index = list[list.length - 1]
//     let x = list[index]
//     list.push(x + i)
// }
// console.log(list)
// svar : NaN pushas in


// -------------------------------------------------

// uppgift 1b

// let numbers = [0,1,2,3,4,5,6,7,8,9];

//     function swapValues(list, firstIndex, secondIndex) {
//         const temp = list[firstIndex];
//         list[firstIndex] = list[secondIndex];
//         list[secondIndex] = temp;
//     }
    
//     swapValues(numbers, 3, 5);
//     console.log(numbers);
    
// -------------------------------------------------

// uppgift 1a

// const numbers = [0,1,2,3,4,5,6,7,8,9];
// console.log(numbers[4])


// -------------------------------------------------
