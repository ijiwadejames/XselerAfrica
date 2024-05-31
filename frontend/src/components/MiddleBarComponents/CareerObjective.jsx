/** @format */

import { useEffect, useState } from "react";
import "../../css/module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NewObjective from "./NewObjective";
import UpdateObjective from "./UpdateObjective";
import { getObjective } from "../../features/details/objectives/objectiveSlice";
import { useDispatch, useSelector } from "react-redux";
import Notifications from "../Notifications";
import { Spinner } from "../Spinner";

const CareerObjective = () => {
  const dispatch = useDispatch();
  const [addnew, setAddNew] = useState(false);
  const { objectives, isLoading } = useSelector((state) => state.objectives);
  const addNew = () => {
    setAddNew(true);
  };

  useEffect(() => {
    dispatch(getObjective());
  }, [dispatch]);

  return (
    <div className="col-12">
      {isLoading && <Spinner />}
      <div className="col-12 my-2 text-end" onClick={addNew}>
        <FontAwesomeIcon className="btn btn-dark" icon={faPlus} />
      </div>
      {addnew && <NewObjective closeNewField={() => setAddNew(false)} />}
      <div className="flex-row p-3 text-start bg-light">
        <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
          <div className="fs-4 fw-bold">Career Objective</div>
        </div>
        {objectives.length > 0 ? (
          objectives.map((data, index) => (
            <div key={index}>
              <UpdateObjective data={data} />
            </div>
          ))
        ) : (
          <Notifications value="No record found for user!" />
        )}
      </div>
    </div>
  );
};

export default CareerObjective;
