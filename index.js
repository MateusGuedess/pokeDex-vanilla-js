//${pokemonName}

const input = document.getElementById("pokemon-input");
function getPokemons(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then( res => res.json())
  .then( data => {
    return addPokemon(data)
  })
  .catch((err) => {
    console.log('pokemon não encontrado')
  })
} 



input.addEventListener("keyup", (evt) => {

  const pokemons = getPokemons(input.value)
  evt.preventDefault()
})
document.addEventListener("DOMContentLoaded", function(event) { 
  console.log(event)
});


function addPokemon(data) {
  const ulCount = 0
  data.results.map( (pokemon, index) => {

    4 % index === 0 ? ulCount++ : console.log("ainda não é hora de incrementar")

    const ul = document.getElementById("summary").getElementsByTagName("ul")[ulCount]
    
    const li = document.createElement("li")
    const div = document.createElement("div")
    const pokemonImage = document.createElement("div")
    const image = document.createElement("img")
    const pokemonName = document.createElement("div")
    const name = document.createElement("span")
    name.textContent = pokemon.name

    ul.append(li)

    pokemonName.append(name)
    pokemonImage.append(image)
    div.append(pokemonImage)
    div.append(pokemonName)
    li.append(div)
    console.log(pokemon)
    
  })
}