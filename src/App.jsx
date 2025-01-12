import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Choose from "./Components/Choose";
import Articles from "./Components/Article";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choose />
      <Articles />
    </div>
  );
};

export default App;
