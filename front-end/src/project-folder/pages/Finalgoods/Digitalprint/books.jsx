import Img1 from "../../../assets/Inklink-prints-products/Books-Inklink.jpg"; // Replace with the actual image for books
import "./finalgoods.css";
import { HashLink } from "react-router-hash-link";

export default function Books() {
  return (
    <div className="finalgoods-container">
      <h1 className="finalgoods-title">Books</h1>

      <div className="finalgoods-img-specs">
        <img src={Img1} alt="Books" className="finalgoods-img" />
        <section className="finalgoods-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>
              <strong>Binding Options:</strong> Perfect binding, saddle stitching, or spiral binding for a polished and professional look.
            </li>
            <li>
              <strong>Dimensions:</strong> Standard sizes like A4, A5, and square formats, with fully customizable options.
            </li>
            <li>
              <strong>Printing Options:</strong> High-quality printing for sharp text and vibrant images across every page.
            </li>
            <li>
              <strong>Paper Choices:</strong> Matte, glossy, or uncoated inner pages, with premium cardstock covers for durability.
            </li>
            <li>
              <strong>Finishing Features:</strong> Foil stamping, embossing, spot UV, or soft-touch lamination to enhance the design.
            </li>
          </ul>
        </section>
      </div>

      <section className="finalgoods-description">
        <h3>Overview</h3>

        <p>
          Whether you're producing a novel, portfolio, coffee table book, or educational material, our custom book printing service ensures your vision is brought to life. At InkLink, we combine craftsmanship with cutting-edge technology to deliver books that impress.
        </p>
        <p>
          Why choose InkLink? Our services include:
        </p>
        <ul>
          <li>
            <strong>Premium Print Quality:</strong> Sharp, detailed visuals and text for a professional finish.
          </li>
          <li>
            <strong>Customization:</strong> Personalized binding, sizes, and finishes tailored to your project's needs.
          </li>
          <li>
            <strong>Long-Lasting Durability:</strong> High-quality materials and binding to ensure your books stand the test of time.
          </li>
        </ul>
        <p>
          Whether you're a self-published author or a large organization, InkLink offers affordable, reliable solutions to fit every budget and project size. Let us help you create a book that leaves a lasting impression.
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
