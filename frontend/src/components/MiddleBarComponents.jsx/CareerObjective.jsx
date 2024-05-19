/** @format */

import { useState } from "react";
import TextArea from "../TextArea";
import "../../css/module.css";
import Buttons from "../Buttons";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCancel,
  faEdit,
  faMinus,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const CareerObjective = () => {
  const { users } = useDataContext();
  const [open, setOpen] = useState(false);
  const [addnew, setAddNew] = useState(false);
  const [formData, setFormData] = useState({
    objective: users.objective,
  });

  const handleChange = (fieldName, value) => {
    setFormData({
      ...FormData,
      [fieldName]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  const addNew = () => {
    setAddNew(true);
  };

  const handleClick = (event) => {
    handleSubmit(event);
    setOpen(false);
  };

  return (
    <div className="col-12">
      <div className="col-12 my-2 text-end" onClick={addNew}>
        <FontAwesomeIcon className="btn btn-dark" icon={faPlus} />
      </div>
      {addnew && (
        <div className="flex-row p-3 mb-4 text-start border bg-white border-grey rounded-2">
          <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
            <div className="fs-4 fw-bold">Add New Objective</div>
            <div>
              <FontAwesomeIcon
                className="cursor-pointer textColor"
                icon={faCancel}
                onClick={() => setAddNew(false)}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="responsibilityForm col-12">
            <TextArea
              placeholder="Career Objective"
              onChange={(value) => handleChange("newobjective", value)}
              value=""
              row={4}
            />

            <Buttons
              onSubmit={handleSubmit}
              onClose={() => setAddNew(false)}
              value="ADD"
            />
          </form>
        </div>
      )}
      <div className="flex-row p-3 text-start border bg-white border-grey rounded-2">
        <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold">Career Objective</div>
          <div>
            <FontAwesomeIcon
              className="cursor-pointer text-primary"
              icon={open ? faMinus : faEdit}
              onClick={() => setOpen(!open)}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="textColor ms-3 cursor-pointer"
            />
          </div>
        </div>
        {open ? (
          <form onSubmit={handleSubmit} className="responsibilityForm col-12">
            <TextArea
              placeholder="Career Objective"
              onChange={(value) => handleChange("objective", value)}
              value={formData.objective}
              row={4}
            />

            <Buttons onClick={handleClick} value="SAVE" />
          </form>
        ) : (
          <div className="col-12 text-justify pt-3 font-13">
            {users.objective}
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerObjective;
