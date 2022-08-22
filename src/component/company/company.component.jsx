import "./company.styles.css";
import { useContext } from "react";
import { DropMenuContext } from "../../context/dropMenu.context";

const Company = () => {
  const { showFeatures } = useContext(DropMenuContext);

  return (
    <div
      className={
        showFeatures
          ? "company-container company1"
          : "company-container company2"
      }
    >
      <div>History</div>
      <div>Out Team</div>
      <div>Blog</div>
    </div>
  );
};

export default Company;
