import styles from "./PokedexCards.module.css";

import { useState } from "react";

import PokedexCard from "./PokedexCard";

import { indexLimits, searchMethods } from "../data";
import { getPokemonByName, getPokemonByIndex } from "../api/pokeApi";

const PokedexCards = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchInput, setSearchInput] = useState("");
  const [searchMethod, setSearchMethod] = useState("name");

  const inputProps = {
    className: styles.pokemonSearchInput,
    type: searchMethod === "index" ? "number" : "text",
    placeholder: "Search for a Pokémon",
    "aria-label": "Search for a Pokémon",
    value: searchInput,
    onChange: (e) => setSearchInput(e.target.value),
    ...(searchMethod === "index" && {
      min: indexLimits.min,
      max: indexLimits.max,
    }),
  };

  const getPokemon = async (pokemon, method) => {
    setLoading(true);
    setError(null);

    try {
      let data;

      if (method === "name") {
        data = await getPokemonByName(pokemon);
      } else if (method === "index") {
        data = await getPokemonByIndex(pokemon);
      } else {
        throw new Error("Invalid search method");
      }

      console.log(data);

      setPokemon(data);
    } catch (err) {
      setError(err);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput !== "") {
      const lowerCaseSearchInput = searchInput.toLowerCase();
      getPokemon(lowerCaseSearchInput, searchMethod);
    }
  };

  const handleSearchMethod = (e) => {
    setSearchInput("");
    setSearchMethod(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className={styles.searchFormContainer}>
        <select value={searchMethod} onChange={handleSearchMethod}>
          {searchMethods.map((method) => (
            <option key={method.value} value={method.value}>
              {method.label}
            </option>
          ))}
        </select>
        <input {...inputProps} />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {pokemon && <PokedexCard pokemon={pokemon} />}
    </div>
  );
};

export default PokedexCards;
