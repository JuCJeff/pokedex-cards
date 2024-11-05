// Only counting VGC Master divisions
const getPokemonTrophies = (pokemonAccolades) => {
  const trophiesList = new Map();

  const updateTrophiesCount = (pokemon, position) => {
    const lowerCasedPokemon = pokemon.toLowerCase();
    const pokemonExistInMap = trophiesList.get(lowerCasedPokemon) !== undefined;

    if (!pokemonExistInMap) {
      trophiesList.set(lowerCasedPokemon, { first: 0, second: 0, third: 0 });
    }

    const counts = trophiesList.get(lowerCasedPokemon);
    counts[position] += 1;
  };

  pokemonAccolades.forEach((accolades) => {
    const first = accolades.first;
    const second = accolades.second;
    const third = accolades.third;

    first.forEach((pokemon) => {
      updateTrophiesCount(pokemon, "first");
    });
    second.forEach((pokemon) => updateTrophiesCount(pokemon, "second"));
    third.forEach((pokemon) => updateTrophiesCount(pokemon, "third"));
  });

  return trophiesList;
};

// To handle pokémon with different variants
export const getCombinedTrophies = (pokemonAccolades, pokemon) => {
  const pokemonFormsArray = [];
  const trophiesMap = getPokemonTrophies(pokemonAccolades);

  trophiesMap.forEach((value, key) => {
    if (key.includes(pokemon.name) || pokemon.name.includes(key)) {
      pokemonFormsArray.push(value);
    }
  });

  if (pokemonFormsArray.length === 0) {
    return null;
  }

  const combinedTrophies = pokemonFormsArray.reduce(
    (acc, curr) => {
      acc.first += curr.first;
      acc.second += curr.second;
      acc.third += curr.third;

      return acc;
    },
    { first: 0, second: 0, third: 0 }
  );

  return combinedTrophies;
};

export const getFormattedPokemonName = (pokemon) => {
  return pokemon.replace(/-/g, " ");
};
