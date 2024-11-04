import styles from "./TrophyList.module.css";

import PropTypes from "prop-types";
import { GiTrophyCup } from "react-icons/gi";

const TrophyList = ({ count, color }) =>
  count > 0 ? (
    <div className={styles.trophyGroup}>
      {[...Array(count)].map((_, index) => (
        <li key={`${color}-${index}`}>
          <GiTrophyCup color={color} className={styles.trophyCup} />
        </li>
      ))}
    </div>
  ) : null;

TrophyList.propTypes = {
  count: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default TrophyList;
