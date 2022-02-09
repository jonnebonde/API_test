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

// This loader SVG is not mine. I have copied it from codepen. Link to the creator is located in the Readme file. 
/* const loadingContainer = document.querySelector(".loading");
loadingContainer.innerHTML += `
    <h2>Your games is loading</h2>
    <svg viewBox="-2000 -1000 4000 2000">
    <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
    <use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use></svg>`;
    */

setTimeout(() => {
  async function getGame() {
    const responds = await fetch(URL);

    const result = await responds.json();

    let gameObject = result.results;

    gameObject = gameObject.filter(function(id){
        return id.id !== 388568;
      }) 

    for (var i = 0; i < gameObject.length; i++) {
      if (i === 8) {
        break;
      }
      const gameName = gameObject[i].name;
      const gameRate = gameObject[i].rating;
      const gameTags = gameObject[i].tags.length;
      const gameImage = gameObject[i].background_image; 

      /* loadingContainer.innerHTML = ""; */

      apiResult.innerHTML += `
          <div class="game-card">
          <div class="ratio-box">
          <img src="${gameImage}" class="image" alt="image missing" />
          </div>
          <h3 class="game-title"> ${gameName} </h3>
          <p>Rating: ${gameRate} </p>
          <p>Tags: ${gameTags} </p>
          <a class="cta-btn">Read more</a>
          </div>`;
    }
  }
  getGame();
}, 200);