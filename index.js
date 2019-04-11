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


async function addPokemon(data) {

  for( pokemon in data.results) {
    //console.log(data.results[pokemon].url)
    const section = document.getElementById("summary")
    
    const divPokemonBlock = document.createElement("div")
    divPokemonBlock.className += "pokemon-block"

    const divPokemon = document.createElement("div")
    divPokemon.className += "pokemon"
    
    const pokemonName = document.createElement("div")
    pokemonName.className += "pokemon-name"

    const paragraphName = document.createElement("p")
    paragraphName.append(`${data.results[pokemon].name}`);

    const pokemonImage = document.createElement("div")
    pokemonImage.className += "pokemon-image"

    const image = document.createElement("img")
    image.src = await getPokemonImg(data.results[pokemon].url)
    
    pokemonName.append(paragraphName)
    pokemonImage.append(image)
    divPokemon.append(pokemonImage)
    divPokemon.append(pokemonName)
    divPokemonBlock.append(divPokemon)
    section.append(divPokemonBlock)
  }

}

async function getPokemonImg(pokemonUri) {
  const response = await fetch(`${pokemonUri}`)
  const res = await response.json()
  return res.sprites.front_default
}