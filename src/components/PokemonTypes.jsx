import "./PokemonTypes.css";

import PropTypes from "prop-types";

import { getTypeColor } from "../utils";

const PokemonTypes = ({ types }) => {
  return (
    <>
      <h3>Types</h3>
      <ul className="pokemon-types">
        {types.map((type) => (
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
    </>
  );
};

PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default PokemonTypes;
