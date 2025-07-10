import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react';
import Contact from "./Contact";
import Office from "./Office";
import Form from "./Form";


function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="main-content">
    <Contact/>
    <Office/>
    <Form/>
    </div>
      <Footer />
    </>
  );
}

export default ContactPage;
