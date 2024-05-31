/** @format */

import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { updateObjective } from "../../features/details/objectives/objectiveSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import DeleteButton from "../DeleteButton";
import ConfirmationBox from "../ConfirmationBox";
import {
  deleteObjective,
  getObjective,
} from "../../features/details/objectives/objectiveSlice";

const UpdateObjective = ({ data }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleSubmit = (values, actions) => {
    const formData = {
      objCode: values.objCode,
      objective: values.objective,
    };
    dispatch(updateObjective(formData)).then(() => {
      dispatch(getObjective());
      setEdit(false);
      actions.setSubmitting(false);
    });
  };

  const handleDelClick = (objCode) => {
    const formData = {
      objCode: objCode,
    };

    dispatch(deleteObjective(formData)).then(() => {
      dispatch(getObjective());
      setConfirmDelete(false);
    });
  };
  return (
    <Formik
      initialValues={{ objective: data.objective, objCode: data.objCode }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="col-12 bg-white rounded-2 shadow-sm p-3 mb-2 font-13">
          <div className="col-12 d-flex justify-content-between">
            <div>
              <FontAwesomeIcon
                className="mx-3 edit"
                onClick={() => setEdit(!edit)}
                icon={faEdit}
              />
            </div>
            <div className="">
              <DeleteButton onClick={() => setConfirmDelete(!confirmDelete)} />
            </div>
          </div>
          {confirmDelete && (
            <ConfirmationBox
              text="Are you sure you want to delete this qualification?"
              handleDel={() => handleDelClick(data.objCode)}
              handleClose={() => setConfirmDelete(false)}
            />
          )}

          {edit ? (
            <>
              <Field
                as="textarea"
                className="field_format"
                placeholder="Career Objective"
                name="objective"
              />

              <button type="submit" className="btn btn-sm btn-dark">
                SAVE
              </button>
            </>
          ) : (
            <div className="p-3">{data.objective}</div>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default UpdateObjective;
