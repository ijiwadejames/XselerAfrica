/** @format */

import { useLocation } from "react-router-dom";
import UserAuthButton from "./UserAuthButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SideMenu from "./SideMenu";
import Logo from "../Assets/images/logo.png";

const Header = () => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const renderAuthButton = () => {
    const menuOpen = () => setToggleMenu(!toggleMenu);

    if (
      location.pathname === "/join" ||
      location.pathname === "/" ||
      location.pathname === "/gst/privacy-policy" ||
      location.pathname === "/gst/plans" ||
      location.pathname === "/gst/contact-us" ||
      location.pathname === "/gst/about-us"
    ) {
      return (
        <div className="linkButton">
          <div className="btn btn-sm btn-light" onClick={menuOpen}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="user-link-Button">
          <div className="user-link-content">
            <UserAuthButton />
          </div>{" "}
        </div>
      );
    }
  };

  const handleClick = () => {
    setToggleMenu(false);
  };

  return (
    <div>
      <div className="headerStyle shadow-sm col-12 p-2 px-4">
        <div className="col-3 col-md-2 col-lg-1">
          <img src={Logo} alt="logo" className="img-fluid" />{" "}
        </div>

        <div className="">{renderAuthButton()}</div>
      </div>

      {toggleMenu && <SideMenu onClick={handleClick} />}
    </div>
  );
};

export default Header;
