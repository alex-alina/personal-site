import "./App.css";
import React from "react";
import NavBar from "./components/Navigation/NavBar";
import AboutSection from "./components//AboutSection";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
// import { Route } from "react-router-dom";

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

// function App() {
//   return (
//     <>
//       hello
//       <Home />
//       {/* <NavBar /> */}
//       {/* <main>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={AboutSection} />
//       </main> */}
//     </>
//   );
// }

export default App;
