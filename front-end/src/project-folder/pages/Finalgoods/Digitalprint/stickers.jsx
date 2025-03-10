import Img1 from "../../../assets/Inklink-prints-products/Stickers-Inklink.jpg"; // Replace with the actual image for stickers
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Stickers() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Stickers</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Stickers" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Vinyl, paper, or transparent materials for high-quality, durable results.
            </li>
            <li>
              <strong>Shapes and Sizes:</strong> Choose from standard shapes like circles, squares, ovals, or create custom die-cut designs.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color, high-resolution printing with eco-friendly ink options for sustainable solutions.
            </li>
            <li>
              <strong>Customization Areas:</strong> Include edge-to-edge printing with a 3mm bleed area for precise designs.
            </li>
            <li>
              <strong>Finishing Options:</strong> Matte, glossy, or holographic finishes for a professional look.
            </li>
            <li>
              <strong>Adhesive Types:</strong> Choose from permanent, removable, or repositionable adhesives for versatile applications.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom stickers are a versatile way to showcase your brand, products, or events. At InkLink, we specialize in producing high-quality stickers that are both eye-catching and durable.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Vibrant Designs:</strong> High-quality printing that ensures your stickers stand out on any surface.
          </li>
          <li>
            <strong>Customization:</strong> Tailored shapes, sizes, and finishes to match your branding needs.
          </li>
          <li>
            <strong>Durability:</strong> Weather-resistant materials suitable for both indoor and outdoor use.
          </li>
        </ul>
        <p>
          Whether you’re creating stickers for packaging, promotional giveaways, or personal projects, InkLink offers quick turnaround times and affordable pricing to bring your ideas to life.
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
