/** @format */

import { useState } from "react";
import PersonalDetails from "./MiddleBarComponents/PersonalDetails";
import CareerObjective from "./MiddleBarComponents/CareerObjective";
import AcademicQualifications from "./MiddleBarComponents/AcademicQualifications";
import WorkExperience from "./MiddleBarComponents/WorkExperience";
import Hobbies from "./MiddleBarComponents/Hobbies";
import StageIcon from "./StageIcon";

const ProfileStages = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const totalStages = 5;

  const stageComponents = {
    1: <PersonalDetails />,
    2: <CareerObjective />,
    3: <AcademicQualifications />,
    4: <WorkExperience />,
    5: <Hobbies />,
  };

  const handleStageChange = (stage) => {
    setCurrentStage(stage);
  };

  const handleNext = () => {
    if (currentStage < totalStages) {
      setCurrentStage(currentStage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStage > 1) {
      setCurrentStage(currentStage - 1);
    }
  };

  return (
    <div className="p-3" style={{ textAlign: "center" }}>
      <StageIcon stageNumber={currentStage} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            height: "2px",
            backgroundColor: "#007bff",
            zIndex: "-1",
          }}
        ></div>
        {[...Array(totalStages).keys()].map((index) => (
          <div
            key={index}
            onClick={() => handleStageChange(index + 1)}
            style={{
              cursor: "pointer",
              padding: "8px 12px",
              borderRadius: "4px",
              backgroundColor:
                currentStage === index + 1 ? "#007bff" : "#e9ecef",
              color: currentStage === index + 1 ? "#fff" : "#000",
              position: "relative",
              zIndex: "1",
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {stageComponents[currentStage]}

      <div className="d-flex my-3 justify-content-between align-items-center">
        <button
          className="btn btn-dark btn-sm"
          onClick={handlePrevious}
          disabled={currentStage === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-dark btn-sm"
          onClick={handleNext}
          disabled={currentStage === totalStages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileStages;
