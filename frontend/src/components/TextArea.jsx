/** @format */

import "../css/module.css";

const TextArea = ({ placeholder, row, value, onChange }) => {
  return (
    <div>
      <textarea
        className="col-12 m-3 fw-normal"
        rows={row}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        style={{ fontSize: "12px" }}
      />
    </div>
  );
};

export default TextArea;
