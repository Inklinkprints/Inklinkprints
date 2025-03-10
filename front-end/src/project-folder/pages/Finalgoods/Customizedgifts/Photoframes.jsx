import Img1 from "../../../assets/Inklink-prints-products/Photo-Frames-Inklink.jpg"; // Replace with the actual image for photo frames
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function PhotoFrames() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Photo Frames</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Photo Frames" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium wood, metal, acrylic, or composite materials.
            </li>
            <li>
              <strong>Dimensions:</strong> Available in standard sizes like 4 x 6, 5 x 7, and 8 x 10 inches, with custom options.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color printing for frame designs or photo inserts.
            </li>
            <li>
              <strong>Customization Areas:</strong> Frame surfaces or glass inserts for logos, text, or graphics.
            </li>
            <li>
              <strong>Color Options:</strong> Choose from matte, glossy, or brushed finishes for added style.
            </li>
            <li>
              <strong>Care Instructions:</strong> Easy to clean and maintain for long-lasting elegance.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom photo frames are the ideal way to preserve and showcase your treasured memories. At InkLink, we design high-quality frames that elevate your photos and add a personal touch to any space.
        </p>
        <p>
          Our advanced printing and production techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Durable Materials:</strong> Premium options like wood, metal, and acrylic for lasting quality.
          </li>
          <li>
            <strong>Custom Designs:</strong> Add logos, messages, or graphics for a unique and personal touch.
          </li>
          <li>
            <strong>Variety of Choices:</strong> Wide range of sizes, finishes, and styles to suit any occasion.
          </li>
        </ul>
        <p>
          Whether for gifting, branding, or home décor, InkLink provides exceptional photo frames with quick delivery and competitive pricing to meet your needs.
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
