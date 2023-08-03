import React from "react";
import Herosection from "../Herosection/Herosection";
import About from "../../Screens/About/About";
import Contact from "../../Screens/Contact/Contact";
import Service from "../../Screens/Crime Awarenes/Awareness"
function Home() {
  return (
    <>
      <Herosection />
      <Service/>
      <About />
      <Contact />
    </>
  );
}

export default Home;
