import React from "react";
import myLogo from "../imgs/VeraLogo.png";

interface UploadPageProps {
  onNavigate: () => void;
}

const UploadPage: React.FC<UploadPageProps> = ({ onNavigate }) => {
  return (
    <div>
      <div className="flex-container container-row container-gap">
        <div className="flex-column">
          <h1 className="h-font">Bridgin the gap. </h1>
          <p className="p-font">
            "Vera's strengths lie in its unique technology - Digital Persona
            Models (DPMS)
            <br />
            that deliver predictive insights beyond traditional focus group or
            A/B testing-
            <br />
            while being clearly differentiated as an authority on efficiency &
            sustainability."
          </p>
        </div>
        <div className="drop-zone">
          <p>Drag & Drop File</p>
          <p>or</p>
          <input type="file" id="file-upload" />
          <label htmlFor="file-upload" className="browse-btn">
            Browse Files
          </label>
        </div>
      </div>
      <button className="scan-btn" onClick={onNavigate}>
        Run & Scan
      </button>
      <div className="flex-container row center">
        <img src={myLogo} className="logo-small" />
        <p>"Invisible intelligence, visible impact"</p>
      </div>
    </div>
  );
};
export default UploadPage;
