// Generate 2 random numbers
var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

// Use the 2 radnom numbers to generate random dice images
document.querySelector(".dice1").setAttribute("src",
    "img/dice" + randNum1 + ".png");
document.querySelector(".dice2").setAttribute("src",
    "img/dice" + randNum2 + ".png");

// Title var
var title;

// Change the title var depending on who won
if (randNum1 > randNum2) {
    title = "🚩 Player 1 Wins!";
} else if (randNum1 === randNum2) {
    title = "Draw!";
} else {
    title = "Player 2 Wins! 🚩"
}

// Change the h1 to the title var
document.querySelector("h1").innerHTML = title;