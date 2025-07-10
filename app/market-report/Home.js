import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import Image from "./Image";
import Inside from "./Inside";
import Formats from "./Formats";
import Last from "./Last";






function Flash() {
  return (
    <>
    <Navbar/>
    <div className="main-content">
    <Image/>
    <Inside/>
    <Formats/>
    <Last/>
    </div>
    <Footer/>
    </>
  );
}

export default Flash;
