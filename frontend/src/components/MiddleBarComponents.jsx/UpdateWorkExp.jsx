/** @format */

import { useState } from "react";
import DataFields from "../DataFields";
import "../../css/module.css";
import Buttons from "../Buttons";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

const UpdateWorkExp = () => {
  const { users } = useDataContext();
  const [isActive, setIsActive] = useState(null);

  const [formData, setFormData] = useState({
    org: users.org,
    add: users.add,
    position: users.position,
    jobTitle: users.jobTitle,
    dWStarted: users.dWStarted,
    dWEnded: users.dWEnded,
    started: users.started,
    isChecked: users.isChecked,
    duty: users.duty,
  });
  const fields = [
    "org",
    "add",
    "position",
    "jobTitle",
    "isChecked",
    "started",
    "dWStarted",
    "dWEnded",
    "duty",
  ];

  const getLabel = (field) => {
    if (field === "org") {
      return <>Organization's Name</>;
    } else if (field === "add") {
      return <>Address</>;
    } else if (field === "position") {
      return <>Current position</>;
    } else if (field === "jobTitle") {
      return <>Preferred Job</>;
    } else if (field === "dWStarted") {
      return <>Date resumed</>;
    } else if (field === "dWEnded") {
      return <>Date left</>;
    } else if (field === "started") {
      return <>Date resumed</>;
    } else if (field === "isChecked") {
      return <>I currently work here</>;
    } else if (field === "duty") {
      return <>Responsibilities</>;
    }
  };

  const toggleFields = (field) => {
    if (isActive === field) {
      setIsActive(null);
    } else {
      setIsActive(field);
    }
  };

  const getEditButton = (field) => {
    if (formData[field] !== "" && formData[field] !== false) {
      return (
        <div>
          {formData[field] === true ? (
            <div className="fw-bold"> I currently work here!</div>
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
      );
    } else {
      return;
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
        {users.org.length > 0 ? users.org[0] : ""}
      </div>
      <div
        className="col-xs-11 col-sm-11 col-md-12 col-lg-8 font-13 m-auto"
        // style={{ lineHeight: "30px", height: "100%" }}
      >
        {fields.map((field) => (
          <div
            className="col-11 font-13"
            // style={{ lineHeight: "30px" }}
            key={field}
          >
            {formData[field] !== "" && formData[field] !== false && (
              <>
                {getLabel(field) && (
                  <div className="col-12 fw-bold border-bottom">
                    {formData[field] !== true && <>{getLabel(field)}</>}
                  </div>
                )}
              </>
            )}
            {isActive === field ? (
              <div className="d-flex justify-content-between mb-2 align-items-center">
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
              <div className="mb-3">{getEditButton(field)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default UpdateWorkExp;
