import React from "react";

interface ResultPageProps {
  onNavigate: () => void;
}
const ResultPage: React.FC<ResultPageProps> = ({ onNavigate }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="square">Sports</div>
        <div className="square">Cowboy</div>
      </div>
      <div className="row">
        <div className="square">Low Budget</div>
        <div className="square">Reader</div>
        <div className="square">Fashion</div>
      </div>
      <div className="row">
        <p>Not Clicked : 27%</p>
        <div className="square length"> </div>
        <p>73% : Clicked</p>
      </div>

      <div className="square-container">
        <div className="square-growth pill">Persona Profile 1</div>
        <div className="square-growth">Persona Profile 2</div>
        <div className="square-growth">Persona Profile 3</div>
      </div>
      <button onClick={onNavigate} className="home-btn">
        Home
      </button>
    </div>
  );
};
export default ResultPage;
