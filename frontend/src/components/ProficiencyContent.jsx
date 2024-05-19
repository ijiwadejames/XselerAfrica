/** @format */
import SetProficiency from "./SetProficiency";

const ProficiencyContent = () => {
  const skills = ["Communication", "Problem Solving", "English", "Team Work"];

  return (
    <>
      {skills.map((skill, index) => (
        <>
          <div key={index} className="skillHolder p-3">
            <SetProficiency skill={skill} />
          </div>
        </>
      ))}
    </>
  );
};

export default ProficiencyContent;
