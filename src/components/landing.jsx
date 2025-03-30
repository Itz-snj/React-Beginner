import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Hero from "./home";
import Services from "./services";
import WorkingProcess from "./WorkingProcess";
import TeamSection from "./team";
import CaseStudiesPage from "./case";
import Footer from "./footer";
import Navbar from "./navbar";
import ContactUs from "./ContactUs";
function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="working-process"><WorkingProcess /></div>
      <div id="case-studies"><CaseStudiesPage /></div>
      <div id="team"><TeamSection /></div>
      <div id="contact-us"><ContactUs/></div>
      <Footer />
    </div>
  );
}

export default App;
