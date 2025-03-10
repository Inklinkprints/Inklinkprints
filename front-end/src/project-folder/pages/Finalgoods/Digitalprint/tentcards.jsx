import Img1 from "../../../assets/Inklink-prints-products/Tentcard-Inklink.jpg"; // Replace with the actual image for tent cards
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function TentCards() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Tent Cards</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Tent Cards" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Durable cardstock with matte, glossy, or textured finish options for a premium feel.
            </li>
            <li>
              <strong>Dimensions:</strong> Standard sizes such as 4x6 inches and 5x7 inches, with fully customizable options.
            </li>
            <li>
              <strong>Printing Techniques:</strong> High-quality full-color printing with vibrant, sharp designs on both sides.
            </li>
            <li>
              <strong>Customization Areas:</strong> Front and back panels for showcasing your design, branding, or message.
            </li>
            <li>
              <strong>Finishing Options:</strong> UV coating, foil stamping, and embossing for added sophistication.
            </li>
            <li>
              <strong>Custom Features:</strong> Die-cut shapes for creative and unique designs that stand out.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Tent cards are a versatile marketing tool, perfect for showcasing promotions, menus, or information at events, restaurants, and more. At InkLink, we craft custom tent cards tailored to your branding needs.
        </p>
        <p>
          Our expertise ensures:
        </p>
        <ul>
          <li>
            <strong>High-Quality Materials:</strong> Premium cardstock and durable finishes that create a professional appearance.
          </li>
          <li>
            <strong>Custom Designs:</strong> Personalized options to match your brand identity and purpose.
          </li>
          <li>
            <strong>Lasting Durability:</strong> Finishes that resist wear and tear, making them ideal for frequent use.
          </li>
        </ul>
        <p>
          Whether you’re advertising promotions, sharing information, or enhancing event decor, InkLink delivers affordable, high-quality tent cards with quick turnaround times to help your message stand out.
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
