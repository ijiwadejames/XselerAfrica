/** @format */

import { useState, useEffect } from "react";
import "../../css/module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import UpdateWorkExp from "./UpdateWorkExp";
import NewExp from "./NewExp";
import { getExperience } from "../../features/details/workExperience/workExperienceSlice";
import { useDispatch, useSelector } from "react-redux";
import Notifications from "../Notifications";

const WorkExperience = () => {
  const [newExp, setNewExp] = useState(false);
  const dispatch = useDispatch();
  const handleNewExp = () => setNewExp(true);
  const { works } = useSelector((state) => state.works);

  useEffect(() => {
    dispatch(getExperience());
  }, [dispatch]);

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
      <div className="flex-row p-3 text-start bg-light">
        <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold">Work Experience</div>
        </div>
        {works.length > 0 ? (
          works.map((work, index) => (
            <div key={index}>
              <UpdateWorkExp data={work} />
            </div>
          ))
        ) : (
          <Notifications value="No record found for user!" />
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
