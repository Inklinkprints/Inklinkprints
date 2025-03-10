import Img1 from "../../../assets/Inklink-prints-products/Flags-Inklink.jpg"; // Replace with the actual image for flags
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Flags() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Flags</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Flags" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Durable polyester, nylon, or vinyl for long-lasting outdoor use.
            </li>
            <li>
              <strong>Sizes:</strong> Available in a range of sizes, from small promotional flags to large display banners.
            </li>
            <li>
              <strong>Printing Techniques:</strong> High-resolution dye-sublimation and screen printing for vibrant and sharp graphics.
            </li>
            <li>
              <strong>Customization Areas:</strong> Fully customizable designs with logos, text, and graphics to suit your branding.
            </li>
            <li>
              <strong>Finishing Options:</strong> Reinforced edges and UV-resistant coatings for enhanced durability.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Pole kits, ground stakes, and cross bases for flexible setup options.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom flags are a great way to capture attention and promote your brand, event, or message. At InkLink, we specialize in creating high-quality flags that are both durable and visually striking.
        </p>
        <p>
          Our advanced manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Weather-resistant fabrics designed to handle outdoor conditions.
          </li>
          <li>
            <strong>Vivid Designs:</strong> High-quality printing that ensures sharp and vibrant visuals.
          </li>
          <li>
            <strong>Customization:</strong> Tailored designs to match your branding and promotional needs.
          </li>
        </ul>
        <p>
          Whether for trade shows, outdoor events, or storefront displays, InkLink provides flag solutions with quick turnaround times and affordable pricing to help your message stand out.
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
