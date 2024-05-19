/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faInfoCircle,
  faEnvelope,
  faFeather,
  faShield,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../Assets/images/logo.png";
import SideMenuItems from "./SideMenuItems";
import SocialIcons from "./SocialIcons";
import facebook from "../Assets/icons/facebook.png";
import x from "../Assets/icons/x.png";
import linkedin from "../Assets/icons/linkedin.png";

const SideMenu = ({ onClick }) => {
  return (
    <div className="col-12 col-md-3 col-lg-3 sideMenu text-light padding-10">
      <div className="col-11 m-auto my-3 px-2 d-flex justify-content-between align-items-center">
        <div className="col-3 col-xs-3 col-sm-3 col-md-5 col-lg-4">
          <img src={Logo} alt="logo" className="img-fluid" />
        </div>
        <div onClick={onClick} className="btn btn-light">
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
      </div>
      <ul>
        <SideMenuItems onClick={onClick} icon={faHome} to="/" value="Home" />
        <SideMenuItems
          onClick={onClick}
          icon={faInfoCircle}
          to="/gst/about-us"
          value="About"
        />
        <SideMenuItems
          onClick={onClick}
          icon={faEnvelope}
          to="/gst/contact-us"
          value="Contact"
        />
        <SideMenuItems
          onClick={onClick}
          icon={faFeather}
          to="/gst/plans"
          value="Plans"
        />
        <SideMenuItems
          icon={faShield}
          onClick={onClick}
          to="/gst/privacy-policy"
          value="Privacy Policy"
        />
      </ul>
      <div className="col-12 flex-row justify-content-center fw-semibold text-light">
        <div className="col-12 d-flex mt-5 mb-2 justify-content-center align-items-center">
          <SocialIcons icon={x} to="https://www.x.com/" />
          <SocialIcons icon={facebook} to="https://www.facebook.com/" />
          <SocialIcons icon={linkedin} to="https://www.linkedin.com/" />
        </div>
        <div className="col-12 text-center">&copy; 2024 - Xseler</div>
      </div>
    </div>
  );
};

export default SideMenu;
