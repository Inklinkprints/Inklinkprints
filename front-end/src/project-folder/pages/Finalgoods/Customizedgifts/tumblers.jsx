import Img1 from "../../../assets/Inklink-prints-products/Custom-Tumblers-Inklink.jpg"; // Replace with the actual image for custom tumblers
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Tumblers() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Tumblers</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Tumblers" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium stainless steel, BPA-free plastic, or durable Tritan.
            </li>
            <li>
              <strong>Capacity:</strong> Available in standard sizes from 12 oz to 30 oz, with custom options.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color, high-resolution printing for vibrant, lasting designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Surface printing for logos, text, or intricate graphics.
            </li>
            <li>
              <strong>Color Options:</strong> A wide range of finishes, including metallic and powder-coated styles.
            </li>
            <li>
              <strong>Care Instructions:</strong> Hand-wash recommended to maintain design integrity and durability.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom tumblers are a stylish and practical way to keep your beverages at the perfect temperature. At InkLink, we create premium-quality tumblers that blend functionality with eye-catching designs.
        </p>
        <p>
          Our advanced printing and production techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Vivid Prints:</strong> Scratch-resistant designs that maintain their quality over time.
          </li>
          <li>
            <strong>Durable Materials:</strong> Double-walled insulation to keep drinks hot or cold for hours.
          </li>
          <li>
            <strong>Personalization:</strong> Customize with logos, text, or graphics for unique tumblers.
          </li>
        </ul>
        <p>
          Whether it’s for corporate gifts, promotional items, or personal use, InkLink delivers custom tumblers with exceptional quality, quick delivery, and affordable pricing.
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
