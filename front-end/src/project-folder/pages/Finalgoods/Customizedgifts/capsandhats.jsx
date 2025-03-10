import Img1 from "../../../assets/Inklink-prints-products/Caps-and-Hats-Inklink.jpg"; // Replace with the actual image for caps and hats
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function CapsAndHats() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Caps and Hats</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Caps and Hats" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium cotton, polyester, or wool-blend fabrics for ultimate comfort.
            </li>
            <li>
              <strong>Sizes:</strong> Adjustable one-size-fits-all caps with custom sizing options available.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Screen printing, embroidery, and heat transfer for high-quality, long-lasting designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Front, back, and sides for logos, text, or graphics.
            </li>
            <li>
              <strong>Color Options:</strong> A wide variety of base colors to suit your design needs.
            </li>
            <li>
              <strong>Care Instructions:</strong> Hand washable and designed to maintain shape and quality.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom caps and hats combine style and function to promote your brand or showcase your unique personality. At InkLink, we specialize in crafting high-quality caps and hats that stand out.
        </p>
        <p>
          Our advanced printing and embroidery techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Quality:</strong> Durable materials and craftsmanship for everyday wear.
          </li>
          <li>
            <strong>Vivid Designs:</strong> Custom logos, graphics, or text that make a lasting impression.
          </li>
          <li>
            <strong>Versatility:</strong> Suitable for events, promotions, or personal use with customizable features.
          </li>
        </ul>
        <p>
          From corporate events to personal gifts, InkLink provides caps and hats that are stylish, functional, and affordable. Let us help you create headwear that stands out.
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
