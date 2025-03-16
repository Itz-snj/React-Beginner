import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/home";
import Services from "./components/services";
import CaseStudiesPage from "./components/case";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <CaseStudiesPage/>
    </div>
  );
}

export default App;
