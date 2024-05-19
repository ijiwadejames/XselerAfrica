/** @format */
import Flutter from "./Payment/Flutter";
import { useDataContext } from "../Provider/ContextAPI";
import ProDesc from "./ProDesc";
import LiteDesc from "./LiteDesc";
import FreeDesc from "./FreeDesc";

const Pay = ({ plan, fee, currency }) => {
  const { users } = useDataContext();
  const planTitle = () => {
    if (plan === "Lite") {
      return <>LitePlan</>;
    } else if (plan === "Pro") {
      return <>ProPlan</>;
    } else {
      return <>FreePlan</>;
    }
  };
  const planDescription = () => {
    if (plan === "Lite") {
      return <LiteDesc />;
    } else if (plan === "Pro") {
      return <ProDesc />;
    } else {
      return <FreeDesc />;
    }
  };
  return (
    <div className="bg-light text-dark p-3 rounded-3">
      <div className="planTitle py-3 mb-3">{planTitle()}</div>
      {planDescription()}
      <div className="payerDetails">
        Name: {users.fname + " " + users.sname} | Email: {users.email}
      </div>
      {fee === 0 ? (
        <div className="payButton rounded-2">Free for Every ({currency} 0)</div>
      ) : (
        <Flutter currency={currency} fee={fee} />
      )}
    </div>
  );
};

export default Pay;
