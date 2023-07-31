import React from "react";
import About from "./About/About";

import Contact from "./Contact/Contact";
import Herosection from "./Herosection/Herosection";
import Portfolio from "./Portfolio/Portfolio";
import Service from "./Service/Service";
import Navbar from "./Header/Navbar";
import Blogdetail from "./Blog/Blogdetail";
import Footer from "./Footer/Footer";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Service />
      <Portfolio />
      <Blogdetail />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
