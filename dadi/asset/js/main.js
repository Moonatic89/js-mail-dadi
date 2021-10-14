//Generate a random number from 1 to 6, both for player and computer. Determine the winner based on which score is higher.

/*
Tools:

- Generate a random number -> Math.random();
- Determine the winner -> If()

*/


//get 2 random numbers
const playerDice = Math.floor(Math.random() * 6) + 1;
const computerDice = Math.floor(Math.random() * 6) + 1;

//if

if (playerDice > computerDice) {
    //player wins
    console.log("player wins");
} else if (playerDice < computerDice) {
    //computer wins
    console.log("computer wins");

} else {
    //draw
    console.log("draw");

}

