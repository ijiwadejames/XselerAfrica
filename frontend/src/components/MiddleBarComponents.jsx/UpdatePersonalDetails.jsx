/** @format */

import { useState } from "react";
import Buttons from "../Buttons";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import DataFields from "../DataFields";
import ProfilePicture from "../ProfilePicture";

const UpdatePersonalDetails = () => {
  const { users } = useDataContext();
  const [activeField, setActiveField] = useState(null);
  const [formData, setFormData] = useState({
    email: users.email,
    pnum: users.pnum,
    address: users.address,
    website: users.website,
    linkedin: users.linkedin,
    portfolio: users.portfolio,
  });

  const toggleField = (field) => {
    if (activeField === field) {
      setActiveField(null);
    } else {
      setActiveField(field);
    }
  };

  const fields = [
    "email",
    "pnum",
    "address",
    "website",
    "linkedin",
    "portfolio",
  ];

  const getLabel = (fields) => {
    if (fields === "sname") {
      return <>Surname</>;
    } else if (fields === "fname") {
      return <>Firstname</>;
    } else if (fields === "onames") {
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
      return <>LinkedIn</>;
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

    //Dispatch formData
    console.log(formData);
  };

  const handleButtonClick = (event, activeField) => {
    handleSubmit(event);
    toggleField(activeField);
  };

  return (
    <div className="col-12 row mt-3 d-flex justify-content-center align-items-center">
      <div className="col-xs-11 col-sm-11 col-md-12 col-lg-4 m-auto rounded-3">
        <ProfilePicture avatar={users.avatar} />
      </div>
      <div
        className="col-xs-11 col-sm-11 col-md-12 col-lg-8 font-13"
        style={{ lineHeight: "30px" }}
      >
        <div className="col-12 fw-bold border-bottom">Fullname</div>
        <div className="fw-semibold">
          {users.sname + " " + users.fname + " " + users.onames}
        </div>
        {fields.map((field) => (
          <div key={field}>
            <div className="col-12 fw-bold border-bottom">
              {getLabel(field)}
            </div>
            {activeField === field ? (
              <form
                onSubmit={handleSubmit}
                className="d-flex justify-content-between mb-2 align-items-center"
              >
                <DataFields
                  type="text"
                  value={formData[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  placeholder="New Address"
                />
                <Buttons type="text" value="SAVE" onClick={handleButtonClick} />
                <FontAwesomeIcon
                  onClick={() => toggleField(false)}
                  className="m-auto ms-1 btn btn-danger"
                  icon={faTimes}
                />
              </form>
            ) : (
              <div className="d-flex justify-content-between">
                {formData[field] !== "" && (
                  <>
                    {formData[field]}
                    <FontAwesomeIcon
                      className="mx-3 edit"
                      icon={faEdit}
                      onClick={() => toggleField(field)}
                    />
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatePersonalDetails;
