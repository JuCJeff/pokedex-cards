import axios from "axios";

import { pokemonGenerationsRange } from "../data";

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

export const getAbilityDescriptionByUrl = async (url) => {
  try {
    const response = await axios.get(url);

    const name = response.data.name;
    const abilityDescriptionList = response.data.flavor_text_entries;

    const abilityDescriptionObj = abilityDescriptionList.find(
      (description) => description.language.name === "en"
    );
    const description = abilityDescriptionObj.flavor_text;

    return { name: name.replace(/-/g, " "), description: description };
  } catch (error) {
    throw new Error(`Failed to fetch ability data: ${error.message}`);
  }
};

export const getPokemonFlavorText = async (pokemonName, id) => {
  try {
    const response = await axios.get(`${POKEAPI_URL}/pokemon-species/${id}`);

    const flavorTexts = response.data.flavor_text_entries;

    const versionObject = pokemonGenerationsRange.find(
      (generation) => id <= generation.index
    );

    const foundFlavorTextObj = flavorTexts.find(
      (flavorText) =>
        flavorText.language.name === "en" &&
        (flavorText.version.name === versionObject.v1 ||
          flavorText.version.name === versionObject.v2)
    );

    const flavorText = foundFlavorTextObj.flavor_text;

    return flavorText;
  } catch (error) {
    throw new Error(`Failed to fetch Pokémon data by name: ${error.message}`);
  }
};
