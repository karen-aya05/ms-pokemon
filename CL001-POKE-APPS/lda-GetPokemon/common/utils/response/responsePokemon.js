
const responsePokemon = (data) => {
  return {
    id: data.id,
    name: data?.SK,
    types: data?.types,
    abilities: data?.abilities,
    image: data?.imageFront,
    stats: data?.stats
  }

}

module.exports = {
  responsePokemon
}
