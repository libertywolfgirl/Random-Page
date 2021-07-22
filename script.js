/*
https://github.com/FurryBotCo/FoxAPI
https://public-apis.io/random-fox-animals-api
https://icanhazdadjoke.com/api
https://api.adviceslip.com/
*/

const getJoke = async () => {
  const jokeDisplay = document.getElementById("joke");

  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      jokeDisplay.textContent = data.joke;
    });
};

const loadJoke = () => {
  document.getElementById("joke-button").addEventListener("click", getJoke);
};

const init = () => {
  window.addEventListener("load", () => {
    getJoke();
  });

  loadJoke();
};

init();
