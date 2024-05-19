/** @format */

import React from "react";
import "../css/module.css";

const DataFields = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  optional,
  width,
}) => {
  return (
    <>
      <span className="field-label">{label}</span>
      <input
        className="dataInput col-xs-12 fw-semibold"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ width: width, fontSize: "12px" }}
      />{" "}
      {optional}
    </>
  );
};

export default DataFields;
