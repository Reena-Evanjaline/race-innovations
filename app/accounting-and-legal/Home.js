import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import Front from "./Front";
import Advisory from "./Advisory";
import Legal from "./Legal";
import Last from "./Last";



function AccountPage() {
  return (
    <>
    <Navbar/>
    <div className="main-content">
      <Front/>
      <Advisory/>
      <Legal/>
      <Last/>
      </div>
      <Footer/>
      
    </>
  );
}

export default AccountPage;
