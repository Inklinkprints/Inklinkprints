import "./footer.css";
import image1 from "../../assets/Inklink-logo-color.jpg";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const scrollWithOffset = (el) => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <img src={image1} alt="InkLink Prints Logo" className="footer-logo" />
        </div>

        {/* Links Section */}
        <div className="footer-section links-section">
          <div className="footer-column">
            <h2>More Info</h2>
            <ul>
              <li>
                {" "}
                <HashLink smooth to="/#about" scroll={scrollWithOffset}>
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#services">
                  Services
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#products">
                  Products
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#contact" scroll={scrollWithOffset}>
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Links</h2>
            <ul>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/termsconditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/Privacy">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Products</h2>
            <ul>
              <li>
                <a href="/products/digital-print/business-cards">
                  Business Essentials
                </a>
              </li>
              <li>
                <a href="/products/signage/indoor/wall-graphics">
                  Graphic Signage
                </a>
              </li>
              <li>
                <a href="/products/customized-gifting/t-shirts">Gift Items</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Services</h2>
            <ul>
              <li>
                <a href="/services/design">Design</a>
              </li>
              <li>
                <a href="/services/digitalprint">Digital Print</a>
              </li>
              <li>
                <a href="/services/signage">Signage</a>
              </li>
              <li>
                <a href="/services/gift">Customized Gifts</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Maps Section */}
        <div className="footer-section map-section">
          <h2>Maps</h2>
          <iframe
            title="InkLink Prints Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2349119247183!2d77.74018817447401!3d12.956814587357186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13003dfc2bbf%3A0x589b42edc798181f!2sInkLink%20Prints%20-%20Digital%20Print%20%7C%20Visiting%20Card%20%7C%20Boucher%20%7C%20Flyers%20%7C%20Poster%20%7C%20Photo%20Frame%20%7C%20Sign%20Board%20%7C%20Flex%20Print!5e0!3m2!1sen!2sin!4v1734002125607!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            className="footer-map"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact-section">
          <h2>Contact Us</h2>
          <div>
            <h3>Location</h3>
            <address className="footer-address">
              <i className="fas fa-map-marker-alt"></i>
              1st Floor, Sai Gandhi Square, Varthur Main Rd, Opp. to Sigma Tech
              Park, Ramagondanahalli, Whitefield, Bengaluru, Karnataka 560066
            </address>
          </div>
          <div className="footer-phone">
            <h3>Phone</h3>
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+919078133352">+91 73376 89898</a> /
            <a href="tel:+919845110504">+91 73376 79898</a>
          </div>
          <div className="footer-email">
            <h3>Email</h3>
            <i className="fas fa-envelope"></i>
            <a href="mailto:contact@inklinkprints.com">
              contact@inklinkprints.com
            </a>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/people/InkLink-Prints/pfbid02wUd9uLa5242r6L6b5CXQCKtmUq5UdocP9Urfvuy7DYra9mCcwGTnpLb7im3ZgyM3l/" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/@InkLink-2024" target="_blank" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/inkl.ink2024/" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/InkLinkprints" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} InkLink Prints. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
