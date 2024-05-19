/** @format */
import { useState } from "react";
import { useDataContext } from "../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

const FaQ = () => {
  const [faq, setFaQ] = useState(0);
  const handleFaQ = (id) => setFaQ(id);
  const { fasq } = useDataContext();

  return (
    <div className="col-12 my-5 py-4">
      <div className="row col-10 d-flex justify-content-center fs-6 m-auto py-4 my-4 m-0">
        <div className="col-12 col-md-3 col-lg-4 fs-1 py-5 d-flex justify-content-center align-items-center bg-light text-center textColor rounded-3">
          <div>
            <FontAwesomeIcon icon={faCircleQuestion} />
            <div className="col-12 fw-bold fs-3">
              Frequently Asked Questions
            </div>
          </div>
        </div>
        <div className="row col-12 col-md-7 col-lg-7">
          {fasq.map((faqs, index) => {
            return (
              <div key={index}>
                <div
                  className="col-12 d-flex justify-content-between fs-4 fw-semibold cursor-pointer"
                  onClick={() => handleFaQ(faqs.id)}
                >
                  <div className="fs-6 fw-semibold">{faqs.question}</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faqs.id === faq ? faMinusCircle : faPlusCircle}
                    />
                  </div>
                </div>

                {faqs.id === faq && (
                  <div className="col-auto fs-6 p-2 my-2 rounded-4 bg-light border border-grey">
                    {faqs.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaQ;
