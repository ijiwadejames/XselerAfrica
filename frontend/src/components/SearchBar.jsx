/** @format */
import DataFields from "./DataFields";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onClick }) => {
  const handleChange = () => {};
  return (
    <div className="col-12 col-xs-12 col-sm-11 col-md-9 col-lg-6 m-auto bg-white border border-light shadow-sm rounded-2 mb-2">
      <div className="d-flex justify-content-between align-items-center p-2">
        <DataFields
          type="search"
          placeholder="Role, e.g React Developer"
          onChange={handleChange}
          className="col-12"
        />

        <FontAwesomeIcon
          className="text-light btn btn-dark p-2 bgBlue"
          onClick={onClick}
          icon={faSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
