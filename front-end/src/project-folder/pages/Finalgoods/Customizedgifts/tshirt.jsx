import Img1 from "../../../assets/Inklink-prints-products/Custom-Tshirts-Inklink.jpg"; // Replace with the actual image for custom t-shirts
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function TShirts() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom T-shirts</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom T-shirts" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Soft and breathable cotton, polyester, or cotton-blend fabrics for ultimate comfort.
            </li>
            <li>
              <strong>Sizes:</strong> Available in a full range of sizes from XS to XXL, with custom sizing options.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Screen printing, DTG (direct-to-garment), and embroidery options for high-quality, long-lasting designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Front, back, and sleeves for logos, text, or graphics.
            </li>
            <li>
              <strong>Color Options:</strong> Wide range of base t-shirt colors to match your design needs.
            </li>
            <li>
              <strong>Care Instructions:</strong> Machine washable and designed to retain print quality after multiple washes.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
      <h3>Overview</h3>

        <p>
          Custom t-shirts are a versatile way to promote your brand, team, or personal style. At InkLink, we specialize in designing and creating high-quality t-shirts that are comfortable, durable, and stylish.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Fabric:</strong> Soft, breathable materials that provide comfort throughout the day.
          </li>
          <li>
            <strong>Vivid Designs:</strong> High-quality printing and embroidery that stands the test of time.
          </li>
          <li>
            <strong>Customization:</strong> Personalize with your logo, slogan, or artwork for a unique touch.
          </li>
        </ul>
        <p>
          Whether you’re creating custom t-shirts for a team, event, or promotional merchandise, InkLink offers quick turnaround times and affordable pricing to bring your vision to life.
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


