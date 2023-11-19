import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import './App.css';
import Estimation from "./Screens/Estimation/Estimation";
import Footer from "./components/Footer/Footer";
import Home from "./Screens/Home/Home";
import Awareness from "./Screens/Crime Awarenes/Awareness";
import Contact from "./Screens/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";
import HistoricalData from "./Screens/HistoricalData/HistoricalData";
import CrimeStatistics from "./Screens/Crime Statistics/CrimeStatistics";
import EstimationResult from "./Screens/Crime Awarenes/Result/EstimationResult";
import CrimeNews from "./Screens/CrimeNews/CrimeNews";

function App() {
  return (
    <>
      <Router>
        {/* <Scroller /> */}
        <ScrollToTop />

        <Navbar />
        <Routes>
          <Route path="/Navbar" element={<Navbar />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/Estimation" element={<Estimation />} />
          <Route path="/EstimationResult" element={<EstimationResult />} />
          <Route path="/Awareness" element={<Awareness />} />
          <Route path="/CrimeStatistics" element={<CrimeStatistics />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Event" element={<HistoricalData />} />
          <Route path="/CrimeNews" element={<CrimeNews />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
