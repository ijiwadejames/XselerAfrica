/** @format */

import "../../css/module.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Changed faCancel to faTimes
import { Formik, Form, Field, ErrorMessage } from "formik";
import { academicLabels, academicFields } from "../MyFunctions";
import { useDispatch, useSelector } from "react-redux";
import { newQualification } from "../../features/details/academicQualification/academicQualificationSlice";
import { Spinner } from ".././Spinner";

const NewAQualification = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.qualifications);

  const handleSubmit = (values, actions) => {
    const formData = {
      iAttended: values.iAttended,
      dAStarted: values.dAStarted,
      dAEnded: values.dAEnded,
      degree: values.degree,
      course: values.course,
      dClass: values.dClass,
    };

    dispatch(newQualification(formData));
    actions.setSubmitting(false);
    handleClose();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Formik
      initialValues={{
        iAttended: "",
        dAStarted: "",
        dAEnded: "",
        degree: "",
        course: "",
        dClass: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="flex-row p-3 pb-0 text-start border bg-white mb-3 border-grey rounded-2">
          <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
            <div className="fs-4 fw-bold">New Academic Qualification</div>
            <FontAwesomeIcon
              className="cursor-pointer text-primary"
              onClick={handleClose}
              icon={faTimes} // Changed faCancel to faTimes
            />
          </div>

          <div className="my-4">
            {academicFields.map((field, index) => (
              <>
                {index !== 6 && (
                  <div key={field} className="my-4">
                    <label htmlFor={field}>{academicLabels(field)}</label>
                    <Field
                      id={field}
                      name={field}
                      type={index >= 0 && index < 4 ? "text" : "date"}
                      className="field_format"
                      placeholder={academicLabels(field)}
                    />
                    <ErrorMessage
                      name={field}
                      component="div"
                      className="field-error"
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-sm btn-dark mb-3">
          SUBMIT
        </button>
      </Form>
    </Formik>
  );
};

export default NewAQualification;
