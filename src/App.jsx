import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Hero from "./components/home";
import Services from "./components/services";
import WorkingProcess from "./components/WorkingProcess";
import TeamSection from "./components/team";
import CaseStudiesPage from "./components/case";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="working-process"><WorkingProcess /></div>
      <div id="case-studies"><CaseStudiesPage /></div>
      <div id="team"><TeamSection /></div>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;