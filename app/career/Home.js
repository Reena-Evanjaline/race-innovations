import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import CareerHome from "./CareerHome";
import Content from "./Content";
import Notify from "./Notify";




function CareersPage() {
  return (
    <>
      <Navbar />
      <div className="main-content">
    <CareerHome/>
    <Content/>
    <Notify/>
    </div>
      <Footer />
    </>
  );
}

export default CareersPage;
