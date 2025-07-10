"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Service() {
  const [animatedIndices, setAnimatedIndices] = useState({});

  useEffect(() => {
    console.log("Framer Motion animations are active...");
  }, []);
  const slideFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const services = [
    { img: "/images/4.png", title: "Industry Trends & Market Forecasting", desc: "Growth opportunities to help businesses navigate industry shifts." },
    { img: "/images/5.png", title: "Competitive Intelligence & Benchmarking", desc: "Understand strategies, pricing, and market positioning for competitive advantage." },
    { img: "/images/3.png", title: "Product & Concept Testing", desc: "Validate new products, services, and technologies before market launch. before market launch." },
    { img: "/images/1.png", title: "Consumer Behaviour & Demand Analysis", desc: "Uncover customer preferences, and brand perception to refine your strategies." },
    { img: "/images/2.png", title: "Supply Chain & Distribution Research", desc: "Optimize operations with insights into supply chain efficiency and vendor selection." },
    { img: "/images/4.png", title: "Consumer & End-User Insights", desc: "Understand customer needs, pain points, and preferences through surveys through surveys." },
  ];

  return (
    <div
      className="container-fluid mt-5"

    >
      {/* Title Animation */}
      <motion.h4
        initial="hidden"
        animate="visible"
        variants={slideFromBottom}
        style={{
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
        className="mt-5"
      >
        <span style={{ color: "black" }}>Our Product Research</span>
        <span style={{ color: "#293BB1", marginLeft: "9px" }}>Reports Cover </span>
      </motion.h4>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Image
              src="/images/change-1.webp"
              alt="Globe showing world map"
              width={800}
              height={600}
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover" }}
            />
            <motion.h6
              initial="hidden"
              animate="visible"
              variants={slideFromBottom}
              style={{
                fontSize: "clamp(1rem, 4vw, 2rem)",
                whiteSpace: "nowrap",

              }}
              className="mt-3"
            >
              <span style={{ color: "black" }}> Prototype &</span>
              <span style={{ color: "#293BB1", marginLeft: "9px" }}>Concept Evaluation</span>
            </motion.h6>
            <p className="mt-3" style={{textAlign:"justify"}}>Collecting early-stage feedback from target users and field experts is a crucial step in the product development process. It involves sharing early prototypes or concepts to gather insights on the design, functionality, and overall appeal of the product. Target users provide practical feedback based on their needs and experiences, helping to validate whether the product is intuitive, useful, and engaging. Field experts, on the other hand, offer professional insights that can identify technical flaws, suggest improvements, and ensure the product aligns with industry standards.  </p>
          </div>
          <div className="col-md-6">
            <motion.h6
              initial="hidden"
              animate="visible"
              variants={slideFromBottom}
              style={{
                fontSize: "clamp(1rem, 4vw, 2rem)",
                whiteSpace: "nowrap",

              }}
              className=""
            >
              <span style={{ color: "black" }}>Product Feature</span>
              <span style={{ color: "#293BB1", marginLeft: "9px" }}>Benchmarking </span>
            </motion.h6>
            <p className="mt-3" style={{textAlign:"justify"}}>Compare technical specifications, performance metrics, and value-added features with industry leaders across categories—cars, tractors, CVs, EVs, and construction machinery. </p>
             <Image
              src="/images/cha-3.webp"
              alt="Globe showing world map"
              width={800}
              height={400}
              className="img-fluid rounded shadow-sm mt-4"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
