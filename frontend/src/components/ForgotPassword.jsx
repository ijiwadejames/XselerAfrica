/** @format */

import Buttons from "./Buttons";
import DataFields from "./DataFields";
import { useState } from "react";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: "" });

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
    <div className=" bg-light p-2 rounded-2">
      <form onSubmit={handleSubmit}>
        {" "}
        <DataFields
          type="email"
          value={formData.email}
          onChange={(value) => handleChange("email", value)}
          label="Email"
          placeholder="e.g user@xseler.com"
        />
        <Buttons value="Reset" />
      </form>
    </div>
  );
};

export default ForgotPassword;
