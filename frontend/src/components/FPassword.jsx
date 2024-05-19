/** @format */

import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const FPassword = () => {
  const [fpass, setFPass] = useState(false);

  const handleFPassword = () => {
    setFPass(!fpass);
  };
  return (
    <>
      <div
        className="btn btn-danger cursor-pointer fw-bold"
        onClick={handleFPassword}
        style={{ fontSize: "11px" }}
      >
        Forgot Password?
      </div>

      {fpass && (
        <div className="col-12 fpModalRow d-flex justify-content-between align-items-center">
          <div className="fpModal col-12 col-md-6 col-lg-4 p-2 m-auto rounded-3 border border-light shadow">
            <div className="col-12 text-light text-center mb-3 fs-3 d-flex justify-content-between align-items-center">
              <div className="">Password Reset</div>
              <div className="">
                <div className="btn btn-light " onClick={() => setFPass(false)}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                </div>
              </div>
            </div>

            <div className="col-12">
              <ForgotPassword />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FPassword;
