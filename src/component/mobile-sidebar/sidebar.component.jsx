import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";
import "./sidebar.styles.css";
import closeIcon from "../../assets/icons/close.png";
import { motion, AnimatePresence } from "framer-motion";

const sidebarVariant = {
  hidden: { x: -100 },
  visible: { x: 0 },
  enter: {},
  exit: {},
};

const Sidebar = () => {
  const { setEnableSidebar, enableSidebar } = useContext(SidebarContext);

  const handleSidebar = () => {
    setEnableSidebar(!enableSidebar);
  };

  return (
    <div className="sidebar-outer-container">
      <AnimatePresence>
        <motion.div
          className="sidebar-container"
          variant={sidebarVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          enter="enter"
        >
          <img
            src={closeIcon}
            onClick={handleSidebar}
            alt=""
            className="close-icon"
          />
          <div className="sidebar-links">
            <div>Features &#11167;</div>
            <div>Company &#11167;</div>
            <div>Careers</div>
            <div>About</div>
          </div>
          <div className="sidebar-button">
            <button>Login</button>
            <button>Register</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
