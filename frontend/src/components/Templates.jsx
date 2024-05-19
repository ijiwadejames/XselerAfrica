/** @format */

import { useState } from "react";
import { useDataContext } from "../Provider/ContextAPI";
import Notifications from "./Notifications";
import EntryLevel from "./CVTemplates/EntryLevel/EntryLevel";

const Templates = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { cvTemps } = useDataContext();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="col-12 col-xs-12 col-sm-12 col-md-10 col-lg-10 m-auto rounded-3 p-3 d-flex justify-content-center border border-light shadow bg-white">
      <div className="col-11 m-auto">
        <select
          value={selectedOption}
          onChange={handleChange}
          className="col-12 bg-light rounded-3 p-3 border border-light"
        >
          <option value={""}>Select Template</option>
          {cvTemps.map((temps, index) => (
            <option key={index} value={temps}>
              {temps}
            </option>
          ))}
        </select>

        <div className="py-5 col-12">
          {selectedOption === "" && (
            <Notifications value="Select a category!" />
          )}
          {selectedOption === "Entry Level" && <EntryLevel />}
          {selectedOption === "Professional" && (
            <Notifications value="Nothing to show yet!" />
          )}
          {selectedOption === "Academic CV" && (
            <Notifications value="Nothing to show yet!" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Templates;
