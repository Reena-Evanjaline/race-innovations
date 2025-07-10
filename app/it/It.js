"use client";
import React from "react";
import { FaGlobe, FaUsers, FaBullhorn, FaDatabase } from "react-icons/fa";
import dynamic from "next/dynamic";
function It() {
  const images = [
    "/images/react.png",
    "/images/next.png",

    "/images/ai.png",
    "/images/figma.png",
    "/images/pr.png",
    "/images/xd.png",
    "/images/wordpress.png",
    "/images/apple.png",
    "/images/android.png",
    "/images/au.png",
    "/images/laravel.png",
    "/images/ae.png",
    "/images/shopify.png",
    "/images/ps.png",
  ];

  const Rightimages = [
    "/images/node.png",
    "/images/spring.png",
    "/images/php.png",
    "/images/python.png",
    "/images/mysql.png",
    "/images/postgresql.png",
    "/images/mongo.png",
    "/images/oracle.png",
    "/images/aws.png",
    "/images/azure.png",
    "/images/google.png",
    "/images/github.png",
    "/images/ubuntu.png",
  ];
  const image = [
    "/images/gts.png",
    "/images/lightstorm.png",
    "/images/meridien.png",
    "/images/haptik.png",
    "/images/united.png",
    "/images/papaya.png",
    "/images/redhat.png",
    "/images/jio.png",
  ];
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  return (
    <>
      <div className="container-fluid ">
      <div className="row g-0 p-0 m-0 align-items-stretch">
  {/* Video Column */}
  <div className="col-md-7 col-lg-7 col-12 p-0">
    <ReactPlayer
      url="https://youtu.be/dbbfw3Oz44M"
      controls
      playing={true}
      muted={true}
      width="100%"
      height="400px"
      className="responsive-video"
    />
  </div>

  {/* IT Solutions Column */}
  <div
    className="col-md-5 col-lg-5 col-12 custom-it-solutions  d-flex align-items-center"
    style={{
      backgroundImage: "url('/images/bg.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "25px",
    }}
  >
    <div className="d-flex flex-column align-items-end text-end w-100">
      <h3 className="text-white">CUSTOMIZED IT SOLUTIONS</h3>

      <p
        className="d-flex align-items-center justify-content-end text-white custom-it-item gap-3 mt-2"
        onClick={() =>
          document.getElementById("ttl").scrollIntoView({ behavior: "smooth", block: "center" })
        }
        style={{ cursor: "pointer" }}
      >
        <span style={{ minWidth: "30px", textAlign: "center" }}>
          <FaGlobe size={24} />
        </span>
        <span>Website, TTL & Mass Communication Solutions</span>
      </p>

      <p
        className="d-flex align-items-center justify-content-end text-white custom-it-item gap-3"
        onClick={() =>
          document.getElementById("crm").scrollIntoView({ behavior: "smooth", block: "center" })
        }
        style={{ cursor: "pointer" }}
      >
        <span style={{ minWidth: "30px", textAlign: "center" }}>
          <FaUsers size={23} />
        </span>
        <span>Customized CRM Solutions & App Development</span>
      </p>

      <p
        className="d-flex align-items-center justify-content-end text-white custom-it-item gap-3 mt-"
        onClick={() =>
          document.getElementById("digital").scrollIntoView({ behavior: "smooth", block: "center" })
        }
        style={{ cursor: "pointer" }}
      >
        <span style={{ minWidth: "30px", textAlign: "center" }}>
          <FaBullhorn size={23} />
        </span>
        <span>Digital Marketing & AI-Powered Lead Generation</span>
      </p>

      <p
        className="d-flex align-items-center justify-content-end text-white custom-it-item gap-3"
        onClick={() =>
          document.getElementById("mining").scrollIntoView({ behavior: "smooth", block: "center" })
        }
        style={{ cursor: "pointer" }}
      >
        <span style={{ minWidth: "30px", textAlign: "center" }}>
          <FaDatabase size={23} />
        </span>
        <span>Data Mining & Business Intelligence Data Mining</span>
      </p>
    </div>
  </div>
</div>
      </div>
      <div className="container mt-4 text-center">
        <h2
          className="ms-md-4"
          style={{
            fontSize: "clamp(1rem, 5vw, 2.7rem)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "black" }}>Tools &</span>
          <span style={{ color: "#293BB1" }} className="ms-3">
            Technology
          </span>
        </h2>
      </div>
      <div className="scroll-container mt-4">
        <div className="scroll-content scroll-left">
          {images.concat(images).map((img, index) => (
            <img
              key={`left-${index}`}
              src={img}
              alt="Tech Logo"
              className="scroll-img"
            />
          ))}
        </div>
      </div>
      <div className="scroll-container">
        <div className="scroll-content scroll-right">
          {Rightimages.concat(Rightimages).map((img, index) => (
            <img
              key={`right-${index}`}
              src={img}
              alt="Tech Logo"
              className="scroll-img"
            />
          ))}
        </div>
      </div>
      <div className="container mt-5 text-center">
        <h2
          className="ms-md-4"
          style={{
            fontSize: "clamp(1rem, 5vw, 2.7rem)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "black" }}>Infrastructure &</span>
          <span style={{ color: "#293BB1" }} className="ms-3">
            Collaboration
          </span>
        </h2>
      </div>

      <div className="scroll-container">
        <div className="scroll-content scroll-left">
          {image.concat(image).map((img, index) => (
            <img
              key={`left-${index}`}
              src={img}
              alt="Tech Logo"
              className="h-30 w-40"
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .scroll-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          width: 100%;
          background: white;
          padding: 10px 0;
          margin-bottom: 10px;
        }

        .scroll-content {
          display: flex;
          align-items: center;
          gap: 30px;
          width: fit-content;
        }

        .scroll-left {
          animation: scroll-left 20s linear infinite;
          animation-delay: 1s;
        }

        .scroll-right {
          animation: scroll-right 20s linear infinite;
          animation-delay: 1s;
        }

        .scroll-img {
          height: 50px;
          width: auto;
          object-fit: contain;
        }

        @keyframes scroll-left {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Responsive: Adjust speed for mobile */
        @media (max-width: 768px) {
          .scroll-content {
            gap: 15px;
          }
          .scroll-img {
            height: 40px; /* Smaller image size */
          }
          .scroll-left {
            animation: scroll-left 15s linear infinite;
            animation-delay: 1s; /* Keep delay */
          }
          .scroll-right {
            animation: scroll-right 15s linear infinite;
            animation-delay: 1s;
          }
        }
            @media (max-width: 768px) {
    .responsive-video {
      height: 300px !important;
    }
  }
      `}</style>
    </>
  );
}

export default It;
