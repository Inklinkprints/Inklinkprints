import Img1 from "../../../assets/Inklink-prints-products/Banners-Inklink.jpg"; // Replace with the actual image for banners
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Banners() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Banners</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Banners" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Vinyl, mesh, fabric, or canvas for durability and vibrant presentation.
            </li>
            <li>
              <strong>Sizes:</strong> Customizable dimensions to suit events, promotions, or storefront needs.
            </li>
            <li>
              <strong>Printing Quality:</strong> High-resolution digital printing for sharp details and vivid colors.
            </li>
            <li>
              <strong>Durability:</strong> Weather-resistant materials and reinforced edges for indoor and outdoor use.
            </li>
            <li>
              <strong>Customization Areas:</strong> Single-sided or double-sided designs for enhanced visibility.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Pole pockets, ropes, or stands for hassle-free setup and versatility.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Banners are an impactful way to elevate your marketing efforts and draw attention to your message. At InkLink, we specialize in designing and producing banners that are both practical and visually striking.
        </p>
        <p>
          Our advanced printing and craftsmanship ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Long-lasting, weatherproof options for durability in all conditions.
          </li>
          <li>
            <strong>Vibrant Printing:</strong> High-quality colors and finishes to make your message stand out.
          </li>
          <li>
            <strong>Custom Options:</strong> Fully personalized designs to meet your branding and display needs.
          </li>
        </ul>
        <p>
          Whether you’re promoting an event, enhancing a storefront, or running a campaign, InkLink offers fast turnaround times and competitive pricing to bring your ideas to life.
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
