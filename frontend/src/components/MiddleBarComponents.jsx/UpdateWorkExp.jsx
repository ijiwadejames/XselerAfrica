/** @format */

import { useEffect, useState } from "react";
import "../../css/module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faTimes } from "@fortawesome/free-solid-svg-icons";
import { expFields, getExpLabel } from "../MyFunctions";
import { Formik, Form, Field } from "formik";
import DeleteButton from "../DeleteButton";
import ConfirmationBox from "../ConfirmationBox";
import {
  delExperience,
  getExperience,
  updateExperience,
  reset,
} from "../../features/details/workExperience/workExperienceSlice";
import { useDispatch } from "react-redux";
import GetEditButton from "../WorkStatus";

const UpdateWorkExp = ({ data }) => {
  const [isActive, setIsActive] = useState(null);
  const [confirmDel, setConfirmDel] = useState(false);
  const dispatch = useDispatch();

  const toggleFields = (field) => {
    if (isActive === field) {
      setIsActive(null);
    } else {
      setIsActive(field);
    }
  };

  const handleDelClick = (orgCode) => {
    handleConfirmDelete(orgCode);
    setConfirmDel(false);
  };

  useEffect(() => {
    dispatch(getExperience());
  }, [dispatch]);

  useEffect(() => {
    if (confirmDel === false) {
      dispatch(getExperience());
    }
  }, [confirmDel, dispatch]);

  const handleConfirmDelete = (orgCode) => {
    const formData = { orgCode };
    dispatch(delExperience(formData)).then(() => {
      dispatch(getExperience());
    });

    return () => {
      dispatch(reset());
    };
  };

  const handleSubmit = (values, actions) => {
    const formData = { ...values, [isActive]: values[isActive] };

    dispatch(updateExperience(formData)).then(() => {
      dispatch(getExperience());
      actions.setSubmitting(false);
      setIsActive(null);
    });
  };

  return (
    <Formik
      initialValues={{
        org: data.org,
        add: data.add,
        position: data.position,
        isChecked: data.isChecked,
        started: data.started,
        dWStarted: data.dWStarted,
        dWEnded: data.dWEnded,
        duty: data.duty,
        orgCode: data.orgCode,
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
                handleDel={() => handleDelClick(data.orgCode)}
                handleClose={() => setConfirmDel(false)}
              />
            )}

            <div className="col-xs-11 col-sm-11 col-md-12 col-lg-4 fs-1 text-light fw-bold">
              <div className="bg-white border border-grey rounded-2 text-center text-color">
                <div className="bg-color m-1 py-5 rounded-2 text-center text-light">
                  <FontAwesomeIcon icon={faSuitcase} />
                </div>
              </div>
            </div>
            <div className="col-xs-11 col-sm-11 col-md-12 col-lg-8 font-13 m-auto">
              {expFields.map((field) => (
                <div className="col-11 font-13" key={field}>
                  {data[field] !== "" && data[field] !== false && (
                    <>
                      {getExpLabel(field) && (
                        <div className="col-12 fw-bold border-bottom">
                          {data[field] !== true && <>{getExpLabel(field)}</>}
                        </div>
                      )}
                    </>
                  )}
                  {isActive === field && field !== "orgCode" ? (
                    <div className="d-flex justify-content-between mb-2 align-items-center">
                      <Field
                        type="text"
                        name={field}
                        className="field_format"
                      />
                      <button
                        type="submit"
                        className="btn btn-sm btn-dark"
                        disabled={isSubmitting}
                      >
                        SAVE
                      </button>
                      <FontAwesomeIcon
                        icon={faTimes}
                        onClick={() => setIsActive(null)}
                        className="m-auto ms-1 btn btn-danger"
                      />
                    </div>
                  ) : (
                    <div className="mb-3">
                      <GetEditButton
                        field={field}
                        onClick={() => toggleFields(field)}
                        data={data}
                      />
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

export default UpdateWorkExp;
