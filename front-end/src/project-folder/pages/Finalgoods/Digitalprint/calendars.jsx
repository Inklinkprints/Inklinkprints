import Img1 from "../../../assets/Inklink-prints-products/Calendars-Inklink.jpg";  // Replace with the actual image for calendars
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Calendars() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Calendars</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Calendars" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Types of Calendars:</strong> Choose from wall calendars, desk calendars, poster calendars, and custom formats.
            </li>
            <li>
              <strong>Dimensions:</strong> Standard sizes include A3, A4, and A5 for wall and desk calendars. Custom sizes are also available.
              <ul>
                <li>Ensure your design has a 3mm bleed for edge-to-edge printing.</li>
                <li>Keep all text and important elements within the safe margin for a polished result.</li>
              </ul>
            </li>
            <li>
              <strong>Paper Options:</strong>
              <ul>
                <li>High-quality glossy or matte paper for a professional finish.</li>
                <li>Durable card stock options for long-lasting calendars.</li>
              </ul>
            </li>
            <li>
              <strong>Binding Options:</strong> Spiral binding with a sturdy backboard or saddle stitching for compact designs.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
      <h3>Overview</h3>

        <p>
          Calendars are not only a practical tool but also a powerful branding opportunity. At InkLink, we create custom calendars that keep your brand front and center all year long.
        </p>
        <p>
          Our advanced printing technology ensures:
        </p>
        <ul>
          <li>
            <strong>Vibrant and Durable Prints:</strong> High-resolution printing that brings your designs to life.
          </li>
          <li>
            <strong>Custom Designs:</strong> Personalized layouts, themes, and formats tailored to your preferences.
          </li>
          <li>
            <strong>Premium Materials:</strong> Durable paper and binding options for long-lasting calendars.
          </li>
        </ul>
        <p>
          Whether you’re designing promotional calendars for your business or personal calendars as gifts, InkLink offers flexibility, fast turnaround times, and affordable pricing. Let us help you create calendars that are both functional and memorable.
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