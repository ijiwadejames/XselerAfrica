/** @format */
import { useState } from "react";
import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../Assets/images/bg-inner-top.jpg";

const LoginPan = () => {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);

  const handleLogin = () => {
    setLogin(true);
    setSignup(false);
  };
  const handleSignup = () => {
    setSignup(true);
    setLogin(false);
  };

  return (
    <>
      <div className="bg-danger d-flex justify-content-center text-light text-center p-2 border-bottom border-top shadow-sm fw-semibold d-flex">
        <div>
          <FontAwesomeIcon icon={faSmile} />
          <div className="col-12">
            We are currently present in NIGERIA, GHANA, KENYA
          </div>
        </div>
      </div>

      <div
        className="row col-12 py-5 mb-3 mt-0 rowContainer"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "auto",
        }}
      >
        <div className="col-9 m-auto text-light p-2 my-3 rounded-5 fs-1 d-flex align-items-center justify-content-center">
          <div className="fw-semibold text-center">
            Simplifying your job search journey with ease and precision. <br />
            Unlock new opportunities effortlessly.
          </div>
        </div>

        <div className="col-12 p-2">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div
              className="col-3 col-mg-2 col-lg-1 btn border border-grey text-light m-2"
              onClick={handleLogin}
            >
              Login
            </div>
            <div
              className="col-3 col-mg-2 col-lg-1 btn border border-grey text-light m-2"
              onClick={handleSignup}
            >
              Signup
            </div>
          </div>
        </div>
      </div>

      <div className="my-5">
        {login && <LoginContainer />}
        {signup && <SignupContainer />}
      </div>
    </>
  );
};

export default LoginPan;
