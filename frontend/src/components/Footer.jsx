/** @format */
import { useDataContext } from "../Provider/ContextAPI";

const Footer = () => {
  const { data } = useDataContext();
  return (
    <footer>
      &copy; 2024 - <strong>{data.name}</strong> | Privacy Policy
    </footer>
  );
};

export default Footer;
