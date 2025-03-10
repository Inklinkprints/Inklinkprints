import Img1 from "../../../assets/Inklink-prints-products/Floor-Graphics-Inklink.jpg"; // Replace with the actual image for Floor Graphics
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function FloorGraphics() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Floor Graphics</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Floor Graphics" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Vinyl, laminate, or non-slip materials for safety and durability.
            </li>
            <li>
              <strong>Sizes:</strong> Available in custom dimensions to suit your space, with precision cutting for clean finishes.
            </li>
            <li>
              <strong>Printing Techniques:</strong> High-resolution digital printing for vibrant, eye-catching graphics.
            </li>
            <li>
              <strong>Customization Areas:</strong> Full surface area for branding, directional signage, or decorative purposes.
            </li>
            <li>
              <strong>Color Options:</strong> Bright and vibrant color options to align with your branding needs.
            </li>
            <li>
              <strong>Care Instructions:</strong> Easy to clean with regular sweeping or damp mopping for long-lasting use.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Floor graphics are a creative and effective way to promote your brand, provide directional signage, or add decorative elements to your space. At InkLink, we specialize in designing and producing high-quality floor graphics that are durable, safe, and visually appealing.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Durable, slip-resistant materials suitable for both indoor and outdoor use.
          </li>
          <li>
            <strong>Vivid Designs:</strong> High-resolution prints with vibrant colors that grab attention and last.
          </li>
          <li>
            <strong>Customization:</strong> Tailored solutions to showcase your branding, messaging, or creative vision.
          </li>
        </ul>
        <p>
          Whether you’re creating floor graphics for retail spaces, events, or corporate environments, InkLink offers quick turnaround times and affordable pricing to bring your vision to life.
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
