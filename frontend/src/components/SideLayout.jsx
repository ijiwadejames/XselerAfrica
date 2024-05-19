/** @format */

import SearchBar from "./SearchBar";
import SubscriptionHolder from "./Subscriptions/SubscriptionHolder";
import Templates from "./Templates";
import ProgressBar from "./ProgressBar";

const SideLayout = ({ children }) => {
  return (
    <div className="row m-0 p-0 col-12 bg-light d-flex justify-content-center">
      <div className="col-11 col-sm-11 col-md-4 col-lg-3 m-auto mt-3">
        <div className="mainScreen">
          <ProgressBar />
        </div>
        <SubscriptionHolder mainScreen="desktop" />
      </div>

      <div className="col-11 col-sm-11 flex-row justify-content-center col-md-5 col-lg-6 mb-2 mt-3 m-auto">
        <SearchBar />
        {children}
      </div>

      <div className="col-11 col-sm-11 col-md-3 col-lg-3 m-auto mt-3">
        <Templates />
      </div>
      <div className="mobileScreen mt-5">
        <ProgressBar />
      </div>
      <SubscriptionHolder mobile="mobile" />
    </div>
  );
};

export default SideLayout;
