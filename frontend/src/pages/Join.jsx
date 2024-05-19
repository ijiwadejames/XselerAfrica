/** @format */

import InputField from "../components/InputField";
import Buttons from "../components/Buttons";
import "../css/module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDataContext } from "../Provider/ContextAPI";

const Join = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { description } = useDataContext();

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
  };
  return (
    <div className="row m-0 p-0 col-12">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="col-8 col-md-10 col-lg-6 border rounded-2 p-4 m-auto loginPan">
          <div className="title fw-bold">
            <h1>Create Account!</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              placeholder="email"
              onChange={(value) => handleChange("email", value)}
              value={formData.email}
            />
            <InputField
              type="text"
              fieldTag="pass"
              placeholder="Password"
              onChange={(value) => handleChange("password", value)}
              value={formData.password}
            />
            <Buttons value="Join" to="/" />
          </form>
          <div className="loginInLink">
            <Link to="/" style={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
      <div className="col-11 col-md-10 col-lg-6 m-auto border rounded-2 bg-dark p-4 text-light fw-normal fs-5 d-flex align-items-center justify-content-center">
        {description.newAccount}
      </div>
    </div>
  );
};

export default Join;
