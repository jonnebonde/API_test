const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f6dd075d81db416fbb289fc9d3726038";
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
                                        <h2>Name: ${facts[i].name}</h2>
                                        <p>Rating: ${facts[i].rating}</p>
                                        <p>Number of tags: ${(facts[i].tags).length}</div>`
    } 

}

getApi();

 } 

