import Img1 from "../../../assets/Inklink-prints-products/Brochures-Inklink.jpg"; // Replace with the actual image for brochures
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Brochures() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Brochures</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Brochures" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Folding Options:</strong> Bi-fold, tri-fold, z-fold, gate-fold, or custom styles to complement your design.
            </li>
            <li>
              <strong>Dimensions:</strong> Standard sizes like A4, A5, and DL, with custom sizing available.
            </li>
            <li>
              <strong>Paper Choices:</strong> Glossy, matte, or textured finishes, plus premium card stock for durability and elegance.
            </li>
            <li>
              <strong>Finishing Options:</strong> Spot UV, foil stamping, embossing, or lamination for a polished look.
            </li>
            <li>
              <strong>Bleed and Safe Margins:</strong> 3mm bleed area and proper safe margins for flawless, edge-to-edge printing.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Brochures are essential tools for marketing your business, sharing your brand story, or presenting your products and services. At InkLink, we craft professional, eye-catching brochures that make a lasting impression.
        </p>
        <p>
          Why choose InkLink for your brochures?
        </p>
        <ul>
          <li>
            <strong>Superior Print Quality:</strong> Vibrant colors and crisp text for maximum visual appeal.
          </li>
          <li>
            <strong>Customizable Designs:</strong> Tailored folding styles, dimensions, and finishes to match your unique needs.
          </li>
          <li>
            <strong>Durability and Professionalism:</strong> Premium materials and advanced finishing techniques ensure brochures that stand out.
          </li>
        </ul>
        <p>
          From single-page flyers to multi-page booklets, our fast turnaround times and competitive pricing make us your trusted partner for brochure printing.
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
