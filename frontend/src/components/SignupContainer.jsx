/** @format */

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/module.css";
import { useDataContext } from "../Provider/ContextAPI";
import FPassword from "./FPassword";
import { useState, useEffect } from "react";
import PasswordReq from "./PasswordReq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { register, logout, reset } from "../features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonSpinner } from "./Spinner";

const SignupContainer = () => {
  const { description } = useDataContext();
  const [passReq, setPassReq] = useState(false);
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [dataLength, setDataLength] = useState(false);
  const dispatch = useDispatch();

  // Toggle Password ==> Show : Hide
  const handleShow = () => {
    setShow(!show);
  };
  const { user, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (values, actions) => {
    const formData = {
      email: values.email,
      password: values.password,
    };

    dispatch(register(formData));
    actions.setSubmitting(false); // Ensure you stop the submission state
  };

  useEffect(() => {
    if (isSuccess || user) {
      setTimeout(() => {
        toast.success(
          `       A verification code has been sent to ${user.email.toLowerCase()}`
        );
      }, 1000);

      setTimeout(() => {
        dispatch(logout());
      }, 1500);
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch]);

  const handlePasswordChange = (e, setFieldValue) => {
    const { value } = e.target;

    // Check for UPPERCASE in Password
    const checkUpperCase = /[A-Z]/.test(value);
    setUpperCase(checkUpperCase);

    // Check for LOWERCASE in Password
    const checkLowerCase = /[a-z]/.test(value);
    setLowerCase(checkLowerCase);

    // Check for NUMBERS in Password
    const checkNum = /[0-9]/.test(value);
    setNum(checkNum);

    // Check for SPECIAL CHAR in Password
    const checkSpecialChar = /[@#$%^&*.]/.test(value);
    setSpecialChar(checkSpecialChar);

    // Check dataLength
    setDataLength(value.length);

    // Set field value in Formik
    setFieldValue("password", value);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }} // Include password in initialValues
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Provide a valid email address")
          .required("Email is required"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters long")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*.])/,
            "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
          ),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <div className="row m-0 p-0 col-12 py-4">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="col-11 col-xs-11 col-sm-11 col-md-10 col-lg-6 m-auto border border-light bg-white loginPan shadow p-4 rounded-4">
                <ToastContainer />
                {message && (
                  <div className="p-2 m-auto rounded-2 border border-grey bg-danger text-light text-center font-13 fw-semibold my-2">
                    {message}
                  </div>
                )}
                <div className="col-12 text-center bg-dark text-light rounded-2 fw-bold border-bottom py-2">
                  SIGNUP
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
                      onFocus={() => setPassReq(true)} // Ensure to set passReq true on focus
                      onBlur={() => setPassReq(false)} // Ensure to set passReq false on blur
                      onChange={(e) => handlePasswordChange(e, setFieldValue)}
                      autoComplete="new-password"
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

                <button
                  className="btn btn-sm btn-dark"
                  type="submit"
                  // disabled={isSubmitting}
                >
                  {isLoading ? <ButtonSpinner /> : "Join"}
                </button>

                {passReq && (
                  <PasswordReq
                    dataLength={dataLength}
                    upperCase={upperCase}
                    num={num}
                    specialChar={specialChar}
                    lowerCase={lowerCase}
                  />
                )}
                <div className="border-top mt-3 pt-3">
                  <FPassword />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 m-auto fw-bold d-flex align-items-center justify-content-center authMsg">
              <div className="col-8 col-md-10 col-lg-12">
                {description.newAccount}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupContainer;
