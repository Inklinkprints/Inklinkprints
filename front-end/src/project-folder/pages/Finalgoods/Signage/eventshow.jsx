import Img1 from "../../../assets/Inklink-prints-products/Event-Show-Inklink.jpg"; // Replace with the actual image for event show
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function EventShow() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Event Show</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Event Show" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Fabric, vinyl, foam board, or acrylic for vibrant and durable displays.
            </li>
            <li>
              <strong>Design Options:</strong> Customizable graphics, text, and layouts tailored to suit any event theme.
            </li>
            <li>
              <strong>Display Types:</strong> Pop-up banners, backdrops, and stage signage for versatile presentation options.
            </li>
            <li>
              <strong>Finishing Options:</strong> Glossy, matte, or textured finishes, with weather-resistant coatings available for outdoor use.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Free-standing frames, hanging options, or easels for effortless setup.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Event show displays are essential for capturing attention and creating a lasting impression. At InkLink, we craft high-quality event materials designed to elevate your brand and enhance your event's success.
        </p>
        <p>
          Our advanced printing and design capabilities ensure:
        </p>
        <ul>
          <li>
            <strong>Custom Designs:</strong> Unique visuals that align with your event’s theme and branding.
          </li>
          <li>
            <strong>High-Quality Materials:</strong> Durable and vibrant materials built to withstand repeated use.
          </li>
          <li>
            <strong>Easy Setup:</strong> Lightweight and portable displays for hassle-free assembly and disassembly.
          </li>
        </ul>
        <p>
          Whether for trade shows, conferences, or promotional events, InkLink provides display solutions that stand out. With affordable pricing and fast production times, we make sure your event is a resounding success.
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
