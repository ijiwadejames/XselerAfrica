/** @format */
import { useState } from "react";
import DataFields from "./DataFields";
import TextArea from "./TextArea";
import Buttons from "./Buttons";
import SelectField from "./SelectField";

const NewJob = () => {
  const [formData, setFormData] = useState({
    role: "",
    location: "",
    experience: "",
    salary: "",
    jobdesc: "",
  });

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
    });
    //Dispatch
    console.log(formData);
  };

  return (
    <div className="col-12 m-auto mt-3 p-4 border border-grey bg-light rounded-2 flex-row shadow-lg">
      <h2 className="fw-bold ps-3">Post New Job</h2>
      <form onSubmit={handleSubmit}>
        <DataFields
          type="text"
          onChange={(value) => handleChange("role", value)}
          value={formData.role}
          placeholder="Job Title e.g. Data Scientist"
        />
        <DataFields
          type="text"
          onChange={(value) => handleChange("location", value)}
          value={formData.location}
          placeholder="Job Location e.g. Lagos"
        />
        <div className="dataInput p-0">
          {" "}
          <SelectField width="100%" pad="0px" />
        </div>

        <DataFields
          type="text"
          onChange={(value) => handleChange("salary", value)}
          value={formData.salary}
          placeholder="Salary"
        />
        <TextArea
          onChange={(value) => handleChange("jobdesc", value)}
          value={formData.jobdesc}
          placeholder="Job Description"
        />
        <Buttons value="Post Job" />
      </form>
    </div>
  );
};

export default NewJob;
