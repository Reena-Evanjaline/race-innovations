"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Crm() {
  return (
    <motion.div
      className="container-fluid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="row">
        <motion.div
          className="col-lg-6 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h3 style={{ color: "#293BB1" }}>
            Road Transportation
          </h3>
          <div className="mt-3" style={{ textAlign: "justify" }}>
            We specialize in providing reliable, efficient, and cost-effective land-based logistics solutions that ensure your goods are delivered safely and on time, every time. Our road transportation services are designed to meet the diverse needs of businesses across various industries—whether it's full truckload (FTL), less-than-truckload (LTL), last-mile delivery, or customized logistics planning.

            Our fleet includes a wide range of vehicles—from light commercial vans to heavy-duty trucks—enabling us to handle shipments of all sizes and specifications. With a strong network of regional and national routes, we ensure optimized transit times and consistent delivery performance
            Our Road Transport Capabilities Include:

            Door-to-Door Delivery Services for fast and hassle-free operations.

            Real-Time Tracking and visibility through GPS-enabled fleet management systems.

            Temperature-Controlled Transportation for perishable or sensitive goods.

            Express and Scheduled Deliveries to meet tight timelines and business demands.

            Secure & Compliant Operations, adhering to safety regulations and load integrity standards.

            Pan-India Reach with strong presence in tier 1, 2, and 3 cities.

            Whether you're moving raw materials, finished goods, or time-critical parcels, we tailor our transportation strategy to ensure maximum reliability, safety, and efficiency on the road
          </div>
          {/* <div style={{ textAlign: "justify" }}>
            <strong>Key Features:</strong>
            <ul>
              {[
                {
                  title: "Custom AI-Integrated CRM –",
                  desc:
                    "Tailored solutions powered by AI, ML, and LLMs to automate workflows and enhance customer interactions.",
                },
                {
                  title: "Lead & Sales Pipeline Management –",
                  desc:
                    "AI-driven tracking, predictive insights, and automation for seamless lead nurturing and conversions.",
                },
                {
                  title: "Intelligent Follow-Ups & Reporting –",
                  desc:
                    "LLM-powered communication, automated reminders, and real-time analytics for proactive customer engagement.",
                },
                {
                  title: "Seamless Integration –",
                  desc:
                    "Effortlessly connect CRM with marketing, finance, and operations for a unified business ecosystem.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="mt-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <strong>{item.title}</strong> {item.desc}
                </motion.li>
              ))}
            </ul>
          </div> */}
        </motion.div>

        <motion.div
          className="col-lg-6 mt-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/images/tr.png"
              alt="CRM Illustration"
              fill
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </motion.div>
      </div>

      <div className="row">
          <motion.div
          className="col-lg-6 mt-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image
              src="/images/consultancy.png"
              alt="CRM Illustration"
              fill
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </motion.div>
        <motion.div
          className="col-lg-6 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h3 style={{ color: "#293BB1" }}>
           Transport Logistics Consultancy
          </h3>
          <div className="mt-3" style={{ textAlign: "justify" }}>
           Our Transport Logistics Consultancy services empower businesses to optimize their supply chain, streamline transportation operations, and reduce costs through data-driven strategy and deep industry expertise. We provide end-to-end solutions tailored to your industry’s logistics challenges—whether you're managing complex fleet operations, cross-border shipments, or last-mile delivery.

What We Offer:

Route & Network Optimization – Reduce delivery time and fuel consumption with intelligent route planning

Fleet Utilization Strategy – Improve vehicle capacity usage and reduce idle time

Warehousing & Distribution Planning – Align storage and distribution with real-time demand

Technology Integration – Implement GPS tracking, TMS, and logistics automation tools

Cost & Performance Analysis – Benchmark logistics KPIs to improve ROI

Sustainability Consulting – Shift towards greener, carbon-conscious logistics solutions

From small fleet operators to large-scale logistics providers, we bring strategic clarity and operational efficiency to every part of your transport ecosystem—helping you deliver faster, smarter, and more reliably.
          </div>
         
        </motion.div>

      
      </div>

      <style jsx>{`
        .custom-button {
          border: 2px solid #293bb1;
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
          background: #293bb1;
          color: white;
        }
      `}</style>
    </motion.div>
  );
}

export default Crm;
