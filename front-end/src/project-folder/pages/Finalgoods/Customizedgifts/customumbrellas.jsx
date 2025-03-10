import Img1 from "../../../assets/Inklink-prints-products/Custom-Umbrellas-Inklink.jpg"; // Replace with the actual image for custom umbrellas
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function CustomUmbrellas() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom Umbrellas</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom Umbrellas" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Durable polyester fabric for canopy, supported by metal or fiberglass frames.
            </li>
            <li>
              <strong>Dimensions:</strong> Standard sizes include 36-inch, 42-inch, and 48-inch canopies, with options for custom dimensions.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color printing with water-resistant ink for lasting designs.
            </li>
            <li>
              <strong>Customization Areas:</strong> Canopy area for printing logos, designs, or brand messages.
            </li>
            <li>
              <strong>Design Features:</strong> Windproof structures and reinforced frames for durability.
            </li>
            <li>
              <strong>Additional Features:</strong> Easy-to-grip handles for added comfort and usability.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom umbrellas are a practical and stylish way to promote your brand while offering utility to your customers. At InkLink, we design and produce high-quality umbrellas that leave a lasting impression.
        </p>
        <p>
          Our advanced printing and manufacturing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>High Durability:</strong> Weather-resistant materials and sturdy construction for long-lasting use.
          </li>
          <li>
            <strong>Customizable Designs:</strong> Personalized to showcase your brand, logo, or message.
          </li>
          <li>
            <strong>Functional Elegance:</strong> A balance of practicality and style with modern features.
          </li>
        </ul>
        <p>
          Whether you’re creating promotional giveaways, corporate gifts, or branded merchandise, InkLink provides quick turnaround times and affordable pricing to bring your vision to life.
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
