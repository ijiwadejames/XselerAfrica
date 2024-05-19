/** @format */

import { useState } from "react";
import DataFields from "../DataFields";
import "../../css/module.css";
import Buttons from "../Buttons";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

const UpdateQualification = () => {
  const { users } = useDataContext();
  const [isActive, setIsActive] = useState(null);
  const [formData, setFormData] = useState({
    iAttended: users.iAttended,
    dAStarted: users.dAStarted,
    dAEnded: users.dAEnded,
    degree: users.degree,
    course: users.course,
    dClass: users.dClass,
  });

  const fields = [
    "iAttended",
    "degree",
    "course",
    "dClass",
    "dAStarted",
    "dAEnded",
  ];

  const getLabel = (fields) => {
    if (fields === "iAttended") {
      return <>Institution Attended</>;
    } else if (fields === "dAStarted") {
      return <>Date Started</>;
    } else if (fields === "dAEnded") {
      return <>Date Graduated</>;
    } else if (fields === "degree") {
      return <>Degree Obtained</>;
    } else if (fields === "course") {
      return <>Course</>;
    } else if (fields === "dClass") {
      return <>Class of Degree</>;
    } else {
      //do nothing
    }
  };

  const toggleFields = (field) => {
    if (isActive === field) {
      setIsActive(null);
    } else {
      setIsActive(field);
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
    <div className="row m-auto mt-3 d-flex justify-content-center align-items-center">
      <div className="col-xs-11 col-sm-11 col-md-12 col-lg-4 bg-color rotate-div fs-1 text-center text-light fw-bold">
        {users.iAttended.length > 0 ? users.iAttended[0] : ""}
      </div>
      <div
        className="col-xs-11 col-sm-11 col-md-12 col-lg-8 font-13 m-auto"
        // style={{ lineHeight: "30px", height: "100%" }}
      >
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field} className="col-11 font-13 mb-2">
              <div className="col-12 fw-bold border-bottom">
                {getLabel(field)}
              </div>

              {isActive === field ? (
                <div className="d-flex justify-content-between align-items-center">
                  <DataFields
                    type="text"
                    placeholder=""
                    width="100%"
                    value={formData[field]}
                    onChange={(value) => handleChange(field, value)}
                  />

                  <Buttons onClick={handleButtonClick} value="SAVE" />
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => setIsActive(false)}
                    className="m-auto ms-1 btn btn-danger"
                  />
                </div>
              ) : (
                <div className="d-flex justify-content-between align-items-center">
                  {formData[field]}
                  <FontAwesomeIcon
                    className="mx-3 edit"
                    icon={faEdit}
                    onClick={() => toggleFields(field)}
                  />
                </div>
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default UpdateQualification;
