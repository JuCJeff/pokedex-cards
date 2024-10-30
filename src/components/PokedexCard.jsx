import "./PokedexCard.css";

import { useState, useRef } from "react";
import { HiOutlineSparkles, HiSparkles } from "react-icons/hi2";
import PropTypes from "prop-types";

import PokemonTypes from "./PokemonTypes";
import TrophyList from "./TrophyList";
import Abilities from "./Abilities";

import { trophyColors, vgcMastersAccolades } from "../data";
import { getCardHoverColor, getCombinedTrophies } from "../utils";

const PokedexCard = ({ pokemon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isShiny, setIsShiny] = useState(false);

  const borderColorBasedOnType = getCardHoverColor(pokemon.types, isHovered);
  const combinedTrophies = getCombinedTrophies(vgcMastersAccolades, pokemon);
  const pokemonCriesLink = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemon.id}.ogg`;
  const pokemonDetailsLink = `https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pok%C3%A9mon)`;

  const handleShinyToggle = () => {
    setIsShiny(!isShiny);
  };

  const audioRef = useRef(null);

  return (
    <div
      className="pokedex-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderColor: borderColorBasedOnType }}
    >
      <header>
        <h2>{pokemon.name}</h2>
        <div className="icon-section">
          <button
            className="icon-button"
            aria-label="Shiny toggle"
            onClick={handleShinyToggle}
          >
            {isShiny ? (
              <HiSparkles className="icons shiny-icon" />
            ) : (
              <HiOutlineSparkles className="icons regular-icon" />
            )}
          </button>
        </div>
      </header>
      <audio ref={audioRef} src={pokemonCriesLink} />
      <a href={pokemonDetailsLink} target="_blank" rel="noopener noreferrer">
        <img
          className="pokedex-image"
          src={
            isShiny
              ? pokemon.sprites.front_shiny
              : pokemon.sprites.front_default
          }
          alt={`${pokemon.name}`}
          onMouseEnter={() => {
            audioRef.current.volume = 0.2;
            audioRef.current.play();
          }}
          onMouseLeave={() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }}
          loading="lazy"
        />
      </a>
      <div>
        <span aria-label="Pokedex id">{pokemon.id}</span>
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

      <PokemonTypes types={pokemon.types} />

      <Abilities abilities={pokemon.abilities} />

      <div className="pokemon-details">
        <a
          aria-label="Pokemon details"
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
      front_shiny: PropTypes.string.isRequired,
    }).isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
    abilities: PropTypes.arrayOf(
      PropTypes.shape({
        ability: PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
        is_hidden: PropTypes.bool.isRequired,
      })
    ).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PokedexCard;
