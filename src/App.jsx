import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/home";
import Services from "./components/services";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
    </div>
  );
}

export default App;
