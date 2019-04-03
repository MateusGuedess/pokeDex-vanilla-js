const fetch = require("node-fetch");
fetch('https://pokeapi.co/api/v2/pokemon')
.then( pokemons => pokemons.JSON)
.then(pokemons => {
  console.log(pokemons)
})
