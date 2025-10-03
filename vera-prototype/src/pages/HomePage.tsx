import React from "react";
import myLogo from "../imgs/VeraLogo.png";

interface HomePageProps {
  onNavigate: () => void;
}
const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      <div className="logo-container">
        <div className="image-container">
          <img src={myLogo} className="home-logo" />
        </div>
        <div className="bordered-text">
          "Invisible intelligence, visible impact."
        </div>
        <div>
          <button className="scan-btn" onClick={onNavigate}>
            Start your journey here
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
