// Die # 1
var die1 = document.querySelector("#die1");
// Die # 2
var die2 = document.querySelector("#die2");
// Random number generator for the 1st variable
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// String that includes the image location + random number
var diceImage1 = ("images/dice" + randomNumber1 + ".png");
// Random number generator for the 2nd variable
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// String that includes the image location + random number
var diceImage2 = ("images/dice" + randomNumber2 + ".png")
// Changing the code for die # 1
document.querySelector("#die1").setAttribute("src", diceImage1);
// Changing the code for die # 2
document.querySelector("#die2").setAttribute("src", diceImage2);

// The winner message
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = ("Player 1 Wins!");
}

else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = ("Player 2 Wins!");
}

else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = ("Draw!");
}
