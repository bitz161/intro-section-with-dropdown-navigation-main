import "./App.css";
import Navigation from "./component/navigation/navigation.component";
import MNavigation from "./component/mobile-navigation/m-navigation.component";
import Sidebar from "./component/mobile-sidebar/sidebar.component";
import { useContext } from "react";
import { SidebarContext } from "./context/sidebar.context";

function App() {
  const { enableSidebar } = useContext(SidebarContext);

  return (
    <div className="App">
      <Navigation />
      <MNavigation />
      {/* show sidebar if enableSidebar is true */}
      {enableSidebar && <Sidebar />}
      Make remote work
      {/* ---------- */}
      Get your team in sync, no matter your location. Streamline processes,
      create team rituals, and watch productivity soar.
      {/* ---------- */}
      Learn more
    </div>
  );
}

export default App;
