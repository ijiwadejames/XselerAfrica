/** @format */

import Bars from "./Bars";

const ProgressBar = () => {
  return (
    <div className="col-11 m-auto border border-light bg-white shadow rounded-3 p-3">
      <div className="col-12 fw-bold pb-2">Proficiency Level</div>
      <Bars tags="English" progress={20} />
      <Bars tags="Python" progress={70} />
      <Bars tags="FrontEnd" progress={47.2} />
      <Bars tags="NodeJs" progress={82.6} />
    </div>
  );
};

export default ProgressBar;
