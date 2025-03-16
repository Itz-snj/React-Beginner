import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/home";
import Services from "./components/services";
import WorkingProcess from "./components/WorkingProcess";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <WorkingProcess/>
    </div>
  );
}

export default App;
