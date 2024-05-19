/** @format */

import { useState } from "react";
import DataFields from "../DataFields";
import "../../css/module.css";
import Buttons from "../Buttons";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import UpdateQualification from "./UpdateQualification";
import NewAQualification from "./NewAQualification";

const AcademicQualifications = () => {
  const { users } = useDataContext();
  const [isActive, setIsActive] = useState(false);
  const [newQualification, setNewQualification] = useState(false);
  const [formData, setFormData] = useState({
    iAttended: users.iAttended,
    dStarted: users.dStarted,
    dEnded: users.dEnded,
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

  const handleNewQualification = () => {
    setNewQualification(true);
  };
  return (
    <div className="col-12">
      <div className="col-12 my-2 text-end">
        <FontAwesomeIcon
          className="btn btn-dark"
          onClick={handleNewQualification}
          icon={faPlus}
        />
      </div>
      {newQualification && (
        <NewAQualification
          handleClose={() => setNewQualification(!newQualification)}
        />
      )}
      <div className="flex-row p-3 text-start border bg-white border-grey rounded-2">
        <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold">Academic Qualification</div>
          <FontAwesomeIcon
            className="cursor-pointer text-primary"
            icon={isActive ? faMinus : faEdit}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        {isActive ? (
          <form onSubmit={handleSubmit}>
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
            </div>

            <Buttons value="SAVE" onClick={handleButtonClick} />
          </form>
        ) : (
          <UpdateQualification />
        )}
      </div>
    </div>
  );
};

export default AcademicQualifications;
