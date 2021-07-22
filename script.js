// JOKES API
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

//ADVICE API
const getAdvice = async () => {
  const adviceDisplay = document.getElementById("advice");

  fetch("https://api.adviceslip.com/advice", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      adviceDisplay.textContent = data.slip.advice;
    });
};

const loadAdvice = () => {
  document.getElementById("advice-button").addEventListener("click", getAdvice);
};

// FOX API
const getFox = async () => {
  const foxDisplay = document.getElementById("fox");

  fetch("https://randomfox.ca/floof/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      foxDisplay.innerHTML = `<img src="${data.image}" />`;
    });
};

const loadFox = () => {
  document.getElementById("fox-button").addEventListener("click", getFox);
};

const init = () => {
  window.addEventListener("load", () => {
    getJoke();
    getAdvice();
    getFox();
  });

  loadJoke();
  loadAdvice();
  loadFox();
};

init();
