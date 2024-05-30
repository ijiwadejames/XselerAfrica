/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { expFields, getExpLabel } from "../MyFunctions";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import {
  addExperience,
  getExperience,
} from "../../features/details/workExperience/workExperienceSlice";

const NewExp = ({ handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const formData = {
      org: values.org,
      add: values.add,
      position: values.position,
      isChecked: values.isChecked,
      started: values.started,
      dWStarted: values.dWStarted,
      dWEnded: values.dWEnded,
      duty: values.duty,
    };

    //Dispatch
    dispatch(addExperience(formData)).then(() => {
      dispatch(getExperience());
      handleClose();
      actions.setSubmitting(false);
    });
  };

  return (
    <Formik
      initialValues={{
        org: "",
        add: "",
        position: "",
        jobTitle: "",
        isChecked: false,
        started: "",
        dWStarted: "",
        dWEnded: "",
        duty: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div className="flex-row p-3 text-start mb-2 border bg-white border-grey rounded-2">
            <div className="col-12 text-dark border-bottom pb-2 pt-0 d-flex justify-content-between align-items-center">
              <div className="fs-4 fw-bold">New Work Experience</div>
              <FontAwesomeIcon
                className="cursor-pointer text-primary"
                onClick={handleClose}
                icon={faCancel}
              />
            </div>
            <div>
              {expFields.map((field, index) => {
                if (index >= 0 && index < 3) {
                  return (
                    <>
                      {getExpLabel(field)}
                      <Field
                        type="text"
                        name={field}
                        className="field_format"
                      />
                    </>
                  );
                } else if (index === 3) {
                  return (
                    <div className="d-flex justify-content-start py-2">
                      <div className="">
                        {getExpLabel(field)}
                        <Field
                          type="checkbox"
                          name={field}
                          className="field_format"
                        />
                      </div>
                    </div>
                  );
                } else if (index === 4) {
                  return (
                    <div className="">
                      {values.isChecked && (
                        <div className="pb-2">
                          {getExpLabel(field)}
                          <Field
                            type="date"
                            name={field}
                            className="field_format"
                          />
                        </div>
                      )}
                    </div>
                  );
                } else if (index > 4 && index < 7) {
                  return (
                    <div className="">
                      {!values.isChecked && (
                        <div className="pb-2">
                          {getExpLabel(field)}
                          <Field
                            type="date"
                            name={field}
                            className="field_format"
                          />
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div className="">
                      {getExpLabel(field)}
                      <Field
                        type="text"
                        name={field}
                        className="field_format"
                      />
                    </div>
                  );
                }
              })}

              <button type="submit" className="btn btn-sm btn-dark">
                SAVE
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewExp;
