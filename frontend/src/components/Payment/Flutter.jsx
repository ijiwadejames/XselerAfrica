/** @format */

import "../../index.css";

import { useState, useEffect } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useDataContext } from "../../Provider/ContextAPI";

const Flutter = (props) => {
  const { users } = useDataContext();

  const [subFee, setSubFee] = useState(0);
  const [pnum, setPnum] = useState(users.pnum);
  const [mail, setMail] = useState("");
  const [fname, setFname] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");
  const [paymentResponse, setPaymentResponse] = useState(null);

  const amount = props.fee;
  const currency = props.currency;

  const getSymbol = (currency) => {
    if (currency === "KES") {
      return <>KSh</>;
    } else if (currency === "GBP") {
      return <>&#163;</>;
    } else if (currency === "USD") {
      return <>&#36;</>;
    } else if (currency === "NGN") {
      return <>&#8358;</>;
    } else if (currency === "EUR") {
      return <>&#8364;</>;
    } else if (currency === "GHS") {
      return <>&#8373;</>;
    }
  };
  useEffect(() => {
    setSubFee(props.fee);
    setMail(users.email);
    setPnum(users.pnum);
    setFname(users.fname);
  }, [props.fee, users.email, users.pnum, users.fname]);
  const config = {
    public_key: "FLWPUBK_TEST-3d4538e444adb539201dd07e31297649-X",
    tx_ref: Date.now(),
    amount: subFee,
    currency: currency,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: mail,
      phone_number: pnum,
      name: fname,
    },
    customizations: {
      title: "Xseler Africa",
      description: "Subscription on Xseler Africa",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePaymentSuccess = (response) => {
    console.log(response);
    setPaymentMessage("Payment Successful");
    setPaymentResponse(response);
  };
  const handlePaymentFailure = (response) => {
    console.log(response);
    setPaymentMessage("Payment failed. Please try again");
    // setPaymentResponse(response);
  };
  return (
    <div className="App">
      <div className="cont">
        <input
          type="number"
          // placeholder="Amount"
          value={subFee}
          //onChange={(e) => setAmount(e.target.value)}
          className="noDisplay"
        />
        <input
          type="text"
          // placeholder="Email"
          value={mail}
          //onChange={(e) => setEmail(e.target.value)}
          className="noDisplay"
        />
        <input
          type="text"
          // placeholder="Name"
          value={fname}
          //onChange={(e) => setName(e.target.value)}
          className="noDisplay"
        />
        <input
          type="text"
          placeholder="Phone"
          value={pnum}
          onChange={(e) => setPnum(e.target.value)}
          // className="noDisplay"
        />

        <button
          style={{
            backgroundColor: "#023a76",
            fontWeight: "bold",
            color: "rgba(255, 255, 255, 0.8)",
            marginBottom: "0",
          }}
          onClick={() =>
            handleFlutterPayment({
              callback: (response) => {
                closePaymentModal();
                handlePaymentSuccess(response);
              },
              onClose: () => {
                if (!paymentMessage) {
                  handlePaymentFailure();
                }
              },
            })
          }
        >
          Proceed to Pay {getSymbol(currency)}
          {amount.toLocaleString()}
        </button>
        {paymentMessage && <div className="success">{paymentMessage}</div>}
        {paymentResponse && (
          <div className="paymentResponse">
            <h2>Payment Response</h2>
            <p>Status: {paymentResponse.status}</p>
            <p>Transaction ID: {paymentResponse.transaction_id}</p>
            <p>Amount: {paymentResponse.amount}</p>
            <p>Currency: {paymentResponse.currency}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flutter;
