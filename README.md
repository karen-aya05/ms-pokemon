# CL001-POKE-APPS

## Descripción

**CL001-POKE-APPS** es un backend desarrollado en AWS para gestionar servicios relacionados con Pokémon.  
Utiliza infraestructura como código mediante **CloudFormation (YAML)** y cuenta con dos funciones Lambda principales encargadas de crear y obtener Pokémon.

---

## Arquitectura

- **Infraestructura con CloudFormation:**  
  Define recursos como funciones Lambda, tabla DynamoDB y API Gateway.

- **Funciones Lambda:**  
  - `CreatePokemon`: Función para crear un nuevo Pokémon.  
  - `GetPokemon`: Función para consultar Pokémon (individual o lista).

- **DynamoDB:**  
  Tabla para almacenar la información de los Pokémon.

---
