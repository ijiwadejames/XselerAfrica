/** @format */
import ReactDOM from "react-dom";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import EntLevel1 from "./EntLevel1";

const EntryLevel = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const CaptureCVToImage = async () => {
      try {
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);

        canvas.width = 100;
        canvas.height = 100;

        ReactDOM.render(<EntLevel1 />, canvas);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const canvasImage = await html2canvas(canvas);

        const dataURL = canvasImage.toDataURL("image/png");
        setImageSrc(dataURL);
        document.body.removeChild(canvas);
      } catch (error) {
        console.error("Error capturing CV content:", error);
      }
    };
    CaptureCVToImage();
  }, []);
  return (
    <div className="bg-light border border-dark rounded-2 text-dark d-flex justify-content-center col-4">
      <Link to="/el/cv-view" className="text-decoration-none">
        {imageSrc && (
          <div>
            <img src={imageSrc} alt="CV" className="img-fluid" />
          </div>
        )}
      </Link>
    </div>
  );
};

export default EntryLevel;
