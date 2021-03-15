/*Steps
1. generate a random number(between 1 & 6)

2. based upon the random number generator
show the corresponding dice img
- do this by adding the
.show-die class to .dice__item class
*/

let diceRollBtn = document.querySelector(".dice-roll-btn");
let dices = document.querySelector(".dices");

function generateRandomNumber() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    return randomNum;
}

// if( generateRandomNumber() === 1) {
//     console.log("one")
// } else if( generateRandomNumber() === 2) {
//     console.log("two")
// } else if( generateRandomNumber() === 3) {
//     console.log("three")
// } else if( generateRandomNumber() === 4) {
//     console.log("four")
// } else if( generateRandomNumber() === 5) {
//     console.log("five")
// } else if( generateRandomNumber() === 6) {
//     console.log("six")
// } else {
//     console.log(generateRandomNumber())
// }