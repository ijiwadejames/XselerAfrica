/** @format */

import { Link } from "react-router-dom";

const SocialIcons = ({ icon, to }) => {
  return (
    <div className="btn btn-light mx-1">
      <Link to={to}>
        <img
          src={icon}
          alt="social icon"
          className="img-fluid"
          style={{ height: "25px", width: "25px" }}
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
