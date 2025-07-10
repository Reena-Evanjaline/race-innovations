import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import Ban from "./Ban";
import Ref from "./Ref";
import Offerings from "./Offerings";
import Deliverable from "./Deliverable";










function Technic() {
  return (
    <>
    <Navbar/>
    <div className="main-content">
    <Ban/>
    <Ref/>
    <Offerings/>
    <Deliverable/>
    </div>
    <Footer/>
    </>
  );
}

export default Technic;
