import Img1 from "../../../assets/Inklink-prints-products/Canvas-Prints-Inklink.jpg"; // Replace with the actual image for canvas prints
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function CanvasPrints() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Canvas Prints</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Canvas Prints" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium-quality canvas with durable wooden frames for a classic and elegant look.
            </li>
            <li>
              <strong>Sizes:</strong> Available in a full range of sizes, with custom sizing options to fit any space.
            </li>
            <li>
              <strong>Printing Techniques:</strong> High-resolution printing with vibrant colors and fade-resistant inks for stunning, long-lasting designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Full surface of the canvas for your photos, artwork, or personalized designs.
            </li>
            <li>
              <strong>Finishing Options:</strong> Matte or glossy finishes and gallery or standard wrap styles for different display preferences.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Ready-to-hang with pre-installed hooks for easy setup.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Canvas prints are a timeless way to showcase your favorite photos, artwork, or designs. At InkLink, we specialize in creating high-quality canvas prints that add a touch of elegance to any space.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> High-quality, durable canvas and lightweight wooden frames for a professional finish.
          </li>
          <li>
            <strong>Vivid Colors:</strong> High-resolution prints with fade-resistant inks for lasting beauty.
          </li>
          <li>
            <strong>Customization:</strong> Personalize your canvas prints to match your unique style and decor.
          </li>
        </ul>
        <p>
          Whether for home, office, or gifting, InkLink offers fast production times and affordable pricing to turn your vision into reality.
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
