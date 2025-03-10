import Img1 from "../../../assets/Inklink-prints-products/Directional-Signs-Inklink.jpg"; // Replace with the actual image for directional signs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function DirectionalSigns() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Directional Signs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Directional Signs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Acrylic, aluminum, PVC, or wood for durability and clear visibility.
            </li>
            <li>
              <strong>Design Options:</strong> Custom layouts with clear fonts, symbols, and colors for enhanced readability.
            </li>
            <li>
              <strong>Finishing Options:</strong> Matte, glossy, or anti-glare finishes, along with weatherproof coatings for indoor and outdoor use.
            </li>
            <li>
              <strong>Customization Areas:</strong> Custom graphics, symbols, and text for wayfinding, directions, and maps.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Wall-mounted, free-standing, or hanging options for versatile installation.
            </li>
            <li>
              <strong>Durability:</strong> Built to withstand wear and tear, harsh weather, and frequent use.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Directional signs are essential for guiding visitors and providing clear navigation. At InkLink, we design and create durable signs that are both functional and visually appealing.
        </p>
        <p>
          Our advanced design and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>High-Quality Materials:</strong> Sturdy materials built for longevity in any environment.
          </li>
          <li>
            <strong>Readable Designs:</strong> Clear fonts, vivid symbols, and bold colors to ensure excellent visibility.
          </li>
          <li>
            <strong>Customization:</strong> Tailored to your specific needs, whether for offices, public spaces, or events.
          </li>
        </ul>
        <p>
          Whether for offices, hospitals, schools, or outdoor venues, InkLink provides directional signs that enhance navigation and accessibility. With precise craftsmanship and affordable pricing, we bring clarity to your spaces.
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
