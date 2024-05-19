/** @format */

import InputField from "../components/InputField";
import Buttons from "../components/Buttons";
import "../css/module.css";
import { useEffect, useState } from "react";
import { useDataContext } from "../Provider/ContextAPI";
import FPassword from "./FPassword";
import RememberMe from "./RememberMe";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoginAvatar from "./LoginAvatar";
import pic from "../Assets/images/ProfilePictures/pic.jpg";
import noProfile from "../Assets/images/ProfilePictures/no_profile.png";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [rMe, setRMe] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { description } = useDataContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userCheck = Cookies.get("isUser");
    const getEmail = Cookies.get("email");

    if (userCheck === "true") {
      setIsUser(true);
    }

    if (getEmail) {
      setFormData({
        ...formData,
        email: getEmail,
      });
    }
  }, [formData]);

  const differentUser = () => {
    Cookies.remove("isUser");
    Cookies.remove("email");
    setIsUser(false);
  };

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
    });
    //Dispatch
    console.log(formData);

    if (isUser) {
      navigate("/dashboard");
    }
    //Set RememberMe Cookies on submit
    if (rMe) {
      Cookies.set("email", formData.email, {
        secure: true,
        sameSite: "strict",
        expires: 7,
        path: "/",
      });
      Cookies.set("isUser", "true", {
        secure: true,
        sameSite: "strict",
        expires: 7,
        path: "/",
      });
      Cookies.set("Country", "NG", {
        secure: true,
        sameSite: "strict",
        expires: 7,
        path: "/",
      });
    }
  };

  const handleRememberMe = () => {
    setRMe(!rMe);
  };

  const handleButtonClick = (event) => {
    handleSubmit(event);
  };
  return (
    <div className="row m-0 p-0 col-12 py-4">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="col-11 col-xs-11 col-sm-11 col-md-10 col-lg-6 m-auto border border-light bg-white loginPan shadow p-4 rounded-4">
          <div className="col-12 text-center bg-dark text-light rounded-2 fw-bold border-bottom py-2">
            MEMBER LOGIN
          </div>

          <LoginAvatar avatar={isUser ? pic : noProfile} />

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="p-3 pt-0 mb-0"
          >
            {isUser ? (
              <div>
                <label htmlFor="Email">Email</label>
                <div className="col-12 p-2 d-flex justify-content-start rounded-3 fw-bold shadow-sm">
                  <div>
                    <FontAwesomeIcon icon={faUser} />{" "}
                  </div>
                  <div className="ms-2">{formData.email}</div>
                </div>
                <div style={{ display: "none" }}>
                  <input
                    type="text"
                    placeholder="e.g xyz@xseler.com"
                    onChange={(e) => handleChange("email", e.target.value)}
                    value={formData.email}
                  />
                </div>
              </div>
            ) : (
              <InputField
                type="text"
                placeholder="e.g xyz@xseler.com"
                label="Email"
                onChange={(value) => handleChange("email", value)}
                value={formData.email}
              />
            )}

            <InputField
              type="text"
              fieldTag="pass"
              label="Password"
              onChange={(value) => handleChange("password", value)}
              placeholder="Password"
              value={formData.password}
            />

            <div className="d-flex justify-content-between align-items-center mb-3">
              <RememberMe onChange={handleRememberMe} checked={rMe} />

              {isUser && (
                <div
                  onClick={differentUser}
                  className="shadow-sm btn bg-danger text-light attestation fw-semibold"
                >
                  Different User!
                </div>
              )}
            </div>

            <Buttons
              value="Login"
              onClick={handleButtonClick}
              textColor="white"
            />
          </form>
          <div className="border-top pt-3">
            <FPassword />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6 m-auto fw-bold d-flex align-items-center justify-content-center authMsg">
        <div className="col-8 col-md-10 col-lg-12">{description.login}</div>
      </div>
    </div>
  );
};

export default LoginContainer;
