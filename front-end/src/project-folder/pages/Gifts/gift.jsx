import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/Inklink-prints-services/Custom-Gifts-Inklink.jpg";
import Img2 from "../../assets/Inklink-prints-services/Premium-Gift-Inklink.jpg";
import Img3 from "../../assets/Inklink-prints-services/Occasional-gifts-Inklink.jpg";
import Img4 from "../../assets/Inklink-prints-services/Corporate-Gifting-Inklink.jpg";
import Img5 from "../../assets/Inklink-prints-products/Notebook-Inklink.jpg";
import Img6 from "../../assets/Inklink-prints-products/Calendars-Inklink.jpg";
import Img7 from "../../assets/Inklink-prints-products/Backpacks-Inklink.jpg";
import Img8 from "../../assets/Inklink-prints-products/Caps-and-Hats-Inklink.jpg";
import "./gift.css";

// Data for Flex Sections
const flexSections = [
  {
    title: "Wide Range of Custom Gifts",
    description:
      "From custom-printed bottles and photo frames to gift hampers, trophies, and plaques, we offer an extensive range of gifts tailored to suit every occasion, recipient, and purpose with elegance.",
    image: Img1,
    reverse: false,
  },
  {
    title: "Premium Gift Materials",
    description:
      "Our products are crafted using premium materials such as glass, wood, metal, and fabric, ensuring that every custom gift is durable, elegant, and of the highest quality.",
    image: Img2,
    reverse: true,
  },
  {
    title: "Perfect for Every Occasion",
    description:
      "Whether it’s for birthdays, anniversaries, corporate events, festivals, or weddings, our custom gifts are designed to make every moment special, offering personalized touch and memorable experiences.",
    image: Img3,
    reverse: false,
  },
  {
    title: "Specialized Corporate Gifting",
    description:
      "We offer a range of corporate gifting solutions including customized calendars, engraved trophies, and logo-printed merchandise, helping you strengthen professional relationships and leave a lasting impression.",
    image: Img4,
    reverse: true,
  },
];

// Data for Grid Items
const gridItems = [
  { image: Img5, label: "Notebooks", path: "/products/customized-gifting/notebooks" },
  { image: Img6, label: "Calendars", path: "/products/customized-gifting/calendars" },
  { image: Img7, label: "Backpacks", path: "/products/customized-gifting/backpacks" },
  { image: Img8, label: "Caps & Hats", path: "/products/customized-gifting/caps-hats" },
];

// Data for Detailed Services
const detailedServices = [
  {
    title: "Personalized Gifts",
    description:
      "Custom mugs, t-shirts, photo frames, and keychains to make every moment special.",
  },
  {
    title: "Corporate Gifting",
    description:
      "Engraved trophies, branded calendars, and merchandise for corporate events and clients.",
  },
  {
    title: "Event-Specific Gifts",
    description:
      "Custom gift hampers and items for weddings, festivals, and other special occasions.",
  },
  {
    title: "Custom Packaging",
    description:
      "Beautifully designed gift boxes and packaging to add the perfect finishing touch.",
  },
];

// Reusable Component for Flex Sections
const GiftFlex = ({ title, description, image, reverse }) => (
  <div className={`gift-flex ${reverse ? "reverse" : ""}`}>
    <div className={`gift-img-container ${reverse ? "reverse" : ""}`}>
      <img src={image} alt={title} className="gift-img" />
    </div>
    <div className="gift-flexhead">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

// Reusable Component for Grid Items
const GiftGridItem = ({ image, label, path }) => (
  <Link to={path} className="gift-grid-box">
    <img src={image} alt={label} className="gift-fleximg" />
    <p>{label}</p>
  </Link>
);

export default function Gift() {
  return (
    <main className="gift-content">
      {/* Page Title */}
      <header>
        <h1 className="gift-title">Customized Gifts</h1>
      </header>

      {/* Introductory Description */}
      <section className="gift-intro">
        <p className="gift-description">
          At Inklink Prints, we specialize in creating unique and personalized gifts that leave a lasting impression. Whether it’s for a corporate event, a special occasion, or just a heartfelt gesture, our custom gifting solutions are designed to reflect thoughtfulness and creativity.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="gift-services">
        <h2>Excellence in Customized Gifting Services</h2>
        <div className="gift-flexbox">
          {flexSections.map((section, index) => (
            <GiftFlex key={index} {...section} />
          ))}
        </div>
      </section>

      {/* Detailed Services */}
      <section className="our-services">
        <h2 className="our-services-heading">Our Customized Gifting Services Offer</h2>
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
            Our gifting process starts with understanding your vision and requirements. Through personalized consultations, we craft unique solutions that bring your ideas to life. From design to delivery, we ensure your gifts leave a lasting impression.
          </p>
          <ul className="how-we-work-bullets">
            <li>📋 Consultation: Understand your gifting needs and preferences.</li>
            <li>🎨 Creative Design: Develop personalized gift designs to match your vision.</li>
            <li>✅ High-Quality Production: Deliver premium gifts crafted with care.</li>
          </ul>
        </div>
      </section>

      {/* Explore Products */}
      <section className="gift-subcontent-box">
        <h3>Explore Our Products</h3>
        <div className="gift-subcontent">
          {gridItems.map((item, index) => (
            <GiftGridItem key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}