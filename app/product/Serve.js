"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Serve() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Image
              src="/images/change-3.webp"
              alt="Globe showing world map"
              width={800}
              height={400}
              className="img-fluid rounded shadow-sm mt-4"
              style={{ objectFit: "contain" }}
            />
            <motion.h6
              initial="hidden"
              animate="visible"

              style={{
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                whiteSpace: "nowrap",

              }}
              className="mt-2"
            >
              <span style={{ color: "black" }}>Customer Needs & </span>
              <span style={{ color: "#293BB1", marginLeft: "9px" }}>Usage Insights</span>
             
            </motion.h6>
             <p className="mt-2" style={{textAlign:"justify"}}>Understand customer pain points, feature preferences, and use-case behavior to align your product with actual demand. </p>
          </div>
          <div className="col-lg-4">
            <Image
              src="/images/change-4.webp"
              alt="Globe showing world map"
              width={800}
              height={400}
              className="img-fluid rounded shadow-sm mt-4"
              style={{ objectFit: "contain" }}
            />
             <motion.h6
              initial="hidden"
              animate="visible"

              style={{
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                whiteSpace: "nowrap",

              }}
              className="mt-2"
            >
              <span style={{ color: "black" }}>Technology </span>
              <span style={{ color: "#293BB1", marginLeft: "9px" }}>Adoption Analysis</span>
             
            </motion.h6>
             <p className="mt-2" style={{textAlign:"justify"}}>Assess readiness and relevance of emerging technologies like electric powertrains, ADAS, telematics, and automation in your product design. </p>
          </div>
          <div className="col-lg-4">
            <Image
              src="/images/change-5.webp"
              alt="Globe showing world map"
              width={800}
              height={400}
              className="img-fluid rounded shadow-sm mt-4"
              style={{ objectFit: "contain" }}
            />
            <motion.h6
              initial="hidden"
              animate="visible"

              style={{
                fontSize: "clamp(1rem, 4vw, 1.2rem)",
                whiteSpace: "nowrap",

              }}
              className="mt-2"
            >
              <span style={{ color: "black" }}>Price–Value </span>
              <span style={{ color: "#293BB1", marginLeft: "9px" }}>Perception Mapping</span>
             
            </motion.h6>
             <p className="mt-2" style={{textAlign:"justify"}}>Evaluate how your product is perceived on pricing, utility, and brand promise against competitive offerings. </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Serve;
