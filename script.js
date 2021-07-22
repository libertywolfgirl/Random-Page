/*
https://github.com/FurryBotCo/FoxAPI
https://public-apis.io/random-fox-animals-api
https://icanhazdadjoke.com/api
https://api.adviceslip.com/
*/

const getJoke = async () => {
  let joke;
  
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      joke = data.joke;
    //console.log(joke);
    });
  return joke;
};

const loadJoke = () => {
  const jokeDisplay = document.getElementById('joke');
  const jokeBtn = document.getElementById("joke-button");
  
  jokeBtn.addEventListener('click', getJoke());
}

loadJoke();