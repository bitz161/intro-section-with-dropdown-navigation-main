import "./App.css";
import Navigation from "./component/navigation/navigation.component";
import MNavigation from "./component/mobile-navigation/m-navigation.component";
import Sidebar from "./component/mobile-sidebar/sidebar.component";
import { useContext } from "react";
import { SidebarContext } from "./context/sidebar.context";
import { DropMenuContext } from "./context/dropMenu.context";
import Features from "./component/features/features.component";
import Company from "./component/company/company.component";
import Home from "./component/home/home.component";

function App() {
  const { enableSidebar } = useContext(SidebarContext);
  const { featuresMenu, companyMenu } = useContext(DropMenuContext);

  return (
    <div className="App">
      <Navigation />
      <MNavigation />
      {/* show sidebar if enableSidebar is true */}
      {enableSidebar && <div className="sidebar-background" />}
      {enableSidebar && <Sidebar />}
      {/* Features Drop Menu */}
      {featuresMenu && <Features />}
      {companyMenu && <Company />}
      {/* ---------- */}
      <Home />
    </div>
  );
}

export default App;
