'use strict';

const ERRORS = {
  GET_POKEMON: { level: 'ERROR', code: 'GET_POKEMON', status: '500', title: 'Failed to Retrieve Pokémon', detail: 'An unexpected error occurred while trying to fetch the Pokémon.' },
  POKEMON_DATA_SAVE: { level: 'ERROR', code: 'POKEMON_DATA_SAVE', status: '500', title: 'Failed to Save Pokémon Data', detail: 'An error occurred while attempting to save the Pokémon data to the database.' },
  NOT_FOUND_POKEMON: { level: 'ERROR', code: 'NOT_FOUND_POKEMON', status: '404', title: 'Pokémon Not Found', detail: 'No Pokémon was found with the specified identifier.' },
  POKEMON_DATA: { level: 'ERROR', code: 'POKEMON_DATA', status: '500', title: 'Error Retrieving Pokémon Data', detail: 'There was an issue retrieving data for the specified Pokémon.' },
  EXISTING_POKEMON: { level: 'ERROR', code: 'EXISTING_POKEMON', status: '409', title: 'Duplicate Pokémon', detail: 'A Pokémon with the given name already exists in the database.' }
};

module.exports = {
  ERRORS
}


