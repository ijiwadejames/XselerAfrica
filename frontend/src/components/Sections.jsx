/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faCertificate,
  faLightbulb,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

const Sections = ({ name, onClick }) => {
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
          <FontAwesomeIcon icon={faCertificate} /> Qualification
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
    <>
      <div className="section" onClick={onClick}>
        <div className="section-holder">{title(name)}</div>
      </div>
    </>
  );
};

export default Sections;
