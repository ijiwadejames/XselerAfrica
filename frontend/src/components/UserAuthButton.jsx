/** @format */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../Assets/images/ProfilePictures/pic.jpg";
import {
  faBars,
  faHistory,
  faHome,
  faReceipt,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../Provider/ContextAPI";
import SelectCountry from "./SelectCountry";
import { logout, reset } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const UserAuthButton = () => {
  const [drop, setDrop] = useState(false);
  const { users } = useDataContext();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDrop = () => {
    setDrop(!drop);
  };

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
    dispatch(reset());
  };

  const closeDrop = () => setDrop(!drop);
  return (
    <>
      <div className="user-auth-botton-holder me-0">
        <img src={pic} alt="avatar" className="auth-img" />
        <div className="fs-6 mx-2 d-flex justify-content-center align-items-center">
          <span className="font-13">{users.fname}</span>
          <span>
            <SelectCountry />
          </span>
        </div>
        <div className="btn btn-sm btn-light" onClick={handleDrop}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {drop && (
        <div className="dropDown">
          <Link to="/dashboard" className="no-text-decoration linkText">
            <li className="li-flex" onClick={closeDrop}>
              <FontAwesomeIcon icon={faHome} /> Dashboard{" "}
            </li>
          </Link>
          <Link to="/profile" className="no-text-decoration linkText">
            <li className="li-flex" onClick={closeDrop}>
              <FontAwesomeIcon icon={faUser} /> Profile
            </li>
          </Link>
          <Link to="/my-app" className="no-text-decoration linkText">
            <li className="li-flex" onClick={closeDrop}>
              <FontAwesomeIcon icon={faReceipt} /> My Applications{" "}
            </li>
          </Link>
          <Link to="/transactions" className="no-text-decoration linkText">
            <li className="li-flex" onClick={closeDrop}>
              <FontAwesomeIcon icon={faHistory} /> Transaction History
            </li>
          </Link>
          <Link to="/" className="no-text-decoration linkText">
            <li className="li-flex" onClick={onLogout}>
              <FontAwesomeIcon icon={faSignOut} /> Logout
            </li>
          </Link>
        </div>
      )}
    </>
  );
};

export default UserAuthButton;
