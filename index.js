//${pokemonName}

const input = document.getElementById("pokemon-input");
function getPokemons(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then( res => res.json())
  .then( data => {
    console.log(data)
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

  for( pokemon in data.results) {
    console.log(data.results[pokemon])
    const section = document.getElementById("summary")
    const divPokemonBlock = document.createElement("div")
    divPokemonBlock.className = "pokemon-block"
    section.append(divPokemonBlock)
  }

  // data.results.map( (pokemon, index) => {
  //   createBlock(pokemon)
  // })
}

function createBlock(pokemon) {
    console.log(pokemon)
    const section = document.getElementById("summary")
    


    const divPokemonBlock = document.createElement("div")
    divPokemonBlock.className = "pokemon-block"

    // const divPokemon = document.createElement("div")
    // divPokemon.className += "pokemon"

    // const pokemonImage = document.createElement("div")
    // pokemonImage += "pokemon-image"

    // const image = document.createElement("img")
    // image.src += 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'

    // const pokemonName = document.createElement("div")
    // pokemonName.className += "pokemon-name"

    // const name = document.createElement("span")
    // name.textContent = pokemon.name

    // pokemonName.append(name)
    // pokemonImage.append(image)
    // divPokemon.append(pokemonImage)
    // divPokemon.append(pokemonName)
    // divPokemonBlock.append(divPokemon)
    section.append(divPokemonBlock)
}