fetch('https://pokeapi.co/api/v2/pokemon')
.then( pokemons => pokemons.json)
.then(pokemons => {
  console.log(pokemons)
})
