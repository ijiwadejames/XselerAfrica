/** @format */

import { useState, useEffect } from "react";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from "../ProfilePicture";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { getLabel, fields } from "../MyFunctions";
import {
  updateDetails,
  reset,
} from "../../features/details/personal/personalSlice";
import { useDispatch, useSelector } from "react-redux";

const UpdatePersonalDetails = ({ details, isError, message }) => {
  const dispatch = useDispatch();
  const { users } = useDataContext();
  const [activeField, setActiveField] = useState(null);
  const { isSuccess } = useSelector((state) => state.details);

  const toggleField = (field) => {
    if (activeField === field) {
      setActiveField(null);
    } else {
      setActiveField(field);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [dispatch]);

  const handleSubmit = (values, actions) => {
    const formData = {
      email: details.email,
      phone: details.phone,
      address: details.address,
      website: details.website,
      linkedin: details.linkedin,
      portfolio: details.portfolio,
    };

    if (activeField) {
      formData[activeField] = values[activeField];
    }

    dispatch(updateDetails(formData));

    actions.setSubmitting(false);
    toggleField(activeField);
  };

  return (
    <Formik
      initialValues={{
        phone: details.phone,
        email: details.email,
        address: details.address,
        website: details.website,
        linkedin: details.linkedin,
        portfolio: details.portfolio,
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="row m-auto my-3 border border-grey rounded-2 py-3 bg-white shadow-sm d-flex justify-content-center align-items-center">
          <div className="col-xs-11 col-sm-11 col-md-12 col-lg-4 m-auto rounded-3">
            <ProfilePicture avatar={users.avatar} />
          </div>
          <div
            className="col-xs-11 col-sm-11 col-md-12 col-lg-8 font-13"
            style={{ lineHeight: "35px" }}
          >
            <div className="col-12 fw-bold border-bottom">Fullname</div>
            <div className="fw-semibold">
              {users.sname + " " + users.fname + " " + users.onames}
            </div>
            {fields.map((field) => (
              <div key={field}>
                <div className="col-12 fw-bold border-bottom">
                  {getLabel(field)}
                </div>
                {activeField === field ? (
                  <div className="d-flex justify-content-between my-1">
                    <Field
                      type="text"
                      placeholder={getLabel(field)}
                      className="field_format"
                      name={field}
                    />
                    <button
                      type="submit"
                      className="btn btn-sm btn-dark py-0 px-1"
                    >
                      SAVE
                    </button>
                  </div>
                ) : (
                  <div className="d-flex justify-content-between">
                    {isError ? (
                      <div className="error_message">{message}</div>
                    ) : (
                      <>
                        {!details[field] || details[field] === "" ? (
                          <div className="error_message">Nothing to show!</div>
                        ) : (
                          details[field]
                        )}
                      </>
                    )}

                    <FontAwesomeIcon
                      className="mx-3 edit"
                      icon={faEdit}
                      onClick={() => toggleField(field)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default UpdatePersonalDetails;
