import Img1 from "../../../assets/Inklink-prints-products/Greeting-Cards-Inklink.jpg"; // Replace with the actual image for greeting cards
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function GreetingCards() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Greeting Cards</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Greeting Cards" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium cardstock finishes, including matte, glossy, or textured.
            </li>
            <li>
              <strong>Dimensions:</strong> Choose from standard sizes like 5x7 inches, 4x6 inches, or create custom dimensions.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color or monochrome printing, available in single-sided or double-sided layouts.
            </li>
            <li>
              <strong>Additional Features:</strong> Options for embossing, foil stamping, die-cut designs, and more.
            </li>
            <li>
              <strong>Professional Touches:</strong> Includes 3mm bleed and safe margins for flawless, edge-to-edge printing.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom greeting cards are a timeless way to express emotions, celebrate milestones, and make moments special. At InkLink, we specialize in creating greeting cards that are as unique as the messages they carry.
        </p>
        <p>
          Our expertise ensures:
        </p>
        <ul>
          <li>
            <strong>Captivating Designs:</strong> Vibrant visuals and intricate details that leave a lasting impression.
          </li>
          <li>
            <strong>Personalized Creations:</strong> Add your own messages, photos, or branding for a personal touch.
          </li>
          <li>
            <strong>Superior Quality:</strong> Luxurious cardstock and precision printing for a professional feel.
          </li>
        </ul>
        <p>
          Whether it's for birthdays, weddings, holidays, or corporate occasions, InkLink brings your ideas to life with high-quality, custom greeting cards. Enjoy competitive pricing, quick turnaround times, and the ability to craft unforgettable keepsakes.
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
