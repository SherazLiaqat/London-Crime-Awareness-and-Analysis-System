import Navbar from "./Components/Header/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Blogdetail from "./Components/Blog/Blogdetail";
import ScrollToTop from "./Components/ScrollToTop";

import Main from "./Components/Main";
import Portfolionext from "./Components/Portfolio/Portfolionext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/MyPortfolio" element={<Portfolionext />} />
          <Route path="/Blogdetail" element={<Blogdetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
