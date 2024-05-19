/** @format */

import FreeDesc from "./FreeDesc";

const FreePlan = ({ plan }) => {
  return (
    <div className="plan">
      <div className="planTitle">FreePlan</div>
      <div className="planServices">Services</div>
      <div className="planDesc">
        <FreeDesc />
      </div>
    </div>
  );
};

export default FreePlan;
