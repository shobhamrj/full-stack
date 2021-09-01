var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var fullPath1 = "images/" + "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", fullPath1);


var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var fullPath2 = "images/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", fullPath2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLayer 1 wins !";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "PLayer 2 wins !";
} else {
    document.querySelector("h1").innerHTML = "Draw !";
}