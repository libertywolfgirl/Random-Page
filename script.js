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
  document.getElementById("joke-button").addEventListener("click", e => {
    e.preventDefault();
    getJoke();
  });
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
      if (data.slip.advice !== adviceDisplay.textContent) {
        adviceDisplay.textContent = data.slip.advice;
      } else {
        getAdvice();
      }
    });
};

const loadAdvice = () => {
  document.getElementById("advice-button").addEventListener("click", e => {
    e.preventDefault();
    getAdvice();
  });
};

// FOX API
const getFox = async () => {
  const foxDisplay = document.getElementById("fox-image");

  fetch("https://randomfox.ca/floof/", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      foxDisplay.src = data.image;
    });
};

const loadFox = () => {
  document.getElementById("fox-button").addEventListener("click", e => {
    e.preventDefault();
    getFox();
  });
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
