import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./navbar.css";
import LogoWhite from "../../assets/Inklink-4.png";
import LogoBlack from "../../assets/Inklink-5.png";
import ProductsList from "../../Components/Dropdown-List/dropdown.jsx";
import Navbarbtn from "../Mobilemenu/mobilemenu.jsx";

export default function Navbar({ fixedBackground = false }) {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);
  const [isDropdownVisibleProducts, setDropdownVisibleProducts] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const scrollWithOffset = (el) => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };

  // Preload images
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };
    preloadImage(LogoWhite);
    preloadImage(LogoBlack);
  }, []);

  // Scroll handling
  useEffect(() => {
    if (!fixedBackground) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [fixedBackground]);

  // Navigate to sections smoothly
  const handleNavigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scrolling to section after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      handleNavigateToSection(sectionId);
      window.history.replaceState({}, document.title); // Clear state after using it
    }
  }, [location]);

  // Handle hamburger menu toggle
  const handleHamburgerMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleReceiveMessage = () =>{
    setMenuVisible(!isMenuVisible);
  }

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".hamburger-btn") && 
        !event.target.closest(".navbar-menu")
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close the menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${isScrolled || fixedBackground ? "navbar-scrolled" : ""}`}>
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="/">
          <img
            src={isScrolled || fixedBackground ? LogoBlack : LogoWhite}
            alt="Logo"
            className="navbar-logo-img"
          />
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-btn">
       {isMenuVisible? <i
         class="fa-solid fa-xmark hamburger-menu"
          style={{
            color: fixedBackground || isScrolled ? "black" : "white",
            fontSize: "1.9em",
          }}
          onClick={handleHamburgerMenu}
        ></i> : <i
        className="fa-solid fa-bars hamburger-menu"
        style={{
          color: fixedBackground || isScrolled ? "black" : "white",
          fontSize: "1.9em",
        }}
        onClick={handleHamburgerMenu}
      ></i>}
        {isMenuVisible && <Navbarbtn  sendMessageToParent={handleReceiveMessage}/>}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-menu ${isMenuVisible ? "visible" : ""}`}>
        <li>
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li
          className="navbar-item"
          onMouseEnter={() => setDropdownVisibleProducts(true)}
          onMouseLeave={() => setDropdownVisibleProducts(false)}
          onClick={() => setDropdownVisibleProducts(!isDropdownVisibleProducts)}
        >
          <Link
            smooth
            to={"/products/digital-print/business-cards"}
            className="navbar-link"
          >
            Products
            <span className="products-icon">
              {isDropdownVisibleProducts ? (
                <i className="fa-solid fa-chevron-right"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </span>
          </Link>
          {isDropdownVisibleProducts && (
            <div className="navbar-dropdown">
             <ProductsList setDropdownVisibleProducts={setDropdownVisibleProducts}/>
            </div>
          )}
        </li>
        <li className="navbar-item">
          <Link smooth to={"/services/design"} className="navbar-link">
            Services
          </Link>
        </li>
        <li>
        <HashLink
  smooth
  to="/#about"
  scroll={scrollWithOffset}
  className="navbar-link"
>
  About
</HashLink>
</li>
<li>
<HashLink
  smooth
  to="/#contact"
  scroll={scrollWithOffset}
  className="navbar-link"
>
  Contact
</HashLink>

</li>

      </ul>
    </nav>
  );
}
