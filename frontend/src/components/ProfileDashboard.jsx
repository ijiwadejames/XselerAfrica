/** @format */

import ProficiencyContent from "./ProficiencyContent";

const ProfileDashboard = () => {
  return (
    <>
      <div className="row col-11 m-auto p-3 d-flex justify-content-between">
        <div className="col-12 col-sm-12 col-xs-12 col-md-12 col-lg-5 m-1 bg-white rounded-3 shadow-sm border-light">
          <div className="col-12 text-center">Proficiency Tab</div>
          <ProficiencyContent />
        </div>
        <div className="col-12 col-sm-12 col-xs-12 col-md-12 col-lg-5 m-1 bg-white rounded-3 shadow-sm border-light">
          Second Bar
        </div>
      </div>
    </>
  );
};

export default ProfileDashboard;
