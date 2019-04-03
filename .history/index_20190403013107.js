
function getPokemons(valor) {
  fetch('https://pokeapi.co/api/v2/pokemon')
  .then( pokemons => pokemons.json())
  .then(pokemons => {
    console.log(pokemons.results)
    pokemons.results.map( pokemon => {
      pokemon.name === pokemonDigitado ? console.log(`Pokemon procurado encontrado: ${pokemon.name} `) : console.log('pokemon não existe')
      
    })
  })
}


function teste() {
  preventDefault()
  console.log('foi')
}

document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById("input").addEventListener("click", () => {
    console.log(funciona)
  })
});