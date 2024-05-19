/** @format */

const RememberMe = ({ onChange, checked }) => {
  return (
    <div className="d-flex shadow-sm btn bgBlueNoHover text-light attestation fw-semibold align-items-center justify-content-start">
      <div>
        {" "}
        <input
          type="checkbox"
          className="cursor-pointer"
          onChange={onChange}
          checked={checked}
        />
      </div>
      <div className="px-2">Remember me!</div>
    </div>
  );
};

export default RememberMe;
