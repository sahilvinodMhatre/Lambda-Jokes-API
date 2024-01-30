import fs from 'fs' 
export const handler = async (event) => {
  
  const jokes = JSON.parse(fs.readFileSync('jokes.json', 'utf8'));
  const randomJoke = getRandomJoke(jokes);
  const response = {
    statusCode: 200,
    body: JSON.stringify({randomJoke}),
  };
  return response;
};

function getRandomJoke(jokes) {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}