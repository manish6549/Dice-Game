// for first dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;    //will get random number 1-6

var randomImage1 = "img/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);  // selecting first image and seting attribute with generated image values

// for second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //will get random number 1-6

var randomImage2 = "img/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);  // selecting first image and seting attribute with generated image values

// to set victory

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="Player1 has won!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="Player2 has won!";
} else {
  document.querySelector("h1").innerHTML="Draw!";
}
