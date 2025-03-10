import Img1 from "../../../assets/Inklink-prints-products/Packaging-box-Inklink.jpg"; // Replace with the actual image for packaging boxes
import { HashLink } from "react-router-hash-link";
import "./finalgoods.css";

export default function PackagingBoxes() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Packaging Boxes</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Packaging Boxes" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Corrugated cardboard, rigid board, kraft paper, or specialty materials for durability and aesthetics.
            </li>
            <li>
              <strong>Dimensions:</strong> Fully customizable sizes to fit your product packaging requirements.
            </li>
            <li>
              <strong>Printing Techniques:</strong> High-quality full-color printing with spot UV and metallic ink options.
            </li>
            <li>
              <strong>Customization Areas:</strong> Full surface printing with options for die-cut windows or unique shapes.
            </li>
            <li>
              <strong>Finishing Options:</strong> Matte, glossy, or textured finishes for an elevated look.
            </li>
            <li>
              <strong>Additional Features:</strong> Eco-friendly materials and sustainable printing options.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom packaging boxes are more than just containers—they serve as a powerful branding tool that enhances your product presentation. At InkLink, we specialize in designing and producing high-quality packaging solutions tailored to your needs.
        </p>
        <p>
          Our expertise guarantees:
        </p>
        <ul>
          <li>
            <strong>Durable Materials:</strong> Sturdy construction to protect your products during shipping or display.
          </li>
          <li>
            <strong>Custom Branding:</strong> Designs that showcase your brand's identity with precision.
          </li>
          <li>
            <strong>Sustainable Options:</strong> Environmentally friendly materials and processes for eco-conscious branding.
          </li>
        </ul>
        <p>
          Whether for retail, shipping, or gifting, InkLink provides quick turnaround times and competitive pricing for custom packaging boxes that leave a lasting impression.
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
