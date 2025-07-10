"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Features() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const listItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
    }),
  };

  return (
    <motion.div
      className="container"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={slideFromBottom}
      onViewportEnter={() => setHasAnimated(true)}
    >
      <div className="row">
        <motion.div
          className="col-md-6"
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideFromBottom}
          onViewportEnter={() => setHasAnimated(true)}
        >
          <h1 style={{  fontSize: "clamp(2rem, 5vw, 3rem)", whiteSpace: "nowrap" }} className="text-center">
            <span style={{ color: "black" }}>Key</span>
            <span style={{ color: "#293BB1" }}> Features</span>
          </h1>

          <ul style={{textAlign:"justify"}}>
            {[
              "Turning circle diagrams with vehicle simulation along with load",
              "Railway crossing related obstruction details",
              "LT/HT cable, tree branches, signboards, overhead bridge height constraints",
              "Other observations like petrol pump, toll plaza, parking points, SOS- Emergency services, dhaba, traffic congestion locations, pothole details, NH/SH identification, major city entry/exit",
              "Critical bridge calculations*",
              "Vehicle stability calculation when loaded*",
              "Load securing guidelines, suggestion for vehicle modification to suit loads, new vehicle design for specific cargo movement*",
              "Gradient calculations*",
            ].map((feature, index) => (
              <motion.li
                key={index}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={listItemVariant}
                custom={index + 1}
                style={{ marginBottom: "15px" }} 
              >
                {feature}
              </motion.li>
            ))}
          </ul>

        </motion.div>
        <motion.div
          className="col-md-6  mb-0"
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideFromBottom}
          transition={{ duration: 1, delay: 0.5 }}
          onViewportEnter={() => setHasAnimated(true)}
        >
          <Image
            src="/images/survey.png"
            width={500}
            height={400}
            className="ms-md-5"
            style={{
              width: "100%",
              height: "80%",
              objectFit: "contain",
            }}
            alt="Survey Image"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Features;
