/** @format */

const CountryHolder = ({ country, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-3 mx-1 rounded-2 cursor-pointer currency"
    >
      [FLAG] <br />
      {country}
    </div>
  );
};

export default CountryHolder;
