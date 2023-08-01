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
import Awareness from "./components/Pages/Awareness";
import Home from "./components/Pages/Home";

import Earthquakeinfo from "./components/Pages/Infopages/Earthquakeinfo";

import Floodinfo from "./components/Pages/Infopages/Floodinfo";
import Login from "./components/Pages/Authenticationpages/Loginpages/Login";
import Fireinfo from "./components/Pages/Infopages/Fireinfo";
import Covid19 from "./components/Pages/Infopages/Covid-19info";

import About from "./components/Pages/Extrapages/About";
import Contact from "./Screens/Contact/Contact";

import Death from "./components/Pages/Estimationpages/Earthquake/Death";

import Locust from "./components/Pages/Infopages/Locusts";
// import Event from "./components/events/EarthquakeEventpage";
import Api from "./components/Pages/Api/Api";

import Live from "./components/Pages/Extrapages/Live";
import CovidLive from "./components/Pages/Extrapages/LiveEvents/CovidlLive/CovidLive";
import EarthquakeLive from "./components/Pages/Extrapages/LiveEvents/EarthquakeLive/EarthquakeLive";
// import FloodLive from "./components/Pages/Extrapages/LiveEvents/FloodLive/FloodLive";
// import Readmore from "./components/News/Readmore";
import MyBlog from "./components/My-Blog/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Dead from "./components/Pages/Estimationpages/Flood/Dead";

import DeathResult from "./components/ResultPages/Earthqauke/DeathResult";
import DeadResult from "./components/ResultPages/Flood/DeadResult";

import MyNews from "./components/News/News";
import { Scroller } from "./components/Scroller";
import HistoricalData from "./Screens/HistoricalData/HistoricalData";

// import Demo from "./components/Demo";

// import BlogData from "./components/My-Blog/BlogData";
// import FloodEventpage from "./components/events/FloodEventpage";

// import EarthquakeCsv from "./components/events/EarthquakeCsv";
// import FloodCsv from "./components/events/Floodeventcsv";
// import Logout from "./components/Pages/Authenticationpages/Loginpages/Logout";
// import Profile from "./components/Pages/Authenticationpages/Loginpages/Profile";
function App() {
  return (
    <>
      <Router>
        <Scroller />
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/Navbar" element={<Navbar />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/Estimation" element={<Estimation />} />
          <Route path="/Awareness" element={<Awareness />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Death" element={<Death />} />
          <Route path="/Dead" element={<Dead />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/profile" component={Profile} /> */}
          {/* <Route path="/logout" component={Logout} /> */}
          <Route path="/Event" element={<HistoricalData />} />
          <Route path="/Live" element={<Live />} />
          {/* <Route path="/BlogData/:slug" component={BlogData} /> */}
          <Route path="/MyNews" element={<MyNews />} />
          <Route path="/MyBlog" element={<MyBlog />} exact />
          {/* <Route path="/Floodevent" component={FloodEventpage} exact /> */}
          {/* <Route path="/Earthquakecsv" component={EarthquakeCsv} exact /> */}
          {/* <Route path="/Floodeventcsv" component={FloodCsv} exact /> */}
          <Route path="/Earthquakeinfo" element={<Earthquakeinfo />} exact />
          <Route path="/Floodinfo" element={<Floodinfo />} exact />
          <Route path="/Fireinfo" element={<Fireinfo />} exact />
          <Route path="/Covid19" element={<Covid19 />} exact />

          <Route path="/Fireinfo" element={<Fireinfo />} />
          <Route path="/About" element={<About />} exact />
          <Route path="/Locust" element={<Locust />} exact />

          <Route path="/Api" element={<Api />} exact />
          <Route path="/CovidLive" element={<CovidLive />} exact />
          {/* <Route path="/FloodLive" component={FloodLive} exact /> */}
          {/* <Route path="/EarthquakeLive" component={EarthquakeLive} exact /> */}
          {/* <Route path="/Readmore" component={Readmore} exact /> */}

          <Route path="/DeathResult" element={<DeathResult />} exact />

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
