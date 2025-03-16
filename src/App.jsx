import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/home";
import Services from "./components/services";

import WorkingProcess from "./components/WorkingProcess";

import CaseStudiesPage from "./components/case";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <WorkingProcess/>
      <CaseStudiesPage/>

    </div>
  );
}

export default App;
