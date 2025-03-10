import Img1 from "../../../assets/Inklink-prints-products/Backpacks-Inklink.jpg"; // Replace with the actual image for Backpacks
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Backpacks() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Backpacks</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Backpacks" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Durable fabrics such as nylon, polyester, or canvas for long-lasting use.
            </li>
            <li>
              <strong>Sizes:</strong> Available in various sizes and capacities to suit different purposes, from daily use to travel.
            </li>
            <li>
              <strong>Design Features:</strong> Multiple compartments, ergonomic designs, and reinforced stitching for reliable performance.
            </li>
            <li>
              <strong>Customization Areas:</strong> Front panels and straps for logos, text, or graphics.
            </li>
            <li>
              <strong>Color Options:</strong> Wide range of base backpack colors to match your design needs.
            </li>
            <li>
              <strong>Care Instructions:</strong> Easy to clean with water-resistant and durable surfaces.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom backpacks are a versatile solution for promoting your brand, enhancing functionality, or making a style statement. At InkLink, we specialize in creating high-quality backpacks that are durable, practical, and visually appealing.
        </p>
        <p>
          Our advanced manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Strong, weather-resistant fabrics for long-lasting reliability.
          </li>
          <li>
            <strong>Detailed Craftsmanship:</strong> Expert construction for comfort and durability.
          </li>
          <li>
            <strong>Customization:</strong> Personalize with your logo, slogan, or artwork for a unique touch.
          </li>
        </ul>
        <p>
          Whether you’re designing backpacks for corporate giveaways, events, or retail, InkLink offers quick turnaround times and affordable pricing to bring your vision to life.
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
