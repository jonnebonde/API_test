const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=69c560cd78c84554953747e1790c6b33";
const resultsContainer = document.querySelector(".container");
const urlTest = "https://api.coingecko.com/api/v3/search/trending";

const corsFix = "https://noroffcors.herokuapp.com/"

const corsTestUrl = corsFix + urlTest



    async function getApi() {
        try {
            
        const response = await fetch(urlTest);
        const results = await response.json();
        const facts = results.coins;
        
       
        console.log(response);
        console.log(results)

        
       
        //console.log(facts);
        
        const trending = facts
       
        console.log(trending)
        
        for(let i = 0; i < trending.length; i++) {
            
            const coinName = trending[i].item;
            console.log(coinName)
            
            //console.log(facts[i].rating)
            //console.log(facts[i].tags)
    
           /*  if(i === 8) {
                break;
            }  */

            
             

            

        resultsContainer.innerHTML += `<div class="results">
                                        <div>
                                            <p>Placement on list: ${coinName.score + 1}</p>
                                            <h2>Name: ${coinName.name}</h2>
                                            <p>Coin id: ${coinName.coin_id}</p>
                                            <p>Symbol: ${coinName.symbol}</p>
                                            <p>Market cap rank: ${coinName.market_cap_rank}</p>
                                            <p>Price in Bitcoin: ${coinName.price_btc}</p>
                                            
                                        </div>
                                            <img src="${coinName.large}"/>
                                           
                                            </div>`
    
            }
    
        }
        catch (error) {
            console.log("Something went wrong trying to fetch API");
            resultsContainer.innerHTML = errorMessage("Ops, something went wrong, try to refresh page (press F5).")
        }
    
    }
    
    getApi();



 


  

