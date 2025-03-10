import Img1 from "../../../assets/Inklink-prints-products/Acrylic-and-Metal-Keychains-Inklink.jpg"; // Replace with the actual image for Acrylic and Metal Keychains
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function AcrylicMetalKeychains() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Acrylic and Metal Keychains</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Acrylic and Metal Keychains" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> High-quality acrylic or metal for durability and a premium feel.
            </li>
            <li>
              <strong>Sizes:</strong> Available in a variety of standard and custom sizes to meet your specific needs.
            </li>
            <li>
              <strong>Design Features:</strong> Full-color printing or engraving for a unique and professional appearance.
            </li>
            <li>
              <strong>Customization Areas:</strong> Single-sided or double-sided designs for logos, text, or images.
            </li>
            <li>
              <strong>Attachment Solutions:</strong> Split rings, chains, or clasps for versatile and secure use.
            </li>
            <li>
              <strong>Finishing Options:</strong> Glossy or matte coatings for added protection and aesthetic appeal.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom acrylic and metal keychains are a stylish and practical way to showcase your brand or create personalized gifts. At InkLink, we specialize in designing high-quality keychains that are durable, attractive, and versatile.
        </p>
        <p>
          Our advanced manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Long-lasting acrylic or metal that resists wear and tear.
          </li>
          <li>
            <strong>Detailed Craftsmanship:</strong> Precise printing or engraving for a polished finish.
          </li>
          <li>
            <strong>Customization:</strong> Personalize with your logo, slogan, or artwork for a unique touch.
          </li>
        </ul>
        <p>
          Whether for promotional items, corporate gifts, or personal keepsakes, InkLink offers quick turnaround times and affordable pricing to bring your vision to life.
        </p>
      </section>

      <div className="finalgoods-contact">
        <h3>Reach Out for Assistance:</h3>
        <HashLink smooth to="/#contact" className="finalgoods-btn">
          Contact
        </HashLink>
      </div>
    </div>
  );
}
