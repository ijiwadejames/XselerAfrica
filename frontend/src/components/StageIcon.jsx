/** @format */

import {
  faBriefcase,
  faBullseye,
  faGraduationCap,
  faSmile,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StageIcon = ({ stageNumber }) => {
  const stageIcon = () => {
    if (stageNumber === 1) {
      return <FontAwesomeIcon icon={faUserAlt} />;
    } else if (stageNumber === 2) {
      return <FontAwesomeIcon icon={faBullseye} />;
    } else if (stageNumber === 3) {
      return <FontAwesomeIcon icon={faGraduationCap} />;
    } else if (stageNumber === 4) {
      return <FontAwesomeIcon icon={faBriefcase} />;
    } else if (stageNumber === 5) {
      return <FontAwesomeIcon icon={faSmile} />;
    } else {
      return;
    }
  };

  return (
    <h3>
      <div className="col-2 col-xs-1 col-sm-1 col-md-2 col-lg-1 m-auto border border-grey rounded-2 bg-light shadow py-2 text-dark">
        {stageIcon()}
      </div>
    </h3>
  );
};

export default StageIcon;
