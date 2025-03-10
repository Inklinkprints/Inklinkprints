import Img1 from "../../../assets/Inklink-prints-products/Menuboards-Inklink.jpg"; // Replace with the actual image for menuboards
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Menuboards() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Menuboards</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Menuboards" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Chalkboard, whiteboard, acrylic, or digital displays for versatile use.
            </li>
            <li>
              <strong>Sizes:</strong> Custom or standard dimensions tailored to your space and layout requirements.
            </li>
            <li>
              <strong>Design Features:</strong> High-contrast layouts with clear fonts and vibrant visuals.
            </li>
            <li>
              <strong>Finishes:</strong> Frames, borders, and anti-glare coatings to enhance readability and style.
            </li>
            <li>
              <strong>Customization Areas:</strong> Flexible options for branding, logo placement, and unique layouts.
            </li>
            <li>
              <strong>Installation Options:</strong> Wall-mounted, free-standing, or suspended for optimal placement.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Menuboards are a powerful way to showcase your menu, promotions, or specials while elevating your brand image. At InkLink, we craft high-quality menuboards that are as functional as they are visually appealing.
        </p>
        <p>
          Our cutting-edge techniques and services provide:
        </p>
        <ul>
          <li>
            <strong>Custom Designs:</strong> Menuboards that align seamlessly with your branding and décor.
          </li>
          <li>
            <strong>Durable Materials:</strong> Long-lasting, easy-to-clean surfaces designed for high-traffic areas.
          </li>
          <li>
            <strong>Versatile Solutions:</strong> Suitable for restaurants, cafes, events, and more.
          </li>
        </ul>
        <p>
          Whether you need eye-catching displays for daily specials or permanent installations, InkLink delivers menuboards with unmatched quality, competitive pricing, and fast turnaround times to meet your needs.
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
