/** @format */

import NewJobHandler from "./NewJobHandler";
import Notifications from "./Notifications";

const DashboardFeeder = () => {
  return (
    <>
      <NewJobHandler />

      <Notifications value="No Jobs Listing!" />
    </>
  );
};

export default DashboardFeeder;
