// Dice 1
// Creating a random number
// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1 * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage ="dice" + randomNumber1 + ".png"; // dice1.png - dice2.png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


// Dice 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); ;

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "😎Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!😎";
} else{
    document.querySelector("h1").innerHTML = "😁Draw!😁";
}