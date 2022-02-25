//const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=69c560cd78c84554953747e1790c6b33";
const resultsContainer = document.querySelector(".container");
const urlTest = "https://zoo-animal-api.herokuapp.com/animals/rand/10";

const corsFix = "https://noroffcors.herokuapp.com/"

const corsTestUrl = corsFix + urlTest



    async function getApi() {
        try {
            
        const response = await fetch(urlTest);
        const results = await response.json();
        const facts = results;
        
       
        //console.log(response);
        //console.log(results)

        //console.log(facts)
       
        //console.log(facts);
        
       
        
        for(let i = 0; i < facts.length; i++) {
            //console.log(facts[i].name)
            //console.log(facts[i].rating)
            //console.log(facts[i].tags)
    
           /*  if(i === 8) {
                break;
            }  */



        
         
          resultsContainer.innerHTML += `<div class="results>
                                            <h2>Name: ${facts[i].name}</h2>
                                            <p>Latin name: ${facts[i].latin_name}</p>
                                            <p>Id: ${(facts[i]).id}</p>
                                            <p>life span: ${(facts[i]).lifespan} years</p>
                                            <p>Animal type: ${(facts[i]).animal_type}</p>
                                            <p>Habitat: ${(facts[i]).habitat}</p>
                                            <img src="${facts[i].image_link}"/>
                                            </div>`
    
            }
    
        }
        catch (error) {
            console.log("Something went wrong trying to fetch API");
            resultsContainer.innerHTML = errorMessage("Ops, something went wrong, try to refresh page (press F5).")
        }
    
    }
    
    getApi();



 


  

