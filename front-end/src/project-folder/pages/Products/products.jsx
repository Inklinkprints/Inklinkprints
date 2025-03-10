import { Link } from "react-router-dom";
import "./products.css";
import image1 from "../../assets/Inklink-prints-products/Businesscard-Inklink.jpg";
import image2 from "../../assets/Inklink-prints-products/Packaging-box-Inklink.jpg";
import image3 from "../../assets/Inklink-prints-products/Tentcard-Inklink.jpg";
import image4 from "../../assets/Inklink-prints-products/Books-Inklink.jpg";
import image5 from "../../assets/Inklink-prints-products/Brochures-Inklink.jpg";
import image6 from "../../assets/Inklink-prints-products/Calendars-Inklink.jpg";
import image7 from "../../assets/Inklink-prints-products/Catalogues-Inklink.jpg";
import image8 from "../../assets/Inklink-prints-products/Danglers-Inklink.jpg";
import image9 from "../../assets/Inklink-prints-products/File-Folders-Inklink.jpg";
import image10 from "../../assets/Inklink-prints-products/Flyers-Inklink.jpg";
import image11 from "../../assets/Inklink-prints-products/Greeting-Cards-Inklink.jpg";
import image12 from "../../assets/Inklink-prints-products/Posters-Inklink.jpg";
import image13 from "../../assets/Inklink-prints-products/Stickers-Inklink.jpg";
import image14 from "../../assets/Inklink-prints-products/Custom-Tshirts-Inklink.jpg"; 
import image15 from "../../assets/Inklink-prints-products/Backpacks-Inklink.jpg";

export default function Products() {
  return (
    <div className="products" id="products">
      <h1 className="products_title">Products & Services</h1>
      <div className="products_grid">
        <div className="products_item">
          <Link to="/products/digital-print/business-cards">
            <img className="products_img" src={image1} alt="Business Cards" />
          </Link>
          <h3 className="products_subtitle">Business Cards</h3>
          <p className="products_desc">
            Make a lasting impression with custom-designed, professionally
            printed business cards that reflect your brand's uniqueness!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/packaging-boxes">
            <img className="products_img" src={image2} alt="Packaging Boxes" />
          </Link>
          <h3 className="products_subtitle">Packaging Boxes</h3>
          <p className="products_desc">
            Deliver your products in style with custom-designed packaging boxes
            that elevate your brand!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/tent-cards">
            <img className="products_img" src={image3} alt="Tent Cards" />
          </Link>
          <h3 className="products_subtitle">Tent Cards</h3>
          <p className="products_desc">
            Stand out on every table with eye-catching custom tent cards that
            command attention!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/books">
            <img className="products_img" src={image4} alt="Books" />
          </Link>
          <h3 className="products_subtitle">Books</h3>
          <p className="products_desc">
            Bring stories and ideas to life with beautifully crafted custom
            books!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/brochures">
            <img className="products_img" src={image5} alt="Brochures" />
          </Link>
          <h3 className="products_subtitle">Brochures</h3>
          <p className="products_desc">
            Captivate your audience with stunningly designed and printed
            brochures!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/calendars">
            <img className="products_img" src={image6} alt="Calendars" />
          </Link>
          <h3 className="products_subtitle">Calendars</h3>
          <p className="products_desc">
            Create personalized calendars that capture your brand’s essence and
            make every day memorable!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/catalogues">
            <img className="products_img" src={image7} alt="Catalogues" />
          </Link>
          <h3 className="products_subtitle">Catalogues</h3>
          <p className="products_desc">
            Showcase your products in style with custom catalogues that
            captivate and inform!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/danglers">
            <img className="products_img" src={image8} alt="Danglers" />
          </Link>
          <h3 className="products_subtitle">Danglers</h3>
          <p className="products_desc">
            Grab attention and elevate your brand with eye-catching custom
            danglers for every occasion!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/file-folders">
            <img className="products_img" src={image9} alt="File Folder" />
          </Link>
          <h3 className="products_subtitle">File Folder</h3>
          <p className="products_desc">
            Keep your documents organized and accessible with stylishly crafted
            file folders!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/flyers">
            <img className="products_img" src={image10} alt="Flyers" />
          </Link>
          <h3 className="products_subtitle">Flyers</h3>
          <p className="products_desc">
            Spread the word with vibrant, impactful flyers that make your
            message impossible to ignore!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/greeting-cards">
            <img
              className="products_img"
              src={image11}
              alt="Greeting Cards"
            />
          </Link>
          <h3 className="products_subtitle">Greeting Cards</h3>
          <p className="products_desc">
            Send heartfelt messages with personalized greeting cards that make
            every occasion special!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/posters">
            <img className="products_img" src={image12} alt="Posters" />
          </Link>
          <h3 className="products_subtitle">Posters</h3>
          <p className="products_desc">
            Make a bold statement with custom posters that grab attention and
            inspire action!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/digital-print/stickers">
            <img className="products_img" src={image13} alt="Stickers" />
          </Link>
          <h3 className="products_subtitle">Stickers</h3>
          <p className="products_desc">
            Add a fun touch to any surface with custom stickers that showcase
            your brand or creativity!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/customized-gifting/t-shirts">
            <img className="products_img" src={image14} alt="T-shirt" />
          </Link>
          <h3 className="products_subtitle">T-shirt</h3>
          <p className="products_desc">
           Wear your story with pride custom printed T-shirts that bring your brand or creativity to life!
          </p>
        </div>
        <div className="products_item">
          <Link to="/products/customized-gifting/backpacks">
            <img className="products_img" src={image15} alt="Backpacks" />
          </Link>
          <h3 className="products_subtitle">Backpacks</h3>
          <p className="products_desc">
          Carry your style everywhere with custom printed backpacks that blend function with your unique flair!
          </p>
        </div>
      </div>
    </div>
  );
}
