import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";
import Banner from "./Banner";
import Video from "./Video";
import Features from "./Features";

function Lbi() {
  return (
    <>
      <Navbar />
      <div className="main-content">
      <Banner />
      <Video />
      <Features />
      </div>
      <Footer />
    </>
  );
}

export default Lbi;
