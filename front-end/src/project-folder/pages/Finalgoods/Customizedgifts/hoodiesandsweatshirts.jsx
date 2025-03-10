import Img1 from "../../../assets/Inklink-prints-products/Hoodies&Sweatshirts-Inklink.jpg"; // Replace with the actual image for hoodies and sweatshirts
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function HoodiesAndSweatshirts() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Hoodies & Sweatshirts</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Hoodies & Sweatshirts" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium cotton, fleece, or polyester blends for superior comfort.
            </li>
            <li>
              <strong>Sizes:</strong> Available in a full range of sizes from XS to XXL, with custom sizing options.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Screen printing, embroidery, or heat transfers for high-quality, durable designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Front, back, and sleeves for logos, text, or graphics.
            </li>
            <li>
              <strong>Color Options:</strong> Wide range of solid colors, patterns, and finishes to match your design needs.
            </li>
            <li>
              <strong>Care Instructions:</strong> Machine washable and designed to maintain quality after multiple washes.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Hoodies and sweatshirts offer a blend of style, warmth, and functionality. At InkLink, we specialize in designing and crafting high-quality custom hoodies and sweatshirts.
        </p>
        <p>
          Our advanced manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Fabric:</strong> Soft, durable materials for all-day comfort and warmth.
          </li>
          <li>
            <strong>Vivid Designs:</strong> High-quality printing and embroidery to make your apparel stand out.
          </li>
          <li>
            <strong>Customization:</strong> Personalize with logos, artwork, or slogans for a distinctive touch.
          </li>
        </ul>
        <p>
          Whether it’s for events, merchandise, or personal use, InkLink offers quick delivery and affordable pricing to make your vision a reality.
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
