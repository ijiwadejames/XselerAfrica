/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import avatar from ".././Assets/images/avatar.jpg";
import ProfilePicture from "./ProfilePicture";

const WhatWeDo = () => {
  return (
    <div
      className="col-12 services my-5 py-4 mt-0"
      style={{ transform: `rotate(0deg)` }}
    >
      <div
        className="row col-10 m-auto d-flex justify-content-center p-3 my-4 m-0"
        style={{ transform: `rotate(5deg)` }}
      >
        <div className="col-12 col-md-3 col-lg-4 rounded-3 d-flex align-items-center justify-content-center fs-2 fw-semibold text-center">
          <ProfilePicture avatar={avatar} alt="What_we_do" />
        </div>
        <div className="col-12 col-md-7 col-lg-7 fs-6 fw-normal text-start p-4 text-light">
          <div className="col-12 fw-bold fs-4">Expert design services</div>
          We'll bring your vision to life with custom Resume design and unique
          copy.
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} /> FREE Resume Build
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Professional CV Review
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Unlimited CV Downloads
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Access to Professional CV
              Templates
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Land a job 5
              <span className="fw-bold fs-6">
                <FontAwesomeIcon icon={faTimes} />
              </span>{" "}
              faster
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Job Application Submission
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
