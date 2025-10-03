import React, { useState } from "react";
import "./App.css";
import UploadPage from "./pages/UploadPage";
import ResultPage from "./pages/ResultsPage";
import HomePage from "./pages/HomePage";

type Page = "home" | "upload" | "results";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const goToUpload = () => setCurrentPage("upload");
  const goToResults = () => setCurrentPage("results");
  const goToHome = () => setCurrentPage("home");

  const renderPage = () => {
    switch (currentPage) {
      case "upload":
        return <UploadPage onNavigate={goToResults} />;
      case "results":
        return <ResultPage onNavigate={goToHome} />;
      case "home":
      default:
        return <HomePage onNavigate={goToUpload} />;
    }
  };
  return (
    <div className="app-background App">
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
