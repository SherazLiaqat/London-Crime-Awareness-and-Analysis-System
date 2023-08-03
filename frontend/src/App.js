import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
//import './App.css';
import Estimation from "./Screens/Estimation/Estimation";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Pages/Authenticationpages/Signuppages/Signup";
import Awareness from "./Screens/Crime Awarenes/Awareness";
import Home from "./components/Pages/Home";

import Login from "./components/Pages/Authenticationpages/Loginpages/Login";

import About from "./components/Pages/Extrapages/About";
import Contact from "./Screens/Contact/Contact";

import Api from "./components/Pages/Api/Api";

import Live from "./components/Pages/Extrapages/Live";
import CovidLive from "./components/Pages/Extrapages/LiveEvents/CovidlLive/CovidLive";

import ScrollToTop from "./components/ScrollToTop";

import DeadResult from "./components/ResultPages/Flood/DeadResult";

import MyNews from "./components/News/News";

import HistoricalData from "./Screens/HistoricalData/HistoricalData";
import CrimeStatistics from "./Screens/Crime Statistics/CrimeStatistics";

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
          <Route path="/Awareness" element={<Awareness />} />
          <Route path="/CrimeStatistics" element={<CrimeStatistics />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/sign-up" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/profile" component={Profile} /> */}
          {/* <Route path="/logout" component={Logout} /> */}
          <Route path="/Event" element={<HistoricalData />} />
          <Route path="/Live" element={<Live />} />

          <Route path="/MyNews" element={<MyNews />} />

          <Route path="/About" element={<About />} exact />

          <Route path="/Api" element={<Api />} exact />
          <Route path="/CovidLive" element={<CovidLive />} exact />
         

          <Route path="/DeadResult" element={<DeadResult />} exact />

          {/* <Route path="/Demo" component={Demo} /> */}
          <Route path="/Map" element={Map} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
