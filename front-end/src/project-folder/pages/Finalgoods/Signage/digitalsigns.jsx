import Img1 from "../../../assets/Inklink-prints-products/Digital-Signs-Inklink.jpg"; // Replace with the actual image for digital signs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function DigitalSigns() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Digital Signs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Digital Signs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Display Options:</strong> LED, LCD, or OLED screens for high-resolution and vibrant content delivery.
            </li>
            <li>
              <strong>Sizes:</strong> Available in a variety of screen sizes with custom options to suit your space and application.
            </li>
            <li>
              <strong>Content Capabilities:</strong> Supports dynamic media, including images, videos, animations, and interactive displays.
            </li>
            <li>
              <strong>Durability:</strong> Weatherproof designs with anti-glare screens and high brightness for both indoor and outdoor use.
            </li>
            <li>
              <strong>Customization Areas:</strong> Fully programmable for tailored messaging and branded displays.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Wall-mounted, free-standing, or suspended installations to match your setup.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Digital signs are an innovative way to enhance your brand presence and deliver dynamic content. At InkLink, we specialize in designing and implementing advanced digital signage solutions that captivate and engage.
        </p>
        <p>
          Our advanced technology and expertise ensure:
        </p>
        <ul>
          <li>
            <strong>High-Quality Displays:</strong> Stunning visuals with reliable hardware for maximum impact.
          </li>
          <li>
            <strong>Dynamic Content:</strong> Seamless media playback with remote management for easy updates.
          </li>
          <li>
            <strong>Customization:</strong> Tailored solutions for unique branding and messaging needs.
          </li>
        </ul>
        <p>
          Whether for retail, corporate, or public spaces, InkLink offers fast production and competitive pricing to bring your digital signage ideas to life.
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
