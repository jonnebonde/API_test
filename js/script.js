/* const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=bced90f872dc4852ae3154cfb903ca4c";
const resultsContainer = document.querySelector(".container");
const button = document.querySelector("button");

resultsContainer.innerHTML = "";

//button.onclick = function() {

    async function getApi() {
    
    const response = await fetch(url);

    const results = await response.json();

    const facts = results.results;

    console.log(facts.length)
   
    console.log(facts);

    for(let i = 0; i < facts.length; i++) {
        console.log(facts[i].name)
        console.log(facts[i].rating)
        console.log(facts[i].tags)

        if(i === 7) {
            break;
        }

      resultsContainer.innerHTML += `<div class="result">
                                        <h2>Name: ${facts[i].name}</h2>
                                        <p>Rating: ${facts[i].rating}</p>
                                        <p>Number of tags: ${(facts[i].tags).length}</div>`
    } 

}

getApi();

//} */

const corsUrl = "https://noroffcors.herokuapp.com/";
const gameUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f6dd075d81db416fbb289fc9d3726038";

const URL = corsUrl + gameUrl;

const apiResult = document.querySelector("#apiResult");

setTimeout(() => {
  async function getGame() {
    const responds = await fetch(URL);

    const result = await responds.json();

    
    const gameObject = result.results;

    const games = await gameObject;

    const gameFilter = games.filter(function (game) {
      if (!gameObject.rating) {
        // Game has no rating
        return false; // Exclude it
      } /* else if (gameObject.id === (gameObject.id)) {
        return false; // Exclude it
      } */ /* else {
        return true; // Include it
      } */
    });


    let removeGame = gameObject.name;
    
    console.log(gameObject)
    for (var i = 0; i < gameObject.length; i++) {
      const gameName = gameObject[i].name;
      const gameRate = gameObject[i].rating;
      const gameTags = gameObject[i].tags.length;
      const gameImage = gameObject[i].background_image;

      if(i === 7) {
          break;
      }
      
      apiResult.innerHTML += `
  <div class="game-card">
  <div class="ratio-box">
  <img src="${gameImage}" class="image" alt="image missing" />
  </div>
  <h3> ${gameName} </h3>
  <p>Rating: ${gameRate} </p>
  <p>Tags: ${gameTags} </p>
  </div>
`;
    }
  }
  getGame();
}, 000);