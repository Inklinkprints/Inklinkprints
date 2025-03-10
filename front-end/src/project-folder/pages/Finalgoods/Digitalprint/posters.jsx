import Img1 from "../../../assets/Inklink-prints-products/Posters-Inklink.jpg"; // Replace with the actual image for posters
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Posters() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Posters</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Posters" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> High-quality paper, vinyl, or canvas for long-lasting, vibrant visuals.
            </li>
            <li>
              <strong>Dimensions:</strong> Available in standard sizes like A2, A3, A4, or fully customizable dimensions.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color, high-resolution printing with options for matte or glossy finishes.
            </li>
            <li>
              <strong>Customization Areas:</strong> Edge-to-edge printing with a 3mm bleed area for flawless visuals.
            </li>
            <li>
              <strong>Mounting Options:</strong> Laminated, framed, or rolled for easy display and presentation.
            </li>
            <li>
              <strong>Care Instructions:</strong> Use in dry environments to preserve print quality and longevity.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom posters are an impactful way to promote events, products, or campaigns. At InkLink, we specialize in creating high-quality posters that are visually stunning and long-lasting.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Durable substrates that deliver vibrant visuals and lasting impressions.
          </li>
          <li>
            <strong>Custom Designs:</strong> Tailored layouts to perfectly match your brand or message.
          </li>
          <li>
            <strong>Versatility:</strong> Suitable for retail promotions, decorative purposes, or educational content.
          </li>
        </ul>
        <p>
          Whether you’re creating posters for an event, marketing campaign, or personal project, InkLink offers quick turnaround times and affordable pricing to bring your vision to life.
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
