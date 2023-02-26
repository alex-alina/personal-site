import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutSection from "./components//AboutSection";
import Home from "./components/Home";
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutSection />} />
      </Routes>
    </>
  );
}

export default App;
