/** @format */

import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const DisappearingAlert = ({ message, duration, variant }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);
    
  return (
    <>
      {show && (
        <Alert variant={variant} onClose={() => setShow(false)} dismissible>
          {message}
        </Alert>
      )}
    </>
  );
};

export default DisappearingAlert;
