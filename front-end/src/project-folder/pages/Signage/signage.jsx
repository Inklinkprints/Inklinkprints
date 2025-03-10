import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Inklink-prints-services/Custom-Solutions-Inklink.jpg";
import Img2 from "../../assets/Inklink-prints-services/Weather-Resistant-Inklink.jpg";
import Img3 from "../../assets/Inklink-prints-services/Expert-design-Inklink.jpg";
import Img4 from "../../assets/Inklink-prints-services/End-to-End-Service-Inklink.jpg";
import Img5 from "../../assets/Inklink-prints-products/2D&3D-Signs-Inklink.jpg";
import Img6 from "../../assets/Inklink-prints-products/Event-Show-Inklink.jpg";
import Img7 from "../../assets/Inklink-prints-products/Billboards-Inklink.jpg";
import Img8 from "../../assets/Inklink-prints-products/Acrylic-Signs-Inklink.jpg";
import "./signage.css";

// Reusable Component for Flex Sections
const SignageFlex = ({ title, description, image, reverse }) => (
  <div className={`signage-flex ${reverse ? "reverse" : ""}`}>
    <div className={`signage-img-container ${reverse ? "reverse" : ""}`}>
      <img src={image} alt={title} className="signage-img" />
    </div>
    <div className="signage-flexhead">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

// Reusable Component for Grid Items
const SignageGridItem = ({ image, label, path }) => (
  <Link to={path} className="signage-grid-box">
    <img src={image} alt={label} className="signage-fleximg" />
    <p>{label}</p>
  </Link>
);

const signageServices = [
  {
    title: "Custom Solutions for Every Need",
    description:
      "From billboards, neon signs, and banners to window displays and LED boards, we offer a wide range of signage solutions tailored to your specific needs and requirements, ensuring maximum impact.",
    image: Img1,
  },
  {
    title: "Weather-Resistant Materials",
    description:
      "Our signages are designed to withstand harsh weather conditions, ensuring durability and long-lasting performance even in the most extreme environments, offering both indoor and outdoor solutions with lasting reliability.",
    image: Img2,
    reverse: true,
  },
  {
    title: "Expert Design and Execution",
    description:
      "Our creative team ensures your signage reflects your brand identity while standing out in any environment. From bold fonts to innovative designs, we bring your vision to life with precision and flair.",
    image: Img3,
  },
  {
    title: "End-to-End Service",
    description:
      "We manage the entire process — from conceptualization and design to manufacturing and installation — so you don’t have to worry about a thing, ensuring a seamless and hassle-free experience.",
    image: Img4,
    reverse: true,
  },
];

const detailedServices = [
  {
    title: "Indoor Signage",
    description:
      "Wall graphics, directional signs, and office branding that elevate your interior spaces.",
  },
  {
    title: "Outdoor Signage",
    description:
      "Banners, billboards, and pylon signs designed to attract attention and make a strong statement.",
  },
  {
    title: "Event Signage",
    description:
      "Eye-catching signs for exhibitions, conferences, and trade shows that captivate your audience.",
  },
  {
    title: "Custom 2D & 3D Signs",
    description:
      "Tailored solutions for unique branding needs with dynamic, standout visuals.",
  },
];

const productItems = [
  { image: Img5, label: "2D & 3D Signs", path: "/products/signage/outdoor/2d-3d-signs" },
  { image: Img6, label: "Event Show", path: "/products/signage/outdoor/event-show" },
  { image: Img7, label: "Billboards", path: "/products/signage/outdoor/billboards" },
  { image: Img8, label: "Acrylic Signs", path: "/products/signage/outdoor/acrylic-signs" },
];

export default function Signage() {
  return (
    <main className="signage-content">
      {/* Page Title */}
      <header>
        <h1 className="signage-title">Signage</h1>
      </header>

      {/* Introductory Description */}
      <section className="signage-intro">
        <p className="signage-description">
          At Inklink Prints, we specialize in creating bold and eye-catching signages that amplify your brand presence. Whether you need impactful outdoor advertising or sleek indoor visuals, we combine creativity with cutting-edge technology to deliver signages that leave a lasting impression.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="signage-services">
        <h2>Excellence in Signages Services</h2>
        <div className="signage-flexbox">
          {signageServices.map((service, index) => (
            <SignageFlex key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Detailed Services */}
      <section className="our-services">
        <h2 className="our-services-heading">Our Signage Services Offer</h2>
        <div className="services-grid">
          {detailedServices.map((service, index) => (
            <div key={index} className="service-box">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work">
        <h2>How Inklink Prints Operates</h2>
        <div className="how-we-work-para">
          <p>
            We start by understanding your branding needs and goals through a detailed consultation. Our team collaborates with you to create tailored signage solutions that reflect your vision and amplify your message. From design to installation, we ensure precision and quality at every step.
          </p>
          <ul className="how-we-work-bullets">
            <li>📋 Consultation: Discuss your requirements and branding goals.</li>
            <li>🎨 Creative Design: Develop unique signage concepts to match your vision.</li>
            <li>✅ Seamless Execution: Deliver and install high-quality signage solutions.</li>
          </ul>
        </div>
      </section>

      {/* Explore Products */}
      <section className="signage-subcontent-box">
        <h3>Explore Our Products</h3>
        <div className="signage-subcontent">
          {productItems.map((item, index) => (
            <SignageGridItem key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}