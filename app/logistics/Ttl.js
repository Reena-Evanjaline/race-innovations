"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Ttl() {
  return (
    <motion.div
      className="container-fluid mt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="row">
        {/* Left image with animation */}
        <motion.div
          className="col-lg-8"
          variants={slideInLeft}
        >
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/images/transport.jfif"
              alt="TTL Illustration"
              fill
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </motion.div>

        {/* Right text with animation */}
        <motion.div
          className="col-lg-4"
          variants={slideInRight}
        >
          <h3 style={{ color: "#293BB1" }}>
            Transport Engineering
          </h3>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            Our Transport Engineering services focus on designing, developing, and optimizing efficient and sustainable transportation systems tailored to modern mobility demands. We provide end-to-end solutions across road, freight, and public transport networks, helping businesses and governments streamline logistics, reduce transit costs, and enhance infrastructure performance.

            By combining engineering expertise with data-driven analysis, we ensure that transport systems are not only safe and reliable but also aligned with future-ready technologies and environmental goals.
          </p>
          <p style={{ textAlign: "justify" }}>
            <strong>
             With a deep understanding of terrain conditions, usage patterns, and industry demands, we help shape transportation systems that drive growth, reduce operational risk, and improve the movement of people and goods.


            </strong>
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .custom-button {
          border: 2px solid #293BB1;
          color: black;
          background: white;
          border-radius: 50px;
          padding: 8px 20px;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s ease;
          background-color: rgba(164, 151, 151, 0.12);
        }

        .custom-button:hover {
          background: #293BB1;
          color: white;
        }
      `}</style>
    </motion.div>
  );
}

export default Ttl;
