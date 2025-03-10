import Img1 from "../../../assets/Inklink-prints-products/Mugs-Inklink.jpg"; // Replace with the actual image for mugs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Mugs() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Mugs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Mugs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> High-quality ceramic with a choice of glossy or matte finishes.
            </li>
            <li>
              <strong>Capacity:</strong> Available in standard sizes like 11 oz and 15 oz, with custom sizing options.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color sublimation printing for vibrant, durable designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Edge-to-edge designs or single/double-sided printing for text, logos, or images.
            </li>
            <li>
              <strong>Color Options:</strong> Choose from classic white mugs, color-changing mugs, or metallic finishes.
            </li>
            <li>
              <strong>Care Instructions:</strong> Dishwasher and microwave-safe options to ensure convenience and longevity.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom mugs are the perfect blend of practicality and personalization. At InkLink, we create high-quality mugs tailored to your brand or personal style.
        </p>
        <p>
          Our advanced printing techniques deliver:
        </p>
        <ul>
          <li>
            <strong>Vivid Prints:</strong> High-quality designs that remain vibrant even with everyday use.
          </li>
          <li>
            <strong>Custom Options:</strong> Personalize with logos, artwork, or text to create standout pieces.
          </li>
          <li>
            <strong>Durability:</strong> Made from premium ceramic materials for long-lasting use.
          </li>
        </ul>
        <p>
          Whether you’re creating promotional products, corporate gifts, or keepsakes, InkLink delivers exceptional quality, fast delivery, and competitive pricing for custom mugs.
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
