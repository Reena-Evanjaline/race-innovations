"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="container-fluid d-flex flex-column align-items-center justify-content-center position-relative"
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/images/image-72.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideFromBottom}
      onViewportEnter={() => setHasAnimated(true)}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />

      {/* Title */}
      <h1
        className="text-white position-relative"
        style={{
          fontSize: "clamp(2rem, 5vw, 5rem)",
          zIndex: 1,
          transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
        }}
      >
        Contact Us
      </h1>
    </motion.div>
  );
}

export default Contact;
