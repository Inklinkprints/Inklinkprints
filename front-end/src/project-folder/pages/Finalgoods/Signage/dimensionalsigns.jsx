import Img1 from "../../../assets/Inklink-prints-products/Dimensional-Signs-Inklink.jpg"; // Replace with the actual image for dimensional signs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function DimensionalSigns() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Dimensional Signs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Dimensional Signs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Foam, acrylic, metal, wood, or PVC for versatile and durable designs.
            </li>
            <li>
              <strong>Sizes:</strong> Custom dimensions available to suit your space, with precision cutting for exact results.
            </li>
            <li>
              <strong>Design Techniques:</strong> Raised and layered elements for eye-catching, three-dimensional appeal.
            </li>
            <li>
              <strong>Customization Areas:</strong> Full flexibility in shapes, colors, and designs to match your brand's aesthetic.
            </li>
            <li>
              <strong>Color Options:</strong> Custom finishes including painted, natural, or metallic options.
            </li>
            <li>
              <strong>Care Instructions:</strong> Easy to maintain with simple cleaning methods to retain quality.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Dimensional signs are an excellent way to create an impactful visual presence for your brand. At InkLink, we design and manufacture premium dimensional signs that are both durable and aesthetically pleasing.
        </p>
        <p>
          Our advanced production techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Durable, weather-resistant materials for indoor and outdoor applications.
          </li>
          <li>
            <strong>Vivid Designs:</strong> Raised and layered elements that create depth and sophistication.
          </li>
          <li>
            <strong>Customization:</strong> Tailored solutions to suit your branding and design preferences.
          </li>
        </ul>
        <p>
          Whether for storefronts, offices, or event displays, InkLink offers quick turnaround times and competitive pricing to make your vision a reality.
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
