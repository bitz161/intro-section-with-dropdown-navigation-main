import "./m-navigation.styles.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";

const MNavigation = () => {
  const { setEnableSidebar, enableSidebar } = useContext(SidebarContext);

  const handleSidebar = () => {
    setEnableSidebar(!enableSidebar);
  };

  return (
    <nav className="m-nav-container">
      <div>snap</div>
      <div className="nav-lines" onClick={handleSidebar}>
        <hr />
        <hr />
        <hr />
      </div>
    </nav>
  );
};

export default MNavigation;
