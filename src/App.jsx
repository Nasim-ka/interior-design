import MyNavbar from "./components/navbar/MyNavbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/service/Services";
import Portfolio from "./components/portfolio/Portfolio";
import { Team } from "./components/team/Team";
import Contact from "./components/contact/Contact";
import  Product  from "./components/portfolio/Product";


const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyNavbar/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/:ProductID" element={<Product/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
  }
export default App
