import { newScore, scoresData } from "./api";

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();    
  const userName = document.getElementById("name").value;
  const userScore = document.getElementById("score").value;    
  const modal = document.getElementById("error-modal");
  if (userName === '' || userScore === "") {
    modal.classList.remove("hidden");
  } 
  else {    
    newScore(userName, userScore);    
  }
});