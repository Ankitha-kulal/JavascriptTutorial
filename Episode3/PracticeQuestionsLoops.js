//1) print all even number from 0-100

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log("i= ", i);
//     }
// }

/* 2) Create a game where you start with any random game number.
Ask the user to keep guessing the game number until the user
enters current value.*/

let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while (userNum != gameNum) {
    userNum = prompt("You entered wrong number");
}
prompt("Congratulations, you end up with the right number");
