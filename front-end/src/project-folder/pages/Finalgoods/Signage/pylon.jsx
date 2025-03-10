import Img1 from "../../../assets/Inklink-prints-products/Pylon-Signs-Inklink.jpg"; // Replace with the actual image for pylon signs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function PylonSigns() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Pylon Signs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Pylon Signs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium-grade aluminum, steel, or acrylic panels for exceptional durability and a professional appearance.
            </li>
            <li>
              <strong>Dimensions:</strong> Fully customizable to suit your location and visibility needs, with options for both large and small-scale designs.
            </li>
            <li>
              <strong>Illumination Options:</strong> LED backlighting for enhanced nighttime visibility, with non-illuminated options available for cost-effective solutions.
            </li>
            <li>
              <strong>Finishing Options:</strong> Durable coatings for weather resistance and long-lasting performance.
            </li>
            <li>
              <strong>Mounting Options:</strong> Single-pole or double-pole structures for added stability, with custom-designed bases for a polished and secure installation.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Pylon signs are a powerful way to promote your business, ensuring maximum visibility and a strong impression. At InkLink, we specialize in creating high-quality pylon signs that are durable, customizable, and impactful.
        </p>
        <p>
          Our advanced manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Durable Construction:</strong> Engineered to withstand harsh weather conditions while maintaining a professional appearance.
          </li>
          <li>
            <strong>Custom Branding:</strong> Personalized designs featuring your logo, fonts, and colors to reflect your brand identity.
          </li>
          <li>
            <strong>Enhanced Visibility:</strong> Options for LED illumination make your sign stand out during the day and at night.
          </li>
        </ul>
        <p>
          Whether you’re advertising a retail store, gas station, or corporate office, InkLink offers reliable and visually striking pylon sign solutions. With competitive pricing and fast turnaround times, we help your business stand out.
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
