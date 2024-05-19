/** @format */

import { useDataContext } from "../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";

const TransactionHolder = () => {
  const { transact } = useDataContext();

  const formatedAmount = (amount) => {
    const fee = amount.toLocaleString();
    return fee;
  };

  return (
    <div className="table-container col-11">
      <div className="col-12 fs-5 fw-semibold p-3 shadow-sm bgBlue text-light rounded-2 my-3">
        <FontAwesomeIcon icon={faHistory} /> Transactions History
      </div>
      <table>
        <tbody>
          <tr>
            <th className="fw-bold bg-light">id</th>

            <th className="fw-bold bg-light">Transaction ID</th>

            <th className="fw-bold bg-light">Amount</th>

            <th className="fw-bold bg-light">Payment Method</th>

            <th className="fw-bold bg-light">Status</th>
          </tr>
          {transact.map((tran, index) => (
            <tr key={index}>
              <th>{tran.id}</th>

              <th>{tran.transaction_id}</th>

              <th>&#8358;{formatedAmount(tran.amount)}</th>

              <th>{tran.payment_method}</th>

              <th>
                {tran.status === "Successful" ? (
                  <span className="success p-1 rounded-3 fw-semibold">
                    Successful
                  </span>
                ) : (
                  <span className="failed p-1 rounded-3 fw-semibold">
                    Failed
                  </span>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHolder;
