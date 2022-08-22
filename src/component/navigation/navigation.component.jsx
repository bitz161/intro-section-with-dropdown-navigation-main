import "./navigation.styles.css";
import { useContext } from "react";
import { DropMenuContext } from "../../context/dropMenu.context";

const Navigation = () => {
  const { setFeaturesMenu, featuresMenu, companyMenu, setCompanyMenu } =
    useContext(DropMenuContext);

  const handleFeatures = () => {
    setFeaturesMenu(!featuresMenu);
  };

  const handleCompany = () => {
    setCompanyMenu(!companyMenu);
  };

  return (
    <nav className="nav-container">
      <div className="nav-links-container">
        <div>snap</div>
        <div onClick={handleFeatures}>
          Features
          {featuresMenu ? <span>&#11165;</span> : <span>&#11167;</span>}
        </div>
        <div onClick={handleCompany}>
          Company {companyMenu ? <span>&#11165;</span> : <span>&#11167;</span>}
        </div>
        <div>Careers</div>
        <div>About</div>
      </div>
      <div className="nav-button-container">
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  );
};

export default Navigation;
