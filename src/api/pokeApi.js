import axios from "axios";

const POKEAPI_URL = "https://pokeapi.co/api/v2";

export const getPokemonByName = async (pokemonName) => {
  try {
    const response = await axios.get(`${POKEAPI_URL}/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch Pokémon data by name: ${error.message}`);
  }
};

export const getPokemonByIndex = async (pokemonIndex) => {
  try {
    const response = await axios.get(`${POKEAPI_URL}/pokemon/${pokemonIndex}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch Pokémon data by name: ${error.message}`);
  }
};
