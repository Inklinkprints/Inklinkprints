import Img1 from "../../../assets/Inklink-prints-products/Danglers-Inklink.jpg"; // Replace with the actual image for danglers
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Danglers() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Danglers</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Danglers" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Sturdy cardboard, foam board, or plastic for long-lasting durability.
            </li>
            <li>
              <strong>Dimensions:</strong> Fully customizable sizes and shapes, including circular, rectangular, and die-cut options.
            </li>
            <li>
              <strong>Printing Techniques:</strong> High-quality full-color printing with glossy or matte finishes for a polished look.
            </li>
            <li>
              <strong>Durability:</strong> UV-resistant inks for outdoor use and vibrant designs that maintain their quality.
            </li>
            <li>
              <strong>Mounting Options:</strong> Pre-punched holes or adhesive strips for convenient hanging or placement.
            </li>
            <li>
              <strong>Design Features:</strong> Includes bleed areas and safe margins to ensure precision and professional finishing.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom danglers are an innovative and effective way to enhance your brand visibility. At InkLink, we design and produce danglers that are visually appealing, durable, and tailored to your unique requirements.
        </p>
        <p>
          Our advanced printing and finishing processes ensure:
        </p>
        <ul>
          <li>
            <strong>Vivid Designs:</strong> High-quality prints that grab attention and convey your message effectively.
          </li>
          <li>
            <strong>Robust Materials:</strong> Crafted to withstand indoor and outdoor conditions while retaining their appeal.
          </li>
          <li>
            <strong>Custom Shapes:</strong> Unique die-cut options to align with your branding and marketing goals.
          </li>
        </ul>
        <p>
          Whether for retail, events, or promotional campaigns, InkLink provides quick turnaround times and affordable pricing to make your marketing efforts stand out.
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
