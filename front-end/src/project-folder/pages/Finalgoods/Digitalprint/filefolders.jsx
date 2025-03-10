import Img1 from "../../../assets/Inklink-prints-products/File-Folders-Inklink.jpg"; // Replace with the actual image for file folders
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function FileFolders() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Custom File Folders</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Custom File Folders" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Material Options:</strong> Durable cardboard, premium paper stock, or plastic for extended use.
            </li>
            <li>
              <strong>Dimensions:</strong> Available in standard A4 and letter sizes or fully customizable dimensions.
            </li>
            <li>
              <strong>Printing Techniques:</strong> Full-color printing with glossy or matte finishes for a professional touch.
            </li>
            <li>
              <strong>Design Options:</strong> Customizable designs featuring your logo, branding, or artwork.
            </li>
            <li>
              <strong>Functional Features:</strong> Options for built-in pockets, business card slots, and die-cut designs.
            </li>
            <li>
              <strong>Durability:</strong> Includes bleed areas and safe margins to ensure precision and high-quality results.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Custom file folders are a practical and stylish way to keep your documents organized while promoting your brand. At InkLink, we specialize in creating high-quality file folders that combine functionality with a professional appearance.
        </p>
        <p>
          Our advanced printing and finishing techniques ensure:
        </p>
        <ul>
          <li>
            <strong>Premium Design:</strong> High-quality materials and finishes for a polished, professional look.
          </li>
          <li>
            <strong>Durable Construction:</strong> Built to withstand frequent use and keep documents secure.
          </li>
          <li>
            <strong>Custom Features:</strong> Tailored designs with practical elements like pockets and slots for added functionality.
          </li>
        </ul>
        <p>
          Perfect for corporate events, client presentations, or daily organization, InkLink offers quick turnaround times and competitive pricing to meet all your file folder needs.
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
