/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const TemplateHeader = ({ desc }) => {
  return (
    <div className="col-12 m-1 p-2 fw-semibold d-flex justify-content-between text-color">
      <div> {desc} </div>
      <div>
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </div>
    </div>
  );
};

export default TemplateHeader;
