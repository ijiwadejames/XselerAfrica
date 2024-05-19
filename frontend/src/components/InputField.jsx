/** @format */
import React, { useState } from "react";
import "../css/module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const InputField = ({
  value,
  onChange,
  placeholder,
  type,
  fieldTag,
  label,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {fieldTag === "pass" ? (
        <div className=" my-4">
          <label htmlFor="Password">{label}</label>
          <div className="pwdStyle rounded-3">
            <div className="text-dark border-0 ps-2">
              <FontAwesomeIcon icon={faLock} />
            </div>

            <input
              className="passStyle"
              type={show ? "text" : "password"}
              placeholder={show ? "password" : "********"}
              autoComplete="new-password"
              onChange={(e) => onChange(e.target.value)}
              value={value}
              style={{ border: "none", boxShadow: "none" }}
            />

            <button className="text" onClick={(e) => setShow(!show)}>
              <FontAwesomeIcon icon={!show ? faEye : faEyeSlash} />
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <label htmlFor="Email"> {label}</label>
          <div className="emStyle rounded-3">
            <div className="text-dark border-0 ps-2">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              className="myStyle"
              type={type}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
              value={value}
              style={{ border: "none", boxShadow: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InputField;
