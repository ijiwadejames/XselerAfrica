/** @format */
import { Link } from "react-router-dom";

const TemplatesImages = () => {
  return (
    <div className="d-flex justify-content-space align-items-center my-3">
      <div className="rounded bg-light border-dark col-4 me-1 text-dark fw-bold py-4 text-center ">
        <div className="bg-white p-1 m-1 rounded-3 cursor-pointer">
          <Link to="/cv-view" className="text-decoration-none">
            Generate CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TemplatesImages;
