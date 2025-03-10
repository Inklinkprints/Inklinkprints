import Img1 from "../../../assets/Inklink-prints-products/Safety&Compliance-Signage-Inklink.jpg"; // Replace with the actual image for safety & compliance signage
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function SafetyCompliance() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Safety & Compliance Signage</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Safety & Compliance Signage" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Aluminum, PVC, or reflective materials for visibility and durability.
            </li>
            <li>
              <strong>Sizes:</strong> Standard options like 12 x 18 inches or custom dimensions for specific needs.
            </li>
            <li>
              <strong>Design Features:</strong> Bold colors, custom graphics, and high contrast for maximum visibility.
            </li>
            <li>
              <strong>Compliance Standards:</strong> Adheres to industry and government safety regulations.
            </li>
            <li>
              <strong>Finishes:</strong> UV-resistant, waterproof coatings for long-lasting performance.
            </li>
            <li>
              <strong>Installation Options:</strong> Pre-drilled holes or adhesive backing for quick setup.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Safety and compliance signage is essential for maintaining a secure environment and meeting legal requirements. At InkLink, we produce high-quality signage to ensure clear communication and safety in every setting.
        </p>
        <p>
          Our advanced production techniques ensure:
        </p>
        <ul>
          <li>
            <strong>High Durability:</strong> Materials that are weatherproof and resistant to UV damage.
          </li>
          <li>
            <strong>Custom Solutions:</strong> Designs tailored to meet your specific safety requirements.
          </li>
          <li>
            <strong>Regulatory Compliance:</strong> Full adherence to required safety and compliance standards.
          </li>
        </ul>
        <p>
          Whether you need hazard signs, emergency instructions, or compliance notices, InkLink provides fast, affordable, and reliable solutions. Let us help you create a safer environment.
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
