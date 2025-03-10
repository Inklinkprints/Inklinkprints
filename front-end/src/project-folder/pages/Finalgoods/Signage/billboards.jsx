import Img1 from "../../../assets/Inklink-prints-products/Billboards-Inklink.jpg"; // Replace with the actual image for billboards
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Billboards() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Billboards</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Billboards" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Sturdy vinyl, flex, or eco-friendly materials for lasting outdoor use.
            </li>
            <li>
              <strong>Sizes:</strong> Fully customizable dimensions to suit high-traffic locations.
            </li>
            <li>
              <strong>Printing Quality:</strong> High-resolution large-format printing with UV-resistant inks.
            </li>
            <li>
              <strong>Durability:</strong> Weather-resistant materials and reinforced edges for stability.
            </li>
            <li>
              <strong>Customization Areas:</strong> Single or double-sided printing for maximum visibility.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Standard billboard frames or custom structures for versatile installation.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Billboards are a powerful way to amplify your brand message and attract attention from a wide audience. At InkLink, we craft impactful billboard designs that combine creativity with reliability.
        </p>
        <p>
          Our advanced production techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Weatherproof and durable for extended outdoor exposure.
          </li>
          <li>
            <strong>Vivid Designs:</strong> High-quality prints that capture attention day and night.
          </li>
          <li>
            <strong>Custom Solutions:</strong> Tailored designs to match your advertising and branding goals.
          </li>
        </ul>
        <p>
          Whether for highways, urban centers, or other strategic locations, InkLink delivers billboard solutions that help you make a lasting impression. With competitive pricing and expert support, we bring your vision to life.
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
