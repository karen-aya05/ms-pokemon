
const responsePokemon = (data) => {
  return {
    id: data.id,
    name: data.name,
    types: data.types,
    abilities: data.abilities,
    image: data.sprites.front_default || data.other.front_default,
    stats: data.stats
  }

}

module.exports = {
  responsePokemon
}
