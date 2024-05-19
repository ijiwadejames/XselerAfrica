/** @format */

import { useEffect, useState } from "react";
import DataFields from "../DataFields";
import "../../css/module.css";
import Buttons from "../Buttons";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import UpdateWorkExp from "./UpdateWorkExp";
import NewExp from "./NewExp";

const WorkExperience = () => {
  const { users } = useDataContext();
  const [isActive, setIsActive] = useState(null);
  const [start, setStart] = useState(false);
  const [showSEDates, setShowSEDates] = useState(true);
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
  const [newExp, setNewExp] = useState(false);
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

  const handleShowDates = () => {
    setStart(!start);
    setShowSEDates(!showSEDates);
  };

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      isChecked: users.isChecked,
    });
  }, [users.isChecked, formData]);

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

  const handleNewExp = () => setNewExp(true);
  return (
    <div className="col-12">
      <div className="col-12 my-2 text-end">
        <FontAwesomeIcon
          className="btn btn-dark"
          onClick={handleNewExp}
          icon={faPlus}
        />
      </div>
      {newExp && <NewExp handleClose={() => setNewExp(!newExp)} />}
      <div className="flex-row p-3 text-start border bg-white border-grey rounded-2">
        <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold">Work Experience</div>
          <FontAwesomeIcon
            className="cursor-pointer text-primary"
            icon={isActive ? faMinus : faEdit}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        {isActive ? (
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
                        isChecked={formData[field]}
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
        ) : (
          <UpdateWorkExp />
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
