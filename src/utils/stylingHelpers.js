import { pokemonTypeColor } from "../data";

export const getTypeColor = (pokemonType) => {
  const typeObject = pokemonTypeColor.find(({ type }) => type === pokemonType);
  return typeObject.hex;
};

export const getCardHoverColor = (pokemonTypes, isHovered) => {
  return isHovered ? getTypeColor(pokemonTypes[0].type.name) : "transparent";
};
