import { newScore, scoresData } from "./api";

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();    
  let userName = document.getElementById("name").value;
  let userScore = document.getElementById("score").value;    
  if (userName === '' || userScore === "") {
    alert("Please fill out all fields");
  } 
  else {    
    newScore(userName, userScore);    
  }
});