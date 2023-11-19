import React from "react";
import About from "../About/About";
import Herosection from "../../components/Herosection/Herosection";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <div>
      <Herosection />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
