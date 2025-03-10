import Img1 from "../../../assets/Inklink-prints-products/Catalogues-Inklink.jpg"; // Replace with the actual image for catalogues
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Catalogues() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Catalogues</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Catalogues" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Binding Options:</strong> Perfect binding, saddle stitching, or spiral binding for durability and style.
            </li>
            <li>
              <strong>Dimensions:</strong> Available in standard sizes like A4, A5, or square formats, with customizable options.
            </li>
            <li>
              <strong>Paper Options:</strong> Glossy, matte, or textured paper for inner pages, with premium card stock for covers.
            </li>
            <li>
              <strong>Page Count:</strong> Ideal for 8 to 64 pages, with the flexibility for additional pages as needed.
            </li>
            <li>
              <strong>Finishing Options:</strong> Embossing, foil stamping, and spot UV for a professional, polished look.
            </li>
            <li>
              <strong>Design Features:</strong> Includes a bleed area for edge-to-edge printing and safe margins for essential content.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom catalogues are a powerful way to showcase your products, services, and brand story. At InkLink, we specialize in creating professional catalogues that combine beautiful designs with functionality.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Quality:</strong> Sharp, vibrant colors and durable materials for lasting impressions.
          </li>
          <li>
            <strong>Professional Binding:</strong> Ensures longevity and ease of use for your catalogues.
          </li>
          <li>
            <strong>Customization:</strong> Tailored to reflect your brand with various design, paper, and finishing options.
          </li>
        </ul>
        <p>
          Whether you’re creating catalogues for retail, events, or corporate presentations, InkLink offers quick turnaround times and affordable pricing to help you stand out.
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
