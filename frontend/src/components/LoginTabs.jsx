/** @format */

import Stat from "./Stat";
import WhatWeDo from "./WhatWeDo";
import Partners from "./Partners";
import FaQ from "./FaQ";
import LoginPan from "./LoginPan";

const LoginTabs = () => {
  return (
    <div className="col-12 m-0 p-0">
      <LoginPan />
      <Stat />
      <WhatWeDo />
      <FaQ />
      <Partners />
    </div>
  );
};

export default LoginTabs;
