import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutSection from "./components//AboutSection";
import ProjectsPage from "./components/ProjectsPage";
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<AboutSection />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}

export default App;
