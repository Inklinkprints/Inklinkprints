import Img1 from "../../../assets/Inklink-prints-products/Businesscard-Inklink.jpg"; // Replace with the actual image for business cards
import { HashLink } from "react-router-hash-link";
import "./finalgoods.css";

export default function Businesscards() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Business Cards</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Business Cards" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Standard, glossy, matte, and textured paper for a premium feel.
            </li>
            <li>
              <strong>Dimensions:</strong> Final card size is 8.9 cm x 5.1 cm, with a bleed area for flawless printing.
            </li>
            <li>
              <strong>Printing Techniques:</strong> High-quality digital printing for sharp, vibrant colors.
            </li>
            <li>
              <strong>Customization Areas:</strong> Full bleed area and various finishes for your unique design.
            </li>
            <li>
              <strong>Design Features:</strong> Optional embossing, foil stamping, or spot UV for extra impact.
            </li>
            <li>
              <strong>Additional Features:</strong> Durable paper for a lasting, professional impression.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom business cards are a powerful tool to make a memorable first impression. At InkLink, we specialize in designing and printing high-quality business cards that suit your unique needs.
        </p>
        <p>
          Our advanced digital printing technology guarantees:
        </p>
        <ul>
          <li>
            <strong>Vivid Colors:</strong> Bold, sharp prints that make your design stand out.
          </li>
          <li>
            <strong>Premium Finishes:</strong> Choose gloss, matte, embossing, foil stamping, or spot UV for extra elegance.
          </li>
          <li>
            <strong>Custom Options:</strong> Tailor your card’s size, finish, and design to reflect your brand’s identity.
          </li>
        </ul>
        <p>
          With fast turnaround and affordable pricing, our business cards are perfect for showcasing your professional image.
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
