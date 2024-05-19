/** @format */

import { useEffect, useState } from "react";
import Pay from "../Pay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import ProDesc from "../ProDesc";
import LiteDesc from "../LiteDesc";
import FreeDesc from "../FreeDesc";
import { useDataContext } from "../../Provider/ContextAPI";
import Cookies from "js-cookie";

const Subs = ({ service }) => {
  const [payment, setPayment] = useState(false);
  const [fee, setFee] = useState(0);
  const [currency, setCurrency] = useState("");
  const [liteDetails, setLiteDetails] = useState([]);
  const [proDetails, setProDetails] = useState([]);
  const { defCountry } = useDataContext();

  useEffect(() => {
    const timer = setInterval(() => {
      const initialCurrency = defCountry.find(
        (crcy) => crcy.country === Cookies.get("Country")
      );

      if (initialCurrency) {
        setCurrency(initialCurrency.currency);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [defCountry]);

  const handleSubscription = () => {
    setPayment(!payment);
  };

  const planDescription = () => {
    if (service === "Lite") {
      return <LiteDesc />;
    } else if (service === "Pro") {
      return <ProDesc />;
    } else {
      return <FreeDesc />;
    }
  };

  const handlePlan = (event) => {
    setFee(event.target.value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const getCountry = Cookies.get("Country");
      {
        defCountry.find((dCountry) => {
          dCountry.country === getCountry && dCountry.plan === "Lite" && (
            <>{setLiteDetails(dCountry.details.durAmount)}</>
          );
        });
      }
      {
        defCountry.find((dCountry) => {
          dCountry.country === getCountry && dCountry.plan === "Pro" && (
            <>{setProDetails(dCountry.details.durAmount)}</>
          );
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [defCountry, Cookies]);

  return (
    <div>
      <div className="col-10 m-auto">
        {service === "Pro" && (
          <div className="col-12 d-flex justify-content-between">
            <div></div>
            <div
              className="tag textBlue fw-bold p-1 px-2"
              style={{ fontSize: "12px" }}
            >
              Most Popular
            </div>
          </div>
        )}

        <div className="oval mt-4">.</div>
        <div className="text-dark fw-bold fs-5 ps-0 p-3 pb-0 text-light rounded-3">
          {service}
        </div>

        <div className="p-3 ps-0 pt-0 text-justify fw-semibold descStyle">
          {service === "Free" && (
            <>On this Plan, the underlisted are FREE forever</>
          )}
          {service === "Lite" && (
            <>
              This plan offers additional features including jobs application
              submissions
            </>
          )}
          {service === "Pro" && (
            <>
              On the Pro Plan, we help you submit 30 trackable jobs to any
              location of your choice.
            </>
          )}
        </div>
      </div>

      <div className="col-12 mt-2 py-3 bg-light">
        <div className="col-11 m-auto">
          <div className="p-3 pt-0 fw-bold">
            {service === "Lite" && (
              <>
                Everything in Free <FontAwesomeIcon icon={faPlus} />
              </>
            )}
            {service === "Pro" && (
              <>
                Everything in Lite <FontAwesomeIcon icon={faPlus} />{" "}
                {liteDetails.amount}
              </>
            )}
          </div>
          <div className="col-12 p-0 m-0 descStyle">{planDescription()}</div>
        </div>
      </div>
      <div className="col-12 mt-0">
        {service === "Lite" && (
          <select className="col-12" onChange={handlePlan}>
            <option value="">Select a Plan</option>
            {liteDetails.map((detail) => (
              <option value={detail.amount}>
                {" "}
                {detail.duration} - {currency} {detail.amount.toLocaleString()}
              </option>
            ))}
          </select>
        )}
        {service === "Pro" && (
          <select className="col-12" onChange={handlePlan}>
            <option value="">Select a Plan</option>
            {proDetails.map((detail) => (
              <option value={detail.amount}>
                {" "}
                {detail.duration} - {currency} {detail.amount.toLocaleString()}
              </option>
            ))}
          </select>
        )}
      </div>

      {fee > 1 && (
        <div className="align-btn my-3">
          <div className="btn btn-sm btn-dark" onClick={handleSubscription}>
            Get Started
          </div>
        </div>
      )}
      {payment && (
        <div className="newPostModal flex-row">
          <div className="col-10 col-xs-10 col-sm-8 col-md-7 col-lg-5 col-xl-4">
            <div
              className="col-12 mb-3 d-flex justify-content-center align-items-center"
              onClick={() => setPayment(false)}
            >
              <FontAwesomeIcon className="btn btn-light" icon={faTimesCircle} />
            </div>
            <Pay fee={fee} currency={currency} plan={service} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Subs;
