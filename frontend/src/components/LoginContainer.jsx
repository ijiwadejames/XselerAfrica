/** @format */

import "../css/module.css";
import { useEffect, useState } from "react";
import { useDataContext } from "../Provider/ContextAPI";
import FPassword from "./FPassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
// import LoginAvatar from "./LoginAvatar";
// import pic from "../Assets/images/ProfilePictures/pic.jpg";
// import noProfile from "../Assets/images/ProfilePictures/no_profile.png";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login, reset } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { ButtonSpinner } from "./Spinner";

const LoginContainer = () => {
  const [show, setShow] = useState(false);
  const { description } = useDataContext();
  const { user, isSuccess, isError, message, isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Toogle Password ==> Show : Hide
  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = (values, actions) => {
    const formData = {
      email: values.email,
      password: values.password,
      rememberMe: values.rememberMe,
    };

    dispatch(login(formData));
    actions.setSubmitting(false);
  };

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isSuccess, dispatch]);

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex-row">
          <div className="row m-0 p-0 col-12 py-4">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="col-11 col-xs-11 col-sm-11 col-md-10 col-lg-6 m-auto border border-light bg-white loginPan shadow p-4 rounded-4">
                {message && (
                  <div className="p-2 m-auto rounded-2 border border-grey bg-danger text-light text-center font-13 fw-semibold my-2">
                    {message}
                  </div>
                )}

                <div className="col-12 text-center bg-dark text-light rounded-2 fw-bold border-bottom py-2">
                  MEMBER LOGIN
                </div>

                <div className="col-12 my-3">
                  <div className="col-12">
                    <label className="font-13" htmlFor="email">
                      Email
                    </label>
                  </div>
                  <div className="d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faUser} />
                    <Field
                      name="email"
                      placeholder="Email"
                      className="field_format ms-2"
                      type="text"
                    />
                  </div>
                  <div className="error_message">
                    <ErrorMessage name="email" />
                  </div>
                </div>

                <div className="col-12 my-3">
                  <div className="col-12">
                    <label className="font-13" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faLock} />
                    <Field
                      name="password"
                      className="field_format ms-2"
                      type={show ? "text" : "password"}
                      placeholder={show ? "password" : "********"}
                    />
                    <FontAwesomeIcon
                      onClick={handleShow}
                      className="cursor-pointer ms-2 font-13 bg-light border border-grey p-2"
                      icon={show ? faEyeSlash : faEye}
                    />
                  </div>
                  <div className="error_message">
                    <ErrorMessage name="password" />
                  </div>
                </div>

                <div className="d-flex justify-content-start mb-3 align-items-center">
                  <Field type="checkbox" name="rememberMe" />
                  <div className="ms-2 font-13">Remember Me</div>
                </div>

                <button
                  // disabled={isSubmitting}
                  className="btn btn-sm btn-dark"
                  type="submit"
                >
                  {isLoading ? <ButtonSpinner /> : "Login"}
                </button>
                <div className="border-top mt-3 pt-3">
                  <FPassword />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 m-auto fw-bold d-flex align-items-center justify-content-center authMsg">
              <div className="col-8 col-md-10 col-lg-12">
                {description.login}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginContainer;
