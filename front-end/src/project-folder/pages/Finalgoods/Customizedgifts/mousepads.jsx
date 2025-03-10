import Img1 from "../../../assets/Inklink-prints-products/MousePads-Inklink.jpg"; // Replace with the actual image for Mouse Pads
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function MousePads() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Mouse Pads</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Mouse Pads" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> High-quality rubber base with a smooth fabric surface for precision and durability.
            </li>
            <li>
              <strong>Sizes:</strong> Available in standard sizes such as 8 x 10 inches and 9 x 12 inches, with custom sizing options.
            </li>
            <li>
              <strong>Design Features:</strong> Full-color, edge-to-edge printing for vibrant and detailed designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Entire surface for logos, images, or artwork.
            </li>
            <li>
              <strong>Shape Options:</strong> Custom shapes like circular, rectangular, or die-cut to meet your needs.
            </li>
            <li>
              <strong>Care Instructions:</strong> Easy to clean with a water-resistant surface.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom mouse pads are an excellent way to combine functionality and style while promoting your brand or personal touch. At InkLink, we specialize in creating high-quality mouse pads that are durable and visually appealing.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Smooth, high-quality surfaces for precision tracking.
          </li>
          <li>
            <strong>Vivid Designs:</strong> High-resolution prints that remain vibrant over time.
          </li>
          <li>
            <strong>Customization:</strong> Personalized with your logo, slogan, or artwork for a unique look.
          </li>
        </ul>
        <p>
          Whether for promotional items, corporate gifts, or personal use, InkLink offers quick turnaround times and affordable pricing to bring your vision to life.
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
