/** @format */

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewJob from "./NewJob";
import {
  faMinus,
  faPlus,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const NewJobHandler = () => {
  const [postJob, setPostJob] = useState(false);

  return (
    <div>
      <div className="col-12">
        <div className="btn btn-dark" onClick={() => setPostJob(!postJob)}>
          <FontAwesomeIcon icon={postJob ? faMinus : faPlus} /> New Job
        </div>
        {/* <div className="fw-bold p-1 textColor">Post Job</div> */}
      </div>
      {postJob && (
        <div className="newPostModal flex-row">
          <div className="col-11 col-xs-11 col-sm-11 col-md-8 col-lg-5 col-xl-5">
            <div
              className="col-12 d-flex justify-content-center align-items-center"
              onClick={() => setPostJob(false)}
            >
              <FontAwesomeIcon className="btn btn-light" icon={faTimesCircle} />
            </div>
            <NewJob />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewJobHandler;
