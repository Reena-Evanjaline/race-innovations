"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Legal() {
  return (
    <>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUpVariants}
        transition={{ duration: 1 }}
      >
        <h1 className="text-center" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", whiteSpace: "nowrap" }}>
          <span style={{ color: "#293BB1" }}>Legal</span>
        </h1>

        <p className="" style={{ fontSize:"18px" ,textAlign:"justify" }}>
          Most businesses face many complex legal and commercial pressures when operating internationally that require the guidance of experienced and insightful advisors. Our members will guide you through the countless legal issues you may encounter while conducting business overseas.
        </p>

        <p style={{ fontSize:"18px" ,textAlign:"justify" }}>
          Our law firm members provide solutions in an efficient and seamless manner, giving you more time to focus on other facets of your business.
        </p>

        <p style={{ fontSize:"18px",textAlign:"justify" }}>
          Having worked across a wide range of industries, our member firms have the experience to understand your specific needs and become a trusted advisor to your business. With services ranging from employment law to international trade law, whatever support your business requires to be successful on the international stage, an RACE member firm can help.
        </p>
      </motion.div>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUpVariants}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-center">
          <span style={{ color: "black", marginRight: "10px" }}>Key</span>
          <span style={{ color: "#293BB1" }}>Legal Services</span>
        </h1>
        <div className="row">
          <div className="col-md-4" style={{ fontSize:"18px" ,textAlign:"justify" }}>
            <ul>
              <li className="">Anti-trust & Competition</li>
              <li className="">Arbitration & Dispute resolution</li>
              <li className="">Banking & Finance, Bankruptcy & Creditor rights</li>
              <li className="">Business & Corporate</li>
              <li className="">Commercial & Contract</li>
              <li className="">Data protection & Privacy</li>
              <li className="">Employment</li>
              <li className="">Estate planning & Trusts</li>
              <li className="">Environmental</li>
              <li className="">Family & Matrimonial</li>
            </ul>
          </div>
          <div className="col-md-4 mt-1" style={{ fontSize:"18px" ,textAlign:"justify" }}>
            <ul>
              <li className="">Immigration</li>
              <li className="">Intellectual property rights</li>
              <li className="">International trade</li>
              <li className="">Licensing and Litigation</li>
              <li className="">Mergers, Acquisitions & Disposals</li>
              <li className="">Product liability</li>
              <li className="">Real estate</li>
              <li className="">Shipping & Maritime</li>
              <li className="">Tax</li>
              <li className="">Technology & E-commerce</li>
            </ul>
          </div>
          <div className="col-md-4">
            <Image
              src="/images/image-78.webp"
              width={600}
              height={400}
              className="ms-md-5"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              alt="Descriptive Alt Text"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Legal;
