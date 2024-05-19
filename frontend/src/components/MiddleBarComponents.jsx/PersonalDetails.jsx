/** @format */

import { useState } from "react";
import DataFields from "../DataFields";
import "../../css/module.css";
import Buttons from "../Buttons";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faMinus } from "@fortawesome/free-solid-svg-icons";
import UpdatePersonalDetails from "./UpdatePersonalDetails";

const PersonalDetails = () => {
  const { users } = useDataContext();
  const [isActive, setIsActive] = useState(null);
  const [formData, setFormData] = useState({
    email: users.email,
    pnum: users.pnum,
    address: users.address,
    website: users.website,
    linkedin: users.linkedin,
    portfolio: users.portfolio,
  });

  const fields = [
    "email",
    "pnum",
    "address",
    "website",
    "linkedin",
    "portfolio",
  ];

  const getLabel = (fields) => {
    if (fields === "onames") {
      return <>Other Given Names</>;
    } else if (fields === "email") {
      return <>Email</>;
    } else if (fields === "pnum") {
      return <>Phone number</>;
    } else if (fields === "address") {
      return <>Address</>;
    } else if (fields === "website") {
      return <>Website</>;
    } else if (fields === "linkedin") {
      return <>Linkedin</>;
    } else if (fields === "portfolio") {
      return <>Portfolio</>;
    } else {
      //do nothing
    }
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
  };

  const handleButtonClick = (event) => {
    handleSubmit(event);
    setIsActive(false);
  };
  return (
    <div className="col-12">
      <div className="flex-row p-3 text-start border bg-white border-grey rounded-2">
        <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold">Personal Details</div>
          <FontAwesomeIcon
            className="cursor-pointer text-primary"
            icon={isActive ? faMinus : faEdit}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        {isActive ? (
          <form onSubmit={handleSubmit}>
            <div className="my-2 bg-light p-2 rounded-2">
              <DataFields type="file" />
            </div>
            <div className="my-4">
              {fields.map((field) => (
                <div key={field} className="my-4">
                  <DataFields
                    type="text"
                    label={getLabel(field)}
                    value={formData[field]}
                    onChange={(value) => handleChange(field, value)}
                  />
                </div>
              ))}
            </div>

            <Buttons value="SAVE" onClick={handleButtonClick} />
          </form>
        ) : (
          <UpdatePersonalDetails />
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
