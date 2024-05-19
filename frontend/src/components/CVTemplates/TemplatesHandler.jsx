/** @format */

import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import EL01 from "./EntryLevel/EntLevel1";
import { useDataContext } from "../../Provider/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const TemplatesHandler = () => {
  const { users } = useDataContext();

  return (
    <div>
      <PDFDownloadLink
        document={<EL01 />}
        fileName="user_name.pdf"
        className="cursor-pointer"
        style={{ textDecoration: "none" }}
      >
        {({ blob, url, loading, error }) =>
          loading ? (
            <div className="col-12 mb-3 d-flex justify-content-between">
              <div className="fw-bold text-dark">
                {users.fname.toUpperCase() + " " + users.sname.toUpperCase()} CV{" "}
              </div>
              <div className="btn btn-danger fw-bold text-dark">
                ...creating your CV
              </div>
            </div>
          ) : (
            <div className="col-12 mb-3 d-flex justify-content-between">
              <div className="fw-bold text-dark">
                {users.fname.toUpperCase() + " " + users.sname.toUpperCase()} CV{" "}
              </div>
              <div className="btn btn-dark fw-bold text-light"><FontAwesomeIcon icon={faDownload} /></div>
            </div>
          )
        }
      </PDFDownloadLink>
      <PDFViewer width="100%" height={650}>
        <EL01 />
      </PDFViewer>
    </div>
  );
};

export default TemplatesHandler;
