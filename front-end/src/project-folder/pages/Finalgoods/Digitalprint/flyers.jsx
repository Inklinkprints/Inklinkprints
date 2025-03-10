import Img1 from "../../../assets/Inklink-prints-products/Flyers-Inklink.jpg"; // Replace with the actual image for flyers
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Flyers() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Flyers</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Flyers" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium paper stocks, including glossy, matte, or uncoated finishes.
            </li>
            <li>
              <strong>Dimensions:</strong> Available in standard sizes like A4, A5, and DL, or fully customizable sizes.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Vivid full-color or monochrome printing, with single-sided or double-sided options.
            </li>
            <li>
              <strong>Finishing Touches:</strong> Laminations, UV coatings, and embossing to elevate the design.
            </li>
            <li>
              <strong>Custom Features:</strong> Includes bleed areas and safe margins for professional, seamless printing.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom flyers are a versatile and cost-effective way to share your message, promote events, or advertise products. At InkLink, we create flyers that captivate attention and effectively communicate your brand’s vision.
        </p>
        <p>
          Our advanced printing and design techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Professional Quality:</strong> Crisp visuals and vibrant colors that leave a lasting impression.
          </li>
          <li>
            <strong>Tailored Designs:</strong> Fully customizable layouts and styles to match your branding needs.
          </li>
          <li>
            <strong>Fast Turnaround:</strong> Efficient production to meet your deadlines without compromising quality.
          </li>
        </ul>
        <p>
          Whether you’re promoting a product launch, event, or business initiative, InkLink delivers high-quality flyers at competitive prices. Let us help you make your promotions impactful and effective.
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
