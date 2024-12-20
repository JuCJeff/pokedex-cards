import styles from "./Abilities.module.css";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { getAbilityDescriptionByUrl } from "../../api/pokeApi";

const AbilityItem = ({ name, description, isHidden }) => {
  const [descriptionHidden, setDescriptionHidden] = useState(true);

  const handleHiddenDescriptionClick = () => {
    setDescriptionHidden(!descriptionHidden);
  };

  const getAbilityStyle = () => {
    if (!isHidden) {
      return "";
    }

    if (descriptionHidden) {
      return styles.hiddenAbilityContainer;
    }

    return styles.visibleAbilityContainer;
  };

  return (
    <>
      {isHidden && (
        <div>
          <button
            onClick={handleHiddenDescriptionClick}
            className={styles.hiddenAbilityToggleButton}
          >
            Hidden ability{" "}
            {descriptionHidden ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>
      )}
      <div className={`${styles.abilityContainer} ${getAbilityStyle()}`}>
        <div className={styles.abilityTitleContainer}>
          <h4 className={styles.abilityTitle}>{name}</h4>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

AbilityItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

const Abilities = ({ abilities }) => {
  const [abilityDescriptions, setAbilityDescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbilityDescriptions = async () => {
      try {
        const abilityDescriptionsList = await Promise.all(
          abilities.map(async (abilityObj) => {
            const abilityDescriptionObj = await getAbilityDescriptionByUrl(
              abilityObj.ability.url
            );
            return {
              is_hidden: abilityObj.is_hidden,
              name: abilityDescriptionObj.name,
              description: abilityDescriptionObj.description,
            };
          })
        );
        setAbilityDescriptions(abilityDescriptionsList);
      } catch (err) {
        console.error("Error fetching ability descriptions:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (abilities && abilities.length > 0) {
      fetchAbilityDescriptions();
    } else {
      setLoading(false);
    }
  }, [abilities]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching abilities: {error.message}</p>;
  }

  return (
    <div>
      <h3>Abilities</h3>
      <div>
        {abilityDescriptions.length > 0 ? (
          abilityDescriptions.map((desc, index) => (
            <AbilityItem
              key={index + desc.name}
              name={desc.name}
              description={desc.description}
              isHidden={desc.is_hidden}
            />
          ))
        ) : (
          <p>No abilities found.</p>
        )}
      </div>
    </div>
  );
};

Abilities.propTypes = {
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      ability: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
      is_hidden: PropTypes.bool.isRequired,
      slot: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Abilities;
