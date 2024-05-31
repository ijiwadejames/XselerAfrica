/** @format */

import { useEffect } from "react";
import "../../css/module.css";
import UpdatePersonalDetails from "./UpdatePersonalDetails";
import { getDetails } from "../../features/details/personal/personalSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../Spinner";

const PersonalDetails = () => {
  const dispatch = useDispatch();

  const { details, isError, message, isLoading } = useSelector(
    (state) => state.details
  );

  useEffect(() => {
    dispatch(getDetails());
  }, [dispatch]);

  return (
    <div className="col-12">
      <div className="flex-row p-3 text-start">
        <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
          <div className="col-12 fs-4 fw-bold d-flex justify-content-start align-items-center">
            {isLoading && (
              <div className=" me-2">
                <Spinner />
              </div>
            )}
            <div className="col-10">Personal Details</div>
          </div>
        </div>

        <UpdatePersonalDetails
          isError={isError}
          message={message}
          details={details && details}
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
