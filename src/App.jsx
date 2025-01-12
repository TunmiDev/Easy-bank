import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Choose from "./Components/Choose";
import Articles from "./Components/Article";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choose />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
