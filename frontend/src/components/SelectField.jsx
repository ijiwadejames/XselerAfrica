/** @format */

const SelectField = ({ width, pad }) => {
  return (
    <select
      className="inherit-background"
      style={{ width: width, margin: pad }}
    >
      <option>Select Experience</option>
      <option>Entry Level</option>
      <option>0-1 Year</option>
      <option>2-5 Years</option>
      <option>6-10 Years</option>
      <option>10+ Years</option>
    </select>
  );
};

export default SelectField;
