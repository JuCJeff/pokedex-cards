import "./PokedexCard.css";

import { useState } from "react";
import PropTypes from "prop-types";

import PokemonTypes from "./PokemonTypes";
import TrophyList from "./TrophyList";

import { trophyColors, vgcMastersAccolades } from "../data";
import { getCardHoverColor, getCombinedTrophies } from "../utils";

const PokedexCard = ({ pokemon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const combinedTrophies = getCombinedTrophies(vgcMastersAccolades, pokemon);
  const pokemonDetailsLink = `https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pok%C3%A9mon)`;

  return (
    <div
      className="pokedex-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderColor: getCardHoverColor(pokemon.types, isHovered) }}
    >
      <header>
        <h2>{pokemon.name}</h2>
      </header>
      <a href={pokemonDetailsLink} target="_blank" rel="noopener noreferrer">
        <img
          className="pokedex-image"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          loading="lazy"
        />
      </a>
      <div>
        <span>{pokemon.id}</span>
      </div>

      {combinedTrophies && (
        <ul className="trophy-collections">
          <TrophyList
            count={combinedTrophies.first}
            color={trophyColors.gold}
          />
          <TrophyList
            count={combinedTrophies.second}
            color={trophyColors.silver}
          />
          <TrophyList
            count={combinedTrophies.third}
            color={trophyColors.bronze}
          />
        </ul>
      )}

      <h2>Types:</h2>
      <PokemonTypes pokemon={pokemon} />
      <div className="pokemon-details">
        <a
          aria-label="details"
          href={pokemonDetailsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Details
        </a>
      </div>
    </div>
  );
};

PokedexCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
    }).isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PokedexCard;
