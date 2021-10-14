//Generate a random number from 1 to 6, both for player and computer. Determine the winner based on which score is higher.

/*
Tools:

- Generate a random number -> Math.random();
- Determine the winner -> If()

*/

//get 2 random numbers
const playerDice = Math.floor(Math.random() * 6) + 1;
const computerDice = Math.floor(Math.random() * 6) + 1;
const outputElement = document.getElementById("output");

//if

if (playerDice > computerDice) {
    //player wins
    outputElement.innerHTML = "You win! Congrats!~"
} else if (playerDice < computerDice) {
    //computer wins
    outputElement.innerHTML = "You lose!"

} else {
    //draw
    outputElement.innerHTML = "Oh! It's a draw!!"
}

