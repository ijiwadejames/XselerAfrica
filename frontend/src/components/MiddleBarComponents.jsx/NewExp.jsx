/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DataFields from "../DataFields";
import Buttons from "../Buttons";

const NewExp = ({ handleClose }) => {
  const [start, setStart] = useState(false);
  const [showSEDates, setShowSEDates] = useState(true);
  const [formData, setFormData] = useState({
    org: "",
    add: "",
    position: "",
    jobTitle: "",
    dWStarted: "",
    dWEnded: "",
    started: "",
    isChecked: false,
    duty: "",
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
  const handleSubmit = (event) => {
    event.preventDefault();

    //Dispatch
    console.log(formData);

    setFormData({
      ...formData,
    });
  };

  const handleButtonClick = (event) => {
    handleSubmit(event);
    handleClose();
  };
  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  const handleShowDates = () => {
    setStart(!start);
    setShowSEDates(!showSEDates);
  };
  return (
    <div className="flex-row p-3 text-start mb-2 border bg-white border-grey rounded-2">
      <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
        <div className="fs-4 fw-bold">New Work Experience</div>
        <FontAwesomeIcon
          className="cursor-pointer text-primary"
          onClick={handleClose}
          icon={faCancel}
        />
      </div>
      <div>
        {fields.map((field, index) => {
          if (index >= 0 && index < 4) {
            return (
              <form onSubmit={handleSubmit}>
                <DataFields
                  type="text"
                  label={getLabel(field)}
                  value={formData[field]}
                  onChange={(value) => handleChange(field, value)}
                />
              </form>
            );
          } else if (index === 4) {
            return (
              <div className="d-flex justify-content-start py-2">
                <div className="">
                  <DataFields
                    type="checkbox"
                    value={formData[field]}
                    onChange={handleShowDates}
                  />
                </div>
                <div className="fs-13 ps-3">I currently work here</div>
              </div>
            );
          } else if (index === 5) {
            return (
              <div className="">
                {start && (
                  <div className="pb-2">
                    <DataFields
                      type="date"
                      label={getLabel(field)}
                      value={formData[field]}
                      onChange={(value) => handleChange(field, value)}
                    />
                  </div>
                )}
              </div>
            );
          } else if (index > 5 && index < 8) {
            return (
              <div className="">
                {showSEDates && (
                  <div className="pb-2">
                    <DataFields
                      type="date"
                      label={getLabel(field)}
                      value={formData[field]}
                      onChange={(value) => handleChange(field, value)}
                    />
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div className="">
                <DataFields
                  type="text"
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

export default NewExp;
