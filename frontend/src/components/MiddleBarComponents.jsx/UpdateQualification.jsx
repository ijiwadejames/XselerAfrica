/** @format */

import { useEffect, useState } from "react";
import "../../css/module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faGraduationCap,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { academicLabels, academicFields } from "../MyFunctions";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  updateQualification,
  getQualification,
  delQual,
  reset,
} from "../../features/details/academicQualification/academicQualificationSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "../DeleteButton";
import ConfirmationBox from "../ConfirmationBox";

const UpdateQualification = ({ data, isError, message }) => {
  const [isActive, setIsActive] = useState(null);
  const dispatch = useDispatch();
  const [confirmDel, setConfirmDel] = useState(false);

  const toggleFields = (field) => {
    setIsActive(isActive === field ? null : field);
  };

  const handleSubmit = (values, actions) => {
    const formData = {
      ...data,
      [isActive]: values[isActive],
    };

    // Dispatch the update action
    dispatch(updateQualification(formData));

    // Reset the form state
    actions.setSubmitting(false);
    setIsActive(null);
  };

  const handleConfirmDelete = (id) => {
    const formData = {
      id,
    };
    dispatch(delQual(formData));

    return () => {
      dispatch(reset());
    };
  };

  const handleDelClick = (id) => {
    handleConfirmDelete(id);
    setConfirmDel(false);
    dispatch(getQualification());
  };

  return (
    <Formik
      initialValues={{
        iAttended: data.iAttended,
        degree: data.degree,
        course: data.course,
        dClass: data.dClass,
        dAStarted: data.dAStarted,
        dAEnded: data.dAEnded,
        qualCode: data.qualCode,
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="row m-auto my-3 border border-grey rounded-2 py-3 bg-white shadow-sm d-flex justify-content-center align-items-center">
            <DeleteButton onClick={() => setConfirmDel(!confirmDel)} />

            {confirmDel && (
              <ConfirmationBox
                text="Are you sure you want to delete this qualification?"
                handleDel={() => handleDelClick(data._id)}
                handleClose={() => setConfirmDel(false)}
              />
            )}

            <div className="col-xs-11 col-sm-11 col-md-12 col-lg-4 fs-1 text-light fw-bold">
              <div className="bg-white border border-grey rounded-2 text-center text-color">
                <div className="bg-color m-1 py-5 rounded-2 text-center text-light">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
              </div>
            </div>
            <div className="col-xs-11 col-sm-11 col-md-12 col-lg-8 font-13 m-auto">
              {academicFields.map((field, index) => (
                <div key={field} className="col-11 font-13 mb-2">
                  {index !== 6 && (
                    <div className="col-12 fw-bold border-bottom">
                      {academicLabels(field)}
                    </div>
                  )}
                  {isActive === field ? (
                    <div className="d-flex justify-content-between align-items-center">
                      <Field
                        type="text"
                        name={field}
                        className="field_format"
                      />

                      <button
                        type="submit"
                        className="btn btn-sm btn-dark py-0 px-1"
                        disabled={isSubmitting}
                      >
                        SAVE
                      </button>
                      <FontAwesomeIcon
                        icon={faTimes}
                        onClick={() => setIsActive(false)}
                        className="m-auto ms-1 btn btn-danger"
                      />
                    </div>
                  ) : (
                    <div className="d-flex justify-content-between align-items-center">
                      {index !== 6 && (
                        <>
                          {isError ? (
                            <div className="error_message">{message}</div>
                          ) : (
                            <>
                              {!data[field] || data[field] === "" ? (
                                <div className="error_message">
                                  Nothing to show!
                                </div>
                              ) : (
                                data[field]
                              )}
                            </>
                          )}
                          <FontAwesomeIcon
                            className="mx-3 edit"
                            icon={faEdit}
                            onClick={() => toggleFields(field)}
                          />
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateQualification;
