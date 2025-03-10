import Img1 from "../../../assets/Inklink-prints-products/Custom-Water-Bottles-Inklink.jpg"; // Replace with the actual image for custom water bottles
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function WaterBottles() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Water Bottles</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Water Bottles" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> BPA-free plastic, stainless steel, or Tritan for safety and durability.
            </li>
            <li>
              <strong>Capacity:</strong> Available in standard sizes from 12 oz to 32 oz, with custom options.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color, high-resolution printing for vivid and lasting designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Surface printing for logos, text, or unique artwork.
            </li>
            <li>
              <strong>Color Options:</strong> A wide selection of solid colors, gradients, and patterns to match your brand.
            </li>
            <li>
              <strong>Care Instructions:</strong> Hand-wash recommended to preserve design and material quality.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom water bottles are a functional and stylish way to promote your brand or message. At InkLink, we offer premium-quality bottles designed for both everyday use and outdoor activities.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> BPA-free and stainless steel options for durability and safety.
          </li>
          <li>
            <strong>Vivid Prints:</strong> High-resolution graphics that remain vibrant over time.
          </li>
          <li>
            <strong>Customization:</strong> Add your logo, slogan, or artwork for unique branding.
          </li>
        </ul>
        <p>
          Whether for corporate events, promotional giveaways, or personal gifts, InkLink provides custom water bottles with exceptional quality, fast delivery, and competitive pricing.
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
