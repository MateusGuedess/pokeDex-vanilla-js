
const pokemonDigitado = 'charmander';
fetch('https://pokeapi.co/api/v2/pokemon')
.then( pokemons => pokemons.json())
.then(pokemons => {
  console.log(pokemons.results)
  pokemons.results.map( pokemon => {
    pokemon.name === pokemonDigitado ? console.log(`Pokemon procurado encontrado: ${pokemon.name}`) : console.log('pokemon não existe')
    console.log(pokemon.name)
  })
})

