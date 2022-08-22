import "./home.styles.css";
import { ReactComponent as DataBlitz } from "../../assets/images/client-databiz.svg";
import { ReactComponent as AudioPhile } from "../../assets/images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../assets/images/client-meet.svg";
import { ReactComponent as Maker } from "../../assets/images/client-maker.svg";
import { useEffect } from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-img" />
      <div className="description-container">
        <h1 className="h1-container">
          <div>Make</div>
          <div>remote work</div>
        </h1>
        {/* ---------- */}
        <div className="description-info">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </div>
        {/* ---------- */}
        <button className="learn-more">Learn more</button>
        <div className="client-container">
          <DataBlitz
            className="client-icon"
            viewBox={window.screen.width === 375 ? "30 0 30 30" : ""}
          />
          <AudioPhile
            className="client-icon"
            viewBox={window.screen.width === 375 ? "30 -10 30 50" : ""}
          />
          <Meet
            className="client-icon"
            viewBox={window.screen.width === 375 ? "40 0 30 30" : ""}
          />
          <Maker
            className="client-icon"
            viewBox={window.screen.width === 375 ? "40 0 30 30" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
