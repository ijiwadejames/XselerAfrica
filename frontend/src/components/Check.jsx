/** @format */

import React from "react";

const Check = ({ isChecked }) => {
  return (
    <div className="check-row">
      <input type="checkbox" onChange={isChecked} />
      <span label="check-label">I still work here</span>
    </div>
  );
};

export default Check;
