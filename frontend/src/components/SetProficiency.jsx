/** @format */

import {
  faArrowDown,
  faArrowUp,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SetProficiency = ({ skill }) => {
  const [range, setRange] = useState(50);

  const getRating = (range) => {
    if (range < 40) {
      return "Basic";
    } else if (range >= 40 && range < 60) {
      return "Proficient";
    } else if (range >= 60 && range < 80) {
      return "Mastery";
    } else {
      return "Expert";
    }
  };
  const getColor = (range) => {
    if (range < 40) {
      return "#f44336";
    } else if (range >= 40 && range < 60) {
      return "#ff9800";
    } else if (range >= 60 && range < 80) {
      return "#ffeb3b";
    } else {
      return "#4CAF50";
    }
  };
  return (
    <div className="shadow-sm text-center py-1 pb-0">
      {skill} Skill
      <div className="col-12 d-flex justify-content-between text-center align-items-center">
        <div className="col-2">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <div className="col-8">
          <input
            type="range"
            min={1}
            max={100}
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="col-12"
          />
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </div>
      <div className="col-12 text-center textColor bg-dark fs-7 text-dark">
        <div style={{ backgroundColor: getColor(range) }}>
          {" "}
          <strong>{getRating(range)}</strong>{" "}
          <FontAwesomeIcon icon={faArrowAltCircleRight} /> {range}
        </div>
      </div>
    </div>
  );
};

export default SetProficiency;
