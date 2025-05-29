# lda-GetPokemon

## Descripción

La función Lambda `lda-GetPokemon` recibe el nombre de un Pokémon, consulta sus datos en la API pública de Pokémon (https://pokeapi.co/api/v2/pokemon/{name}), y guarda la información relevante en una tabla DynamoDB.

## Instrucciones de instalación

- Ejecutar `npm install` para instalar las dependencias.

## Configuración de variables de entorno

Para la ejecución local, es necesario crear un archivo `.env` en el root del proyecto con los siguientes parámetros:

### Parámetros generales

- Internos
  - `ENVIRONMENT`: Ambiente de ejecución (`LOCAL`, `DEV`, `QA`, `PDN`)
  - `AWS_REGION`: Región AWS (ejemplo: `us-east-1`)
  - `POKEMON_DYNAMO_TABLE`: Nombre de la tabla DynamoDB donde se almacenan los datos de Pokémon

### Ejemplo de archivo `.env`

```shell
### PARÁMETROS GENERALES ###

## INTERNOS ##
ENVIRONMENT=LOCAL
LOCAL_AWS_PROFILE_NAME=dev
AWS_REGION=us-east-1
POKEMON_DYNAMO_TABLE=CL001-Poke-Table-${ENV}
