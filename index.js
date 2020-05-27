const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const header = document.querySelector("h1");

const randomNumber = () => {
    return Math.ceil(Math.random()* 6);; 
}

let num1 = randomNumber();
let num2 = randomNumber();

img2.setAttribute("src", "./images/dice" + num2 + ".png");
img1.setAttribute("src", "./images/dice" + num1 + ".png");

if (num1 > num2) {
    header.innerHTML = "🚩 Player 1 Wins!";
} else if (num2 > num1) {
    header.innerHTML = "Player 2 Wins! 🚩";
} else {
    header.innerHTML = "Draw!";
}

