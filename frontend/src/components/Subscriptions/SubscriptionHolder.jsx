/** @format */
import Subs from "./Subs";
import { useDataContext } from "../../Provider/ContextAPI";

const SubscriptionHolder = ({ mainScreen }) => {
  const { subplan } = useDataContext();

  return (
    <>
      {mainScreen ? (
        <>
          {subplan.map((plan, index) => (
            <div className="subContainer" key={index}>
              <div className="col-11 m-auto bg-white rounded-3 border border-light shadow my-2 pricing">
                <Subs
                  service={plan.plan}
                  fee={plan.amount}
                  duration={plan.duration}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="col-12 bg-light my-3">
          {subplan.map((plan, index) => (
            <div className="mSubContainer my-4">
              <div className="col-11 m-auto bg-white rounded-3 border border-light shadow my-2 pricing">
                <Subs
                  service={plan.plan}
                  fee={plan.amount}
                  duration={plan.duration}
                  key={index}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SubscriptionHolder;
