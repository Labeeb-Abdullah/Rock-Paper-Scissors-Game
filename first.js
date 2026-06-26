let btn1 = document.querySelector("#choice1");
let btn2 = document.querySelector("#choice2");
let btn3 = document.querySelector("#choice3");
let result = document.querySelector("#conclusion");
let userscore = document.querySelector("#user");
let computerscore = document.querySelector("#comp");
let user = 0;
let computer = 0;
let compchoice;

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn1.addEventListener("click", () => {
  let compcode = getRandomInteger(1, 3);
  console.log(compcode);
  if (compcode == 1) {
    compchoice = "rock";
  } else if (compcode == 2) {
    compchoice = "paper";
  } else {
    compchoice = "scissors";
  }
  let userchoice = "rock";

  if (userchoice == compchoice) {
    result.innerText = "Its a Tie!";
  } else if (compchoice == "paper") {
    result.innerText = "Computer won!";
    computer++;
    computerscore.innerText = `Computer : ${computer}`;
  } else {
    result.innerText = "You won!";
    user++;
    userscore.innerText = `User : ${user}`;
  }
});

btn2.addEventListener("click", () => {
  let compcode = getRandomInteger(1, 3); 
  console.log(compcode);

  if (compcode == 1) {
    compchoice = "rock";
  } else if (compcode == 2) {
    compchoice = "paper";
  } else {
    compchoice = "scissors";
  }
  let userchoice = "paper";

  if (userchoice == compchoice) {
    result.innerText = "Its a Tie!";
  } else if (compchoice == "scissors") {
    result.innerText = "Computer won!";
    computer++;
    computerscore.innerText = `Computer : ${computer}`;
  } else {
    result.innerText = "You won!";
    user++;
    userscore.innerText = `User : ${user}`;
  }
});

btn3.addEventListener("click", () => {
  let compcode = getRandomInteger(1, 3); 
  console.log(compcode);

  if (compcode == 1) {
    compchoice = "rock";
  } else if (compcode == 2) {
    compchoice = "paper";
  } else {
    compchoice = "scissors";
  }
  let userchoice = "scissors";

  if (userchoice == compchoice) {
    result.innerText = "Its a Tie!";
  } else if (compchoice == "rock") {
    result.innerText = "Computer won!";
    computer++;
    computerscore.innerText = `Computer : ${computer}`;
  } else {
    result.innerText = "You won!";
    user++;
    userscore.innerText = `User : ${user}`;
  }
});