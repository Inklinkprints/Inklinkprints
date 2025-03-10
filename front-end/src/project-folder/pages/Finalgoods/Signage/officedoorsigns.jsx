import Img1 from "../../../assets/Inklink-prints-products/Office-Door-Signs-Inklink.jpg"; // Replace with the actual image for office door signs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function OfficeDoorSigns() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Office Door Signs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Office Door Signs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Acrylic, aluminum, wood, or PVC for a professional and durable finish.
            </li>
            <li>
              <strong>Sizes:</strong> Standard sizes like 8 x 12 inches or custom dimensions for a tailored fit.
            </li>
            <li>
              <strong>Design Features:</strong> Laser engraving, custom fonts, icons, and colors to suit your branding.
            </li>
            <li>
              <strong>Customization Areas:</strong> Flexible placement of names, titles, or logos for a unique look.
            </li>
            <li>
              <strong>Color Options:</strong> A variety of finishes, such as matte, glossy, or textured, to match your aesthetic.
            </li>
            <li>
              <strong>Care Instructions:</strong> Easy to clean and maintain, ensuring long-term quality.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Office door signs play a vital role in establishing a professional environment while enhancing navigation and branding. At InkLink, we design and create high-quality signs to meet your specific needs.
        </p>
        <p>
          Our advanced manufacturing process ensures:
        </p>
        <ul>
          <li>
            <strong>High Durability:</strong> Materials that are weather-resistant and built to last.
          </li>
          <li>
            <strong>Custom Finishes:</strong> Options that provide a sleek and polished look for your workspace.
          </li>
          <li>
            <strong>Tailored Designs:</strong> Personalization to align with your branding and office décor.
          </li>
        </ul>
        <p>
          Whether you need nameplates, directional signs, or branded office markers, InkLink delivers office door signage solutions with quick turnaround times and competitive pricing.
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
