/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SideMenuItems = ({ value, to, icon, onClick }) => {
  return (
    <Link onClick={onClick} to={to} className="no-text-decoration linkText">
      <li className="px-4 py-2">
        <FontAwesomeIcon icon={icon} /> {value}
      </li>
    </Link>
  );
};

export default SideMenuItems;
