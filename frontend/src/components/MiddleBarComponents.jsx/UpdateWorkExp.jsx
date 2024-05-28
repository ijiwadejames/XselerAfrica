/** @format */

import { useState } from "react";
import "../../css/module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSuitcase, faTimes } from "@fortawesome/free-solid-svg-icons";
import { expFields, getExpLabel } from "../MyFunctions";
import { Formik, Form, Field } from "formik";
import DeleteButton from "../DeleteButton";
import ConfirmationBox from "../ConfirmationBox";
import {
  delExperience,
  getExperience,
  reset,
} from "../../features/details/workExperience/workExperienceSlice";
import { useDispatch } from "react-redux";

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
    dispatch(getExperience());
  };

  const handleConfirmDelete = (orgCode) => {
    const formData = {
      orgCode,
    };
    dispatch(delExperience(formData));

    return () => {
      dispatch(reset());
    };
  };

  const getEditButton = (field) => {
    if (data[field] !== "" && data[field] !== false) {
      return (
        <div>
          {data[field] === true ? (
            <div className="fw-bold"> I currently work here!</div>
          ) : (
            <div className="d-flex justify-content-between align-items-center">
              {data[field]}
              <FontAwesomeIcon
                className="mx-3 edit"
                icon={faEdit}
                onClick={() => toggleFields(field)}
              />
            </div>
          )}
        </div>
      );
    } else {
      return;
    }
  };

  const handleSubmit = (values, actions) => {
    const formData = {
      ...formData,
      [isActive]: values[isActive],
    };
    //Dispatch
    console.log(formData);
    actions.setSubmitting(false);
  };

  // const handleButtonClick = (event) => {
  //   handleSubmit(event);
  //   setIsActive(false);
  // };

  return (
    <Formik
      initialValues={{
        org: "",
        add: "",
        position: "",
        isChecked: "",
        started: "",
        dWStarted: "",
        dWEnded: "",
        duty: "",
      }}
      onSubmit={handleSubmit}
    >
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
          <div
            className="col-xs-11 col-sm-11 col-md-12 col-lg-8 font-13 m-auto"
            // style={{ lineHeight: "30px", height: "100%" }}
          >
            {expFields.map((field) => (
              <div
                className="col-11 font-13"
                // style={{ lineHeight: "30px" }}
                key={field}
              >
                {data[field] !== "" && data[field] !== false && (
                  <>
                    {getExpLabel(field) && (
                      <div className="col-12 fw-bold border-bottom">
                        {data[field] !== true && <>{getExpLabel(field)}</>}
                      </div>
                    )}
                  </>
                )}
                {isActive === field ? (
                  <div className="d-flex justify-content-between mb-2 align-items-center">
                    <Field type="text" name={field} className="field_format" />

                    <button type="submit" className="btn btn-sm btn-dark">
                      SAVE
                    </button>
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={() => setIsActive(false)}
                      className="m-auto ms-1 btn btn-danger"
                    />
                  </div>
                ) : (
                  <div className="mb-3">{getEditButton(field)}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default UpdateWorkExp;
