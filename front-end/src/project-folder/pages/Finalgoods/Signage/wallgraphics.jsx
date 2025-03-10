import Img1 from "../../../assets/Inklink-prints-products/Wall-Graphics-Inklink.jpg"; // Replace with the actual image for wall graphics
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function WallGraphics() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Wall Graphics</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Wall Graphics" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> High-quality vinyl, fabric, or textured materials for vibrant and durable designs.
            </li>
            <li>
              <strong>Dimensions:</strong> Fully customizable to fit any wall size, from small accents to full-wall murals.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color, high-resolution printing with options for removable and repositionable designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Include a 3mm bleed for seamless edge-to-edge coverage and precise designs.
            </li>
            <li>
              <strong>Finishing Options:</strong> Matte, glossy, or textured laminations for added protection and style.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom wall graphics are a dynamic way to enhance your space, whether it’s a retail store, office, or personal environment. At InkLink, we specialize in creating high-quality wall graphics tailored to your vision.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Vibrant Colors:</strong> Stunning, high-resolution visuals that bring your walls to life.
          </li>
          <li>
            <strong>Durable Materials:</strong> Long-lasting, weather-resistant options for both indoor and outdoor use.
          </li>
          <li>
            <strong>Customization:</strong> Fully personalized graphics to match your brand, decor, or unique design.
          </li>
        </ul>
        <p>
          Whether you’re making a bold statement or crafting an immersive branded environment, InkLink provides wall graphics that combine precision, durability, and style. With competitive pricing and fast delivery, we’re here to help you transform your space effortlessly.
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
