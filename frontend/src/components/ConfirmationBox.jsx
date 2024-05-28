/** @format */

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfirmationBox = ({ handleDel, handleClose, text }) => {
  return (
    <div className="">
      <div className="zIndex rounded-3 col-8 col-sm-8 col-xs-8 col-md-7 col-lg-4 bg-white flex-row m-auto p-0 border border-grey shadow">
        <div className="col-12 rounded-3 bg-color p-2 text-light text-start fw-semibold">
          <FontAwesomeIcon icon={faExclamationTriangle} /> Delete Confirmation
        </div>
        <div className="p-3">
          <div className="col-12 font-13">{text}</div>
          <div className="col-12 my-3 d-flex justify-content-center align-items-center">
            <div onClick={handleDel} className="btn btn-sm btn-danger m-auto">
              Yes
            </div>
            <div onClick={handleClose} className="btn btn-sm btn-dark m-auto">
              No
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
