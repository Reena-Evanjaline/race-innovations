"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInStagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay },
  },
});

function Mining() {
  return (
    <>
      <motion.div
        className="container-fluid mt-4"
        style={{ marginBottom: "100px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideUp}
      >
        <div className="row">
          <motion.div
            className="col-lg-6"
            variants={slideUp}
            transition={{ duration: 0.5 }}
          >
            <div style={{ position: "relative", width: "100%", height: "400px" }}>
              <Image
                src="/images/road.png"
                alt="Globe showing world map"
                fill
                className="img-fluid rounded shadow-sm"
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUp}
          >
            <motion.h3
              style={{ color: "#293BB1" }}
              variants={fadeInStagger(0.1)}
            >
              Equipment Rentals

            </motion.h3>

            <motion.p
              className="mt-3"
              style={{ textAlign: "justify" }}
              variants={fadeInStagger(0.2)}
            >
              Our Equipment Rental services offer businesses flexible and cost-effective access to a wide range of high-performance machinery and tools, without the burden of ownership. Whether your project demands short-term usage or long-term operational support, we provide well-maintained, ready-to-deploy equipment tailored to meet the unique needs of your industry.

              From construction and infrastructure to agriculture, logistics, and manufacturing, our rental solutions are designed to enhance productivity, reduce downtime, and optimize capital investment.

              What We Offer:

              Wide Range of Equipment including earthmovers, generators, cranes, forklifts, compressors, and more.

              On-Demand Availability to support urgent or seasonal project needs.

              Well-Maintained & Certified Machinery for maximum reliability and safety.

              Flexible Rental Plans – hourly, daily, weekly, or monthly options.

              Technical Support & Maintenance during the rental period.

              Transportation & On-Site Setup services for large equipment.
              Wide Range of Equipment including earthmovers, generators, cranes, forklifts, compressors, and more.

              On-Demand Availability to support urgent or seasonal project needs.
              Well-Maintained & Certified Machinery for maximum reliability and safety.

              Flexible Rental Plans – hourly, daily, weekly, or monthly options.

              Technical Support & Maintenance during the rental period.
            </motion.p>


          </motion.div>
        </div>
      </motion.div>

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
    </>
  );
}

export default Mining;
