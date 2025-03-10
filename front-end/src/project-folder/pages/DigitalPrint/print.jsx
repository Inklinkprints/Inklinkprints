import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Inklink-prints-services/Advanced-Printing-Technology-Inklink.jpg";
import Img2 from "../../assets/Inklink-prints-services/Unparalleled-Quality-Inklink.jpg";
import Img3 from "../../assets/Inklink-prints-services/Fast&Reliable-Service-Inklink.jpg";
import Img4 from "../../assets/Inklink-prints-products/Mugs-Inklink.jpg";
import Img5 from "../../assets/Inklink-prints-products/Books-Inklink.jpg";
import Img6 from "../../assets/Inklink-prints-products/Brochures-Inklink.jpg";
import Img7 from "../../assets/Inklink-prints-products/Calendars-Inklink.jpg";
import "./print.css";

// Reusable Component for Flex Sections
const DigitalPrintFlex = ({ title, description, image, reverse }) => (
  <div className={`dp-flex ${reverse ? "reverse" : ""}`}>
    <div className="dp-img-container">
      <img src={image} alt={title} className="dp-img" />
    </div>
    <div className="dp-flexhead">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

// Reusable Component for Grid Items
const DigitalPrintGridItem = ({ image, label, path }) => (
  <Link to={path} className="dp-grid-box">
    <img src={image} alt={label} className="dp-fleximg" />
    <p>{label}</p>
  </Link>
);

export default function DigitalPrint() {
  return (
    <main className="dp-content">
      {/* Page Title */}
      <header>
        <h1 className="dp-title">Digital Print</h1>
      </header>

      {/* Introductory Description */}
      <section className="dp-intro">
        <p className="dp-description">
          At Inklink Prints, we redefine digital printing with unmatched precision and vibrant quality. Whether it’s business essentials, marketing materials, or personalized prints, we combine cutting-edge printing technology with expert craftsmanship to deliver flawless results.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="dp-services">
        <h2>Excellence in Digital Print Services</h2>
        <div className="dp-flexbox">
          <DigitalPrintFlex
            title="Advanced Printing Technology"
            description="We utilize the latest digital printing machines, including high-speed inkjet and laser printers, ensuring crisp, vibrant, and durable prints every time."
            image={Img1}
          />
          <DigitalPrintFlex
            title="Unparalleled Quality"
            description="Our advanced color management system guarantees accurate colors, sharp details, and a premium finish."
            image={Img2}
            reverse
          />
          <DigitalPrintFlex
            title="Fast and Reliable Service"
            description="Time-sensitive projects? We’ve got you covered with quick turnaround times and reliable delivery."
            image={Img3}
          />
        </div>
      </section>

      {/* Detailed Services */}
      <section className="our-services">
        <h2 className="our-services-heading">Our Digital Print Services Offer</h2>
        <div className="services-grid">
          {[
            {
              title: "Business Essentials",
              description: "High-quality business cards, letterheads, and envelopes that create a professional impact."
            },
            {
              title: "Marketing Materials",
              description: "Flyers, brochures, and catalogs to effectively promote your brand."
            },
            {
              title: "Large Format Printing",
              description: "Banners, posters, and signage with vibrant colors and sharp details."
            },
            {
              title: "Personalized Printing",
              description: "Custom mugs, t-shirts, and calendars to add a personal touch to your gifts."
            }
          ].map((service, index) => (
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
            Our process begins with a collaborative consultation to understand your needs, goals, and audience. Through detailed discussions, we craft a tailored strategy to ensure each print meets your expectations.
          </p>
          <ul className="how-we-work-bullets">
            <li>📋 Consultation: Discuss your requirements and create a tailored plan.</li>
            <li>🎨 Design Finalization: Prepare print-ready designs with precision.</li>
            <li>✅ Reliable Delivery: Provide high-quality prints on time, every time.</li>
          </ul>
        </div>
      </section>

      {/* Explore Products */}
      <section className="dp-subcontent-box">
        <h3>Explore Our Products</h3>
        <div className="dp-subcontent">
          {[
            { image: Img4, label: "Mugs", path: "/products/customized-gifting/mugs" },
            { image: Img5, label: "Books", path: "/products/digital-print/books" },
            { image: Img6, label: "Brochures", path: "/products/digital-print/brochures" },
            { image: Img7, label: "Calendars", path: "/products/digital-print/calendars" }
          ].map((item, index) => (
            <DigitalPrintGridItem key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
