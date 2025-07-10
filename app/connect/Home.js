import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import World from "./World";
import Model from "./Model";








function Connect() {
  return (
    <>
    <Navbar/>
    <div className="main-content">
    <World/>
    <Model/>
    </div>
      <Footer/>
      
    </>
  );
}

export default Connect;
