import Img1 from "../../../assets/Inklink-prints-products/PhotoMagnets-Inklink.jpg"; // Replace with the actual image for Photo Magnets
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function PhotoMagnets() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Photo Magnets</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Photo Magnets" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> High-quality magnet with a smooth, glossy surface for vibrant prints.
            </li>
            <li>
              <strong>Sizes:</strong> Available in standard sizes like 2 x 3 inches and 4 x 6 inches, with custom dimensions available.
            </li>
            <li>
              <strong>Design Features:</strong> Full-color, high-resolution printing for sharp, vivid designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Personalize with your photos, logos, or special messages.
            </li>
            <li>
              <strong>Shape Options:</strong> Circular, square, or custom die-cut shapes to suit your needs.
            </li>
            <li>
              <strong>Versatile Use:</strong> Ideal for refrigerators, lockers, and other metal surfaces.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom photo magnets are a creative way to showcase memories, promote your brand, or create personalized gifts. At InkLink, we design and produce high-quality magnets that are durable and visually striking.
        </p>
        <p>
          Our advanced printing and manufacturing ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Quality:</strong> Durable magnets with long-lasting, vibrant prints.
          </li>
          <li>
            <strong>Custom Options:</strong> Tailor your magnets with photos, text, or unique designs.
          </li>
          <li>
            <strong>Flexible Solutions:</strong> Perfect for promotional giveaways, personalized gifts, or keepsakes.
          </li>
        </ul>
        <p>
          Whether you’re creating souvenirs, corporate giveaways, or decorative pieces, InkLink offers affordable pricing and quick turnaround times to bring your ideas to life.
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
