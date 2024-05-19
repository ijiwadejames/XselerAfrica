/** @format */

const Bars = ({ progress, tags }) => {
  const getColor = (progress) => {
    if (progress < 40) {
      return "#f44336";
    } else if (progress >= 40 && progress < 60) {
      return "#ff9800";
    } else if (progress >= 60 && progress < 80) {
      return "#ffeb3b";
    } else {
      return "#4CAF50";
    }
  };

  return (
    <>
      {tags}
      <div className="bg-light rounded-5 p-0" style={{ width: "100%" }}>
        <div
          className="rounded-5 my-2 text-dark d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: getColor(progress),
            fontSize: "12px",
            width: `${progress}%`,
            height: 20,
          }}
        >
          {progress + "%"}
        </div>
      </div>
    </>
  );
};

export default Bars;
