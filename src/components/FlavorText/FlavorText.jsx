import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { getPokemonFlavorText } from "../../api/pokeApi";
import { sanitizeFlavorText } from "../../utils/pokemonHelpers";

import styles from "./FlavorText.module.css";

const FlavorText = ({ pokemon }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flavorText, setFlavorText] = useState(null);

  useEffect(() => {
    const fetchFlavorText = async () => {
      try {
        const flavorText = await getPokemonFlavorText(
          pokemon.species.name,
          pokemon.id
        );

        setFlavorText(sanitizeFlavorText(flavorText));
      } catch (err) {
        console.error("Error fetching ability descriptions:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (pokemon.species.name) {
      fetchFlavorText();
    } else {
      setLoading(false);
    }
  }, [pokemon]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching flavor texts: {error.message}</p>;
  }

  return (
    <div className={styles.flavorText}>
      <p>{flavorText}</p>
    </div>
  );
};

FlavorText.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    species: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};

export default FlavorText;
