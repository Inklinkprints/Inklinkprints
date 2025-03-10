import Img1 from "../../../assets/Inklink-prints-products/Business-Card-Holders-Inklink.jpg"; // Replace with the actual image for Business Card Holders
import { HashLink } from "react-router-hash-link";
import "./finalgoods.css";

export default function BusinessCardHolders() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Business Card Holders</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Business Card Holders" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Choose from premium materials like metal, leather, plastic, or wood.
            </li>
            <li>
              <strong>Design Features:</strong> Custom shapes, sizes, and finishes to match your brand identity.
            </li>
            <li>
              <strong>Capacity Options:</strong> Single-slot or multi-slot designs for varying storage needs.
            </li>
            <li>
              <strong>Customization:</strong> Add logos, names, or designs with printing or engraving.
            </li>
            <li>
              <strong>Finishing:</strong> Available in matte, glossy, or textured finishes for a professional touch.
            </li>
            <li>
              <strong>Portability:</strong> Lightweight and compact for easy carrying and accessibility.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Business card holders are essential for keeping your cards organized and projecting a professional image. At InkLink, we design and produce custom holders tailored to your specific needs.
        </p>
        <p>
          Our services ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Quality:</strong> Durable materials and expert craftsmanship for a polished look.
          </li>
          <li>
            <strong>Custom Options:</strong> Personalize with designs, logos, or branding elements.
          </li>
          <li>
            <strong>Functional Design:</strong> Compact and portable for on-the-go professionals.
          </li>
        </ul>
        <p>
          Whether for corporate gifting, promotional items, or personal use, InkLink offers high-quality business card holders with competitive pricing and quick turnaround times.
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
