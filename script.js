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
            "Accept": "application/json"
        }
    })
        .then(function (response) {
            joke = response.json();
        })
        .then(function (data) {
            console.log(joke);
        })
}

getJoke();