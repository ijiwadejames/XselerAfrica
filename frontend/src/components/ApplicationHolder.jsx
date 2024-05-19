/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";

const ApplicationHolder = () => {
  return (
    <div className="table-container col-11">
      <div className="col-12 fs-5 fw-semibold p-3  bgBlue text-light shadow-sm rounded-2 my-3">
        <FontAwesomeIcon icon={faReceipt} /> My Applications
      </div>
      <table>
        <tbody>
          <tr>
            <th className="fw-bold bg-light">id</th>

            <th className="fw-bold bg-light">Organization Name</th>

            <th className="fw-bold bg-light">Location</th>

            <th className="fw-bold bg-light">Role</th>

            <th className="fw-bold bg-light">Application Status</th>
          </tr>

          <tr>
            <th>1</th>

            <th>XYZ Company Limited</th>

            <th>Lagos, NG</th>

            <th>Administrative Officer</th>

            <th>Completed</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationHolder;
