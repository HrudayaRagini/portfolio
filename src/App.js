import React from "react";
import StarryBackground from "./components/StarryBackground";
import HeroBanner from "./components/HeroBanner";
import Sections from "./components/Sections";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div
      className="app-container"
      style={{
        backgroundColor: "transparent",
        color: "#ffffff",
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Starry Background - Only background layer */}
      <StarryBackground />
      
      {/* Main Content - All components layered on top with proper masking */}
      <div className="relative z-10">
        <HeroBanner />
        <Sections />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;

