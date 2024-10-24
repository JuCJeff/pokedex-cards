import "./TrophyList.css";

import PropTypes from "prop-types";
import { GiTrophyCup } from "react-icons/gi";

const TrophyList = ({ count, color }) =>
  count > 0 ? (
    <div className="trophy-group">
      {[...Array(count)].map((_, index) => (
        <li key={`${color}-${index}`}>
          <GiTrophyCup color={color} className="trophy-cup" />
        </li>
      ))}
    </div>
  ) : null;

TrophyList.propTypes = {
  count: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default TrophyList;
