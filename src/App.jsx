import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Hero from "./components/home";
import Services from "./components/services";
import WorkingProcess from "./components/WorkingProcess";
import TeamSection from "./components/team";
import CaseStudiesPage from "./components/case";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="working-process"><WorkingProcess /></div>
      <div id="case-studies"><CaseStudiesPage /></div>
      <div id="team"><TeamSection /></div>
      <Footer />
    </div>
  );
}

export default App;