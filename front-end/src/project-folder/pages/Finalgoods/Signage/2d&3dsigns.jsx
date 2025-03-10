import Img1 from "../../../assets/Inklink-prints-products/2D&3D-Signs-Inklink.jpg"; // Replace with the actual image for 2D & 3D signs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Signs2D3D() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">2D & 3D Signs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="2D & 3D Signs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Acrylic, metal, wood, or composite materials for versatile applications.
            </li>
            <li>
              <strong>Design Options:</strong> Flat 2D signs or layered 3D structures for added dimension.
            </li>
            <li>
              <strong>Finishing Quality:</strong> Matte, glossy, or textured finishes for a polished appearance.
            </li>
            <li>
              <strong>Lighting:</strong> Optional LED illumination for enhanced visibility and style.
            </li>
            <li>
              <strong>Durability:</strong> Weatherproof materials suitable for indoor and outdoor use.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Wall-mounted, free-standing, or suspended for flexibility.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          2D and 3D signs are perfect for elevating your brand presence with unique and eye-catching visuals. At InkLink, we craft signs that seamlessly combine quality and creativity.
        </p>
        <p>
          With advanced design and production techniques, we provide:
        </p>
        <ul>
          <li>
            <strong>Custom Solutions:</strong> Tailored signs that reflect your brand’s identity and vision.
          </li>
          <li>
            <strong>Premium Materials:</strong> Durable and weather-resistant for long-lasting performance.
          </li>
          <li>
            <strong>Expert Assistance:</strong> Installation and support to ensure perfect placement and satisfaction.
          </li>
        </ul>
        <p>
          From corporate offices to retail environments, InkLink’s 2D and 3D signs help you stand out. With competitive prices and timely delivery, we make it easy to achieve your signage goals.
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
