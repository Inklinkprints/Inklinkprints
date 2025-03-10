import Img1 from "../../../assets/Inklink-prints-products/Directional&Information-Signs-Inklink.jpg"; // Replace with the actual image for directional & information signs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function DirectionalInformationSigns() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Directional & Information Signs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Directional & Information Signs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Acrylic, aluminum, PVC, or wood for a sturdy and professional appearance.
            </li>
            <li>
              <strong>Sizes:</strong> Available in standard and custom sizes to suit your space requirements.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Engraving, UV printing, and vinyl applications for crisp and clear designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Fully customizable layouts with logos, text, and directional symbols.
            </li>
            <li>
              <strong>Finishing Options:</strong> Matte, glossy, or anti-glare coatings for optimal visibility in all lighting conditions.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Wall-mounted, free-standing, or hanging options tailored to your space.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Directional and information signs are essential for creating an organized and navigable environment. At InkLink, we specialize in crafting high-quality signs that blend functionality and aesthetics.
        </p>
        <p>
          Our advanced manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Durable and weather-resistant options for indoor and outdoor use.
          </li>
          <li>
            <strong>Clear Designs:</strong> High-quality graphics and text for maximum readability.
          </li>
          <li>
            <strong>Customization:</strong> Tailored to match your branding and functional needs.
          </li>
        </ul>
        <p>
          Whether for offices, hospitals, retail spaces, or public venues, InkLink provides directional and information signs that improve navigation and communication. With competitive pricing and quick turnaround times, we bring your vision to life.
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
