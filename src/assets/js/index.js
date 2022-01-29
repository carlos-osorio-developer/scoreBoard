import { newScore, scoresData } from './api';
import '../style/stylesheet.scss';

const submitButton = document.getElementById('submit-button');
const refreshButton = document.getElementById('refresh-button');
const closeModalBtn = document.getElementById('close-modal-btn');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const userName = document.getElementById('name').value;
  const userScore = document.getElementById('score').value;
  const modal = document.getElementById('error-modal');
  if (userName === '' || userScore === '') {
    modal.classList.remove('hidden');
  } else {
    newScore(userName, userScore);
  }
});

const loadData = async () => {
  const scores = await scoresData();
  const scoresList = document.getElementById('scores-list');
  scoresList.innerHTML = '';
  scores.result.sort((a, b) => b.score - a.score);

  function createScoreListItem(score) {
    const scoreListItem = document.createElement('tr');
    scoreListItem.innerHTML = `<td>${score.user}</td><td>${score.score}</td>`;
    return scoreListItem;
  }

  scores.result.forEach((score) => scoresList.appendChild(createScoreListItem(score)));
};

refreshButton.addEventListener('click', loadData);

closeModalBtn.addEventListener('click', () => {
  const modal = document.getElementById('error-modal');
  modal.classList.add('hidden');
});

window.onload(loadData());