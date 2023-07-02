console.log("Hello to MyTicTacToe");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isGamerOver = false;

let turn = "X";

//function to changeTurn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, 135],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].textContent === boxtext[e[1]].textContent &&
      boxtext[e[1]].textContent === boxtext[e[2]].textContent &&
      boxtext[e[0]].textContent !== ""
    ) {
      document.querySelector(".info").textContent = boxtext[e[0]].textContent + " Won";
      isGamerOver = true;
      document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector(".line").style.width = "30vw";
      gameover.play()
    }
  });
};

//GAME LOGIC
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.textContent === "") {
      boxtext.textContent = turn;
      turn = changeTurn();
      ting.play();
      checkWin();
      if (!isGamerOver) {
        document.getElementsByClassName("info")[0].textContent = "Turn for " + turn;
      }
    }
  });
});


//reset button
reset.addEventListener("click",()=>{
    document.querySelectorAll(".boxtext").forEach(element => {
        element.textContent = "";
    })
    turn = "X"
    isGamerOver = false
    document.getElementsByClassName("info")[0].textContent = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "0";
    document.querySelector(".line").style.width = "0vw";
})