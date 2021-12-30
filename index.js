var randomNumber1 = Math.floor(Math.random() * 6) + 1;

function rollIt1() {
  randomNumber1 === 1 ? document.querySelector(".img1").setAttribute("src", "images/dice1.png") :
    randomNumber1 === 2 ? document.querySelector(".img1").setAttribute("src", "images/dice2.png") :
    randomNumber1 === 3 ? document.querySelector(".img1").setAttribute("src", "images/dice3.png") :
    randomNumber1 === 4 ? document.querySelector(".img1").setAttribute("src", "images/dice4.png") :
    randomNumber1 === 5 ? document.querySelector(".img1").setAttribute("src", "images/dice5.png") :
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
  return randomNumber1
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function rollIt2() {
  randomNumber2 === 1 ? document.querySelector(".img2").setAttribute("src", "images/dice1.png") :
    randomNumber2 === 2 ? document.querySelector(".img2").setAttribute("src", "images/dice2.png") :
    randomNumber2 === 3 ? document.querySelector(".img2").setAttribute("src", "images/dice3.png") :
    randomNumber2 === 4 ? document.querySelector(".img2").setAttribute("src", "images/dice4.png") :
    randomNumber2 === 5 ? document.querySelector(".img2").setAttribute("src", "images/dice5.png") :
    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
  return randomNumber2
}

rollIt1();
rollIt2();

randomNumber1 > randomNumber2 ? document.querySelector("h1").innerText = " Player 1 wins!" :
  randomNumber1 === randomNumber2 ? document.querySelector("h1").innerText = "It's a draw!" :
  document.querySelector("h1").innerText = "Player 2 wins!";