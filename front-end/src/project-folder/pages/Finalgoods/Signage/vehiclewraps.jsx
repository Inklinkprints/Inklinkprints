import Img1 from "../../../assets/Inklink-prints-products/Vehicle-Wraps-Inklink.jpg"; // Replace with the actual image for Vehicle Wraps
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function VehicleWraps() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Vehicle Wraps</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Vehicle Wraps" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> High-quality vinyl for durability and vibrant colors.
            </li>
            <li>
              <strong>Coverage Options:</strong> Full wraps, partial wraps, and decals to suit your needs.
            </li>
            <li>
              <strong>Finishing Options:</strong> Glossy, matte, or satin finishes with UV protection for long-lasting vibrancy.
            </li>
            <li>
              <strong>Customization Areas:</strong> Fully customizable with graphics, logos, or text to reflect your branding.
            </li>
            <li>
              <strong>Installation Solutions:</strong> Professional application ensures a seamless, bubble-free finish.
            </li>
            <li>
              <strong>Durability:</strong> Designed to withstand outdoor elements, including rain, UV rays, and dirt.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Vehicle wraps are an excellent way to turn your car, truck, or van into a mobile advertisement. At InkLink, we design and create high-quality wraps that are both functional and visually appealing.
        </p>
        <p>
          Our advanced manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Durable vinyl that resists weather and wear over time.
          </li>
          <li>
            <strong>Striking Visuals:</strong> Custom designs with precision-cut graphics for maximum impact.
          </li>
          <li>
            <strong>Customization:</strong> Tailored to your specifications to match your brand identity.
          </li>
        </ul>
        <p>
          Whether for fleet branding, promotional vehicles, or personal customization, InkLink provides vehicle wrap solutions with quick turnaround times and competitive pricing to ensure your vision comes to life.
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
