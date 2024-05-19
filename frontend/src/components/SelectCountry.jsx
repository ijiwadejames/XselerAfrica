/** @format */
import { useEffect, useState } from "react";
import { useDataContext } from "../Provider/ContextAPI";
import Cookies from "js-cookie";
import DisappearingAlert from "./DisappearingAlert";
import CountryHolder from "./CountryHolder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const SelectCountry = () => {
  const { defCountry } = useDataContext();

  const [selectedOption, setSelectedOption] = useState("");
  const [getCountry, setGetCountry] = useState("");
  const [notify, setNotify] = useState(false);
  const [country, setCountry] = useState(false);

  const handleChange = (country) => {
    setSelectedOption(country);
    setNotify(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotify(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedOption) {
      Cookies.set("Country", selectedOption, {
        secure: true,
        expires: 7,
        sameSite: true,
        path: "/",
      });
    }

    const getCty = Cookies.get("Country");

    if (getCty) {
      setGetCountry(getCty);
    }
  }, [selectedOption]);

  const handleCountrySelect = () => {
    setCountry(!country);
  };

  const handleCountry = (country) => {
    handleChange(country);
    setCountry(false);
  };
  return (
    <>
      <div className="border border-light p-0 m-0  rounded-4 d-flex justify-content-center align-items-center font-13 cursor-pointer btn-light btn-sm fw-semibold ms-1">
        <div className="px-1 bg-light text-dark rounded-3">{getCountry}</div>
        <div className="px-1 drop" onClick={handleCountrySelect}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      {country && (
        <div className="flex-row">
          <div className="currencyModal">
            {defCountry.map((country, index) => {
              return (
                <>
                  {getCountry !== country.country && country.plan === "Lite" && (
                    <div key={index}>
                      <CountryHolder
                        onClick={() => handleCountry(country.country)}
                        country={country.country}
                      />
                    </div>
                  )}
                </>
              );
            })}
            <div onClick={() => setCountry(false)} className="btn btn-light">
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          </div>
        </div>
      )}

      {notify && (
        <div
          className="col-12 d-flex justify-content-center align-items-start"
          style={{ position: "fixed", bottom: 0, right: 0 }}
        >
          <div className="col-3">
            <DisappearingAlert
              message="Country Changed"
              variant="danger"
              duration={3000}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SelectCountry;
