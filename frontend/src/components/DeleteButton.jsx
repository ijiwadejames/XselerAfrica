/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ onClick }) => {
  return (
    <div className="col-12 text-end cursor-pointer">
      <FontAwesomeIcon
        icon={faTrashAlt}
        onClick={onClick}
        className="btn btn-dark btn-sm"
      />
    </div>
  );
};

export default DeleteButton;
