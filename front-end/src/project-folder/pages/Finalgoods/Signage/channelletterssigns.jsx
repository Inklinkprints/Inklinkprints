import Img1 from "../../../assets/Inklink-prints-products/Channel-Letters-Signs-Inklink.jpg"; // Replace with the actual image for channel letters signs
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function ChannelLettersSigns() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Channel Letters Signs</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Channel Letters Signs" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Aluminum, acrylic, or stainless steel for a sleek and durable design.
            </li>
            <li>
              <strong>Lighting Options:</strong> LED or neon lighting for enhanced visibility and impact.
            </li>
            <li>
              <strong>Finishing Options:</strong> Glossy, matte, or brushed textures with custom paint options to match your brand.
            </li>
            <li>
              <strong>Customization Areas:</strong> Fully customizable shapes, sizes, and colors for unique branding.
            </li>
            <li>
              <strong>Mounting Solutions:</strong> Flush mount, raceway mount, or standoff installations tailored to your space.
            </li>
            <li>
              <strong>Durability:</strong> Designed to withstand outdoor conditions, including UV exposure and weather.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Channel letters signs are an impactful way to promote your business and create lasting impressions. At InkLink, we specialize in designing and fabricating high-quality signs that combine functionality and style.
        </p>
        <p>
          Our advanced manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Durable and weather-resistant components for outdoor longevity.
          </li>
          <li>
            <strong>Vivid Illumination:</strong> LED or neon lighting for eye-catching and energy-efficient signage.
          </li>
          <li>
            <strong>Customization:</strong> Fully tailored to your brand identity, from colors to finishes.
          </li>
        </ul>
        <p>
          Whether for storefronts, office buildings, or retail spaces, InkLink delivers custom channel letters signs with quick turnaround times and competitive pricing to elevate your brand presence.
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
