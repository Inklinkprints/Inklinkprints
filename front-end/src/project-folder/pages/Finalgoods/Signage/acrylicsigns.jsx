import Img1 from "../../../assets/Inklink-prints-products/Acrylic-Signs-Inklink.jpg"; // Replace with the actual image for acrylic signs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function AcrylicSigns() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Acrylic Signs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Acrylic Signs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium acrylic sheets available in various thicknesses, ensuring a sleek and polished appearance.
            </li>
            <li>
              <strong>Sizes:</strong> Standard and custom sizes to fit any space or requirement.
            </li>
            <li>
              <strong>Design Features:</strong> Transparent, frosted, or colored acrylic with options for UV printing or applied vinyl graphics.
            </li>
            <li>
              <strong>Finishing Options:</strong> Matte, glossy, or frosted finishes, with backlit options for enhanced visibility.
            </li>
            <li>
              <strong>Customization Areas:</strong> Logos, text, and graphics tailored to your branding.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Stand-offs, wall brackets, or adhesive mounts for versatile and secure installation.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Acrylic signs offer a modern and professional solution for enhancing your brand's visibility. At InkLink, we specialize in designing and producing high-quality acrylic signs that leave a lasting impression.
        </p>
        <p>
          Key benefits of our acrylic sign solutions:
        </p>
        <ul>
          <li>
            <strong>Custom Designs:</strong> Tailored to match your brand’s style and messaging.
          </li>
          <li>
            <strong>High-Quality Materials:</strong> Weather-resistant and durable for long-term use, indoors or outdoors.
          </li>
          <li>
            <strong>Precision Craftsmanship:</strong> Polished edges and expert finishing for a premium look.
          </li>
        </ul>
        <p>
          Whether for office environments, retail spaces, or promotional displays, our acrylic signs are designed to meet your unique needs. With competitive pricing and fast turnaround, InkLink ensures quality and convenience for your signage solutions.
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
