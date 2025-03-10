import Img1 from "../../../assets/Inklink-prints-products/Calendars-Inklink.jpg"; // Replace with the actual image for Calendars
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Calendars() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Calendars</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Calendars" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Premium paper, card stock, or laminated sheets for durability.
            </li>
            <li>
              <strong>Design Options:</strong> Custom layouts for monthly, weekly, or daily formats to suit your needs.
            </li>
            <li>
              <strong>Finishing Techniques:</strong> Matte, gloss, or UV-coated finishes for a polished and professional look.
            </li>
            <li>
              <strong>Customization Areas:</strong> Add logos, photos, or unique designs to personalize each page.
            </li>
            <li>
              <strong>Display Types:</strong> Wall-mounted, desk, or pocket calendars for convenient use.
            </li>
            <li>
              <strong>Care Instructions:</strong> Durable and easy to maintain, designed for year-round use.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom calendars are the perfect way to stay organized and showcase your brand or personal style. At InkLink, we craft premium-quality calendars tailored to meet your specific needs.
        </p>
        <p>
          Our advanced printing and finishing services ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Materials:</strong> Durable paper and card stock for long-lasting use.
          </li>
          <li>
            <strong>Custom Designs:</strong> Add logos, photos, or artwork for a personalized touch.
          </li>
          <li>
            <strong>Wide Variety:</strong> Choose from wall, desk, or pocket formats to fit your style.
          </li>
        </ul>
        <p>
          Whether for corporate gifts, promotional items, or personal use, InkLink delivers high-quality calendars with fast turnaround times and competitive pricing. Our calendars help you stay organized while leaving a lasting impression.
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
