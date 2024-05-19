/** @format */

import ProDesc from "./ProDesc";

const ProPlan = ({ plan }) => {
  return (
    <div className="plan">
      <div className="planTitle">ProPlan</div>
      <div className="planServices">Services</div>
      <div className="planDesc">
        <ProDesc />
      </div>
    </div>
  );
};

export default ProPlan;
