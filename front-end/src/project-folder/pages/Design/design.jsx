import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Inklink-prints-services/Creative-Expertise-Inklink.jpg";
import Img2 from "../../assets/Inklink-prints-services/Tailored-Solutions-Inklink.jpg";
import Img3 from "../../assets/Inklink-prints-services/High-Quality-Deliverables-Inklink.jpg";
import Img4 from "../../assets/Inklink-prints-services/Collaborative-Approach-Inklink.jpg";
import Img5 from "../../assets/Inklink-prints-products/Custom-Tshirts-Inklink.jpg";
import Img6 from "../../assets/Inklink-prints-products/Flags-Inklink.jpg";
import Img7 from "../../assets/Inklink-prints-products/Flyers-Inklink.jpg";
import Img8 from "../../assets/Inklink-prints-products/Banners-Inklink.jpg";

import "./design.css";

// Reusable Component for Flex Sections
const DesignFlex = ({ title, description, image, reverse }) => (
  <div className={`design-flex ${reverse ? "reverse" : ""}`}>
    <div className="design-img-container">
      <img src={image} alt={title} className="design-img" />
    </div>
    <div className="design-flexhead">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

// Reusable Component for Grid Items
const DesignGridItem = ({ image, label, path }) => (
  <Link to={path} className="design-grid-box">
    <img src={image} alt={label} className="design-fleximg" />
    <p>{label}</p>
  </Link>
);

export default function Design() {
  const services = [
    {
      title: "Logo & Brand Identity Design",
      description:
        "Unique logo creation, complete brand identity kits including color palettes, typography, and style guides."
    },
    {
      title: "Marketing Collateral Design",
      description:
        "Business cards, flyers, brochures, and catalogs designed to leave a lasting impression."
    },
    {
      title: "Custom Artwork & Illustrations",
      description:
        "Bespoke artwork for posters, banners, and signage tailored to your unique design needs."
    },
    {
      title: "Pre-Press & Print-Ready Designs",
      description:
        "Optimized designs for seamless printing without compromising quality, ensuring professional results."
    }
  ];

  const products = [
    { image: Img5, label: "T-Shirts", path: "/products/customized-gifting/t-shirts" },
    { image: Img6, label: "Flags", path: "/products/signage/outdoor/flags" },
    { image: Img7, label: "Flyers", path: "/products/digital-print/flyers" },
    { image: Img8, label: "Banners", path: "/products/signage/outdoor/banners" }
  ];

  return (
    <main className="design-content">
      {/* Page Title */}
      <header className="design-header">
        <h1 className="design-title">Design</h1>
      </header>

      {/* Introductory Description */}
      <section className="design-intro">
        <p className="design-description">
          At Inklink Prints, we believe exceptional design is the cornerstone of impactful communication and lasting impressions. From compelling brand identities to eye-catching marketing materials, we transform ideas into reality with unmatched creativity and precision. Let us help you create designs that resonate with your audience.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="design-services">
        <h2 className="services-heading">Excellence in Design Services</h2>
        <div className="design-flexbox">
          <DesignFlex
            title="Creative Expertise"
            description="Our skilled designers combine innovative techniques and diverse creative expertise to deliver professional results, ensuring each design uniquely represents your brand while maintaining the highest standards of creativity and precision."
            image={Img1}
          />
          <DesignFlex
            title="Tailored Solutions"
            description="We take time to thoroughly understand your brand identity, goals, and audience, enabling us to create personalized designs that perfectly align with your unique vision and strategic objectives."
            image={Img2}
            reverse
          />
          <DesignFlex
            title="High-Quality Deliverables"
            description="Each design is meticulously crafted with attention to detail, guaranteeing sharp graphics, pixel-perfect layouts, and visually stunning results that leave a memorable impression on your target audience."
            image={Img3}
          />
          <DesignFlex
            title="Collaborative Approach"
            description="By fostering an open feedback process, we collaborate with you throughout the design journey, ensuring the final product not only meets but exceeds your expectations and creative aspirations."
            image={Img4}
            reverse
          />
        </div>
      </section>

      {/* Detailed Services */}
      <section className="our-services">
        <h2 className="our-services-heading">Our Design Services Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
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
            At Inklink Prints, we believe every great design starts with understanding. Our process begins with a collaborative consultation where we dive into your ideas, goals, and audience. By exploring your unique vision and aspirations, we ensure every design aligns perfectly with your brand’s identity.
          </p>

          <p>
            Once the design is perfected, we prepare professional, print-ready formats alongside versatile digital files to meet all your branding and marketing needs. From concept to delivery, we ensure precision, creativity, and quality in every step of the journey. Let Inklink Prints transform your vision into designs that captivate and connect.
          </p>

          <ul className="how-we-work-bullets">
            <li>📋 Consultation: Discuss your ideas and goals to create a tailored plan.</li>
            <li>🎨 Design Development: Craft unique, creative solutions aligned with your vision.</li>
            <li>✅ Final Delivery: Provide high-quality, print-ready files and digital formats.</li>
          </ul>
        </div>
      </section>

      {/* Explore Products */}
      <section className="design-products">
        <h3>Explore Our Products</h3>
        <div className="design-grid">
          {products.map((product, index) => (
            <DesignGridItem key={index} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
