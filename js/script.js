const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=bced90f872dc4852ae3154cfb903ca4c";
const resultsContainer = document.querySelector(".container");
const button = document.querySelector("button");

resultsContainer.innerHTML = "";

button.onclick = function() {

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
                                        <h3>Name: ${facts[i].name}</h3>
                                        <p>Rating: ${facts[i].rating}</p>
                                        <p>Tags: ${(facts[i].tags).length}</div>`
    } 

}

getApi();

}