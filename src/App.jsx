import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/home";
import Services from "./components/services";

import WorkingProcess from "./components/WorkingProcess";

import CaseStudiesPage from "./components/case";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <WorkingProcess/>
      <CaseStudiesPage/>
      <ContactUs/>
      <Footer/>      
    </div>
  );
}

export default App;
