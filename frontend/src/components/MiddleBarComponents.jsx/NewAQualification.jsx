/** @format */

import { useState } from "react";
import DataFields from "../DataFields";
import "../../css/module.css";
import Buttons from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel } from "@fortawesome/free-solid-svg-icons";

const NewAQualification = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    iAttended: "",
    dAStarted: "",
    dAEnded: "",
    degree: "",
    course: "",
    dClass: "",
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
    handleClose(false);
  };

  return (
    <div className="flex-row p-3 pb-0 text-start border bg-white mb-3 border-grey rounded-2">
      <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
        <div className="fs-4 fw-bold">New Academic Qualification</div>
        <FontAwesomeIcon
          className="cursor-pointer text-primary"
          onClick={handleClose}
          icon={faCancel}
        />
      </div>

      <div className="my-4">
        {fields.map((field, index) => {
          if (index >= 0 && index < 4) {
            return (
              <div key={field} className="my-4">
                <DataFields
                  type="text"
                  label={getLabel(field)}
                  value={formData[field]}
                  onChange={(value) => handleChange(field, value)}
                />
              </div>
            );
          } else {
            return (
              <div key={field} className="my-4">
                <DataFields
                  type="date"
                  label={getLabel(field)}
                  value={formData[field]}
                  onChange={(value) => handleChange(field, value)}
                />
              </div>
            );
          }
        })}
        <Buttons type="submit" onClick={handleButtonClick} value="SAVE" />
      </div>
    </div>
  );
};

export default NewAQualification;
