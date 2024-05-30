/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const GetEditButton = ({ data, field, onClick }) => {
  if (data[field] !== "" && data[field] !== false) {
    return (
      <div>
        {data[field] === true ? (
          <div className="fw-bold"> I currently work here!</div>
        ) : (
          <>
            {field !== "orgCode" && (
              <div className="d-flex justify-content-between align-items-center">
                {data[field]}
                <FontAwesomeIcon
                  className="mx-3 edit"
                  icon={faEdit}
                  onClick={onClick}
                />
              </div>
            )}
          </>
        )}
      </div>
    );
  } else {
    return;
  }
};

export default GetEditButton;
