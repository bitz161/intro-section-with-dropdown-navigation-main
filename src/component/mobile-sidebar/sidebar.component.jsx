import { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../../context/sidebar.context";
import "./sidebar.styles.css";
import closeIcon from "../../assets/icons/close.png";
import { motion, AnimatePresence } from "framer-motion";
import { DropMenuContext } from "../../context/dropMenu.context";

const Sidebar = () => {
  const { setEnableSidebar, enableSidebar, sidebarVariant, setSidebarVariant } =
    useContext(SidebarContext);

  const {
    setFeaturesMenu,
    featuresMenu,
    companyMenu,
    setCompanyMenu,
    showFeatures,
    setShowFeatures,
  } = useContext(DropMenuContext);

  useEffect(() => {
    if (sidebarVariant === false) {
      setTimeout(() => {
        setEnableSidebar(!enableSidebar);
      }, 500);
    }
  }, [sidebarVariant]);

  const showVariant = {
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    close: {
      x: "100%",
      transition: {
        duration: 0.5,
      },
    },
    hidden: { x: "100%" },
  };

  const closeButtonVariant = {
    hidden: { x: 0 },
    visible: { x: 170, transition: { delay: 0.001, duration: 0.5 } },
    close: { x: 0, transition: { duration: 0.5 } },
  };

  const handleFeatures = () => {
    setFeaturesMenu(!featuresMenu);
  };

  const handleCompany = () => {
    setCompanyMenu(!companyMenu);
  };

  const [showCompany, setShowCompany] = useState(false);

  const handleShow = () => {
    setSidebarVariant(!sidebarVariant);
    setShowFeatures(false);
    setFeaturesMenu(false);
    setCompanyMenu(false);
  };

  const featuresEvent = () => {
    handleFeatures();
    setShowFeatures(!showFeatures);
  };

  const companyEvent = () => {
    handleCompany();
    setShowCompany(!showCompany);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="sidebar-container"
        variants={showVariant}
        animate={sidebarVariant ? "visible" : "close"}
        initial="hidden"
      >
        <motion.img
          src={closeIcon}
          onClick={handleShow}
          alt=""
          className="close-icon"
          variants={closeButtonVariant}
          animate={sidebarVariant ? "visible" : "close"}
          initial="hidden"
        />
        <div className="sidebar-links">
          <div
            onClick={featuresEvent}
            className={showFeatures ? "showFeaturesMenu" : ""}
          >
            Features{" "}
            {featuresMenu ? <span>&#11165;</span> : <span>&#11167;</span>}
          </div>
          <div
            onClick={companyEvent}
            className={showCompany ? "showCompanyMenu" : ""}
          >
            Company{" "}
            {companyMenu ? <span>&#11165;</span> : <span>&#11167;</span>}
          </div>
          <div>Careers</div>
          <div>About</div>
        </div>
        <div className="sidebar-button">
          <button>Login</button>
          <button>Register</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
