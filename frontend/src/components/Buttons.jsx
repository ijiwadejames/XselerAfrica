/** @format */

import { Link } from "react-router-dom";

const Buttons = ({ to, value, onClick, isDisabled, color, textColor }) => {
  return (
    <Link to={to}>
      <button
        type="submit"
        onClick={onClick}
        disabled={isDisabled}
        className="submitButton btn btn-dark btn-sm shadow-sm fw-semibold mt-1"
        style={{ backgroundColor: color, color: textColor }}
      >
        {value}
      </button>
    </Link>
  );
};

export default Buttons;
