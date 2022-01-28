import 'regenerator-runtime/runtime'

// Connect with API
const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
let gameID = 'ClJ6JmiCgMSkp3eAuBNX';

// Create the new game connecting with the API
// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {method:'POST', headers: {'Content-Type': 'application/json',},body: JSON.stringify({name: 'SkullCrusher'})})
// .then(results => results.json())
// .then(console.log)
// .catch(err => {
//   console.log(err)
// });

// Connect with API and retrieve data
const scoresData = async () => {
  const response = await fetch(`${API_URL}/games/${gameID}/scores`);
  const data = await response.json();
  return data;
}

const newScore = async (user, score) => {
  const response = await fetch(`${API_URL}/games/${gameID}/scores`, {
    method:'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: `${user}`, score: `${score}`})
  });
  const data = await response.json();
  return data;
};

export {scoresData, newScore};