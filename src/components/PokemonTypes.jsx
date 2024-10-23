import "./PokemonTypes.css";

import PropTypes from "prop-types";

import { getTypeColor } from "../utils";

const PokemonTypes = ({ pokemon }) => {
  return (
    <ul className="pokemon-types">
      {pokemon.types.map((type) => (
        <li
          key={type.type.name}
          style={{
            backgroundColor: getTypeColor(type.type.name),
          }}
        >
          {type.type.name}
        </li>
      ))}
    </ul>
  );
};

PokemonTypes.propTypes = {
  pokemon: PropTypes.shape({
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default PokemonTypes;
