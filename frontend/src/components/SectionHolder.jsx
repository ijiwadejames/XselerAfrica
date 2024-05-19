/** @format */

import { useState } from "react";
import Hobbies from "./MiddleBarComponents.jsx/Hobbies";
import PersonalDetails from "./MiddleBarComponents.jsx/PersonalDetails";
import CareerObjective from "./MiddleBarComponents.jsx/CareerObjective";
import WorkExperience from "./MiddleBarComponents.jsx/WorkExperience";
import AcademicQualifications from "./MiddleBarComponents.jsx/AcademicQualifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faCertificate,
  faLightbulb,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../Provider/ContextAPI";

const SectionHolder = () => {
  const [selectedOptions, setSelectedOptions] = useState("");
  const { detailCat } = useDataContext();

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
  };
  const title = (name) => {
    if (name === "Career Objectives") {
      return (
        <>
          <FontAwesomeIcon icon={faLightbulb} /> Career Objectives
        </>
      );
    } else if (name === "Work Experience") {
      return (
        <>
          <FontAwesomeIcon icon={faBriefcase} /> Work Experience
        </>
      );
    } else if (name === "Academic Qualification") {
      return (
        <>
          <FontAwesomeIcon icon={faCertificate} /> Academic Qualification
        </>
      );
    } else if (name === "Personal Details") {
      return (
        <>
          <FontAwesomeIcon icon={faAddressCard} /> Personal Details
        </>
      );
    } else if (name === "Hobbies") {
      return (
        <>
          <FontAwesomeIcon icon={faPaintBrush} /> Hobbies
        </>
      );
    }
  };
  return (
    <div className="col-12 col-md-10 col-lg-10 mx-auto py-2">
      <select
        value={selectedOptions}
        onChange={handleChange}
        className="col-12 fs-5 bg-light rounded-3 p-3 border border-light"
      >
        <option className="selectSelect">Select Profile Menu</option>
        {detailCat.map((details, index) => (
          <option
            value={details}
            key={index}
            style={{ width: "100%", backgroundColor: "inherit" }}
          >
            {title(details)}
          </option>
        ))}
      </select>

      <div className="py-5">
        {selectedOptions === "Hobbies" && <Hobbies />}
        {selectedOptions === "Personal Details" && <PersonalDetails />}
        {selectedOptions === "Academic Qualification" && (
          <AcademicQualifications />
        )}
        {selectedOptions === "Career Objectives" && <CareerObjective />}
        {selectedOptions === "Work Experience" && <WorkExperience />}
      </div>
    </div>
  );
};

export default SectionHolder;
