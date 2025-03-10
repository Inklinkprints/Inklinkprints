import Img1 from "../../../assets/Inklink-prints-products/Notebook-Inklink.jpg"; // Replace with the actual image for notebooks
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Notebooks() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Notebooks</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Notebooks" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> High-quality paper with softcover or hardcover options.
            </li>
            <li>
              <strong>Dimensions:</strong> Available in standard sizes like A4, A5, and A6, with custom options.
            </li>
            <li>
              <strong>Binding Techniques:</strong> Spiral, saddle-stitch, or perfect binding for durability and style.
            </li>
            <li>
              <strong>Customization Areas:</strong> Cover and inner pages for logos, text, or graphics.
            </li>
            <li>
              <strong>Color Options:</strong> Wide range of finishes, including matte, gloss, and spot UV.
            </li>
            <li>
              <strong>Care Instructions:</strong> Designed for daily use, ensuring durability and quality over time.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom notebooks are the perfect blend of functionality and style, ideal for branding or gifting. At InkLink, we craft premium-quality notebooks tailored to your specific needs.
        </p>
        <p>
          Our advanced printing and production techniques deliver:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Durable covers and smooth pages for an excellent writing experience.
          </li>
          <li>
            <strong>Custom Designs:</strong> Add logos, text, or graphics to create unique and memorable notebooks.
          </li>
          <li>
            <strong>Variety of Options:</strong> Choose from different sizes, bindings, and finishes to suit your style.
          </li>
        </ul>
        <p>
          Whether for corporate branding, promotional items, or personal stationery, InkLink provides custom notebooks with outstanding quality, fast delivery, and competitive pricing.
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
