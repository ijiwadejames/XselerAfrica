/** @format */

import { useEffect, useState } from "react";
import "../../css/module.css";
import UpdateQualification from "./UpdateQualification";
import NewAQualification from "./NewAQualification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getQualification } from "../../features/details/academicQualification/academicQualificationSlice";
import Notifications from "../Notifications";

const AcademicQualifications = () => {
  const [newQualification, setNewQualification] = useState(false);
  const dispatch = useDispatch();

  const handleNewQualification = () => {
    setNewQualification(true);
  };

  useEffect(() => {
    dispatch(getQualification());
  }, [dispatch]);

  const { qualifications, isError, message } = useSelector(
    (state) => state.qualifications
  );

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
        <NewAQualification handleClose={() => setNewQualification(false)} />
      )}
      <div className="flex-row p-3 text-start">
        <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold">Academic Qualification</div>
        </div>
        {qualifications.length > 0 ? (
          qualifications.map((qual, index) => (
            <div key={index}>
              <UpdateQualification
                data={qual}
                isError={isError}
                message={message}
              />
            </div>
          ))
        ) : (
          <>
            <Notifications value="You have no records!" />
          </>
        )}
      </div>
    </div>
  );
};

export default AcademicQualifications;
