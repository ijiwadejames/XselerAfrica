/** @format */

import { useState } from "react";
import TextArea from "../TextArea";
import "../../css/module.css";
import Buttons from "../Buttons";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faMinus } from "@fortawesome/free-solid-svg-icons";

const Hobbies = () => {
  const { users } = useDataContext();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    hobbies: users.hobbies,
  });
  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  const handleSubmit = (event) => {
    // event.preventDefault();
    setFormData({
      ...formData,
    });
    //Dispatch
    console.log(formData);
  };
  const handleClick = (event) => {
    setOpen(false);
    handleSubmit(event);
  };

  return (
    <div className="col-12">
      <div className="flex-row p-3 text-start border bg-white border-grey rounded-2">
        <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold">Hobbies</div>
          <FontAwesomeIcon
            className="cursor-pointer text-primary"
            icon={open ? faMinus : faEdit}
            onClick={() => setOpen(!open)}
          />
        </div>
        {open ? (
          <form onSubmit={handleSubmit} className="responsibilityForm col-12">
            <TextArea
              placeholder="Hobbies"
              onChange={(value) => handleChange("hobbies", value)}
              value={formData.hobbies}
              row={1}
            />

            <Buttons onClick={handleClick} value="SAVE" />
          </form>
        ) : (
          <div className="col-12 text-justify pt-3 font-13">
            {users.hobbies}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hobbies;
