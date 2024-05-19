/** @format */

import {
  faCheck,
  faCheckCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PasswordReq = ({
  upperCase,
  lowerCase,
  specialChar,
  num,
  dataLength,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center border border-grey bg-light p-2 my-2 rounded-2 shadow-sm">
      <div style={{ fontSize: "12px" }}>
        <span className="fw-bold"> Password must</span>
        <ul className="mb-0">
          <li>
            <div
              className="fw-bold"
              style={{ color: dataLength >= 8 ? "green" : "#dc3545" }}
            >
              <FontAwesomeIcon icon={dataLength >= 8 ? faCheck : faTimes} />{" "}
              contain 8 Characters
            </div>
          </li>
          <li>
            <div className="fw-bold" style={{ color: num ? "green" : "#dc3545" }}>
              <FontAwesomeIcon icon={num ? faCheck : faTimes} /> must contain a
              number
            </div>
          </li>
          <li>
            <div
              className="fw-bold"
              style={{ color: upperCase ? "green" : "#dc3545" }}
            >
              <FontAwesomeIcon icon={upperCase ? faCheck : faTimes} /> contain
              UPPERCASE
            </div>
          </li>
          <li>
            <div
              className="fw-bold"
              style={{ color: lowerCase ? "green" : "#dc3545" }}
            >
              <FontAwesomeIcon icon={lowerCase ? faCheck : faTimes} /> contain
              lowercase
            </div>
          </li>
          <li>
            <div
              className="fw-bold"
              style={{ color: specialChar ? "green" : "#dc3545" }}
            >
              <FontAwesomeIcon icon={specialChar ? faCheck : faTimes} /> contain
              Special Character
            </div>
          </li>
        </ul>
      </div>

      <div className="fs-1">
        {upperCase && dataLength >= 8 && num && lowerCase && specialChar && (
          <FontAwesomeIcon style={{ color: "green" }} icon={faCheckCircle} />
        )}
      </div>
    </div>
  );
};

export default PasswordReq;
