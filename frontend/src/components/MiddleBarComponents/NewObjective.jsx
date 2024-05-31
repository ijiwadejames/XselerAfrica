/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field } from "formik";
import {
  createObjective,
  getObjective,
} from "../../features/details/objectives/objectiveSlice";
import { useDispatch } from "react-redux";

const NewObjective = ({ closeNewField }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const formData = {
      objective: values.objective,
    };

    dispatch(createObjective(formData)).then(() => {
      dispatch(getObjective());
      closeNewField();
      actions.setSubmitting(false);
    });
  };
  return (
    <Formik initialValues={{ objective: "" }} onSubmit={handleSubmit}>
      <Form>
        <div className="flex-row p-3 mb-4 text-start border bg-white border-grey rounded-2">
          <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
            <div className="fs-4 fw-bold">Add New Objective</div>
            <div>
              <FontAwesomeIcon
                className="cursor-pointer textColor"
                icon={faCancel}
                onClick={closeNewField}
              />
            </div>
          </div>

          <Field
            as="textarea"
            name="objective"
            className="field_format"
            placeholder="Career Objective"
          />
          <button type="submit" className="btn btn-sm btn-dark">
            ADD
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default NewObjective;
