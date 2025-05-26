export const responsePokemon = (data) => {
  const response = {
    id: data.id,
    name: data.name,
    types: data.types,
    abilities: data.abilities,
    image_front: data.image,
    stats: data.stats
  }
  return response
}

module.exports = {
  responsePokemon
}
