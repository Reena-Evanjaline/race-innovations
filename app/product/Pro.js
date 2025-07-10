"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 100 }, // Starts lower for a more prominent effect
  visible: { opacity: 1, y: 0 },
};

function Pro() {
  const controls = useAnimation();

  useEffect(() => {
    // Trigger the animation only once when the component mounts
    controls.start("visible");
  }, [controls]);

  return (
    <>
      <motion.div
        className="container-fluid mt-3 p-5 d-flex align-items-center"
        style={{
          backgroundImage: 'url("/images/product.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "50vh",
        }}
        initial="hidden"
        animate={controls} 
        variants={fadeInVariants}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row align-items-center text-center">
            <motion.div
              initial="hidden"
              animate={controls} 
              variants={slideUpVariants}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1
                className="ms-md-4"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", whiteSpace: "nowrap" }}
              >
                <span style={{ color: "black" }}>Product</span>
                <span style={{ color: "black", marginLeft: "15px" }}>
                  Report
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="container"
        initial="hidden"
        animate={controls}
        variants={slideUpVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >


        <p className="mt-4" style={{textAlign: "justify"}}>
          At Race Innovations, we specialize in product research services that help OEMs and component manufacturers in the automotive, agriculture machinery, and construction equipment sectors build better, smarter, and more competitive products.
        </p>
        <p style={{textAlign: "justify"}}>
          Our product research reports provide actionable insights to guide new product development, prototype testing, and product improvement decisions—backed by real customer feedback and competitor benchmarking.
        </p>
      </motion.div>

    </>
  );
}

export default Pro;
