'use strict'

const ERRORS = {
  GET_POKEMON: { level: 'ERROR', code: 'GET_POKEMON', status: '500', title: 'Error Get Pokemon', detail: '' },
  POKEMON_DATA_SAVE: { level: 'ERROR', code: 'POKEMON_DATA_SAVE', status: '500', title: 'Error Pokemon Data Save', detail: '' },
  NOT_FOUND_POKEMON: { level: 'ERROR', code: 'NOT_FOUND_POKEMON', status: '404', title: 'Not found Pokemon', detail: '' }

}

module.exports = {
  ERRORS
}
